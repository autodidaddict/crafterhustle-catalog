---
id: OrderFulfilled
name: Order fulfilled
version: 0.0.1
summary: |
  Indicates an order has been fulfilled, either by commission completion or through immediate fulfillment when an in-stock item is purchased
badges:
    - content: Recently updated!
      backgroundColor: green
      textColor: green
    - content: Channel:Apache Kafka
      backgroundColor: yellow
      textColor: yellow
schemaPath: schema.json
---

## Overview

TBD

## Architecture Diagram

<NodeGraph />

## Payload

```json title="Example payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "orderItems": [
    {
      "productId": "789e1234-b56c-78d9-e012-3456789fghij",
      "productName": "Example Product",
      "quantity": 2,
      "unitPrice": 29.99,
      "totalPrice": 59.98
    }
  ],
  "orderStatus": "confirmed",
  "totalAmount": 150.75,
  "confirmationTimestamp": "2024-07-04T14:48:00Z"
}
```

## Schema

