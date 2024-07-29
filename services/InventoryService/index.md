---
id: InventoryService
version: 0.0.1
name: Inventory
summary: |
  Service that handles the inventory
receives:
  - id: OrderFulfilled
    version: 0.0.1  
  - id: UpdateInventory
    version: 0.0.1
sends:
  - id: InventoryAdjusted
    version: 0.0.4
  - id: OutOfStock
    version: 0.0.3
---

## Overview

The Inventory Service is a critical component of the system responsible for managing product stock levels, tracking inventory movements, and more.

## Architecture diagram

<NodeGraph />