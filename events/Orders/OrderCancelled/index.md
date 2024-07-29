---
id: OrderCancelled
name: Order Cancelled
version: 0.0.1
summary: |
  Indicates an order has been canceled
badges: []    
schemaPath: 'schema.json'
---

## Overview
Occurs when an order is canceled for any number of reasons, including human error or customer cancellation. Cancellation can happen to any type of order. An order cancellation event always carries with it the list of items that were in that order at the time of cancellation.

## Architecture Diagram

<NodeGraph />

## Example Payload

```json title="Example payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "cancellationReason": "Customer requested cancellation",
  "orderItems": [
    {
      "itemId": "123e4567-e89b-12d3-a456-426614174000",
      "sku": "abc1234",
      "quantity": 5
    }
  ]
  "timestamp": "2024-07-04T14:48:00Z"
}

```

## Schema (JSON)

<SchemaViewer title="" file="schema.json"/>