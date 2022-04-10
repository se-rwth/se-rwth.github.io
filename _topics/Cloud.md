---
layout: page
title: Cloud Computing & Enterprise Information Systems
description: 
img: 
importance: 1
---

## Summary of Selected Papers
As web-based application and service architectures are continuing to **grow in 
complexity, criticality and into new application domains**, their development, 
integration, evolution, migration, operation and migration poses ever more and 
ever larger challenges to Software Engineering. In 
[[KRR14]](https://www.se-rwth.de/publications/Trusted-Cloud-Computing.pdf), we 
discuss in detail the paradigm of **Cloud Computing that is arising out of a 
convergence of existing and new technologies**. It promises to enable new 
business models, to lower the barrier for web-based innovations and to increase 
the efficiency and cost-effectiveness of web development.

Cloud-based systems pose a multitude of different challenges. The demand for 
**seamless scalability** with system load leads to highly distributed 
infrastructures and software architectures that can grow and shrink at runtime. 
The lack of standards, complemented by the variety of proprietary infrastructure 
and service providers, leads to a high degree of **technological 
heterogeneity**. High availability and interconnectivity with a multitude of 
clients leads to complex **evolution and maintenance** processes. These 
challenges come coupled with distinct requirements posed by the individual 
application domain. Application classes like **Internet of Things** as described 
in 
[[HHK+14]](https://www.se-rwth.de/publications/User-driven-Privacy-Enforcement-for-Cloud-based-Services-in-the-Internet-of-Things.pdf), 
**Cyber-Physical Systems** described in 
[[KRS12]](https://www.se-rwth.de/publications/Cyber-Physical-Systems-eine-Herausforderung-an-die-Automatisierungstechnik.pdf), 
**Big Data, App and Service Ecosystems** bring attention to aspects like 
responsiveness, privacy and open platforms. Regardless of the application 
domain, developers of such systems are in need for **robust methods** and 
**efficient, easy-to-use languages and tools**. For example, in 
[[HHK+14]](https://www.se-rwth.de/publications/User-driven-Privacy-Enforcement-for-Cloud-based-Services-in-the-Internet-of-Things.pdf) 
and 
[[HHK+15a]](https://www.se-rwth.de/publications/A-Comprehensive-Approach-to-Privacy-in-the-Cloud-based-Internet-of-Things.pdf), 
we discuss how to handle privacy in the cloud.

In 
[[PR13]](https://www.se-rwth.de/publications/Modeling-Cloud-Architectures-as-Interactive-Systems.pdf), 
we tackle these challenges by perusing a **model-based, generative approach**. 
The core of this approach are several modeling languages that describe different 
aspects of a cloud-based system in a concise and technology-agnostic way. 
**Software architecture and infrastructure models** describe the system and its 
physical distribution on a large scale. 
[UML/P](https://www.se-rwth.de/topics/UML-P.php) models, and class diagrams in 
particular, describe several other aspects of the system, such as its **domain 
and data models**, its interfaces and interactions, and its monitoring and 
scaling capabilities. Among other tools, **code generators** most prominently 
take these models as input and generate application-specific frameworks that 
implement big parts of the system's technical aspects and provide 
technology-agnostic, ease-to-use interfaces for the cloud-based application's 
actual business logic.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

We have applied these technologies to various cloud systems, cars, buildings, 
smart phones, mobile computing devices, and various other kinds of sensors. We 
also developed a successful and technologically sound framework for web based 
software portals 
[[HKR12]](https://www.se-rwth.de/publications/SSELab-A-Plug-In-Based-Framework-for-Web-Based-Project-Portals.pdf) 
that we offer under sselab.de for general use. Another set of cloud systems 
helps to deal with energy management and is described in 
[[FPPR12]](https://www.se-rwth.de/publications/The-Energy-Navigator-A-Web-Platform-for-Performance-Design-and-Management.pdf) 
and [[KPR12]](https://www.se-rwth.de/publications/Der-Energie-Navigator.pdf). It 
continuously monitors building operation systems to derive operational data and 
compare these to the building specification. We use cloud technologies to 
maintain data, dynamically execute calculations and host management services 
enabling reduction of building energy costs.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Summary
1. Model-based, generative development of cloud-based systems helps to reduce 
development time, increase flexibility and adaptivity.
2. Models can be used for architecture as well as domain and data modeling.
3. For connecting the Cloud with Cyber-Physical Systems it is especially 
interesting to use configurable model-based technology.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Energy Management](/topics/Energy-Management)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [UML/P](/topics/UML-P)
