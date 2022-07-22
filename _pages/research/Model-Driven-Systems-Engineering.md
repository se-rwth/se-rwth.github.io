---
layout: page
title: Model-Driven Systems Engineering
permalink: /research/Model-Driven-Systems-Engineering/
description:
img:
importance: 1
keys: [FND+98,GHK+08a,KMS+18,DGH+19,BKL+18,DRW+20]
---

## Summary of Most Relevant Topic Papers

Systems engineering is the interdisciplinary engineering and management that
focuses on the design and management of complex CPS over
their life cycles. Systems engineering can and should be applied to a great
variety of fields from automotive, to avionics, robotics, medical devices,
production systems, and so on.

We have a long tradition on contributing to
**model-based systems engineering** in
automotive [[FND+98]](#FND+98) and [[GHK+08a]](#GHK+08a), 
which we were able to condense into a 
new comprehensive **model-driven development process** for automotive software
including
function testing with the BMW Group [[KMS+18]](#KMS+18), [[DGH+19]](#DGH+19). 
In this, we
leverage SysML to enable the vertical flow down from requirements to
implementations that was well-received by the software developers.

Moreover, we are conducting intensive research to intensivy 
model-driven systems engineering that leverages methods and concepts from
software engineering to make the systematic engineering of CPS more efficient. 
To facilitate modeling products, resources, and
processes in the context of Industry 4.0 we also conceived a multi-level
framework for production engineering based on our
modeling concepts [[BKL+18]](#BKL+18).

In a holistic model-driven engineering approach for CPS, we
bridge the gap between functions and the physical product
architecture to enable agile development driven by automation by
**modeling mechanical functional architectures** 
in **SysML** [[DRW+20]](#DRW+20).

A highly relevant part of physical systems will in the future be their 
**Digital Twin**.
We use Digital Twins in a larger sense, not only for simulation,
but also for collecting data and providing aggregation and information services
about the physical twin.
Our **RWTH' Excellence cluster Internet of Production** considers
fast decision making at production time with low latencies using
contextual data traces of production systems, also known as
**Digital Shadows** (DS) [[SHH+20]](#SHH+20). We have investigated
how to derive Digital Twins (DTs)
and applied this for example for injection molding [[BDH+20]](#BDH+20).
We generalized this a approach in a technqiue allowing us to 
generate interfaces between a cyber-physical system and its Digital Twin
[[KMR+20]](#KMR+20)
 and
have proposed model-driven architectures for efficient
engineering of a **Digital Twin Cockpit** [[DMR+20]](#DMR+20), which cumulates the
connection to the physical twin, the collection and storage of the operation data,
and finally the aggregation and visualization of information
in order to understand, control and optimize the physical machine.


{% include trennlinie.html %}

## Key Statements

1. Model-Driven Systems Engineering is
	interdisciplinary, including engineering and management
	of complex CPS largely based and driven by models. 
1. SysML is capable of modeling mechanical functional architectures
	together wit their controlling software.
1. A Digital Twin should not only be for simulation,
	but also for collecting data and providing aggregation
	and information services about the physical twin.
1. A **Digital Twin Cockpit** contains the user interface of such 
	digital twin with its services, visualizations and potentially
	control and optimization options.
	
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
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Robotics Architectures and Tasks](/research/Robotics)
- [Automotive](/research/Automotive)
- [Digital Twins and Digital Shadows in Engineering, Operation and Production](/research/Digital-Twins)
- [Internet of Things (IoT)](/research/IoT)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
