---
id: Consigment
name: Consignment
version: 0.0.1
# owners:
#   - dboyne
services:
  - id: ConsignmentService
    version: 0.0.1  
#   - id: NotificationService
#     version: 0.0.2
#   - id: OrdersService
#     version: 0.0.2
badges: []
#   - content: New domain
#     backgroundColor: blue
#     textColor: blue
---
## Overview
Consignments are short-term movement of products from regular (the **consignor**'s) inventory to another location such as a store, consignment shop, friend, etc (the **consignee**). The important aspect of consignments
is that they remove products from "on hand" inventory which can then either come back after the expiration period, or be sold (typically includes a consignment fee). Until the goods are sold, the consignor retains ownership of the products.

## Bounded Context

<NodeGraph />
