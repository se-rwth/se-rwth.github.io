---
layout: page
title: Cyber-Physical Systems (CPS)
description: 
img: 
importance: 1
---

## Summary of Selected Papers
Cyber-physical systems (CPS) are **software controlled, collaborating physical 
machines**. In 
[[KRS12]](https://www.se-rwth.de/publications/Cyber-Physical-Systems-eine-Herausforderung-an-die-Automatisierungstechnik.pdf) 
we discuss that this new term arises mainly due to the increased ability of 
computers to sense their environment and to interact with their contexts in 
various ways. As consequence, CPS are usually designed as distributed networks 
of interacting nodes and physical devices (machines) that carry out certain 
tasks. Often some of these devices are mobile (robots or autonomous cars, but 
also smart phones, airplanes and drones) and interaction with humans is 
essential. CPS are therefore complex in several dimensions: they embody 
characteristics of physical, networked, computational-intensive, and of 
human-interactive systems. Furthermore, they typically cannot be developed as 
monolithic systems, but need to be developed as open, composable, evolving, and 
scalable architectures.

Nowadays, CPS are found in many domains, including aerospace, 
[automotive](/topics/Automotive), [energy](/topics/Energy-Management), health 
care, manufacturing, and [robotics](/topics/Robotics). Many distributed CPS use 
a virtual communication network mapped to the Internet or telecommunication 
infrastructure. Hence, teaching software engineering for CPS becomes 
increasingly important. To understand the challenge in this, we performed a 
three-year study on teaching model-driven engineering with CPS, which is 
reported in .

At its heart, CPS engineering suffers from the problem that control theory, 
built on integration and differentiation calculus used by almost any engineering 
discipline, and the digital theory of [state 
machines](/topics/State-Based-Modeling) are not very well integrated and thus do 
not allow us to describe CPS in an integrated way. Many attempts have been made, 
but a good standard yet has to emerge.

The complexity and heterogeneity of CPS introduces a wide conceptual gap between 
problem and solution domains. Model-driven engineering of such systems can 
decrease this gap by using models as abstractions and thus facilitate a more 
efficient development of robust CPS.


## Modeling CPS
For the aviation domain, we have developed a modeling language 
[[ZPK+11]](https://www.se-rwth.de/publications/On-Demand-Data-Analysis-and-Filtering-for-Inaccurate-Flight-Trajectories.pdf) 
that allows to specify flight conditions including trajectories, status of the 
airplanes and their devices, weather conditions, and pilot capabilities. This 
modeling language allows [EuroControl](https://www.eurocontrol.int/) to 
operationalize correct flight behavior as well as specify and detect 
"interesting events".

As long term interest, we intensively do research on how to improve the 
engineering for distributed automotive systems as well. For example 
[[HRR12]](https://www.se-rwth.de/publications/MontiArc-Architectural-Modeling-of-Interactive-Distributed-and-Cyber-Physical-Systems.pdf) 
outlines our proposal for an architecture centric development approach, which we 
apply to robotics in 
[[RRW13c]](https://www.se-rwth.de/publications/MontiArcAutomaton-Modeling-Architecture-and-Behavior-of-Robotic-Systems.pdf) 
and 
[[RRW14a]](https://www.se-rwth.de/publications/Architecture-and-Behavior-Modeling-of-Cyber-Physical-Systems-with-MontiArcAutomaton.pdf).

## CPS & Automotive
Automotive is a highly innovative CPS subdomain. Therefore we discuss in 
[[GRJA12]](https://www.se-rwth.de/publications/High-Level-Requirements-Management-and-Complexity-Costs-in-Automotive-Development-Projects-A-Problem-Statement.pdf) 
what an OEMs needs to understand about costs arising from requirements 
complexities and from cross-plattform dependencies in their automotive 
development projects. Transforming a set of individual projects with similar 
requirements and technology into a product line for a central part of a car is 
discussed in 
[[HRRW12]](https://www.se-rwth.de/publications/Einfuehrung-eines-Produktlinienansatzes-in-die-automotive-Softwareentwicklung-am-Beispiel-von-Steuergeraetesoftware.pdf).

In 
[[BR12b]](https://www.se-rwth.de/publications/Autonomous-Driving-5-Years-after-the-Urban-Challenge-The-Anticipatory-Vehicle-as-a-Cyber-Physical-System.pdf) 
we discuss current and future processes and tools for development of autonomous 
driving cars based on our experiences in building such a car and using 
sophisticated simulation techniques for the context of autonomous robots (cars). 
In 
[[BBR07]](https://www.se-rwth.de/~rumpe/publications20042008/Software-and-Systems-Engineering-Process-and-Tools-for-the-Development-of-Autonomous-Driving-Intelligence.pdf) 
we describe that fully automatic simulation of the cars' cyber physical 
contexts' and fully automatic checking of the robots behavior leads to an highly 
efficient development process with high quality results.

## CPS & Robotics
Robotics is another highly innovative CPS subdomain. It is characterized by an 
inherent heterogeneity of involved domains, platforms, and increasing set of 
challenges. Engineering of robotics applications requires composition and 
interaction of complex, distributed systems as well. We developed a component & 
connector architecture description language suitable for the specific challenges 
in robotics 
[[RRW13c]](https://www.se-rwth.de/publications/MontiArcAutomaton-Modeling-Architecture-and-Behavior-of-Robotic-Systems.pdf) 
as well as in 
[[RRW14a]](https://www.se-rwth.de/publications/Architecture-and-Behavior-Modeling-of-Cyber-Physical-Systems-with-MontiArcAutomaton.pdf) 
and partially position it as a requirements modeling language family in 
[[RRW12]](https://www.se-rwth.de/publications/A-Requirements-Modeling-Language-for-the-Component-Behavior-of-Cyber-Physical-Robotics-Systems.pdf).

## CPS & Buildings
Smart and energy efficient buildings embody a lot of IT technology. There is a 
multitude of networked systems and sensors to continuously control the 
building's "behavior". We have built the Energy Navigator described in 
[[KPR12]](https://www.se-rwth.de/publications/Der-Energie-Navigator.pdf) and 
[[FPPR12]](https://www.se-rwth.de/publications/The-Energy-Navigator-A-Web-Platform-for-Performance-Design-and-Management.pdf)) 
to be able to model the specifications of such buildings in order to control the 
measured actual data against the desired specification, e.g to save energy. In 
[[KLPR12]](https://www.se-rwth.de/publications/Modeling-cyber-physical-systems-model-driven-specification-of-energy-efficient-buildings.pdf) 
we discuss how such a specification approach improves development quality in the 
energy subdomain of CPS.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. CPS tackles two core challenges:
  - Lack of integration of calculus and automaton theory, and
  - Heterogeneity of domains need integration of heterogeneous modeling 
  technologies as CPS requires cross domain solutions and techniques.
2. Furthermore, CPS tend to be complex in functionality and because of 
distribution and quality needs.
3. CPS are typically not built from scratch, but evolve as new components 
(services, devices, machines) are added.
4. We have developed architectural modeling techniques to describe CPS and 
applied those to cars, robots and building infrastructures.

## Related Topics
- [Automotive](/topics/Automotive)
- [Autonomic Driving & Intelligent Driver 
Assistance](/topics/Autonomic-Driving)
- [Domain Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Energy Management](/topics/Energy-Management)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [Robotics](/topics/Robotics)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
