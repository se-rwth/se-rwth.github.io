---
layout: page
title: Software Language Engineering (SLE)
description: 
img: 
importance: 1
---
## Summary of Selected Papers
Identifying or engineering appropriate languages for the various activities in 
software and systems development is one of the most important issues in Software 
Engineering. Even programming languages are still subject of improvement. For 
many other activities, such as architectural design, behavioral modeling, and 
data structure specifications, we use the general purpose [Unified Modeling 
Language (UML) ](/topics/Unified-Modeling-Language) 
[[Rum16]](http://www.se-rwth.de/mbse/), [[Rum17]](http://www.se-rwth.de/mbse/). 
But UML and its tooling still are much less elaborate and hence subject to 
extensive syntactic, semantic, and methodic improvement.

In various domains, however, it is more appropriate to employ [Domain Specific 
Languages (DSLs)](http://www.se-rwth.de/topics/Domain-Specific-Languages.php) to 
enable non-software developers specifying properties, configuring their systems, 
etc. in terms of established domain concepts and corresponding language 
elements. With increasing digitalization, we expect a growth in DSLs and 
increasing efforts in their efficient engineering, integration, and 
composition.

Designing DSLs is challenging, because, on one hand, they need to be precise 
enough for being processed by a computer and, on the other hand, comprehensible 
by humans. Monolithic design of a language can already benefit from methods for 
language engineering in the small including design guidelines and tooling. The 
[MontiCore language workbench](/topics/MontiCore) is such a tool to assist 
development of languages. It, for example, provides techniques for an integrated 
definition of concrete and abstract syntax of a language 
[[KRV07b]](https://www.se-rwth.de/~rumpe/publications20042008/Integrated-Definition-of-Abstract-and-Concrete-Syntax-for-Textual-Languages.pdf), 
[[Kra10]](https://www.se-rwth.de/phdtheses/Diss-Krahn-MontiCore-Agile-Entwicklung-von-domaenenspezifischen-Sprachen-im-Software-Engineering.pdf), 
but is much more a framework for compositional language design 
[[KRV10]](https://www.se-rwth.de/publications/MontiCore-a-Framework-for-Compositional-Development-of-Domain-Specific-Languages.pdf).

## Language Engineering in The Large
To efficiently engineer languages in the large, we need all the help that we can 
get. As software languages are software too, it is not surprising that the 
following techniques are largely discussed in [[CFJ+16]](#CFJ+16) and they 
help:

1. Elaborate tooling to assist language development.
2. Reuse of tools, e.g. for parsing and for parameterizable pretty printing.
3. **Reuse** of **language components**.
4. **Decomposition** of the language to be designed in smaller components.
5. **Refinement** and **adaptation** of existing languages.
6. **Automatic derivation** of new languages from existing ones.

To improve understanding of language engineering, we have defined the terms 
**language** and **language components** in 
[[CBCR15]](https://www.se-rwth.de/publications/Conceptual-Model-of-the-Globalization-for-Domain-Specific-Languages.pdf) 
and how to capitalize on this in 
[[CCF+15a]](https://www.se-rwth.de/publications/Globalizing-Domain-Specific-Languages2.pdf). 
In 
[[SRV+10]](https://www.se-rwth.de/publications/Metamodelling-State-of-the-Art-and-Research-Challenges.pdf), 
we discuss the possibilities and the challenges using metamodels for language 
definition, identifying, for instance, the need for metamodel merging and 
inferencing, as well as assistance for their evolution. Of course, we also 
consider variability for modeling languages and have investigated a method to 
model syntactic language [variability](/topics/Variability) through **language 
product lines** 
[[BEK+18a]](https://www.se-rwth.de/publications/Controlled-and-Extensible-Variability-of-Concrete-and-Abstract-Syntax-with-Independent-Language-Features.pdf) 
[[BEK+18b]](https://www.se-rwth.de/publications/Modeling-Language-Variability-with-Reusable-Language-Components.pdf) 
[[BEK+19]](https://www.se-rwth.de/publications/Systematic-Composition-of-Independent-Language-Features.pdf).

## Language and Tool Composition
(for details see also [Compositionality/Modularity of 
Models](/topics/Compositionality))

"Divide et Impera" is the core concept of managing large and complex tasks. 
Language design therefore needs to be decomposed along several dimensions: 
First, we want to decompose the language in **language components**. Some of 
these components, for example the basic language for full qualified names, 
constants, (Boolean) expressions, or imperative statements, should be designed 
in a reusable form.

In a second dimension, we want to decompose the tooling along the activities 
(frontend: model processing, context conditions, internal transformations, 
backend: printing) and decompose each of these activities along the individual 
language components. [MontiCore](https://www.se-rwth.de/topics/MontiCore.php) 3, 
e.g., is able to decompose the frontend language processing along the 
decomposition of the language itself 
[[KRV10]](https://www.se-rwth.de/publications/MontiCore-a-Framework-for-Compositional-Development-of-Domain-Specific-Languages.pdf), 
[[Voe11]](https://www.se-rwth.de/phdtheses/Diss-Voelkel-Kompositionale-Entwicklung-domaenenspezifischer-Sprachen.pdf), 
[[KRV08]](), [HMSNRW16]. MontiCore also assists modular decomposition of the 
backend code generation based on different targets and different sublanguages 
[RRRW15b].
In a second dimension, we want to decompose the tooling along the activities 
(frontend: model processing, context conditions, internal transformations, 
backend: printing) and decompose each of these activities along the individual 
language components. [MontiCore](https://www.se-rwth.de/topics/MontiCore.php) 3, 
e.g., is able to decompose the frontend language processing along the 
decomposition of the language itself 
[[KRV10]](https://www.se-rwth.de/publications/MontiCore-a-Framework-for-Compositional-Development-of-Domain-Specific-Languages.pdf), 
[[Voe11]](https://www.se-rwth.de/phdtheses/Diss-Voelkel-Kompositionale-Entwicklung-domaenenspezifischer-Sprachen.pdf), 
[[KRV08]](https://www.se-rwth.de/~rumpe/publications20042008/MontiCore-Modular-Development-of-Textual-Domain-Specific-Languages.pdf), 
[[HMSNRW16]](https://www.se-rwth.de/publications/Compositional-Language-Engineering-using-Generated-Extensible-Static-Type-Safe-Visitors.pdf). 
MontiCore also assists modular decomposition of the backend code generation 
based on different targets and different sublanguages 
[RRRW15b](https://www.se-rwth.de/publications/Language-and-Code-Generator-Composition-for-Model-Driven-Engineering-of-Robotics-Component-and-Connector-Systems.pdf).

## Language Derivation
**Language derivation** is, to our believe, a promising technique to develop new 
languages for a specific purpose that are relying on existing basic languages. 
Formally, a language derivation is a mapping D, that maps a base language B into 
another language D(B). This mapping produces new languages, not models.

To automatically derive such new languages D(B) or, at least, assist such 
derivation with tools, the base language B itself has to be modeled explicitly, 
for instance as a metamodel or as a grammar together with its well-formedness 
rules in a reasonably explicit form. Thus, language derivation can be partially 
understood as model transformation on a metalanguage. We so far successfully 
conceived three language derivation techniques.

## Transformation languages in concrete syntax
Instead of using a fully generic transformation language, such as 
[ATL](http://www.eclipse.org/atl/), that is applicable to a base language B, we 
automatically derive a transformation language T(B) that merges elements of the 
concrete syntax of B with generic - and thus reusable - elements for defining 
transformations on B models. The result is a comprehensible and easy applicable 
transformation language that modelers find familiar, because it systematically 
reuses the syntax of the base language B. Automatic derivation of such 
transformation languages using concrete syntax of the base language is described 
in 
[[HRW15]](https://www.se-rwth.de/publications/Systematically-Deriving-Domain-Specific-Transformation-Languages.pdf) 
and 
[[Wei12]](https://www.se-rwth.de/publications/Generierung-domaenenspezifischer-Transformationssprachen.pdf).

Because the language derivation operator T is applicable to any language, we 
have successfully applied it to class diagrams, object diagrams, 
[MontiArc](/topics/Software-Architecture), Automata, and more. The operator T 
not only derives the new languages T(B), but the tool infrastructure behind T 
also generates the transformation engine necessary to execute transformations 
defined in T(B) (which finally transform models of the base language B).

## Tagging languages
A **tagging model** is used in the context of a base model M and adds additional 
information in form of tags to the elements defined in M. This, for example, can 
be used to add technology-specific information or advice on how code generation, 
model merging and other algorithmic transformations have to handle the tagged 
elements. Tags can, for example, instruct a persistence generator, whose data 
model classes are mapped into single transportable DAOs or add security 
restrictions to data objects. For activity diagrams, tags can describe, where to 
find the appropriate activity implementation, etc.

Tagging models share the idea of UML's stereotypes, but are not part of the base 
model. Instead the separate tagging model references the base model. This has 
the advantages (1) that the base model can be reused without technology specific 
pollution, (2) several different tag models are possible for the same base model 
in different technological spaces (e.g., iPhone, Android or Windows clients), 
and (3) a tag model can also be reused for different base models.

A **tagging language** is the language of the tagging models and thus is highly 
dependent on the base language that it tags (i.e., it must be aware of the 
modeling elements of the base language). 
[[GLRR15]](https://www.se-rwth.de/publications/Engineering-Tagging-Languages-for-DSLs.pdf) 
describes how to systematically derive tagging languages from a base language 
and how code for processing tagging models can be generated automatically.

This also rests on the concept of a **tag definition language**, which allows 
defining the possible form and values that tags may have, as well as which kind 
of model elements they can be applied to and therefore acts as type definition 
for tags.

## Delta languages
Another way of deriving new languages from existing languages is described in 
[[HHK+15]](https://www.se-rwth.de/publications/Systematic-synthesis-of-delta-modeling-languages.pdf) 
and 
[[HHK+13]](https://www.se-rwth.de/publications/Engineering-Delta-Modeling-Languages.pdf), 
where a base language B is used to derive a delta language Delta(B). The delta 
language Delta(B) enables to explicitly describe differences between a base 
model of B and the model variant (also of B). This helps to define system 
variability in a bottom-up fashion. A delta model describes which model elements 
are added, modified, or deleted on the base model. Thus delta approach is 
popular for the management of [Variability and Software Product Lines 
(SPL)](/topics/Variability).

Delta language techniques are specifically suited for architectural languages, 
such as [MontiArc](/topics/Software-Architecture) to add and modify components 
as well as channels, but also have been applied to Simulink in an industrial 
context.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Software Language Engineering requires elaborate tooling to assist (partially 
automated) language development.
2. "Language Engineering in The Large" is based on techniques well known from 
Software Engineering:
  - Decomposition of a language enables to design language components 
  independently.
  - Reuse of language components is essential for quality improvement, workload 
  reduction, and humans to adopt a familiarly looking language.
  - Techniques for systematic refinement and adaption of existing languages help 
  white-box reuse.
  - Automatic derivation of new languages is based on existing base languages.
3. Transformation, tagging and delta languages can be automatically derived from 
base languages.

## Related Topics
- [Compositionality/Modularity of Models](/topics/Compositionality)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [State-Based Modeling (Automata)](/topics/State-Based-Modeling)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/topics/Variability)
