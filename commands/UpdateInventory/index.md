---
id: UpdateInventory
name: Update Inventory
version: 0.0.1
summary: |
  Command that will update a given inventory item
badges: []    
schemaPath: "schema.json"
---

## Overview

The UpdateInventory command is issued to update the existing stock levels of a product in inventory. In most cases this command is not issued by consumers directly but by other services while they are processing events.

## Architecture diagram

<NodeGraph />

## Payload example

```json title="Payload example"
{
  "sku": "PRODABC123",
  "quantityChange": -10,  
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Schema (JSON schema)

<SchemaViewer title="" file="schema.json"/>

