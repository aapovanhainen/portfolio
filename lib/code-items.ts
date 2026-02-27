export type CodeItem = {
  id: string
  title: string
  subtitle: string
  tags?: string[]
  language?: "csharp" | "ts" | "js" | "python" | "other"
  code: string

  /** Optional documentation or report */
  pdf?: {
    url: string
    label?: string
  }
}


export const codeItems: CodeItem[] = [
  {
  id: "a-star-waypoint",
  title: "Waypoint Node (Graph Data + A* Costs)",
  subtitle:
    "Data model for a waypoint graph node: position, neighbors, and A* bookkeeping (g/h/f costs + parent) used during path searches.",
  tags: ["Unity", "C#", "AI", "A*", "Waypoints"],
  code: `using System.Collections.Generic;
using UnityEngine;

public class Waypoint
{
    public Vector3 Position;
    public List<Waypoint> Neighbors = new List<Waypoint>();

    public float gCost;
    public float hCost;
    public float FCost => gCost + hCost;
    public Waypoint parent;

    public Waypoint(Vector3 position)
    {
        Position = position;
    }
}`
},
{
  id: "a-star-waypointgenerator",
  title: "Waypoint Generator (Grid Scan + Connections)",
  subtitle:
    "Generates waypoints by scanning a 3D area, validates agent clearance with a capsule check, and connects nearby nodes with raycast line-of-sight so A* can route around obstacles.",
  tags: ["Unity", "C#", "AI", "A*", "Waypoints", "Physics", "Gizmos"],
  code: `using System.Collections.Generic;
using UnityEngine;

public class WaypointGenerator : MonoBehaviour
{
    [Header("Waypoint Grid Settings")]
    [SerializeField] private float gridSpacing = 2f;

    [Header("Layer Settings")]
    [SerializeField] private LayerMask floorLayer;
    [SerializeField] private LayerMask obstacleLayer;

    [Header("Waypoint Connection Settings")]
    [SerializeField] private float maxVerticalDistance = 1.5f;

    [Header("Agent Clearance Settings")]
    [Tooltip("Small vertical gap above the floor to start the clearance capsule.")]
    [SerializeField] private float clearanceOffset;
    [Tooltip("Character height for clearance check (capsule total height).")]
    [SerializeField] private float capsuleHeight;
    [Tooltip("Character radius for clearance check (capsule radius).")]
    [SerializeField] private float capsuleRadius;

    [Header("Scan Area")]
    [SerializeField] private BoxCollider scanVolume;

    [Header("Debug Output")]
    public List<Waypoint> waypoints = new List<Waypoint>();
    [Tooltip("Toggle drawing of waypoint spheres.")]
    [SerializeField] private bool drawWaypoints = true;
    [Tooltip("Toggle drawing of connection lines between waypoints.")]
    [SerializeField] private bool drawConnections = true;
    [Tooltip("Toggle drawing of clearance capsules.")]
    [SerializeField] private bool drawClearance = true;

    void Start()
    {
        GenerateWaypoints();
        ConnectWaypoints();
    }

    private void GenerateWaypoints()
    {
        waypoints.Clear();
        Bounds bounds = CalculateSceneBounds();
        LayerMask blockerMask = floorLayer | obstacleLayer;

        for (float x = bounds.min.x; x <= bounds.max.x; x += gridSpacing)
            for (float z = bounds.min.z; z <= bounds.max.z; z += gridSpacing)
            {
                Vector3 rayStart = new Vector3(x, bounds.max.y + 5f, z);
                var hits = Physics.RaycastAll(rayStart, Vector3.down, bounds.size.y + 10f, floorLayer);

                foreach (var hit in hits)
                {
                    Vector3 pos = hit.point;
                    Vector3 normal = hit.normal;

                    Vector3 basePt = pos + normal * (clearanceOffset + capsuleRadius);
                    Vector3 tipPt = basePt + normal * (capsuleHeight * 0.5f);

                    if (Physics.CheckCapsule(basePt, tipPt, capsuleRadius, blockerMask))
                        continue;

                    if (!WaypointExistsNear(pos))
                        waypoints.Add(new Waypoint(pos));
                }
            }
    }

    bool WaypointExistsNear(Vector3 pos)
    {
        float thr = gridSpacing * 0.5f;
        float thrSqr = thr * thr;
        foreach (var w in waypoints)
            if ((w.Position - pos).sqrMagnitude < thrSqr)
                return true;
        return false;
    }

    void ConnectWaypoints()
    {
        LayerMask blockerMask = obstacleLayer | floorLayer;
        float connectionRangeSqr = (gridSpacing * 1.5f) * (gridSpacing * 1.5f);

        foreach (var w in waypoints)
            foreach (var o in waypoints)
            {
                if (o == w) continue;

                float dx = w.Position.x - o.Position.x;
                float dz = w.Position.z - o.Position.z;
                if (dx * dx + dz * dz > connectionRangeSqr)
                    continue;

                if (Mathf.Abs(w.Position.y - o.Position.y) > maxVerticalDistance)
                    continue;

                Vector3 dir = (o.Position - w.Position).normalized;
                float dist = Vector3.Distance(w.Position, o.Position);
                Vector3 start = w.Position + Vector3.up * 0.3f;
                if (Physics.Raycast(start, dir, dist, blockerMask))
                    continue;

                w.Neighbors.Add(o);
            }
    }

    Bounds CalculateSceneBounds()
    {
        if (scanVolume == null) return new Bounds(Vector3.zero, Vector3.one);

        Vector3 worldCenter = scanVolume.transform.TransformPoint(scanVolume.center);
        Vector3 halfExtents = Vector3.Scale(scanVolume.size * 0.5f, scanVolume.transform.lossyScale);

        Collider[] floorCols = Physics.OverlapBox(
            worldCenter,
            halfExtents,
            scanVolume.transform.rotation,
            floorLayer
        );

        if (floorCols.Length == 0)
            return new Bounds(worldCenter, scanVolume.size);

        Bounds b = floorCols[0].bounds;
        foreach (var c in floorCols)
            b.Encapsulate(c.bounds);

        return b;
    }

    private void OnDrawGizmos()
    {
        if (waypoints == null) return;
        Bounds bounds = CalculateSceneBounds();
        var floorMask = floorLayer;

        foreach (var wp in waypoints)
        {
            if (drawWaypoints)
            {
                Gizmos.color = Color.cyan;
                Gizmos.DrawSphere(wp.Position, 0.2f);
            }

            if (drawClearance)
            {
                Vector3 rayOrigin = new Vector3(wp.Position.x, bounds.max.y + 5f, wp.Position.z);
                float rayDist = bounds.size.y + 10f;
                if (Physics.Raycast(rayOrigin, Vector3.down, out var hit, rayDist, floorMask))
                {
                    Vector3 n = hit.normal;
                    Vector3 basePt = wp.Position + n * (clearanceOffset + capsuleRadius);
                    Vector3 tipPt = basePt + n * (capsuleHeight * 0.5f);

                    Gizmos.color = Color.magenta;
                    Gizmos.DrawLine(basePt, tipPt);
                    Gizmos.DrawWireSphere(basePt, capsuleRadius);
                    Gizmos.DrawWireSphere(tipPt, capsuleRadius);
                }
            }

            if (drawConnections)
            {
                Gizmos.color = Color.white;
                foreach (var nbor in wp.Neighbors)
                    Gizmos.DrawLine(wp.Position, nbor.Position);
            }
        }
    }
}`
},
{
    id: "a-star-enemy-ai",
    title: "A* Pathfinding with State-Based Enemy AI",
    subtitle: "State-driven enemy AI (Idle/Patrol/Investigate/Combat) that uses custom A* pathfinding through a waypoint graph, with vision checks and sound-triggered investigation.",
    tags: ["Unity", "C#", "A* pathing", "Enemy AI"],
    language: "csharp",   
   code: `using System.Collections.Generic;
using System.Collections;

public class EnemyAI : MonoBehaviour
{
    [Header("References")]
    [SerializeField] Transform player;
    [SerializeField] Transform upperBody;
    [SerializeField] Transform feet;
    [SerializeField] WaypointGenerator waypointGenerator;
    [SerializeField] PlayerMovement playerMovement;
    private bool hasLostSight = false;
    private Vector3 lastSeenPosition = Vector3.zero;

    [Header("Patrol Settings")]
    public List<Transform> patrolPoints;
    public bool randomPatrol = false;
    public float waitInPlace = 2f;
    private int currentPatrolIndex = 0;

    [Header("Investigate Settings")]
    private bool isInvestigating = false;
    private float investigateLookTime = 5f;
    [SerializeField] private bool useStrategicInvestigation = true;
    public bool investigatingFromSound = false;
    float checkInterval = 0.1f;
    float totalWait = 0f;
    float maxWait = 2f;
    private bool waitingForStrategicSearch = false;


    [Header("Movement")]
    [SerializeField] float hearingRange = 15f;
    [SerializeField] float moveSpeed = 3f;
    [SerializeField] float distanceToStopAtWaypoint = 0.1f;
    [SerializeField] float gravity = -9.81f;
    private Quaternion defaultUpperBodyRotation;


    [Header("Combat")]
    [SerializeField] private float shootingDistance = 8f;
    [SerializeField] private float minShootingDistance = 3f; // Don't get too close
    private float lostClearShotTimer = 0f;
    private float lostClearShotDuration = 0.2f; // how long until leaving Combat after losing shot


    [Header("Vision Settings")]
    [SerializeField] private float visionDistance = 20f;
    [SerializeField] private float visionHorizontalAngle = 60f;
    [SerializeField] private float visionVerticalAngle = 45f;
    [SerializeField] private LayerMask visionObstructionMasks;

    private List<Vector3> currentPath = new List<Vector3>();
    private bool isWaiting = false;
    private CharacterController cc;
    private Vector3 velocity;
    private Vector3 lastHeardPosition = Vector3.zero;

    private enum EnemyState { Idle, Patrol, Investigate, Combat }
    [SerializeField] private EnemyState currentState = EnemyState.Idle;

    [Header("Shooting")]
    [SerializeField] private Transform shootPoint;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private float fireRate = 1f;
    private float fireCooldown = 0f;
    [Header("Shooting Settings")]
    [SerializeField] private float shootRayRadius = 0.3f;
    private void Awake() 
    {
        defaultUpperBodyRotation = upperBody.localRotation;
        cc = GetComponent<CharacterController>();
    }

    #region Updates

    void Update()
    {
        if (waitingForStrategicSearch) return;
        HandleState();
        if (fireCooldown > 0f) fireCooldown -= Time.deltaTime;
    }

    void LateUpdate()
    {
        MoveAlongPath();

        if (currentState == EnemyState.Combat)
        {
            AimEyesAtPlayer(5f);
        }
    }
    #endregion

    #region State Handling
    void HandleState()
    {
        // Only enter combat if we can see AND shoot the player (and not investigating from sound)
        if (CanSeePlayer() && HasClearShot(out Vector3 shootDir) && !investigatingFromSound)
        {
            hasLostSight = false;
            lastSeenPosition = player.position;
            currentState = EnemyState.Combat;
        }

        switch (currentState)
        {
            case EnemyState.Combat:
                RotateTowards(player.position, 5f);

                // Lost sight: investigate
                if (!CanSeePlayer())
                {
                    ToInvestigate();
                    break;
                }

                // Lost shot: investigate
                if (!HasClearShot(out shootDir) && !isInvestigating)
                {
                    ToInvestigate();
                    break;
                }

                float distance = Vector3.Distance(player.position, transform.position);

                if (distance <= shootingDistance)
                {
                    if (currentPath.Count > 0) currentPath.Clear();
                    if (fireCooldown <= 0f)
                    {
                        Shoot(shootDir);
                        fireCooldown = 1f / fireRate;
                    }
                }
                break;

            case EnemyState.Investigate:
                if (HeardSound())
                {
                    lastHeardPosition = player.position;
                    StopAllCoroutines();
                    StartCoroutine(TryStrategicWaypointSearch());
                }
                HandleInvestigateState();
                break;

            case EnemyState.Patrol:
                if (HeardSound())
                {
                    lastHeardPosition = player.position;
                    StopAllCoroutines();
                    currentState = EnemyState.Investigate;
                    StartCoroutine(TryStrategicWaypointSearch());
                }
                else if (currentPath.Count == 0 && !isWaiting)
                {
                    Patrol();
                }
                break;

            case EnemyState.Idle:
                if (HeardSound())
                {
                    lastHeardPosition = player.position;
                    StopAllCoroutines();
                    currentState = EnemyState.Investigate;
                    StartCoroutine(TryStrategicWaypointSearch());
                }
                else
                {
                    currentState = EnemyState.Patrol;
                }
                break;
        }

        // Reset upper body rotation if not in combat
        if (currentState != EnemyState.Combat)
        {
            upperBody.localRotation = Quaternion.Slerp(
                upperBody.localRotation,
                defaultUpperBodyRotation,
                2f * Time.deltaTime
            );
        }
    }


    void ToInvestigate()
    {
        hasLostSight = true;
        currentState = EnemyState.Investigate;
        currentPath = Pathfinding.FindPath(
            waypointGenerator.waypoints,
            feet.position,
            lastSeenPosition
        );
    }


    bool CanSeePlayer()
    {
        Vector3 toPlayer = player.position - upperBody.position;
        if (toPlayer.magnitude > visionDistance) return false;

        Vector3 toPlayerFlat = new Vector3(toPlayer.x, 0, toPlayer.z);
        if (Vector3.Angle(toPlayerFlat, upperBody.forward) > visionHorizontalAngle) return false;
        if (Vector3.Angle(toPlayer, toPlayerFlat) > visionVerticalAngle) return false;

        return !Physics.Raycast(upperBody.position, toPlayer.normalized, toPlayer.magnitude,
                              visionObstructionMasks, QueryTriggerInteraction.Ignore);
    }


    bool HasClearShot(out Vector3 direction)
    {
        direction = (player.position - shootPoint.position).normalized;

        if (Physics.SphereCast(
            shootPoint.position,
            shootRayRadius,
            direction,
            out RaycastHit hit,
            shootingDistance,
            ~0,
            QueryTriggerInteraction.Ignore
        ))
        {
            return hit.transform == player;
        }
        return false;
    }

    
    Vector3 FindShootingPosition()
    {
        Waypoint best = null;
        float bestScore = Mathf.NegativeInfinity;

        foreach (Waypoint wp in waypointGenerator.waypoints)
        {
            float distance = Vector3.Distance(wp.Position, player.position);
            if (distance > shootingDistance || distance < minShootingDistance) continue;

            // Calculate where the gun would be if standing at this waypoint
            Vector3 simulatedGunPos = wp.Position + (shootPoint.position - transform.position);
            Vector3 shootDir = (player.position - simulatedGunPos).normalized;

            if (Physics.Raycast(simulatedGunPos, shootDir, out RaycastHit hit, distance, visionObstructionMasks))
            {
                if (hit.transform != player) continue;
            }
            else continue;

            float score = 1f / (distance + 0.1f);

            if (Physics.Raycast(player.position, (wp.Position - player.position).normalized,
                              out RaycastHit coverHit, distance, visionObstructionMasks))
            {
                score *= 2f;
            }

            if (score > bestScore)
            {
                bestScore = score;
                best = wp;
            }
        }

        return best != null ? best.Position : player.position;
    }

    void Shoot(Vector3 direction)
    {
        GameObject b = Instantiate(bulletPrefab, shootPoint.position, Quaternion.LookRotation(direction));
    }
    #endregion

    #region Investigation
    void HandleInvestigateState()
    {
        if (HeardSound())
        {
            lastHeardPosition = player.position;
            StopAllCoroutines();
            StartCoroutine(TryStrategicWaypointSearch());
            return;
        }
        if (!investigatingFromSound && CanSeePlayer())
        {
            isInvestigating = false;
            StopAllCoroutines();
            currentState = EnemyState.Combat;
            return;
        }

        if (isInvestigating) return;

        if (currentPath.Count > 0)
        {
            RotateTowards(currentPath[0]);
            return;
        }

        if (lastSeenPosition != Vector3.zero && currentPath.Count == 0)
        {
            currentPath = Pathfinding.FindPath(waypointGenerator.waypoints, feet.position, lastSeenPosition);
            return;
        }


        StartCoroutine(InvestigateRoutine());
    }


    IEnumerator InvestigateRoutine()
    {
        isInvestigating = true;
        currentPath.Clear();

        // First, ensure we reach the last seen position
        if (Vector3.Distance(feet.position, lastSeenPosition) > distanceToStopAtWaypoint)
        {
            currentPath = Pathfinding.FindPath(waypointGenerator.waypoints, feet.position, lastSeenPosition);

            // Wait until we reach the position or see the player
            while (currentPath.Count > 0 && !CanSeePlayer())
            {
                yield return null;
            }

            if (CanSeePlayer())
            {
                currentState = EnemyState.Combat;
                isInvestigating = false;
                yield break;
            }
        }

        // Now scan the area
        float startTime = Time.time;
        float initialYRotation = transform.eulerAngles.y;

        while (Time.time < startTime + investigateLookTime)
        {
            if (CanSeePlayer())
            {
                currentState = EnemyState.Combat;
                isInvestigating = false;
                yield break;
            }

            // Smooth scanning motion
            float t = (Time.time - startTime) / investigateLookTime;
            float angle = Mathf.Sin(t * Mathf.PI * 2) * 90f; // Scan 180 degrees back and forth
            transform.rotation = Quaternion.Euler(0, initialYRotation + angle, 0);

            yield return null;
        }

        // Investigation complete
        investigatingFromSound = false;
        isInvestigating = false;
        lastSeenPosition = Vector3.zero; // Reset last seen position
        currentState = EnemyState.Patrol;
    }

    bool HeardSound()
    {
        return playerMovement.playerMadeSound && Vector3.Distance(transform.position, player.position) <= hearingRange;
    }

    Vector3 FindClosestWaypointToSound()
    {
        Waypoint bestWaypoint = null;
        float bestDist = Mathf.Infinity;
        foreach (Waypoint wp in waypointGenerator.waypoints)
        {
            float distToSound = Vector3.Distance(lastHeardPosition, wp.Position);
            if (distToSound < bestDist)
            {
                bestDist = distToSound;
                bestWaypoint = wp;
            }
        }
        return bestWaypoint != null ? bestWaypoint.Position : lastHeardPosition;
    }
    #endregion

    #region Patrol
    void Patrol()
    {
        if (patrolPoints.Count == 0) return;
        Transform patrolTarget = randomPatrol ? patrolPoints[Random.Range(0, patrolPoints.Count)] : patrolPoints[currentPatrolIndex];
        if (!randomPatrol) currentPatrolIndex = (currentPatrolIndex + 1) % patrolPoints.Count;
        currentPath = Pathfinding.FindPath(waypointGenerator.waypoints, feet.position, patrolTarget.position);
    }

    #endregion

    #region Strategic Waypoint Search to find position where AI can see player from, not needing directly to run into the player
    Vector3 FindVisibleStrategicWaypoint()
    {
        Waypoint best = null;
        float bestDist = Mathf.Infinity;
        foreach (Waypoint wp in waypointGenerator.waypoints)
        {
            Vector3 eyeLevel = wp.Position + Vector3.up * 0.5f;
            Vector3 toPlayer = player.position - eyeLevel;

            if (toPlayer.magnitude > visionDistance) continue;

            if (!Physics.Raycast(eyeLevel, toPlayer.normalized, out RaycastHit hit, toPlayer.magnitude, ~0, QueryTriggerInteraction.Ignore))
                continue;

            if (hit.transform != player) continue;

            float dist = Vector3.Distance(feet.position, wp.Position);
            if (dist < bestDist)
            {
                bestDist = dist;
                best = wp;
            }
        }
        return best != null ? best.Position : lastHeardPosition;
    }

    IEnumerator TryStrategicWaypointSearch()
    {
        waitingForStrategicSearch = true;

        float timeout = 2f;
        float startTime = Time.time;
        Vector3 strategicPosition = Vector3.zero;
        bool found = false;

        while (Time.time - startTime < timeout)
        {
            Vector3 candidate = FindVisibleStrategicWaypoint();
            if (candidate != lastHeardPosition)
            {
                strategicPosition = candidate;
                found = true;
                break;
            }

            yield return null;
        }

        if (!found)
        {
            strategicPosition = FindClosestWaypointToSound();
        }

        currentPath = Pathfinding.FindPath(waypointGenerator.waypoints, feet.position, strategicPosition);
        isInvestigating = false;
        investigatingFromSound = true;
        waitingForStrategicSearch = false;
    }

    #endregion

    #region Best Vantage Point Search (not in use)
    //First iteration of best vantage point search
    //it could be still used in cases like: enemies already know where player is and whilst other enemies are in combat with the player, this one could flank and find better vantage point towards player
    // This method finds the best vantage point to shoot at the player with the least obstructions and giving higher score the higher vantage point is "I have the high ground Anakin"

    //Vector3 FindBestVantagePoint()
    //{
    //    Waypoint best = null;
    //    float bestScore = Mathf.NegativeInfinity;
    //    foreach (Waypoint wp in waypointGenerator.waypoints)
    //    {
    //        Vector3 wpPos = wp.Position;
    //        Vector3 toPlayer = player.position - wpPos;
    //        float distance = toPlayer.magnitude;
    //        if (distance > visionDistance || distance > shootingDistance) continue;

    //        if (Vector3.Dot((player.position - wpPos).normalized, player.forward) < -0.5f) continue;

    //        Vector3[] targetOffsets = new Vector3[]
    //        {
    //            Vector3.zero,
    //            Vector3.up * 1.5f,
    //            Vector3.down * 0.5f
    //        };

    //        int visiblePoints = 0;
    //        foreach (Vector3 offset in targetOffsets)
    //        {
    //            Vector3 targetPos = player.position + offset;
    //            Vector3 dir = (targetPos - wpPos).normalized;
    //            float d = Vector3.Distance(targetPos, wpPos);
    //            if (!Physics.Raycast(
    //                wpPos,
    //                dir,
    //                d,
    //                ~0,
    //                QueryTriggerInteraction.Ignore
    //            ))
    //            {
    //                visiblePoints++;
    //            }
    //        }
    //        if (visiblePoints == 0) continue;

    //        float visibilityScore = visiblePoints / (float)targetOffsets.Length;
    //        float heightScore = wpPos.y - player.position.y;
    //        float totalScore = visibilityScore * 3f + heightScore * 2f;

    //        if (totalScore > bestScore)
    //        {
    //            bestScore = totalScore;
    //            best = wp;
    //        }
    //    }
    //    return best != null ? best.Position : player.position;
    //}
    #endregion

    #region Actual movement of the AI
    void MoveAlongPath()
    {
        if (currentState == EnemyState.Combat)
        {
            float horizDist = Vector3.Distance(new Vector3(shootPoint.position.x, 0, shootPoint.position.z), new Vector3(player.position.x, 0, player.position.z));
            if (horizDist <= shootingDistance) return;
        }

        if (isWaiting || currentPath.Count == 0) return;

        Vector3 target = currentPath[0];
        Vector3 raw = target - feet.position; raw.y = 0;

        if (raw.magnitude < distanceToStopAtWaypoint)
        {
            currentPath.RemoveAt(0);
            if (currentPath.Count == 0)
            {
                if (investigatingFromSound)
                {
                    investigatingFromSound = false;
                    isInvestigating = false;
                    currentState = EnemyState.Investigate;
                    return;
                }

                isWaiting = true;

                if (currentState != EnemyState.Investigate)
                    currentState = EnemyState.Idle;

                Invoke(nameof(StopWaiting), waitInPlace);
            }

            if (currentPath.Count == 0 && lastSeenPosition != Vector3.zero)
            {
                lastSeenPosition = Vector3.zero;
            }

            return;
        }

        Vector3 dir = raw.normalized;
        Vector3 motion = dir * moveSpeed * Time.deltaTime;
        velocity.y += gravity * Time.deltaTime;
        motion.y = velocity.y * Time.deltaTime;
        cc.Move(motion);

        RotateTowards(target);
    }
    #endregion

    #region Other
    void AimEyesAtPlayer(float rotationSpeed = 5f)
    {
        Vector3 dir = (player.position - upperBody.position).normalized;
        Quaternion lookRot = Quaternion.LookRotation(dir);
        Quaternion localRot = Quaternion.Inverse(upperBody.parent.rotation) * lookRot;
        upperBody.localRotation = Quaternion.Slerp(upperBody.localRotation, localRot, rotationSpeed * Time.deltaTime);
        Debug.DrawRay(upperBody.position, dir * 3f, Color.magenta);
    }

   
    void StopWaiting()
    {
        isWaiting = false;
        currentState = EnemyState.Patrol;
    }

    void RotateTowards(Vector3 worldPosition, float rotationSpeed = 5f)
    {
        Vector3 direction = worldPosition - transform.position;
        direction.y = 0;
        if (direction.sqrMagnitude < 0.01f) return;
        Quaternion targetRotation = Quaternion.LookRotation(direction);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
    }

    #endregion

    #region Gizmos for debugging
    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        for (int i = 0; i < currentPath.Count - 1; i++) Gizmos.DrawLine(currentPath[i], currentPath[i + 1]);

        Gizmos.color = Color.yellow;
        Vector3 forward = upperBody.forward;
        Vector3 up = Quaternion.AngleAxis(visionVerticalAngle, upperBody.right) * forward * visionDistance;
        Vector3 down = Quaternion.AngleAxis(-visionVerticalAngle, upperBody.right) * forward * visionDistance;
        Vector3 left = Quaternion.AngleAxis(-visionHorizontalAngle, upperBody.up) * forward * visionDistance;
        Vector3 right = Quaternion.AngleAxis(visionHorizontalAngle, upperBody.up) * forward * visionDistance;

        Gizmos.DrawRay(upperBody.position, forward * visionDistance);
        Gizmos.DrawRay(upperBody.position, up);
        Gizmos.DrawRay(upperBody.position, down);
        Gizmos.DrawRay(upperBody.position, left);
        Gizmos.DrawRay(upperBody.position, right);
    }
    #endregion
}
`,
pdf: {
    url: "/portfolio/a-star-documentation.pdf",
    label: "Workflow Report (PDF)",
  },
}  
]