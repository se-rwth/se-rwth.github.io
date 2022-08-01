---
layout: page
title: Internet of Things (IoT) 
permalink: /research/IoT/
description:
img:
importance: 1
keys: [KRS+22, KMR21, KMR+20, 
        MKM+19, HHK+14, DRW+20,
        PR13,HHR+15,RRRW15b,
        WCB17,BKL+18]
---


The Internet of Things requires the development of increasingly complex distributed systems. The [MontiThings ecosystem](/research/MontiThings) [[KRS+22]](#KRS+22) provides an end-to-end solution to modeling, deploying, and analyzing [[KMR21]](#KMR21) failure-tolerant [[KRS+22]](#KRS+22) Internet of Things systems and connecting them to synthesized digital twins [[KMR+20]](#KMR+20). We have investigated how model-driven methods can support the development of privacy-aware [[ELR+17]](#ELR+17) [[HHK+14]](#HHK+14) cloud systems [[PR13]](#PR13), distributed systems security [[HHR+15]](#HHR+15), privacy-aware process mining [[MKM+19]](#MKM+19), and distributed robotics applications [[RRRW15b]](#RRRW15b).


In the course of Industry 4.0, we have also turned our attention to mechanical or electrical applications [[DRW+20]](#DRW+20). We identified the digital representation, integration, and (re-)configuration of automation systems as primary Industry 4.0 concerns [[WCB17]](#WCB17). Using a multi-level modeling framework, we support machine as a service approaches [[BKL+18]](#BKL+18).

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
- [MontiThings - Modeling the IoT](/research/MontiThings)
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
