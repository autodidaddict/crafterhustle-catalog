---
id: AmendOrder
name: Amend Order
version: 0.0.1
summary: |
  Command requesting an order be amended. 
badges: []    
---

## Overview
Order amendments allow change requests to be made of an order. A history
of these amendments is kept much like adjustments in a ledger. Note that whether 
an order is a consignment order _cannot be changed_. 

## Architecture diagram

<NodeGraph />

## Payload example

```json title="Payload example"
{
  "orderId": "789e1234-b56c-78d9-e012-3456789fghij",
  "description": "Change the description to this",  
  "customerRef": "456e7891-c23d-45f6-b78a-123456789abc",
  "showRef": "456e7891-c23d-45f6-b78a-123456789abc",
  "consignmentRef": "456e7891-c23d-45f6-b78a-123456789abc",
  "removeItems": ["456e7891-c23d-45f6-b78a-123456789abc"],
  "addItems": [
    {
      "itemId": "456e7891-c23d-45f6-b78a-123456789abc",
      "quantity": 1,
      "itemType": "stock",
      "description": "a new coaster"
    }
  ],  
  "timestamp": "2024-07-04T14:48:00Z"
}
```

## Schema (JSON schema)

<SchemaViewer title="" file="schema.json"/>