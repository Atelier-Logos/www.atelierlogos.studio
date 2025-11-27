---
title: "Almost anything can be automated, but..."
summary: "A lot of CMMC and FedRamp experts really love the idea of automating their evidence ingestion, but when you don't have the technical background to communicate what you want to automate, it creates a disconnect in what's desired and what's possible"
author: "Admin"
published: "2025-11-27"
image: "/anything-can-be-automated.png"
tags: ["Automation", "Governance", "Compliance", "FedRamp", "Risk"]
---

We all want our jobs to be easier. That goes without saying. I would absolutely love it if I could just focus on technical problems all day without learning anything about compliance controls while the money just flows into my account without my thinking about or having to do any backoffice things. But the reality is not so simple. 

Many CMMC experts lack a technical depth to know things as simple as how to read an API surface, and many technical nerds lack a GRC depth to know how tools map to certain guidelines, and have never even looked at the source material. This isn't sustainable for long term goals of automating evidence collection and ConMon. Many of the automation focused goals I've heard thrown around in various circles are speaking from the perspective of people who grasp the compliance side of things, and know what they want to do, but don't particulary understand how **or even if** the automations they want can be done. 

### We need reference architectures

A crucial need in this line of thinking is reference automations. And I would love if the community began working on a repo of simple creative automations that can be done in OSCAL and other formats to automate compliance with a creative technoligist (I made this word up don't shoot me) at the helm. The reason I use this term is because 85% of compliance automation from my perspective is creativity. It's **very** important to have someone on your team who knows the difference between information you can pull via API such as Microsoft Graph, information you can parse from IaC such as Terraform, and information you need to be creative with such as writing custom logic with [Browserbase](https://www.browserbase.com) to automate screenshots of your settings. 

This type of technical creativity is crucial to efficiently mapping infrastructure state to control requirements. 
Without it, teams are left either manually collecting evidence or attempting to force rigid automation pipelines that simply don’t work in the real world. Automation in compliance is not about blindly scripting everything; it’s about knowing what can be reliably automated, what requires human oversight, and where a clever workaround can bridge the gap.

## Bridging the Gap Between Tech and GRC

The solution isn’t purely technical, nor is it purely governance-driven—it’s a hybrid. Compliance teams need a partner who can speak “API” and “IaC,” while engineers need guidance on which pieces of data matter for which control families. For example, being able to pull logs from a cloud provider’s API is only half the battle; knowing that the audit logs align with AC.1.001 or AU.2.042 in CMMC 2.0 is what makes that evidence meaningful.

This is where reference architectures shine. Imagine a community-driven library of automation patterns:

- Terraform + OSCAL mappings for infrastructure baseline evidence

- Cloud provider APIs to validate configuration drift

- Custom scripts or browser-based tools to capture proof of configuration where APIs don’t reach

- Composable workflows that can be extended to new controls or environments

By having shared reference implementations, teams no longer start from scratch or reinvent the wheel every time a new compliance requirement comes up. It also encourages experimentation and sharing of creative techniques that combine engineering rigor with governance understanding.

## The Human Element Remains Key

Even with reference architectures, automation isn’t a silver bullet. Compliance is contextual: some controls require judgment, risk assessment, or narrative explanation. Technical creativity can only take you so far; someone still needs to interpret and present the evidence in a way that satisfies auditors and stakeholders.

The ultimate goal is a compliance system that scales: automated evidence collection where possible, guided human input where needed, and a shared knowledge base that makes compliance approachable without being overwhelming. By fostering a culture that values both technical depth and governance literacy—and by providing concrete reference architectures—we can move toward this ideal.

In short: don’t underestimate the importance of a “creative technologist” on your team, and don’t underestimate the value of sharing patterns and reference automations. That combination is the real key to sustainable, scalable compliance automation.

## 3 insanely promising compliance automation projects

With all that stated, let's look at some of the project I'm most excited for contributing to the field of compliance automation. 

### Continuous Compliance Framework

[Ian Miell](https://www.linkedin.com/in/%E2%80%8Bian-miell-694496/) is a beast. Hands down. After reading his post titled ["If you want to Transform IT, Start With Finance"](https://zwischenzugs.com/2021/07/12/if-you-want-to-transform-it-start-with-finance/), I realized so much about broken current approaches to DevOps are. Ian is the CTO of [Container Solutions](https://www.container-solutions.com/) and a cloud-native consultant. He created a new framework called the [Continuous Compliance Framework](https://continuouscompliance.io), which is an open source, automated compliance testing and reporting system designed to help organizations continuously assess their adherence to regulatory standards such as NIST SP 800-53, SOC 2, PCI DSS, and GDPR. It integrates policy-based compliance checks, real-time monitoring, and structured reporting to streamline and centralise traditionally manual, periodic and disparate audit processes. 

It's built and maintained by the team at Container Solutions, with contributions from the open source community. It has Policy-as-code validation and can flex to any catalog you need. 

### Tines.io

[Tines](https://www.tines.com/) is a workflow automation platform much like Zapier for infrastructure which we use internally for HTTP requests and pulling control data from places like Kubernetes and Azure. It's a great tool for simple automation that can use a quick visual builder. 

### Nooklanes (Nabla's Zero Trust Enclave)

We also built our own zero-trust enclave called [Nooklanes]() that's still under development which uses OPAL and Cedar Policies to flow policy down through an entire application. It's still rough and only has one policy ruleset, but long term I would love to integrate it with Ian's Continuous Compliance Framework so that it turned into a automated compliance engine like Permit.io for compliance frameworks. 

The enclave and the policy server are split, you can find the policy server [here](https://github.com/usenabla-com/nooklanes-policies). 