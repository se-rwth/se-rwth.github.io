---
layout: page
title: Variability & Software Product Lines
description: 
img: 
importance: 1
---
## Summary of Selected Papers
Most products, such as cars, printers, mobile phones, etc., exist in various 
variants. Software for product variants is quite similar, but typically differs 
in new or additional features that sometimes deeply affect the software's 
architecture. Software **variants** are managed as a **Software Product Lines** 
(SPLs) that captures the commonalities as well as the differences. Software 
Product Lines have many benefits, they:

- decrease development time of new product variants,
- decrease time to market,
- lead to better software quality,
- improve reuse, and
- reduce bug fix time.

Variability is to a larger extent related to evolution. We discuss our 
approaches to evolution understanding in [evolution & transformation of 
models](/topics/Evolution).

## Feature diagrams and Views
Feature diagrams describe variability in a top down fashion in the problem 
space. We studied the application of this top down approach, e.g., in the 
automotive domain in 
[[GKPR08]](https://www.se-rwth.de/topics/~/rumpe/publications20042008/Modeling-Variants-of-Automotive-Systems-using-Views.pdf). 
They suffer from the need to first decompose the problem space and understand 
possible features in order to build the feature diagram before being able to 
apply it. In 
[[GHK+08]](https://www.se-rwth.de/~rumpe/publications20042008/Modelling-Automotive-Function-Nets-with-Views-for-Features-Variants-and-Modes.pdf) 
and 
[[GKPR08]](https://www.se-rwth.de/topics/~/rumpe/publications20042008/Modeling-Variants-of-Automotive-Systems-using-Views.pdf) 
we also speak of a 150% model. This normally enforces a product line definition 
phase in which the requirements and features need to be collected which creates 
additional costs. Among others we discuss decreasing these costs in 
[[GRJA12]](https://www.se-rwth.de/publications/High-Level-Requirements-Management-and-Complexity-Costs-in-Automotive-Development-Projects-A-Problem-Statement.pdf).

## Delta Modeling
We discuss **delta modeling** as a bottom up SPL modeling technique in 
[[HRR+11]](https://www.se-rwth.de/publications/Hierarchical-Variability-Modeling-for-Software-Architectures.pdf). 
Deltas can both be used as subsitute and as extension to traditional feature 
based development. Deltas allow us to build a product line incrementally 
starting with a base variant when the need for a new feature arises. Starting 
with a core version, each delta describes the changes necessary to derive a new 
variant. Deltas allow to add, replace, modify and delete components of a model 
resp. implementation and is thus rather general.

Each *set of valid deltas* configures a product variant. We have successfully 
applied delta modeling to the architectural analysis and design language (ADL) 
[MontiArc](/topics/Software-Architecture) by creating **Delta-MontiArc** 
([[HRR+11]](https://www.se-rwth.de/publications/Hierarchical-Variability-Modeling-for-Software-Architectures.pdf) 
and 
[[HRRS12]](https://www.se-rwth.de/publications/Evolving-Delta-oriented-Software-Product-Line-Architectures.pdf)) 
as well as applied it to Simulink creating **Delta-Simulink** 
[[HKM+13]](https://www.se-rwth.de/publications/First-Class-Variability-Modeling-in-Matlab-Simulink.pdf). 
Deltas can not only describe spacial variability but also temporal variability 
which allows using them for **software product line evolution** 
[[HRRS12]](https://www.se-rwth.de/publications/Evolving-Delta-oriented-Software-Product-Line-Architectures.pdf).

In 
[[HHK+15]](https://www.se-rwth.de/publications/Systematic-synthesis-of-delta-modeling-languages.pdf) 
we have generalized this approach to the general question, how to synthesize a 
delta modeling language based on a given modeling language. Thus deltas can 
generally be applied to other languages too.

## Variability in Language Definitions
On a related line of research, we also have studied **variability of modeling 
languages**, which allows us to define and reason about syntactic and **semantic 
variation points**, which is, e.g., in the UML a big topic as it seems the UML 
standard will otherwise not be able to accommodate all stakeholder 
requirements.

For this purpose we defined a systematic way to define variants of modeling 
languages 
[[CGR09]](https://www.se-rwth.de/publications/Variability-within-Modeling-Language-Definitions.pdf). 
We applied this research, e.g., in the form of semantic language refinement on 
state charts in 
[[GR11]](https://www.se-rwth.de/publications/Modeling-Language-Variability.pdf). 
Additionally, we investigated a method to model syntactic language variability 
through **language product lines**.

In 
[[FPR02]](https://www.se-rwth.de/topics/~rumpe/publications/Product-Line-Annotations-with-UML-F.pdf) 
we discussed how to apply annotation to the UML to describe product variation 
points.

## SPL and Delta Modeling in Industry
We have introduced SPL and delta modeling in several companies and are proud of 
succesfully helping companies to manage their variants. We also learnt, that 
industrial success means that each company needs a tailored process that fits 
the company culture, used tool chains, size of products and the desired agility 
of variant construction. SPL does not come free of initial cost.

A typical SPL introduction process consists of three stages: (1) Understanding 
the current situation in the company. Current process? Size of projects? Number 
of existing and planned variants? How similar are those? Current costs of 
evolution for individual products? Available and desired tool chain? (2) 
Derivation of a long list of potential technical, process and organizational 
measures for an SPL based future with efficient development of high quality 
systems. Categorization and priorization. (3) Implementing the most promising 
steps and understand the effects.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Products often exist in various variants. Variants are managed in a Software 
Product Line (SPL) that captures commonalities and differences.
2. Modeling variants explicitly is essential to tame complexity of otherwise 
150% models.
3. **Delta modeling** is a bottom-up technique starting with a running base 
variant and can more easily be applied to derive and implement SPLs from 
existing products in industrial size projects.
4. Delta-concepts are successfully applied to MontiArc and Simulink.
5. Variability applied to modelling languages allows to capture semantic 
variation. This is essential to capture the semantics of the UML.
6. **Industrial introduction of SPL** based development needs organizational and 
process adaptation and needs to be tailored to the individual company.

## Related Topics
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
