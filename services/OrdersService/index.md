---
id: OrdersService
version: 0.0.1
name: Orders
summary: |
  Service that handles orders
receives:
  - id: InventoryAdjusted
    version: 0.0.3
  - id: FulfillLineItem
    version: 0.0.1
  - id: CreateOrder
    version: 0.0.1
  - id: CancelOrder
    version: 0.0.1
  - id: CancelLineItem
    version: 0.0.1
  - id: AmendOrder
    version: 0.0.1
sends:  
  - id: OrderFulfilled
    version: 0.0.1
  - id: OrderCreated
    version: 0.0.1
  - id: OrderCancelled
    version: 0.0.1
  - id: LineItemAdded
    version: 0.0.1
  - id: LineItemRemoved
    version: 0.0.1
  - id: LineItemFulfilled
    version: 0.0.1
  - id: OrderAmended
    version: 0.0.1
---

## Overview

The Orders service is responsible for managing all activities and flows for order entities.

## Architecture diagram 

<NodeGraph />