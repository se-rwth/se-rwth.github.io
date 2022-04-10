---
layout: page
title: Compositionality & Modularity of Models & Languages
description: 
img: 
importance: 1
---
## Summary of Selected Papers
"Divide and conquer" as well as "abstraction" are the most fundamental 
strategies to deal with complexity. Complex (software) systems become manageable 
when divided into modules (horizontally, vertically and/or hierarchically). 
Modules encapsulate internal details and give us an abstract interface for their 
usage. Composing these modules as "black boxes" allows us to construct complex 
systems.

[Model-Based Software Engineering](/topics/Agile-MBSE) (MBSE) uses models to 
reduce complexity of the system under development. MBSE, however, has reached a 
point, where models themselves are becoming rather complex. This rises **the 
need for suitable mechanisms for modularity within and between models**. In 
[[BR07]](#BR07) we have described such a set of compositional modeling concepts, 
perfectly suited for modular development of interacting systems.

A modular approach for MBSE cannot only help us mastering complexity, but is 
also a key enabler for model based engineering of heterogeneous software systems 
as discussed in [[HKR+09]](#HKR+09).

A compositional approach has to take into account several levels of the entire 
MBSE process, starting with the respective modeling language in use, the models 
themselves and, eventually, any generated software components. We have examined 
various aspects of model composition in [[HKR+07]](#HKR+07), describing a 
mathematical view on what model composition should be. It defines the mechanisms 
of encapsulation, and referencing through externally visible interfaces.

[[KRV10]](#KRV10) and [[KRV08]](#KRV08) examine modularity and composition for 
the definition of Domain-Specific Languages (DSLs) or [Domain-Specific Modeling 
Languages](/topics/Domain-Specific-Languages) (DSMLs). Since DSLs are becoming 
increasingly popular, reuse of DSL fragments (i.e., language components) is 
vital to achieve an efficient development process. But the accompanying 
infrastructure needs to be modular as well (as described in [[KRV07]](#KRV07)). 
Infrastructure, such as validation or editor functionality, should be reusable 
if parts of the underlying DSL are reused, e.g., as part of another language. 
[[Voe11]](#Voe11) provides the underlying technology for compositional language 
development, which we, e.g., applied to robotics control 
[[RRRW15b]](https://www.se-rwth.de/publications/Language-and-Code-Generator-Composition-for-Model-Driven-Engineering-of-Robotics-Component-and-Connector-Systems.pdf). 
Based on these experiences in language design, we have defined a set of 
**guidelines for high-quality DSLs** [[KKP+09]](#KKP+09).

As a new form of decomposition of model information we have developed the 
concept of tagging languages in 
[[GLRR15]](https://www.se-rwth.de/publications/Engineering-Tagging-Languages-for-DSLs.pdf). 
It allows to describe additional, e.g. technical information for model elements 
in extra documents and thus facilitates reuse of the original model in different 
contexts with individual tag sets, but also of tags on different models. It 
furthermore allows to type the tags.

We have summarized our approach to composition and the challenges that need to 
be solved in 
[[CBCR15]](https://www.se-rwth.de/publications/Conceptual-Model-of-the-Globalization-for-Domain-Specific-Languages.pdf), 
in form of a conceptual model of the compositional, so called "globalized" use 
of domain specific languages, which we published together with related topics in 
[[CCF+15a]](https://www.se-rwth.de/publications/Globalizing-Domain-Specific-Languages2.pdf).

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Modularity and composition are applicable in and desired for the whole life 
cycle of .MBSE - just as for conventional software engineering.
2. Modeling language(s) used in a large project must assist modularity and 
composition to allow reuse of individual models.
3. When defining complex DSLs it is also interesting to define the language in a 
modular way, reusing syntax, semantics, analysis techniques, code synthesis, 
etc.
4. Modularity in DSLs promises to raise the applicability and popularity of 
solutions based on DSLs.
5. If the UML Standard would have followed a truly modular way, we would have an 
even better UML.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [UML/P](/topics/UML-P)
- [Variability & Software Product Lines (SPL)](/topics/Variability)
