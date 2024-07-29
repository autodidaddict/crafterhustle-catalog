---
id: Orders
name: Orders
version: 0.0.1
services:
  - id: OrdersService
    version: 0.0.1
  - id: InventoryService
    version: 0.0.1
  - id: CatalogService
    version: 0.0.1
badges: []
---
## Overview
The **orders** domain is the largest in the application. Event flows in this domain are responsible for the creation and manipulation of orders, order line items, inventory (stock) on hand, reserved stock, and much more.

An order entity can be any of the following:

* **Standard** - A standard order that can contain comission requests as well as sale of physical inventory. 
* **Consignment** - A consignment order can only contain consignment items which result in the reservation of physical inventory rather than immediate sale.

Orders can also be optionally associated with a **show**, a **customer**, or a **consignment** instance.

## Bounded Context

<NodeGraph />