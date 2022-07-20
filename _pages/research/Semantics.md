---
layout: page
title: Semantics of Modeling Languages
permalink: /research/Semantics/
description: 
img: 
importance: 1
keys: [KRV10,HKR21,HR04,RKB95,
    BHP+98,GKR96,KRB96,RK96,BCGR09a,
    BCGR09,BCR07a,BCR07b,CGR08,GRR09,
    MRR10,MRR11d,MRR11a,MRR11f,BKRW17,BR07,
    EFLR99,BGH+97,BGH+98a,GR11,CGR09,
    GRR10,Rum17,Rum12,LRSS10,
    BS01,RW18,Rum96]
---

## Summary of Most Relevant Topic Papers

To deal with model analysis, synthesis, evolution, definition of views,
and abstraction based on models, we need a **sound semantic foundation
of the meaning of the models**.

We also need a proper semantics when applying a given language to **new
domains**, such as monitoring energy consumption or modeling flight
safety rules for the European air traffic.
We do this regularly with our language workbench MontiCore
[[KRV10]](#KRV10), [[HKR21]](#HKR21).



## The Meaning of Semantics and its Principles

Over the years we have developed a clear understanding of what the
semantics of a model and a modeling language is. For example in
[[HR04]](#HR04) we discussed different forms of semantics and what they can
be used for. We, in particular, distinguish between *"meaning"* that can be
attached to any kind of modeling language and an often used narrow
interpretation, that uses *"semantic"* synonymously to behavior of a
program.

Each modeling language, whether it be **UML or a DSL deserves a semantics**,
even if the language itself is for modeling structure, such as Class
Diagrams or Architecture Description Languages. Furthermore, modeling
languages are **not necessarily executable** and as their main **purpose is
abstraction** from implementation details, they are usually not fully
determined, but exhibit forms of **underspecification**. We discuss a very
general framework for semantics definition in [[HR04]](#HR04). At the core,
we use a denotational semantics, which is basically a mapping M from
source language L (syntax) into a target language respectively a
target domain S (semantic domain). In the following figure we see a
combination of functions, where the first simplifies the syntax
language by mapping redundant concepts to their simplest form (less
concepts used, but usually more complex models).


<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/ComposedSemanticMapping.png 
           title: "Composed semantic mapping" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

While many attempts of defining semantics only give examples on how
mapping M looks like, we advocate an explicit and precise definition
of M to be able to analyze or compare the semantics of models. For example,
refinement and evolution of models rely on such explicit denotational
semantics.


## System Model as Semantic Domain

To define a semantic domain we use a mathematical theory, that allows
us to explicitly specify the desired properties of the target system,
we are aiming at. We call the developed theory **System Model**. Its first
version is explicitly defined in [[RKB95]](#RKB95) and [[BHP+98]](#BHP+98)
(including work from [[GKR96]](#GKR96), [[KRB96]](#KRB96) and [[RK96]](#RK96)).

The **System Model** for the full UML, however, became a rather large
mathematical theory, that captures object-oriented communication (method
calls, dynamic lookup, inheritance, object identity) as well as distributed
systems at various levels as states and state machines. We therefore
developed the full system model for the UML in [[BCGR09a]](#BCGR09a) and discuss
the rationale for it in [[BCGR09]](#BCGR09). See also [[BCR07a]](#BCR07a) and
[[BCR07b]](#BCR07b) for more detailed versions and [[CGR08]](#CGR08) for an application
on class diagrams. The following figure shows the structure of the semantic 
domain as a model hierarchy within the mathematical model.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/StructureSemanticDomain.png 
           title: "Structure of the semantic domain: The system model" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

The **System Model** for the full UML however became a rather large mathematical 
theory, that captures object-oriented communication (method calls, dynamic 
lookup, inheritance, object identity) as well as distributed systems at various 
levels as states and state-machines. We therefore developed the full system model 
for the UML in 
[[BCGR09a]](#BCGR09a)
and discuss the rationale for it in 
[[BCGR09]](#BCGR09).
See also 
[[BCR07a]](#BCR07a)
and 
[[BCR07b]](#BCR07b)
for more detailed versions and 
[[CGR08]](#CGR08)
for an application on class diagrams. Here we see the hierarchy of the 
mathematical model:

The system model and its variants are used for a variety of tool
embeddings of the semantic domain. We provide a structured approach for
system model-based modeling language semantics definitions
in [[GRR09]](#GRR09). [[MRR10]](#MRR10) explains the case for semantic model
differencing as opposed to syntactic comparison. In
[[MRR11d]](#MRR11d) (based on [[MRR11a]](#MRR11a)) we encoded a part of the
semantics, big enough to handle differences of activity diagrams based
on their semantics. In [[MRR11f]](#MRR11f) we compare class and object
diagrams based on their semantics and in [[BKRW17]](#BKRW17) we 
look at the semantic differences between variants of component and 
connector architectures similar to SysML' BDDs. 

In [[BR07]](#BR07) we have defined a much simpler mathematical model for
distributed systems based on black-box behaviors of components,
hierarchical decomposition, but also the sound mathematical theory of
streams for refinement and composition. While this semantic model is
useful for distributed real-time systems, such as Cloud, Internet
of Things or
CPS, it does not exhibit concepts of objects and
classes.

We also discussed a **meta-modeling approach** [[EFLR99b]](#EFLR99b).
As nothing is
as mighty and comfortable as mathematical theories, one needs to
carefully design the semantics in particular if a concept of the
language does not have a direct representation in the semantics domain.
Using a metamodel to describe the semantics is appealing, because the
syntactic domain L is meta-modeled anyway, but also demanding,
because both the semantic domain S and the mapping M need to be
encoded using meta-modeling instead of mathematical concepts. We
learned, that meta-modeling is limited, e.g., in its expressiveness as
well as due to finiteness.


## Semantics of UML and Object-Orientation

In the early days, when modeling technology was still in its infancy, it
was of interest to precisely understand objects, classes, inheritance,
their interactions and also how modeling technologies, like the
upcoming UML, describe those. [[BGH+97]](#BGH+97) discusses potential
modeling languages for the description of an exemplary object
interaction, today called Sequence Diagram, and a complete description
of object interactions, which obviously needs additional mechanisms,
e.g., a sequential, parallel or iterative composition of Sequence
Diagrams.

Furthermore, [[BGH+98b]](#BGH+98b) discusses the relationships between system, a
view and a
complete model in the context of the UML.


## Abstraction, Underspecification and Executability

A modeling language is only a good language, if it allows to abstract
from implementation details. **Abstraction** however often
means that its models are not fully determining the original, but
exhibit **underspecification**. Underspecification is regarded as freedom
of the developer or even of the implementation to choose the best
solution with respect to the given constraining specification. It is an
intrinsic property of a good modeling language to allow
underspecification.

As a consequence a semantic mapping of an (underspecified) model into a
single running program cannot be correct or useful in order to capture the
semantics adequate. To tackle **underspecification**, we use a set-based
mapping. This means a single model is mapped to a set of possible
implementations all of which fulfill the constraints given by the
model. This approach has several advantages:

1. Each element in the semantics can be an **executable implementation**, we 
just do not know which of them will be the final implementation.
2. Given two models, the **semantics of composition** is defined as 
intersection: these are exactly the systems that implement both models. This 
approach is based on "loose semantics", where an implementation is allowed to do 
everything that has not explicitly been forbidden by the specification.
3. A model is **consistent** exactly when it has a nonempty semantics.
4. **Refinement** of a model on the syntactic level maps to set inclusion on the 
semantics.

Using sets of executable systems in the semantic mapping combines the
denotational approach with an operational approach that is perfectly
suited for semantics for modeling languages.


## Semantic Variation Points

In the standardization of the UML the contributors had some challenges
to agree on the meaning of quite a few modeling concepts. To some
extent this is due to political reasons (tool vendors try to push their
already implemented solution), but to a large extent this is also due
to the attempt of the UML to describe phenomena in various real world
and application domains as well as software/technical domains. As it is
a bad idea to capture different phenomena with the same syntactical
concept, the UML standard introduces the **semantic variation point**
without describing precisely what it means and how to describe it.

In [[GR11]](#GR11), [[CGR09]](#CGR09) we have discussed the general requirements
for a framework to describe semantic and syntactic variations of a
modeling language. We also introduced a mechanism to describe
variations (1) of the syntax, (2) of the semantic domain, and (3) of
the semantic mapping using feature trees for class diagrams and for
object diagrams in [[MRR11f]](#MRR11f) as well as activity diagrams in
[[GRR10]](#GRR10). Feature trees are a perfect concept to capture variation
points and denotational semantics based on a system model allowing to
explicitly describe the effect of the variant.

In [[Rum17]](#Rum17) (or its German version [[Rum12]](#Rum12)) we have embodied
the semantics in a variety of **code and test case generation,
refactoring and evolution techniques** to make UML semantics amenable to
developers without exposing the formalism behind. Additionally, 
[[LRSS10]](#LRSS10) discusses evolution and related issues in greater detail.


## Streams and Automata as Semantic Foundation

It is also noteworthy that we have used the mathematical concept of
**streams** (e.g., [[BS01]](#BS01) [[RR11]](#RR11) also discussed in [[RW18]](#RW18))
and various extensions including **automata**
[[Rum96]](#Rum96) as semantic basis for the kind of systems, we have in
focus: distributed, asynchronously communicating agents, which can be
regarded as active objects.
We illustrate our state machine formalism and its stream-based composition in
with [State-Based Modeling (Automata)](/research/State-Based-Modeling).

{% include trennlinie.html %}

## Key Statements
1. Semantics of modeling languages helps to understand, analyze and manipulate 
its models.
2. Semantics is precisely defined only using mathematics theories.
3. The system model is a semantic theory based on streams and automata to 
describe distributed components.
4. Semantic variation points can be captured precisely this way.
5. Refinement, composition and evolution, e.g. through differencing can be 
defined using semantics.
6. Encoding of semantics in formal tools helps to execute analyzes, consistency 
checks etc.

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
- [Compositionality/Modularity of Models & Languages](/research/Compositionality)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/research/Evolution)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [Variability & Software Product Lines (SPL)](/research/Variability)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
