# API Overview

ChatDev communicates through REST APIs to coordinate business workflows.

## Core Endpoints

### Product Search

Retrieves products based on customer intent.

---

### Product Recommendation

Returns AI-selected products.

---

### Order Creation

Stores customer orders.

---

### Payment Workflow

Generates payment instructions.

---

### Order Tracking

Retrieves order status.

---

## Data Flow

Customer

↓

Frontend

↓

Backend API

↓

PocketBase

↓

n8n

↓

Response