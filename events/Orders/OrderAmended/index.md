---
id: OrderAmended
name: Order Amended
version: 0.0.1
summary: |
  Indicates that information has been added to an order.
badges: []    
---

## Overview
Orders can never be edited directly. Some information about an order (including line items) can be adjusted through amendments. Note that if a given amendment included the addition or removal of line items, that will be represented _in addition to_ this event, via [LineItemAdded](../LineItemAdded/0.0.1) and [LineItemRemoved](../LineItemRemoved/0.0.1) events.

## Example Payload

```json title="Example Payload"
{
  "orderId": "123e4567-e89b-12d3-a456-426614174000",
  "description": "shiny new description",  
  "notes": "made a woopsy",
  "customerRef": "123e4567-e89b-12d3-a456-426614174000",
  "consignmentRef": "123e4567-e89b-12d3-a456-426614174000",
  "showRef": "123e4567-e89b-12d3-a456-426614174000",

  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Architecture Diagram

<NodeGraph />

## Schema (JSON)

<SchemaViewer title="" file="schema.json" />

