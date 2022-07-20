---
layout: page
title: Evolution & Transformation of Models
permalink: /research/Evolution/
description: 
img: 
importance: 1
keys: [CFJ+16,Rum04c,Rum12,LRSS10,
    MMR10,PR94,KPR97,PR99,KR18a,PR01,
    PR03,Hoe18,MRR11d,MRR11e,MRR10,
    RSW+15,HRRS11,HRR+11,HRRS12,
    HHK+13,HRW15,Wei12,HHR+15,
    AHRW17,AHRW17b]
---

## Summary of Most Relevant Topic Papers

Models are central artifacts in model-driven software development (MDD).
However, software **changes over time** and so do models. Many of the new
requirements imposed by stakeholders, technology adaptations, or bug and
performance improvements do not only affect the implementation, but also
require an evolution, refinement or refactoring of the models describing the
system. When models play a central role in the development process, it is
therefore necessary to provide a well-founded, methodologically sound and
tool-based assistance for evolving models according to changing needs.
[[CFJ+16]](#CFJ+16) discusses several of the following.


## Evolution

[Agile methods](/research/Agile-MBSE), 
such as XP or Scrum, rely to a large extent on the ability to
evolve the system due to changing requirements, architectural improvements and
incremental functional extensions. While agile methods use code as their
central artifacts, a model-driven method concentrates on modeling artifacts. 

In
[[Rum04c]](#Rum04c) and [[Rum12]](#Rum12) we describe an agile, model-based method that
relies on iterated and fully automatic generation of larger parts of the code
as well as tests from models, which in turn enables us to apply evolutionary
techniques directly on the various kinds of models, e.g., the UML. We argue that
combining automatic and repeatable code generation with tool-assistance for
model transformation allows combining agile and model-based development
concepts for a new and effective kind of development process.

An overview on current technologies for evolving models within a language and
across languages is given in [[LRSS10]](#LRSS10). We refined this with a focus on
evolving architecture descriptions for critical software-intensive systems
[[MMR10]](#MMR10).


## Refinement

Refinement is a specialized form of transformation of models that adds
informational details, while all conclusions a developer could derive
from the abstract model still hold. Such an addition may for example be
the structural refinement of the state space of state machine, but also
the reduction of underspecification expressed as alternative behaviors.
Stepwise refinement is therefore an important development technique as
it prevents unwanted surprises when abstract models are implemented.

In [[PR94]](#PR94) we developed a precise understanding of automaton refinement
that is especially useful for software development, as it uses a loose
semantics approach, where no implicit assumptions are made that need to be
invalidated in the refinement steps. In [[KPR97]](#KPR97) we applied this refinement
concept to feature specifications.

Finally, we developed a powerful set of refinement rules for pipe-and-filter
architectures in [[PR99]](#PR99). Its rules allow us to refactor the internal
structure of an architecture, while retaining respectively refining the
externally promised behavior. We speak of "glass box" refinement as opposed
to
"black box" refinement, where only the external visible behavior is taken to
consideration, and "hierarchical decomposition", where a black box behavior
is
decomposed into a (forthwith immutable) decomposed architecture.

As performing a refinement step is error-prone, we present a language
independent and fully automated
method to **repair failed model refinements** [[KR18a]](#KR18a). This is possible by identifying
syntactic changes that does not lead to refined
models.


## Refactoring of Models

Refactoring aims to improve the internal structure while preserving its
observable behavior and became prominent with agile development. In [[PR01]](#PR01) 
we traced back refactoring of programs to related techniques,
e.g., known from math or theorem provers. In [[PR03]](#PR03) we have discussed the
existing refactoring techniques for specifications and models. 

We, e.g., found
a number of well-defined refactoring techniques for state machines, logic
formula, or data models that come from formal methods, but have not yet found
their application in software development. In [[Rum12]](#Rum12) we therefore discuss
refactoring techniques for various UML diagrams in detail. Additionally,
libraries of reusable refactorings for class diagrams and MontiArc models were
developed [[Hoe18]](#Hoe18).

If a model refactoring is actually a refinement, then dependent artifacts are
not affected at all. However, it may be that a refactoring does have effect on
related artifacts. In [[MRR11d]](#MRR11d) we discuss a technique to identify semantic
differences for UML's activity diagrams. It can be used to understand the
effects of a refactoring resp. evolutionary change.

It is important to understand semantic differences between refactoring steps on data
structures by exhibiting concrete data sets (object structures) as a witness of
semantic differences.
Thus, we provide a mapping of UML class diagrams to Alloy [[MRR11e]](#MRR11e).


## Understanding Model Differences

While syntactic differences of models are relatively easy to understand, it is
an interesting question
what the semantic differences between two given models are, where one
evolved from the
other, and what their clear semantics is. In [[MRR10]](#MRR10) we discussed the
necessity for this and since then have defined a number of semantic-based
approaches for this (see
[Semantics of Modeling Languages](/research/Semantics)).
We also applied **compatibility checking of evolved models** on Simulink, e.g., in
[[RSW+15]](#RSW+15), where we identified in which system context a component can be
replaced safely by another version and still achieve the same functionality.



## Delta Transformations to Describe Software Variability

Software product line engineering is most effective if planned already on the
modeling level. For this purpose, we developed the delta approach for modeling.
Each delta describes a coherent set of changes on a model. A set of deltas
applicable to a base model thus describes a model variant (see also
[Variability & Software Product Lines (SPL)](/research/Variability)).

We successfully applied delta modeling for software architectures [[HRRS11]](#HRRS11)
and extended this into a hierarchical approach in [[HRR+11]](#HRR+11). Second, we
discussed in [[HRRS12]](#HRRS12), how to evolve a complete product line architecture,
by merging deltas or extracting sub-deltas, etc., which allows us to keep a
product line up to date and free of undesired waste. Third, based on the
experience we gained from applying the delta approach to one particular
language, we developed an approach to systematically derive delta languages
from any modeling language in [[HHK+13]](#HHK+13) and [[HRW15]](#HRW15).


## Model Transformation Language Development

As we do deal with transformations on models in various forms, we are very much
interested in defining these transformations in an effective and easily
understandable form. Today's approaches are focussing on the abstract syntax
of a modeling language, which a typical developer should not be aware of at
all. We heavily demand better transformation languages. Thus, in 
[[Wei12]](#Wei12) [[HRW15]](#HRW15) [[Hoe18]](#Hoe18) we present a technique that derives a
transformation language
from a given base language. Such a transformation language reuses larger parts
of the concrete syntax of the base language and enriches it by patterns and
control structures for transformations. We have successfully applied this
engine on several [UML](/research/Unified-Modeling-Language) sub-languages and 
[DSLs](/research/Domain-Specific-Languages)
[[HRW15]](#HRW15) [[HHR+15]](#HHR+15) [[AHRW17]](#AHRW17) 
[[AHRW17b]](#AHRW17b) [[Hoe18]](#Hoe18).


{% include trennlinie.html %}


## Key Statements
1. Model transformation is a central concept for model driven development, that 
enables model-based evolution.
2. Refactoring on models is effective, when assisted by appropriate tools.
3. Refinement is a special form of refactoring, where the properties that can be 
derived from the old model are preserved.
4. Semantic differencing helps to understand the impact of evolutionary 
refactoring on models.
5. Using model transformations as individually applicable "deltas" allows describing
6. model and therefore software variants.
7. Language specific transformation languages can be systematically derived from 
given descriptions of modeling languages.

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
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
