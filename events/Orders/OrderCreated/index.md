---
id: OrderCreated
name: Order Created
version: 0.0.1
summary: |
  Indicates a new, unfulfilled order has been created
badges: []    
schemaPath: schema.json
---

## Overview

Occurs when a new, empty order has been created.

## Architecture Diagram

<NodeGraph />

## Example Payload

```json title="Example payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "description": "This is a shiny new order",
  "isConsignment": false, 
}
```

## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

