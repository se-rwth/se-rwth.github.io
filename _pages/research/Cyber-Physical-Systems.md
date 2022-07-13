---
layout: page
title: Cyber-Physical Systems (CPS)
permalink: /research/Cyber-Physical-Systems/
description: 
img: 
importance: 1
keys: [Lee08a,KRS12,RW18,ZPK+11,
       HRR12,KRRW17,GRJA12,HRRW12,
       BR12b,BBR07,KRSvW18a,AHRW17b,
       RSW+15,KRR+16,RRS+16,
       RRW13c,Wor16,RRW14a,RRW12,
       RRSW17,KPR12,FPPR12,KLPR12]
---

## Summary of Most Relevant Topic Papers

CPS are software controlled, collaborating
physical machines [[Lee08a]](#Lee08a) [[KRS12]](#KRS12). This new term arises mainly due
to the increased ability of computers to sense their environment and to
interact with their contexts in various ways. As consequence, CPS are
usually designed as distributed networks of interacting nodes and
physical devices (machines) that carry out certain tasks. Often some of
these devices are mobile (robots or autonomous cars, but also
smartphones, airplanes and drones) and interaction with humans is
essential. CPS are therefore complex in several dimensions: they embody
characteristics of physical, networked, computational-intensive, and of
human-interactive systems. Furthermore, they typically cannot be
developed as monolithic systems, but need to be developed as open,
composable, evolving, and scalable architectures (see also
[Modeling Software Architecture](/research/Software-Architecture)).

Nowadays, CPS are found in many domains, including aerospace,
[automotive](/research/Automotive), [energy](/research/Energy-Management), 
healthcare, manufacturing, and [robotics](/research/Robotics). Many
distributed CPS use a virtual communication network mapped to the
internet or telecommunication infrastructure.

At its heart, CPS engineering suffers from the problem that control theory, 
built on integration and differentiation calculus used by almost any engineering 
discipline, and the digital theory of [state 
machines](/research/State-Based-Modeling) are not very well integrated and thus do 
not allow us to describe CPS in an integrated way. Many attempts have been made, 
but a good standard has yet to emerge.

The **complexity and heterogeneity** of CPS introduces a wide conceptual gap
between problem and solution domains. Model-driven engineering of such
systems can decrease this gap by using models as abstractions and thus
facilitate a more efficient development of robust CPS [[RW18]](#RW18).


### CPS Application Domains

For the aviation domain, we have developed a modeling
language [[ZPK+11]](#ZPK+11) that allows to specify flight conditions
including trajectories, status of the airplanes and their devices,
weather conditions, and pilot capabilities. This modeling language
allows EuroControl to operationalize correct flight behavior as well as
specify and detect **interesting events**.

As long term interest, we
intensively do research on how to improve the engineering for
distributed automotive systems as well. For example [[HRR12]](#HRR12) [[KRRW17]](#KRRW17),
outline our proposal for an architecture centric development approach.


#### Automotive

**Automotive** is a highly innovative CPS subdomain. We discuss
in [[GRJA12]](#GRJA12) what an OEMs need is to understand about costs arising
from requirements complexities and from cross-platform dependencies in
their automotive development projects. Transforming a set of individual
projects with similar requirements and technology into a product line
for a central part of an automotive system is discussed
in [[HRRW12]](#HRRW12).
Another important aspect are
current and future processes and tools for
development of **autonomous driving cars**.
We discuss this in [[BR12b]](#BR12b) based on our experiences in
building such a car and using sophisticated simulation techniques for
the context of autonomous robots (cars).
Moreover,
fully automatic simulation of the cyber-physical contexts of cars
and fully automatic checking of the robots' behavior leads to an highly
efficient development process with high quality results [[BBR07]](#BBR07).
Optimized code-generators [[KRSvW18a]](#KRSvW18a)
and domain specific code
generation [[AHRW17b]](#AHRW17b) are key for CPS. Moreover, we have extended our work
from individual CPS to **product lines of CPS** [[RSW+15]](#RSW+15) [[KRR+16]](#KRR+16) [[RRS+16]](#RRS+16).


#### Robotics

**Robotics** is another highly innovative CPS subdomain. It is characterized
by an inherent heterogeneity of involved domains, platforms, and
increasing set of challenges. Engineering of robotics applications
requires composition and interaction of complex, distributed systems as
well. We developed a component and connector architecture description
language suitable for the specific challenges in
robotics [[RRW13c]](#RRW13c) [[Wor16]](#Wor16) as well as in [[RRW14a]](#RRW14a). This language
serves from requirements modeling [[RRW12]](#RRW12) to the complete
development of CPS software [[RRSW17]](#RRSW17).


#### Buildings 

Smart and energy efficient buildings embody large amounts of IT technology.
There is a multitude of networked systems and sensors to continuously
control the building's **behavior**. We have built the Energy
Navigator [[KPR12]](#KPR12) [[FPPR12]](#FPPR12) to be able to model the specifications of
such buildings in order to control the measured actual data against the
desired specification, e.g., to save energy. In [[KLPR12]](#KLPR12) we discuss
how such a specification approach improves development quality in the
energy subdomain of CPS.


{% include trennlinie.html %}

## Key Statements
1. CPS faces two core challenges:
  - Lack of integration of calculus and automaton theory, and
  - Heterogeneous domains require the integration of heterogeneous modeling 
  technologies as CPS requires cross-domain solutions and techniques.
2. Furthermore, CPS tend to be complex in functionality and because of 
distribution and quality needs.
3. CPS are typically not built from scratch, but evolve as new components 
(services, devices, machines) are added.
4. We have developed architectural modeling techniques similar to the SysML 
to describe CPS and among others we have 
applied those to cars, robots, avionics and building infrastructures.

{% include trennlinie.html %}

## Selected Topic-Specific Publications

<div class="publications">
  {% assign sortedKeys = page.keys | sort %}
  {% for k in sortedKeys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

{% include trennlinie.html %}

## Related Topics
- [Automotive](/research/Automotive)
- [Autonomic Driving & Intelligent Driver 
Assistance](/research/Autonomic-Driving)
- [Domain Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Energy Management](/research/Energy-Management)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [Robotics Architectures and Tasks](/research/Robotics)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
