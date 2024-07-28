---
id: OrdersService
version: 0.0.1
name: Orders Service
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
repository:
  language: JavaScript
  url: https://github.com/boyney123/pretend-shipping-service
schemaPath: "openapi.yml"
---

## Overview

The Orders Service is responsible for managing customer orders within the system. It handles order creation, updating, status tracking, and interactions with other services such as Inventory, Payment, and Notification services to ensure smooth order processing and fulfillment.

<OpenAPI />

## Architecture diagram 

<NodeGraph />