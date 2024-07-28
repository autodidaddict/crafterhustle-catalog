---
id: ConsignmentService
version: 0.0.1
name: Consignment Service
summary: |
  Service that handles consignments
receives: []
  # - id: OrderConfirmed
  #   version: 0.0.1
  # - id: OrderCancelled
  #   version: 0.0.1
  # - id: OrderAmended
  #   version: 0.0.1
  # - id: UpdateInventory
  #   version: 0.0.3
sends:
  - id: ConsignmentStarted
    version: 0.0.1
  - id: ConsignmentCompleted
    version: 0.0.1
  - id: ConsigneeUpdated
    version: 0.0.1  
repository:
  language: JavaScript
  url: https://github.com/boyney123/pretend-shipping-service
---

## Overview

The Inventory Service is a critical component of the system responsible for managing product stock levels, tracking inventory movements, and ensuring product availability. It interacts with other services to maintain accurate inventory records and supports operations such as order fulfillment, restocking, and inventory audits.

## Architecture diagram

<NodeGraph title="Hello world" />