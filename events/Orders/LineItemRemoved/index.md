---
id: LineItemRemoved
name: Line Item Removed
version: 0.0.1
summary: |
  Indicates an item has been removed from an order
badges: []
---

## Overview
Occurs when a line item has been removed from an order. Line items are removed in response to a cancel line item command.

## Example payload

```json title="Example Payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "itemId": "123e4567-e89b-12d3-a456-426614174000",  
  "notes": "made a woopsy",
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Architecture Diagram

<NodeGraph />


## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

