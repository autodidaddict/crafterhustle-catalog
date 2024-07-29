---
id: LineItemAdded
name: Line item added
version: 0.0.1
summary: |
  Indicates an item has been added to an order
badges: []    
---

## Overview

Indicates that some quantity of a line item has been added to an order.


## Architecture Diagram

<NodeGraph />


## Example payload

```json title="Example Payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "sku": "ABC1234",
  "quantity": 4,
  "itemId": "123e4567-e89b-12d3-a456-426614174000",
  "itemType": "stock",
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

