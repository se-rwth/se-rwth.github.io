---
layout: page
title: UML/P
permalink: /topics/UML-P/
description: 
img: 
importance: 1
keys: []
---

## Summary of Selected Papers
The UML/P is a realization of a subset of the modeling languages of the 
[UML](/topics/Unified-Modeling-Language) with particular focus on applicability 
for programming, i.e., modeling of software systems (the "P" in UML/P stands for 
"suitable for programming"). It comprises the following types of UML diagrams:

- Class Diagrams
- Object Diagrams
- Statecharts
- Activity Diagrams
- Sequence Diagrams
- OCL

These languages can be used individually as well as in a coherent **language 
family** that allows to connect models of different sublanguages into a well 
structured, conceivable specification of complex systems.

This constitutes a powerful way of describing software systems on various levels 
of abstraction and using different views. In addition, it is possible to use 
Java expressions to enrich the models with implementation details. As such, the 
UML/P forms the foundation for applied [Generative Software 
Engineering](/topics/Generative-SE).

The UML/P is available from the [**MontiCore** Website](http://monticore.de/) as 
an **Eclipse plugin** featuring syntax-aware editors for the various types of 
diagrams. We have successfully deployed the UML/P for generatively creating 
various kinds of software systems. This spans from database schemes over web 
applications up to entire data management desktop applications. The UML/P is in 
continuous extension by interesting new features.

Below we provide a selection of relevant publications about the UML/P as well as 
related interesting topics. Please also note the [MontiCore 
Website](http://monticore.de/) for details on the technology as well as access 
to the UML/P itself.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Generative Software Engineering](/topics/Generative-SE)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [State-Based Modeling (Automata)](/topics/State-Based-Modeling)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt=""
title="Trennlinie">

## Selected Related Publications

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>