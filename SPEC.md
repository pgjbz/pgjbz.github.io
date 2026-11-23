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
- Senior Software Engineer with 6+ years experience
- Experience with high-scale, mission-critical systems in the financial, payments, retail and iGaming sectors
- Specializes in Java, Spring Boot, microservices and event-driven architecture
- Led the DDA front at PicPay, reducing notification time from 2m40s to under 15 seconds and cutting operating costs
- Delivered query performance gains from 3 minutes to under 1 second and from 15 seconds to 200 ms
- Works end-to-end, from development to infrastructure (AWS, Kafka, EKS), with a strong testing, code review and observability culture
- Open Source: Rust4Noobs (he4rt community)
- Currently improving AI skills

### 4. Skills
- Languages & Frameworks: Java 8/11/17/25, Spring Boot 2/3/4, Spring Framework, Spring Data, Spring Cloud, Spring Cloud Stream, Java EE, PHP, Laravel
- Architecture: Microservices, Event-Driven Architecture, CDC, Distributed Systems, Multi-Tenant, REST APIs
- Messaging & Data: Apache Kafka, Kafka Connect, AWS SQS, AWS MSK, Redis, MySQL, PostgreSQL, Oracle, MongoDB
- Cloud & DevOps: AWS (EKS, SQS, MSK), Azure, OpenShift, Docker, Tekton, Argo CD, Jenkins
- Observability: New Relic, Dynatrace, Datadog, OpenSearch
- Quality: Unit and integration testing (Testcontainers, WireMock), code review
- Domain: Payments, Fintech, BaaS, TED, SLC, SPB, DDA, Boletos, tax integrations, iGaming

### 5. Experience (Timeline)
- Read the file `EXPERIENCES.md` to generate this section
- Only developer roles are included (non-dev roles excluded)
- Companies: PicPay (2023-Present), CI&T (2021-2023), Dextra (2021), RD/RaiaDrogasil (2020-2021)

### 6. Contact
- Email: contact@pgjbz.dev (CV: pgj1085@gmail.com)
- LinkedIn: linkedin.com/in/paulogjbezerra
- GitHub: github.com/pgjbz
- Location: Brazil

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