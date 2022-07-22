---
layout: page
title: Variability & Software Product Lines 
permalink: /research/Variability/
description: 
img: 
importance: 1
keys: [GHK+08,GRJA12,HKM+13,
        HHK+15,BEK+19,GKPR08,
        HRR+11,HRRS12,CGR09,
        GR11,PFR02,BEK+18b]
---

## Summary of Most Relevant Topic Papers

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
- reduce bug fix time  
  [[GHK+08]](#GHK+08) [[GRJA12]](#GRJA12) [[HKM+13]](#HKM+13) [[HHK+15]](#HHK+15) [[BEK+19]](#BEK+19).

Variability is to a larger extent related to evolution. We discuss our 
approaches to evolution understanding in [evolution & transformation of 
models](/research/Evolution).


## Feature Diagrams and Views

Feature diagrams are a popular mechanism to describe variability in a top
down fashion, e.g., in the automotive domain [[GHK+08]](#GHK+08) using 150%
models. Reducing overhead and associated costs is discussed in
[[GRJA12]](#GRJA12). Feature diagrams suffer from the need to first decompose the
problem space and understand possible features in order to build the feature
diagram before being able to apply it. In [[GHK+08]](#GHK+08) and [[GKPR08]](#GKPR08) we
also speak of a 150% model. This normally enforces a product line definition
phase in which the requirements and features need to be collected which
creates additional costs. Among others we discuss decreasing these costs
in [[GRJA12]](#GRJA12).


## Delta Modeling

Delta modeling is a bottom up technique starting with a small, but complete
base variant. Features are additive, but also can modify the base variant.
A set of commonly applicable deltas configures a system variant. We discuss
the application of this technique to Delta-MontiArc [[HRR+11]](#HRR+11) and
to Delta-Simulink [[HKM+13]](#HKM+13). Deltas can not only describe spacial
variability but also temporal variability which allows for using them for
software product line evolution [[HRRS12]](#HRRS12). 

In [[HHK+15]](#HHK+15) we have
generalized this approach to investigate, how to synthesize a delta
modeling language based on a given modeling language. Thus deltas can
generally be applied to almost any language.


## Variability in Language Definitions

On a related line of research, we also have studied **variability of
modeling languages**, which allows us to define and reason about syntactic and **semantic 
variation points**, which is, e.g., in the UML a big topic as it seems the UML 
standard will otherwise not be able to accommodate all stakeholder 
requirements.

For this purpose we defined a systematic way to define variants of
modeling languages [[CGR09]](#CGR09). We applied this research, e.g., in the
form of semantic language refinement on state charts in [[GR11]](#GR11).
Additionally, we investigated a method to model syntactic language variability 
through **language product lines**.

In [[PFR02]](#PFR02) we discussed how to apply annotation to the UML to
describe product variation points.
Current work continues this line of research to support the definition
and development of 150% language families for textual and generative
modeling languages [[BEK+18b]](#BEK+18b) [[BEK+19]](#BEK+19).


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

{% include trennlinie.html %}


## Key Statements
1. Products often exist in various variants. Variants are managed in a Software 
Product Line (SPL) that captures commonalities and differences.
2. Modeling variants explicitly is essential to tame complexity of otherwise 
150% models.
3. **Delta modeling** is a bottom-up technique starting with a running base 
variant and can more easily be applied to derive and implement SPLs from 
existing products in industrial size projects.
4. Delta-concepts are successfully applied to MontiArc and Simulink.
5. Variability applied to modeling languages allows to capture semantic 
variation. This is essential to capture the semantics of the UML.
6. **Industrial introduction of SPL** based development needs organizational and 
process adaptation and needs to be tailored to the individual company.

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
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/research/Evolution)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [Software Language Engineering (SLE)](/research/Language-Engineering)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
