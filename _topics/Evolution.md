---
layout: page
title: Evolution & Transformation of Models
description: 
img: 
importance: 1
---

## Summary of Selected Papers
Models are central artifacts in model-driven development (MDD). However, 
software changes over time and so do models. Many of the new requirements 
imposed by stakeholders, technology adaptations, or bug and performance 
improvements do not only affect the implementation, but also require an 
evolution, refinement or refactoring of the models describing the system.

When models play a central role in the development process, it is therefore 
necessary to provide a well-founded, methodologically sound and tool-based 
assistance for evolving models according to changing needs. 
[[CFJ+16]](https://www.crcpress.com/Engineering-Modeling-Languages/Combemale-France-Jezequel-Rumpe-Steel-Vojtisek/p/book/9781466583733) 
discusses several of the following.

## Evolution
[Agile methods](/topics/Agile-MBSE), such as XP or Scrum, to a large extent rely 
on the ability to evolve the system due to changing requirements, architectural 
improvements and incremental functional extensions. While agile methods 
generally use code as their central artifacts, a model-driven method 
concentrates on modeling artifacts. In 
[[Rum04c]](https://www.se-rwth.de/topics/~rumpe/publications20042008/Agile-Modeling-with-the-UML.pdf) 
and [[Rum12]](http://www.se-rwth.de/mbse/) we describe an agile model-based 
method that relies on iterated and fully automatic generation of larger parts of 
the code as well as tests from models, which in turn enables us to apply 
evolutionary techniques directly on the various kinds of models, e.g. ,the UML. 
We argue that combining automatic and repeatable code generation with 
tool-assistance for model transformation allows to combine agile and model-based 
development concepts for a new and effective kind of development process.

An overview on current technologies for evolving models within a language and 
across languages is given in 
[[LRS+10]](https://www.se-rwth.de/publications/Model-Evolution-and-Management.pdf). 
We refined this with a focus on evolving architecture descriptions for critical 
software-intensive systems 
[[MMR10]](https://www.se-rwth.de/publications/Evolving-Software-Architecture-Descriptions-of-Critical-Systems.pdf).

## Refinement
Refinement is a specialized form of transformation of models that adds 
information, while all conclusions a developer could derive from the abstract 
model still hold. Stepwise refinement is therefore an important development 
technique as it prevents unwanted surprises when abstract models are 
implemented.

In 
[[PR94]](https://www.se-rwth.de/topics/~rumpe/publications/A-new-Concept-of-Refinement-used-for-Behaviour-Modelling-with-Automata-FME.pdf) 
we developed a precise understanding of automaton refinement that is especially 
useful for software development, as it uses a loose semantics approach, where no 
implicit assumptions are made that need to be invalidated in the refinement 
steps. In 
[[KPR97]](https://www.se-rwth.de/topics/~rumpe/publications/Feature-Specification-and-Refinement-with-State-Transition-Diagrams.pdf) 
we applied this refinement concept to feature specifications.

In 
[[KR18a]](https://www.se-rwth.de/publications/On-Computing-Instructions-to-Repair-Failed-Model-Refinements.pdf) 
we developed a concrete modeling language independent method under meaningful 
assumptions that enables to repair failed model refinements. The method is 
especially useful for identifying the syntactic modeling elements of one model 
causing that the model is no refinement of another model.

Finally, we developed a powerful set of refinement rules for pipe-and-filter 
architectures in 
[[PR99]](https://www.se-rwth.de/topics/~rumpe/publications/Refinement-of-Pipe-and-Filter-Architectures.pdf). 
Its rules allow us to refactor the internal structure of an architecture, while 
retaining respectively refining the externally promised behavior. We speak of 
"glass box" refinement as opposed to "black box" refinement, where only the 
external visible behavior is taken to consideration, and "hierarchical 
decomposition", where a black box behavior is decomposed into an (forthwith 
immutable) architecture.

## Refactoring of models
Refactoring aims to improve the internal structure while preserving its 
observable behavior and became prominent with agile development. In 
[[PR01]](https://www.se-rwth.de/topics/~rumpe/publications/Roots-of-Refactoring.pdf) 
we, hence, traced back refactoring of programs to related techniques e.g. known 
from math or theorem provers. In 
[[PR03]](https://www.se-rwth.de/topics/~rumpe/publications/Refactoring-of-Programs-and-Specifications.pdf) 
we have discussed, the existing refactoring techniques for specifications and 
models. We, e.g., found a number of well defined refactoring techniques for 
state machines, logic formula, or data models that come from formal methods, but 
have not yet found their application in software development. In 
[[Rum12]](http://www.se-rwth.de/mbse/) we therefore discuss refactoring 
techniques for various UML diagrams in detail.

If a model refactoring is actually a refinement, then dependent artifacts are 
not affected at all. However, it may be that a refactoring does have effect on 
related artifacts. In 
[[MRR11d]](https://www.se-rwth.de/publications/ADDiff-Semantic-Differencing-for-Activity-Diagrams.pdf), 
we discuss a technique to identify semantic differences for UML's activity 
diagrams. It can be used to understand the effects of a refactoring resp. 
evolutionary change.

In 
[[MRR11e]](https://www.se-rwth.de/publications/CD2Alloy-Class-Diagrams-Analysis-Using-Alloy-Revisited.pdf) 
we provide the mapping of UML's class diagrams to Alloy allowing to understand 
semantic differences between refactoring steps on data structures by exhibiting 
concrete data sets (object structures) as witness of semantic differences.

## Understanding model differences
While syntactic differences of models are relatively easy to understand, it is 
an interesting question that given two models, e.g. where one evolved from the 
other, and a clear semantics (see [Semantics of Modeling 
Languages](/topics/Semantics)), what are the semantic differences between those 
models? In 
[[MRR10]](https://www.se-rwth.de/publications/A-Manifesto-for-Semantic-Model-Differencing.pdf) 
we discussed the necessity for this and since then have defined a number of 
semantic based approaches for this.

We also applied compatibility checking of evolved models on Simulink, e.g., in 
[[RSW+15]](https://www.se-rwth.de/publications/Behavioral-Compatibility-of-Simulink-Models-for-Product-Line-Maintenance-and-Evolution.pdf).

## Delta transformations to describe software variability
Software product line engineering is most effective, if planned already on the 
modeling level. For this purpose, we developed the delta approach for modeling. 
Each delta describes a coherent set of changes on a model. A set of deltas 
applicable to a base model thus describes a model variant (see also 
[Variability](/topics/Variability)).

We successfully applied delta modeling for software architectures 
[[HRRS11]](https://www.se-rwth.de/publications/Delta-Modeling-for-Software-Architectures.pdf) 
and extended this into a hierarchical approach in 
[[HRR+11]](https://www.se-rwth.de/publications/Hierarchical-Variability-Modeling-for-Software-Architectures.pdf).

Second, we discussed in 
[[HRRS12]](https://www.se-rwth.de/publications/Evolving-Delta-oriented-Software-Product-Line-Architectures.pdf), 
how to evolve a complete product line architecture, by merging deltas, or 
extracting sub-deltas etc., which allows us to keep a product line up to date 
and free of undesired waste.

Third, based on the experience we gained from applying the delta approach to one 
particular language, we developed an approach to systematically derive delta 
languages from any modeling language in 
[[HHK+13]](https://www.se-rwth.de/publications/Engineering-Delta-Modeling-Languages.pdf) 
and 
[[HRW15]](https://www.se-rwth.de/publications/Systematically-Deriving-Domain-Specific-Transformation-Languages.pdf).

## Model transformation language development
As we work with transformations on models in various forms, we are very much 
interested in defining these transformations in an effective and easily 
understandable form. Today's approaches are concentrated on the abstract syntax 
of a modeling language, which a typical developer should not be aware of at all. 
We intensively demand for better transformation languages.

In 
[[Wei12]](https://www.se-rwth.de/publications/Generierung-domaenenspezifischer-Transformationssprachen.pdf), 
we, thus, present a technique that derives a transformation language from a 
given base language. Such a transformation language reuses larger parts of the 
concrete syntax of the base language and enriches it by patterns and control 
structures for transformations. We have successfully applied this engine to 
several sublanguages of the [UML](/topics/Unified-Modeling-Language) and 
[DSLs](/topics/Domain-Specific-Languages).

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Model transformation is a central concept for model driven development, that 
enables model-based evolution.
2. Refactoring on models is effective, when assisted by appropriate tools.
3. Refinement is a special form of refactoring, where the properties that can be 
derived from the old model are preserved.
4. Semantic differencing helps to understand the impact of evolutionary 
refactoring on models.
5. Using model transformations as individually applicable "deltas" allows to 
describe model and therefore software variants.
6. Language specific transformation languages can be systematically derived from 
given descriptions of modeling languages.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/topics/Variability)
