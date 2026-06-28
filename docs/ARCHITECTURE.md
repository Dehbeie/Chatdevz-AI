# System Architecture

## Overview

ChatDev is designed as a modular AI commerce platform that combines conversational AI, business knowledge, workflow automation, and payment processing into a unified customer experience.

Rather than functioning as a traditional chatbot, the system orchestrates multiple services to automate the customer buying journey from enquiry to order completion.

---

# High-Level Architecture

```
Customer
      │
      ▼
 Nuxt Frontend
      │
      ▼
 AI Conversation Layer
      │
      ├──────────────┐
      ▼              ▼
Business Knowledge  Intent Detection
      │              │
      └──────┬───────┘
             ▼
        Backend API
             │
     ┌───────┼────────┐
     ▼       ▼        ▼
PocketBase  n8n   Payment APIs
     │       │        │
     └───────┴────────┘
             ▼
      Customer Response
```

---

# Frontend

The frontend is built with Nuxt.js and Vue.js.

Responsibilities include:

* Customer conversations
* Product browsing
* Product rendering
* Image display
* Checkout flow
* Order tracking

---

# AI Layer

The AI layer is responsible for:

* Understanding customer intent
* Retrieving business knowledge
* Product recommendations
* Order assistance
* Context-aware conversations

---

# Backend

The backend coordinates:

* Product retrieval
* Customer data
* Order processing
* API communication
* Authentication

---

# Database

PocketBase stores:

* Products
* Orders
* Customer information
* Business data

---

# Workflow Automation

n8n manages:

* Order workflows
* Payment automation
* Notifications
* External API integrations

---

# Design Goals

The architecture was designed around five principles:

1. Modularity
2. Scalability
3. Maintainability
4. Business automation
5. Excellent customer experience
