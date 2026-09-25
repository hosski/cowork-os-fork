# src/shared/knowledge-graph-types.ts

- KGBuiltinEntityType · type · L3-L13 — type KGBuiltinEntityType = | "person" | "organization" | "project" | "technology" | "concept" | "file" | "service" | "api_endpoint" | "database_table" | "environment";
- KGBuiltinEdgeType · type · L15-L30 — type KGBuiltinEdgeType = | "uses" | "depends_on" | "part_of" | "created_by" | "maintained_by" | "deployed_to" | "connects_to" | "extends" | "implements" | "references" | "owns" | "belongs_to" | "related_to" | "blocked_by" | "replaced_by";
- KGEntityType · interface · L32-L41 — interface KGEntityType
- KGEntity · interface · L43-L56 — interface KGEntity
- KGEdge · interface · L58-L71 — interface KGEdge
- KGObservation · interface · L73-L80 — interface KGObservation
- KGSearchResult · interface · L82-L86 — interface KGSearchResult
- KGNeighborResult · interface · L88-L93 — interface KGNeighborResult
- KGSubgraph · interface · L95-L98 — interface KGSubgraph
- CreateEntityInput · interface · L100-L106 — interface CreateEntityInput
- UpdateEntityInput · interface · L108-L113 — interface UpdateEntityInput
- CreateEdgeInput · interface · L115-L123 — interface CreateEdgeInput
- AddObservationInput · interface · L125-L128 — interface AddObservationInput
- KGStats · interface · L130-L135 — interface KGStats
