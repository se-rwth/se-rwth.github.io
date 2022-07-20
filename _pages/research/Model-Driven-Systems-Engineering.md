---
layout: page
title: Model-Driven Systems Engineering
permalink: /research/Model-Driven-Systems-Engineering/
description:
img:
importance: 1
keys: [FND+98,GHK+08a,KMS+18,DGH+19,WCB17,BKL+18,DRW+20]
---

## Summary of Most Relevant Topic Papers

Systems engineering is the interdisciplinary engineering and management that
focuses on the design and management of complex CPS over
their life cycles. Systems engineering can and should be applied to a great
variety of fields from automotive, to avionics and robotics.

We have a long tradition on contributing to systems engineering in
automotive [[FND+98]](#FND+98)[[GHK+08a]](#GHK+08a), 
which recently culminated in developing a
new comprehensive model-driven development process for automotive software
function testing with the BMW Group [[KMS+18]](#KMS+18) [[DGH+19]](#DGH+19). 
In this, we
leverage SysML to enable the vertical flow down from requirements to
implementations that was well-received by the software developers.

Moreover, we are intensifying our research efforts towards a
model-driven systems engineering that leverages methods and concepts from
software engineering to make the systematic engineering of CPS more efficient. 
To this end, we conducted a systematic mapping study
on modeling for Industry 4.0 that uncovered a gap between the communities,
concepts, and modeling techniques of automation engineering and software
engineering [[WCB17]](#WCB17). To facilitate modeling products, resources, and
processes in the context of Industry 4.0 we also conceived a multi-level
framework for machining based on these concepts [[BKL+18]](#BKL+18).

In a holistic model-driven engineering approach for CPS, we
bridge the gap between functions and the physical product
architecture to enable agile development driven by automation by
modeling mechanical functional architectures in SysML [[DRW+20]](#DRW+20).



{% include trennlinie.html %}

## Key Statements

1. 

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
