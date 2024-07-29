---
id: LineItemFulfilled
name: Line Item Fulfilled
version: 0.0.1
summary: |
  Indicates that the requirements for an order item have been satisfied
badges: []    
---

## Overview
Occurs when the line item's requirements have been fulfilled. Note there is no partial fulfillment - if this event occurred, then _all_ quantity of the item has been fulfilled.

## Architecture Diagram

<NodeGraph />

## Example payload

```json title="Example Payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "itemId": "123e4567-e89b-12d3-a456-426614174000",  
  "notes": "completed commission",
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

