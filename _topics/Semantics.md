---
layout: page
title: Semantics of Modeling Languages
description: 
img: 
importance: 1
---

## Summary of Selected Papers
We investigate analysis, synthesis, evolution, definition of views, and 
abstraction based on models. For all these purposes, we need a sound semantical 
foundation of the meaning of the models.

We also need a proper semantics when applying a given language to new domains, 
such as monitoring energy consumption or modeling flight safety rules for the 
European air traffic (see our other [publications](/publications)). We do this 
regularly with our language workbench MontiCore 
[[KRV10]](https://www.se-rwth.de/publications/MontiCore-a-Framework-for-Compositional-Development-of-Domain-Specific-Languages.pdf).

## The Meaning of Semantics and its Principles
Over the years we have developed a clear understanding of what the **semantics** 
of a model and a modeling language is. For example in 
[[HR04]](https://www.se-rwth.de/~rumpe/publications20042008/Meaningful-Modeling-Whats-the-Semantics-of-Semantics.pdf) 
we discussed different forms of semantics and what they can be used for. We in 
particular distinguish between "meaning" that can be attached to any kind of 
modeling language and an often used narrow interpretation, that uses "semantics" 
synonymously to behavior of a programm.

Each modeling language, let it be **UML or a DSL deserves a semantics**, even if 
the language itself is for modeling structure, such as class diagrams or 
architecture description languages. Furthermore, modeling languages are **not 
necessarily executable** and as their main **purpose is abstraction** from 
implementation details, they are usually not fully determined, but exhibit forms 
of **underspecification**. We discuss a very general framework for semantics 
definition in 
[[HR04]](https://www.se-rwth.de/~rumpe/publications20042008/Meaningful-Modeling-Whats-the-Semantics-of-Semantics.pdf). 
At the core, we use a denotational semantics, which is basically a mapping M 
from source language L (syntax) into a target language respectively a target 
domain S (semantic domain). Here we see a combination of functions, where the 
first simplifies the syntax language by mapping redundant concepts to their 
simplest form (less concepts used, but usually more complex models):

While many attempts of defining semantics only give examples on how the mapping 
M looks like, we advocate an explicit and precise definition of M to be able to 
analyze or compare the semantics of models. For instance, refinement and 
evolution of models rely on such explicit denotational semantics.

## System Model as Semantic Domain
To define a semantic domain we use a **mathematical theory**, that allows us to 
explicitly specify the desired properties of the target system, we are aiming 
at. We call this theory **System Model**. Its first version is explicitly 
defined in 
[[BKR95]](https://www.se-rwth.de/topics/~rumpe/publications/Ein-strombasiertes-mathematisches-Modell-verteilter-informationsverarbeitender-Systeme-Syslab-Systemmodell.pdf) 
and 
[[BHP+98]](https://www.se-rwth.de/topics/~rumpe/publications/Software-and-System-Modeling-Based-on-a-Unified-Formal-Semantics.pdf) 
(including 
[[GKR96]](https://www.se-rwth.de/topics/~rumpe/publications/Enhancing-the-SysLab-System-Model-with-State.pdf) 
and 
[[BKR96]](https://www.se-rwth.de/topics/~rumpe/publications/A-stream-based-mathematical-model-for-distributed-information-processing-systems-SysLab-system-model.pdf)).

The **System Model** for the full UML however became a rather large mathematical 
theory, that captures object-oriented communication (method calls, dynamic 
lookup, inheritance, object identity) as well as distributed systems at various 
levels as states and statemachines. We therefore developed the full system model 
for the UML in 
[[BCGR09a]](https://www.se-rwth.de/publications/Definition-of-the-UML-system-model.pdf) 
and discuss the rationale for it in 
[[BCGR09]](https://www.se-rwth.de/publications/Considerations-and-Rationale-for-a-UML-System-Model.pdf). 
See also 
[[BCR07]](https://www.se-rwth.de/~rumpe/publications20042008/Towards-a-System-Model-for-UML.-Part-2.-The-Control-Model.pdf) 
and 
[[BCR07b]](https://www.se-rwth.de/~rumpe/publications20042008/Towards-a-System-Model-for-UML.-Part-3.-The-State-Machine-Model.pdf) 
for more detailed versions and 
[[CGR08]](https://www.se-rwth.de/~rumpe/publications20042008/System-Model-Semantics-of-Class-Diagrams.pdf) 
for an application on class diagrams. Here we see the hierarchy of the 
mathematical model:

The system model and its variants are used for a variety of tool embeddings of 
the semantic domain. 
[[MRR10]](https://www.se-rwth.de/publications/A-Manifesto-for-Semantic-Model-Differencing.pdf) 
explains the case for semantic model differencing as opposed to syntactic 
comparison. For example in 
[[MRR11d]](https://www.se-rwth.de/publications/ADDiff-Semantic-Differencing-for-Activity-Diagrams.pdf) 
(based on 
[[MRR11a]](https://www.se-rwth.de/publications/An-Operational-Semantics-for-Activity-Diagrams-using-SMV.pdf)) 
we encoded a part of the semantics, big enough to handle differences of activity 
diagrams based on their semantics, in 
[[MRR11f]](https://www.se-rwth.de/publications/Semantically-Configurable-Consistency-Analysis-for-Class-and-Object-Diagrams.pdf) 
we compare class and object diagrams based on their semantics, and in , we 
investigate semantic differencing of component & connector architectures.

In 
[[BR07]](https://www.se-rwth.de/~rumpe/publications20042008/Modulare-hierarchische-Modellierung-als-Grundlage-der-Software-und-Systementwicklung.pdf) 
we have defined a much simpler mathematical model for **distributed systems** 
based on black-box behaviors of components, hierarchical decomposition, but also 
the sound mathematical theory of streams for refinement and composition. While 
this semantic model is useful for distributed real-time systems, such as cloud, 
Internet or cyber-physical systems, it does not exhibit concepts of objects and 
classes.

We also discussed a **meta-modeling approach** 
[[EFL+99]](https://www.se-rwth.de/topics/~rumpe/publications/Meta-Modeling-Semantics-of-UML.pdf). 
As nothing is as mighty and comfortable as mathematical theories, one needs to 
carefully design the semantics in particular if a concept of the language does 
not have a direct representation in the semantics domain. Using a meta-model to 
describe the semantics is appealing, because the syntactic domain L is 
meta-modeled anyway, but also demanding, because both the semantic domain S and 
the mapping M need to be encoded using meta-modeling instead of mathematical 
concepts. We learnt, that meta-modeling is limited, e.g., in its expressibility 
as well as due to finiteness.

## Semantics of UML and Object-Orientation
In the early days, when modeling technology was still in its infancy it was of 
interest to precisely understand objects, classes, inheritance, their 
interactions and also how modeling technologies, like the upcoming UML, describe 
those. 
[[BGH+97]](https://www.se-rwth.de/topics/~rumpe/publications/Exemplary-and-Complete-Object-Interaction-Descriptions-WS-Version.pdf) 
discusses potential modeling languages for the description of an exemplaric 
object interaction, today called sequence diagram, and a complete description of 
object interactions, which obviously needs additional mechanisms, e.g., a 
sequential, parallel or iterative composition of sequence diagrams.

[[BGH+98]](https://www.se-rwth.de/topics/~rumpe/publications/Systems-Views-and-Models-of-UML.pdf) 
discusses the relationships between system, a view and a complete model in the 
context of the UML.

## Abstraction, Underspecification and Executability
A modeling language is only a good language, if it allows to abstract away from 
certain implementation details. **Abstraction** however often means that its 
models are not fully determining the original, but exhibit 
**underspecification**. Underspecification is regarded as freedom of the 
developer or even of the implementation to choose the best solution with respect 
to the given constraining specification. It is an intrinsic property of a good 
modeling language to allow underspecification.

As a consequence a semantic mapping of an (underspecified) model into a single 
running programm cannot be correct or useful (to capture the semantics 
adequate). To tackle **underspecification** we use a set-based mapping. This 
means a single model is mapped to a set of possible implementations all of which 
fulfill the constraints given by the model. This approach has important 
advantages:

1. Each element in the semantics can be an **executable implementation**, we 
just do not know, which of them will be the final implementation.
2. Given two models, the **semantics of composition** is defined as 
intersection: these are exactly the systems that implement both models. This 
approach is based on "loose semantics", where an implementation is allowed to do 
everything that has not explicitly been forbidden by the specification.
3. A model is **consistent** exactly when it has a nonempty semantics.
4. **Refinement** of a model on the syntactic level maps to set inclusion on the 
semantics.

Using sets of executable systems in the semantic mapping combines the 
denotational approach with an operational approach that is perfectly suited for 
semantics for modeling languages.

## Semantic Variation Points
In the standardization of the UML the contributors had some challenges to agree 
on the meaning of quite a few modeling concepts. To some extent this is due to 
political reasons (tool vendors try to push their already implemented solution), 
but to a large extent this is also due to the attempt of the UML to describe 
phenomena in various real world and application domains as well as 
software/technical domains. As it is a bad idea to capture different phenomena 
with the same syntactical concept, the UML Standard introduces the **semantic 
variantion point** without describing precisely what it means and how to 
describe it.

In 
[[GR11]](https://www.se-rwth.de/publications/Modeling-Language-Variability.pdf), 
[[CGR09]](https://www.se-rwth.de/publications/Variability-within-Modeling-Language-Definitions.pdf) 
we have discussed the general requirements for a framework to describe semantic 
and syntactic variations of a modeling language. We also introduced a mechanism 
to describe variations (1) of the syntax, (2) of the semantic domain, and (3) of 
the semantic mapping using feature trees for class diagrams and for object 
diagrams in 
[[MRR11f]](https://www.se-rwth.de/publications/Semantically-Configurable-Consistency-Analysis-for-Class-and-Object-Diagrams.pdf) 
as well as activity diagrams in 
[[GRR10]](https://www.se-rwth.de/publications/Towards-a-Semantics-of-Activity-Diagrams-with-Semantic-Variation-Points.pdf). 
Feature trees are a perfect concept to capture variation points and denotational 
semantics based on a system model allowing to explicitly describe the effect of 
the variant.

In [[Rum17]](http://www.se-rwth.de/mbse/) (and its German version 
[[Rum12]](http://www.se-rwth.de/mbse/)) we have embodied the semantics in a 
variety of code and test case generation, refactoring and evolution techniques 
to make UML semantics amenable to developers without exposing the formalism 
behind. In 
[[LRS+10]](https://www.se-rwth.de/publications/Model-Evolution-and-Management.pdf) 
we have discussed evolution and related issues in greater detail.

## Streams and Automata as Semantic Foundation
We also have used the mathematical concept of streams (e.g., Broy/Stolen: 
Specification and Development of Interactive Systems, springer, 2001) and 
various extensions including automata 
[[Rum96]](https://www.se-rwth.de/topics/~rumpe/publications/diss_rumpe) as 
semantic basis for the kind of systems, we have in focus: distributed, 
asynchronously communicating agents, which can be regarded as active objects.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Semantics of modeling languages helps to understand, analyze and manipulate 
its models.
2. Semantics is precisely defined only using mathematic theories.
3. The system model is a semantic theory based on streams and automata to 
describe distributed components.
4. Semantic variation points can be captured precisely this way.
5. Refinement, composition and evolution, e.g. through differencing can be 
defined using semantics.
6. Encoding of semantics in formal tools helps to execute analyzes, consistency 
checks etc.

## Related Topics
- [Compositionality/Modularity of Models & Languages](/topics/Compositionality)
- [Domain-Specific Languages (DSLs)](topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [Variability & Software Product Lines (SPL)](/topics/Variability)
- [State-Based Modeling (Automata)](/topics/State-Based-Modeling)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
