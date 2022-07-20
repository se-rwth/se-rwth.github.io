---
layout: page
title: UML/P
permalink: /research/UML-P/
description:
img:
importance: 1
keys: [Rum16,Rum17,Rum12,
Rum11,Sch12,MRR11f,
MRR11e,MRR11c,GJS05,
MRR11d,MRR11a,
BKRW17a]
---

## Summary of Most Relevant Topic Papers

The **UML/P** [[Rum16]](#Rum16) [[Rum17]](#Rum17) [[Rum12]](#Rum12)
[[Rum11]](#Rum11) is a realization [[Sch12]](#Sch12)
of a subset of the modeling languages of the [UML](/research/Unified-Modeling-Language) with
particular focus on applicability for programming, i.e., modeling of
software systems (the "P" in UML/P stands for "suitable for
programming"). It comprises the following types of UML diagrams:


* **Class Diagrams** as basic structural modeling technique
  with solid yet configurable semantics [[MRR11f]](#MRR11f) [[MRR11e]](#MRR11e),
* **Object Diagrams** to describe specific situations that
  are used for setups of tests or test verdicts as well as
  unwanted situations, etc. [[MRR11c]](#MRR11c).
* **Statecharts** are the main technique to describe
  behavior. UML/P Statecharts can be used as abstract
  specifications, explicitly allowing underspecification in
  various forms as well as code-like detailed algorithms, where a
  direct mapping to code becomes feasible. UML/P Statecharts
  assist the large bandwidth between high-level abstract
  specifications and implementations and come with a powerful
  refinement calculus allowing for the refinement of specifications
  throughout the development process as well as from superclasses
  to specific implementations in subclasses.
* **Sequence Diagrams** describe interactions between
  objects in a specific situation and thus are generally
  exemplary. They can be used nicely for describing the
  set up and the execution of tests.
* **OCL** is a textual language in the spirit of predicate
  logic over object models, allowing to describe constraints of
  various forms. OCL/P is a specific variant of OCL that allows for
  writing constraints in a syntax inspired by Java [[GJS05]](#GJS05). It
  is extended by various techniques for set and list comprehension
  known from functional languages like Haskell.

These languages can be used individually as well as in a coherent
language family that allows to connect models of different sublanguages
into a well structured, accessible specification of complex systems.

This constitutes a powerful way of describing software systems on
various levels of abstraction from different viewpoints. In addition,
it is possible to use Java expressions to enrich the models with
implementation details. As such, UML/P forms the foundation for
applied [Generative Software
Engineering](/research/Generative-SE).

To shape UML/P as a modular, composable set of languages, we have
intensively applied the techniques of
[Software Language Engineering (SLE)](/research/Language-Engineering).
As an example, OCL is not only a stand-alone constraint
language, but it is also used for pre- and post-conditions in
Statechart transitions, for state invariants, for desired properties to
describe the verdict of tests, and for desired properties while inside a
sequence diagram-governed test execution.

For the constructive part of UML/P Java expressions are also integrated
in various UML/P sublanguages. This integration relies on solid
foundations, actually allowing for intensive consistency checks within
models of all sublanguages as indicated in the figure below.
This includes type checking of variables introduced and used in
sublanguages as well as the mapping of symbols defined in one
sublanguage to another sublanguage.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/UMLP.jpeg title: "UMPL/P" class: 
        "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

Because object diagrams have limited expressiveness on their own, we
have integrated object diagrams into OCL/P to identify specific
scenarios via diagrams and connecting them with powerful logic operators
of OCL/P. The integration of object diagrams into OCL/P allows for
describing the context of invariants and specifying situations that are
allowed, forbidden, or alternatives. This yields a powerful yet
partially diagrammatic logic specification technique.

We also have dealt with activity diagrams [[MRR11d]](#MRR11d) [[MRR11a]](#MRR11a) as
extension of the UML/P and the ADL [MontiArc](/research/Software-Architecture)
completes UML/P with a notation for logically
or physically distributed computation [[BKRW17a]](#BKRW17a).

Parts of UML/P are available from the [**MontiCore** Website](http://monticore.de/)
as an Eclipse plugin featuring syntax-aware
editors for the various types of diagrams. We have successfully applied
UML/P for generatively creating various kinds of software systems. This
spans from database schemas over web applications up to entire data
management desktop applications.
UML/P is under continuous extension with interesting new features.

Below we provide a selection of relevant publications about the UML/P as well as
related interesting topics. Please also note the [MontiCore
Website](http://monticore.de/) for details on the technology as well as access
to the UML/P itself.

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
- [Generative Software Engineering](/research/Generative-SE)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [Modeling Software Architecture](/research/Software-Architecture)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
