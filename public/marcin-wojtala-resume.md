---
pdf_options:
  format: A4
  margin:
    top: 11mm
    bottom: 11mm
    left: 15mm
    right: 15mm
  displayHeaderFooter: false
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 9.3pt;
    line-height: 1.48;
    color: #1a1a1a;
  }

  h1 {
    font-size: 21pt;
    font-weight: 700;
    color: #0f172a;
    margin-top: 0;
    margin-bottom: 2px;
    border-bottom: none;
  }

  h2 {
    font-size: 11pt;
    font-weight: 600;
    color: #1e293b;
    margin-top: 1em;
    margin-bottom: 0.4em;
    padding-bottom: 0.2em;
    border-bottom: 1.5px solid #e2e8f0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 10pt;
    font-weight: 600;
    color: #334155;
    margin-top: 0.75em;
    margin-bottom: 0.2em;
  }

  p {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }

  strong {
    color: #1e293b;
  }

  a {
    color: #2563eb;
    text-decoration: none;
  }

  hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 0.6em 0;
  }

  ul {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    padding-left: 1.4em;
  }

  li {
    margin-bottom: 0.15em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8.5pt;
    margin-top: 0.35em;
  }

  th {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 3px 8px;
    text-align: left;
    font-weight: 600;
    color: #334155;
  }

  td {
    border: 1px solid #e2e8f0;
    padding: 3px 8px;
  }

  em {
    color: #64748b;
  }
</style>

<div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 12px;">
  <div style="flex: 1;">
    <h1 style="margin: 0;">MARCIN WOJTALA</h1>
    <div style="font-size: 0.86em;"><strong>Engineering Leader | UI Architecture & Platform Engineering | Financial Services</strong></div>
  </div>
  <div style="text-align: right; font-size: 0.9em;">
    High Wycombe, UK | (+44) 7500905701<br/>
    <a href="mailto:1985mars@gmail.com">Email</a> |
    <a href="https://linkedin.com/in/martinwojtala">LinkedIn</a> |
    <a href="https://marcinwojtala.vercel.app/">Website</a> |
    <a href="https://github.com/nodexchange">GitHub</a>
  </div>
</div>

---

## SUMMARY

I’m a hands-on engineering leader who actively codes and stays close to the work, contributing to pull requests, technology choices, standards, technical direction, and team growth while aligning people, technology, and outcomes. With 15+ years of experience across UI architecture, platform engineering, and global delivery in financial services, I currently lead multi-asset portfolio management systems at JPMorgan Chase, supporting $438B+ in assets under management across global, high-volume platforms.

I care about two things equally: the craft of building reliable, well-tested software and the people who build it.

---

## TECHNICAL SKILLS

**Building UIs at scale:** React, TypeScript, Next.js, Microfrontends (Module Federation), WPF, C#

**Back-end & event systems:** Java, Spring Boot, Node.js, Python, Kafka, CQRS, event-driven architecture

**Data & caching:** GemFire, Apache Ignite, Redis, multi-region replication

**Cloud & infrastructure:** AWS (EKS, Lambda, EC2, Bedrock), Kubernetes, Docker, Terraform (IaC)

**Quality & delivery:** CI/CD (Jenkins, GitHub Actions, GitLab CI), chaos engineering, contract testing (PactFlow), performance testing (k6), Snyk, SonarQube, Veracode

---

## PROFESSIONAL EXPERIENCE

### JPMorgan Chase | London
**Executive Director – Multi-Asset Portfolio Management Systems**
*December 2022 – Present*

Hands-on engineering leadership for multi-asset portfolio management platforms supporting $438B+ AUM across North America, EMEA, and APAC.

- Lead the end-to-end platform spanning target allocation engines (SAA/TAA), research feed integration, alpha screening, exposure management, portfolio construction, and order execution
- Stay actively involved in delivery through coding, pull request reviews, solution design, and architecture decisions across business-critical production systems
- Scaled the transaction architecture from single-region to multi-region, supporting 8B+ daily messages with low-latency replication through distributed caching
- Improved platform resilience to 99.42% SLA uptime across global trading hours through chaos engineering, contract testing, and instant rollback via Spinnaker and Kubernetes
- Set technical direction across globally distributed teams in the US, UK, India, Hong Kong, and Taiwan, shaping engineering standards, design reviews, and ways of working
- Introduced DevSecOps practices with Snyk, Veracode, performance testing, and release safeguards to strengthen quality and delivery confidence
- Sponsored AI-assisted engineering across the organisation, leading in-person and online workshops that trained 89% of 210 full-stack engineers and contributed to 62% AI-assisted sprint penetration

**Technologies:** Java, Spring Boot, React, TypeScript, AWS (EKS, ECS, Lambda), GemFire, Kafka, Terraform, Jenkins, Spinnaker, PactFlow

### Bottomline Technologies | Reading
**Senior UI Engineering Manager – Financial Transaction Platforms**
*May 2020 – December 2022*

Built and led the engineering team delivering platforms supporting 2B+ daily distributed financial transactions.

- Designed and shipped a micro-frontend architecture using React and Module Federation, enabling independent team deployment across the payment processing platform
- Integrated Open Banking APIs to connect financial data sources, meeting regulatory compliance requirements while improving data flow
- Grew the engineering team by 200% through structured hiring, onboarding, and mentoring programmes 
- Relocated 15 engineers and their families during a sanctions-constrained acquisition
- Created a contextual maturity matrix to assess team capabilities and set a technical roadmap, used it to prioritise investment in testing, CI/CD, and front-end tooling

**Technologies:** React, WPF, C#, .NET, Node.js, AWS, Kafka, Micro-frontends, CI/CD

---

### Oxford University Press | Oxford
**Application Architect / Development Manager – Platform Engineering**
*April 2019 – May 2020*

Hands-on architecture leadership for a globally distributed Higher Education platform team.

- Moved the team from manual deployments to container-driven infrastructure (Docker) with automated CI/CD pipelines, cutting release cycles from weeks to days
- Designed cloud architecture on AWS (Elastic Beanstalk, S3, EC2, Lambda) to support the global learning platform
- Partnered with the security team to establish DevSecOps practices and a security-first engineering culture

**Technologies:** Java, Node.js, TypeScript, Docker, AWS (Elastic Beanstalk, S3, EC2, Lambda), CI/CD

---

### Verizon Media (AOL + Yahoo) | London
**Creative Solutions Manager – AdTech Creative Platforms**
*August 2012 – April 2019*

Led a globally distributed engineering team (16+ developers) building ad creative systems integrated with real-time bidding infrastructure.

- Built and maintained the front-end creative tooling platform that designers and campaign managers used to assemble, preview, and launch ad creatives at scale
- Scaled creative delivery systems to handle real-time bidding traffic, integrating with Erlang-based RTB infrastructure under strict latency SLAs
- Managed distributed teams across in-house, remote, and offshore locations for 7 years, building a culture of ownership and continuous improvement

**Technologies:** JavaScript, Java, APIs, Creative Delivery Systems, RTB Infrastructure

---

## EDUCATION & CERTIFICATIONS

| Year | Qualification | Institution |
|------|--------------|-------------|
| 2024 | AWS Certified Cloud Practitioner | Amazon Web Services |
| 2023-2024 | Investment Essentials Certification | CFA Institute |
| 2015-2016 | MSc Creative Industries Management (Merit) | Birkbeck, University of London |
| 2009-2010 | PG Certificate, Digital Media Management | Birkbeck, University of London |
| 2004-2007 | BA (Hons) Design for Interactive Media | University of West London |

### Professional Development

- **Agile & Leadership:** SAFe Agilist, Scrum Master, Extreme Programming (XP), Servant Leadership principles
- **Cloud & Infrastructure:** AWS architecture patterns, Kubernetes administration, Terraform workflows
- **Security & Accessibility:** DevSecOps practices, OWASP security principles, WCAG accessibility standards, inclusive design
- **Financial Services:** Investment principles, portfolio management fundamentals, risk frameworks
