---
id: CancelOrder
name: Cancel Order
version: 0.0.1
summary: |
  Command requesting an order be canceled. 
badges: []    
schemaPath: "schema.json"
---

## Overview
If validation succeeds, an `OrderCancelled` event will be emitted, resulting in the deletion of the order, all of its line items, and the return of all applicable reserved stock.

## Architecture Diagram

<NodeGraph />


## Schema (JSON)

<SchemaViewer title="" file="schema.json" />