---
layout: page
title: Compositionality & Modularity of Models & Languages
permalink: /research/Compositionality/
description: 
img: 
importance: 1
keys: [BR07,HKR+09,HKR+07,KRV10,
       KRV08,KRV07a,Voe11,RRRW15b,KKP+09,
       GLRR15,CBCR15,CCF+15a]
---

## Summary of Most Relevant Topic Papers

Complex (software) systems become manageable when divided into modules
(horizontally, vertically and/or hierarchically).
Modules encapsulate internal details and give us an abstract interface for
their usage.
Composing these modules as "black boxes" allows us to construct complex
systems.

[Model-Based Software Engineering](/research/Agile-MBSE) (MBSE)
uses models to **reduce complexity of
the system under development**.
Nevertheless, it has reached a point, where the models themselves are becoming
rather complex.
This clearly rises the need for suitable mechanisms for **modularity
within and between models**.

A modular approach for MBSE cannot only help us to master complexity, but is
also a key enabler for model-based engineering of heterogeneous software
systems as discussed in [[HKR+09]](#HKR+09).
In [[BR07]](#BR07) we have described such a set of compositional modeling
concepts, perfectly suited for modular development of interacting systems.

A **compositional approach** has to take into account several levels of
the entire MBSE process, starting with the respective modeling language in
use, the models themselves and, eventually, any generated software
components.

We have examined various aspects of model composition in [[HKR+07]](#HKR+07),
describing a mathematical view on what model composition should be.
It defines the mechanisms of encapsulation, and referencing through
externally visible interfaces.

In [[KRV10]](#KRV10) and [[KRV08]](#KRV08), we examine modularity and composition for
the definition of [Domain-Specific  
Languages](/research/Domain-Specific-Languages) (DSLs).
As DSLs are becoming more and more popular, the efficient reuse of DSL
fragments (i.e., language components) is vital to achieve an efficient
development process.

But aside from the language definition, the accompanying infrastructure
needs to be modular as well (as described in [[KRV07b]](#KRV07b)).
Infrastructure such as validation or editor functionality should be reusable
if parts of the underlying DSL are reused, e.g., as part of another
language. 

[[Voe11]](#Voe11) provides the underlying technology for compositional
language development, which we, e.g., applied to Robotics control
[[RRRW15b]](#RRRW15b) and nowadays investigate under the umbrella term of 
[Software Language Engineering (SLE)](/research/Language-Engineering).
Based on the experiences in language design, we also have developed a set of
guidelines to estimate the quality of a DSL in [[KKP+09]](#KKP+09).

We have summarized our approach to composition and the challenges that need
to be solved in [[CBCR15]](#CBCR15), which describes a conceptual model of the
compositional, so called "globalized" use of domain specific languages,
which we published together with related topics in [[CCF+15a]](#CCF+15a).

As a new form of decomposition of model information we have developed
the concept of tagging languages in [[GLRR15]](#GLRR15). It allows describing 
additional, e.g., technical information for model elements in
extra documents and thus facilitates reuse of the original model in
different contexts with individual tag sets, but also of tags on
different models. It furthermore allows to type the tags.


{% include trennlinie.html %}

## Key Statements
1. Modularity and composition are applicable in and desired for the whole life 
cycle of MBSE - just as for conventional software engineering.
2. Modeling language(s) used in a large project must assist modularity and 
composition to allow reuse of individual models.
3. When defining complex DSLs it is also interesting to define the language in a 
modular way, reusing syntax, semantics, analysis techniques, code synthesis, 
etc.
4. Modularity in DSLs promises to raise the applicability and popularity of 
solutions based on DSLs.
5. If the UML Standard had followed a truly modular way, we would have an 
even better UML.

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
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/research/Evolution)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Semantics of Modeling Languages](/research/Semantics)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [UML/P](/research/UML-P)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
