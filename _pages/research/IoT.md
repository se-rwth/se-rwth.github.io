---
layout: page
title: Internet of Things (IoT) 
permalink: /research/IoT/
description:
img:
importance: 1
keys: [KRS+22, KMR21, AKK+21, KMR+20, 
        MKM+19, HHK+14, 
        PR13,HHR+15,RRRW15b,
        WCB17,BKL+18]
---

[//]: # Bem: dies ist nur der Text aus HMR+19; TODO: #28

In line with our mission, our research contributions to the Internet of
Things and Industry 4.0 focus on modeling techniques to support and
facilitate development of increasingly complex solutions. Early
contributions include architecture modeling techniques and infrastructures
for the efficient development of cloud-based systems [[NPR13]](#NPR13), secure
distributed systems [[HHR+15]](#HHR+15), and distributed robotics
systems [[RRRW15b]](#RRRW15b).

With the rise of Industry 4.0, we included modeling outside of informatics,
e.g., in mechanical or electrical engineering, into our focus of
research. To this end, we conducted a systematic mapping study on modeling
in Industry 4.0 [[WCB17]](#WCB17) which uncovered that knowledge representation
and discrete modeling of systems and processes demand for 
[Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
usable by the automation and manufacturing experts.

In that study, we also identified products, resources, and processes as
primary Industry 4.0 concerns that usually are related inflexibly. Hence, we
conceived a multi-level framework for machining based on these
concepts [[BKL+18]](#BKL+18).

{% include trennlinie.html %}

## Key Statements
1. TODO XXX.

{% include trennlinie.html %}

## Selected Topic-Specific Publications

<div class="publications">
  {% assign sortedKeys = page.keys | sort %}
  {% for k in sortedKeys %}
    {% bibliography -f all-software-engineering-rwth-references -f additional-bib-entries -q @*[key={{k}}]* %}
  {% endfor %}
</div>

{% include trennlinie.html %}

## Related Topics
- [Domain Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Energy Management](/research/Energy-Management)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [Robotics Architectures and Tasks](/research/Robotics)
- [Cyber Physical Systems (CPS)](/research/Cyber-Physical-Systems)
- [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
