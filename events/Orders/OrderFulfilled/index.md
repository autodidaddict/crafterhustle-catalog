---
id: OrderFulfilled
name: Order Fulfilled
version: 0.0.1
summary: |
  Indicates an order has been fulfilled by virtue of all of its items having been fulfilled
badges: []    
schemaPath: schema.json
---

## Overview

Occurs once all of the line items in a given order have been fulfilled. This event also carries with it the list of all order items that were on the order when it was fulfilled.

## Architecture Diagram

<NodeGraph />

## Example Payload

```json title="Example payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "orderItems": [
    {
      "itemId": "123e4567-e89b-12d3-a456-426614174000",
      "sku": "ABC1234",
      "quantity": 7
    }
  ],
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

