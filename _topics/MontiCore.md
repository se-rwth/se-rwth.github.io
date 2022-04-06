---
layout: page
title: MontiCore - Language Workbench
description: 
img: 
importance: 1
---

## Overview of Selected Papers
[MontiCore](http://monticore.de/) is a language workbench for the efficient development of domain-specific languages. [MontiCore](http://monticore.de/) is used as a basic vehicle for our ongoing research in the area of model-based software engineering. The [MontiCore Language Workbench and Library Handbook [HKR21]](http://www.monticore.de/handbook.pdf) features **agile and compositional** development of **domain-specific (modeling) languages (DSLs)**. These concepts have the potential to greatly impact the software engineering process by enabling easy development of high-quality, custom-tailored languages to express software models. Such models can be analyzed, interpreted, and, in the end, potentially transformed into a running software product.

The MontiCore framework provides necessary application programming interfaces along with a special language definition format based on grammars.

MontiCore has been realized particularly with respect to **modularity** both concerning the implementation and the development of DSLs. As such, DSLs can be realized in a **compositional** way, **reusing**, for example, common language definitions. This allows the creation of **language libraries** which make it even easier to create the desired DSL. Modularity and compositionality of MontiCore's language component is based on (1) compositional concrete and abstract syntax, (2) compositional definition of context conditions, (3) clear definition of model interfaces using symbols of various symbol kinds (far beyond any restrictions of programming languages), and (4) compositional analysis and generation infrastructure enabling black-box reuse of algorithms on sub-languages.

Therefore, MontiCore comes with a large library of **language components** containing various forms of expressions, statements, and literals. A second level of language components defines constituents for modeling languages, such as **StateCharts, Class Diagrams, Object Diagrams, Sequence Diagrams, BDDs and IBDs** from **UML** and **SysML** as well as **Feature Diagrams**, etc. The library of **language components** also provides possibilities to specify in first-order logic (i.e., an extension of the **OCL**), with specific emphasis on sets, physical units (**SI units**), both as literals and as types including automatic conversions. It provides **regular expressions** as language elements defining subtypes for strings providing typesafe processing of strings beyond standard programming language capabilities. Each of the provided language components comes with locally defined symbol kinds that can be exported and mapped to symbol kinds of other languages.

MontiCore has successfully been deployed in a variety of industrial and research projects. Among many other general and domain-specific languages, the [UML/P family of modeling languages](/topics/UML-P) has been realized with MontiCore, and various forms of structured text languages for requirements, norms, and even legal texts were defined.

Based on the facilities the MontiCore Language Workbench provides, **automatic derivation** of a **transformation language** for a given modeling language, **variability** of the languages, adding **tagging** to a given language, or even smart **analysis** techniques, such as **semantic differences** have been constructed and successfully realized. Below we provide a selection of relevant publications about MontiCore and related topics that are based on the MontiCore framework. Please also note the MontiCore Website for technical details as well as access to MontiCore itself.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie"></p>

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Compositionality/Modularity of Models & Languages](/topics/Compositionality)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Generative Software Engineering](/topics/Generative-SE)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [UML/P](/topics/UML-P)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/topics/Variability)