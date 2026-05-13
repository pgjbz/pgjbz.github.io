# Portfolio Landing Page Specification

## Project Overview
- **Project:** Personal Portfolio Landing Page
- **Type:** Single-page website
- **Target Audience:** Recruiters, potential employers, collaborators

---

## Files Structure

```
my-profile/
├── index.html         # Main HTML file
├── style.css          # Styles
├── script.js          # JavaScript (placeholder)
├── EXPERIENCES.md     # Professional experiences data
└── SPEC.md            # This specification
```

---

## Sections

### 1. Navigation (Fixed)
- Logo: `<PG/>`
- Links: Home, About, Skills, Experience, Contact

### 2. Home
- Name: Paulo Gabriel
- Role: Senior Software Engineer
- CTA: "Get in Touch" button

### 3. About Me
- Senior Software Engineer with 5+ years experience
- Specializes in Java, Kafka, distributed databases
- Open Source: Rust4Noobs (he4rt community)
- Currently improving AI skills

### 4. Skills
- Backend Development: Java, Spring Framework, Spring Boot, Spring Data, Spring Cloud, Spring Cloud Stream, Event Sourcing, REST APIs, GraphQL, SOAP, Microservices
- Message Queue & Async: Apache Kafka, Kafka Connect, AWS SQS, Event-Driven Architecture
- Relational Databases: PostgreSQL, MySQL, Oracle
- NoSQL Databases: MongoDB, Redis
- Infrastructure & DevOps: Docker, Kubernetes, Argo CD, Terraform, AWS (EKS, RDS, MSK, SQS), Azure, OpenShift
- Monitoring & Observability: New Relic, Dynatrace

### 5. Experience (Timeline)
- Read the file `EXPERIENCES.md` to generate this section
- Only developer roles are included (non-dev roles excluded)
- Companies: PicPay (2023-Present), CI&T (2021-2023), Dextra (2021), RD/RaiaDrogasil (2020-2021)

### 6. Contact
- Email: contact@pgjbz.dev

---

## Design

### Color Palette
- Background Primary: `#0a0a0a`
- Background Secondary: `#141414`
- Background Tertiary: `#1a1a1a`
- Text Primary: `#f5f5f5`
- Text Secondary: `#a0a0a0`
- Accent Red: `#e63946`
- Accent Red Hover: `#ff4d5a`

### Typography
- Font: Segoe UI, system-ui, sans-serif

### Responsive
- Mobile breakpoint: 768px

---

## Stats
- 5+ Years Experience
- 4 Companies
- 1 Open Source Project
- Started: 2020

---

## Interactive Features

### Dynamic Navigation Highlight
- A red underscore highlight bar that appears below the active navigation link
- The highlight automatically moves to the current section as the user scrolls
- Uses Intersection Observer to detect which section is currently in view
- Smooth CSS transitions (0.3s ease) for left and width properties
- Fixed position below the navbar (top: 48px)
- Z-index: 1001 to stay above other elements

### Scroll Animations
- Sections fade in and slide up when entering the viewport
- Uses Intersection Observer with threshold 0.1
- Smooth opacity and transform transitions