---
layout: page
title: Agile Model-Based Software Engineering
permalink: /research/Agile-MBSE/
description:
img:
importance: 1
keys: [Rum17, Rum16, Rum04c, Rum02, Rum03, GKR+06,
Rum12, Rum11, GKR+06, Sch12, LRSS10, HKR+09, PR03,
MRR10, FHR08, KRV06, JWCR18, CEG+14, KMA+16,
GKR+08,HKR21,RRSW17]
---

## Summary of Most Relevant Topic Papers

Today, many developers and project managers assume that the use of
models in software development leads to heavy-weight, tedious
development processes. On the one hand, they believe that sooner or
later, models are outdated, are not being co-evolved with software
changes, contain bugs, and are no longer helpful. On the other hand,
agility means to concentrate on the program as a core artifact without
much extra documentation. Agility enables efficient evolution,
correction and extension. As such, it seems to conflict with modeling.

We believe, and have shown, that using an executable,
abstract and multi-view modeling language for modeling, designing, and
programming still allows to use an agile development process
(see the research hypotheses in [[Rum04c]](#Rum04c)).
Such modeling languages, often consisting of one or more DSLs, are used as a central
notation in the development process. DSLs or the UML serve as a central
notation for software development. A DSL can be used for programming,
testing, modeling, analysis, transformation and documentation.


<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/DSLModelsAsCentralArtifacts.png 
           title: "DSL models as central artifacts" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

We found that modeling will be used in development projects much more,
when its benefits become evident early. This means constructive
generation or synthesis of code from the models needs to be among the
first steps of a model-based development process. All other interesting
techniques, such as test synthesis or high level analysis techniques
seem to come second. As a consequence, executability of modeling
languages is a desired feature.


## Execution of UML and DSLs

The question, whether UML should be **executable**, is discussed in
[[Rum02]](#Rum02). We found this a promising approach for larger subsets of
UML, but also identified a number of challenges. We
therefore started our research agenda to solve these challenges in
order to make model-based software engineering (MBSE) truly successful
when employed for agile software development.
We explored in detail, how UML fits for that purpose. Not only the
deficiencies of existing UML tools but also the UML language itself
need to be adapted to fit the needs of an agile software development
process, e.g.,
in [[Rum03]](#Rum03) we discuss how modeling of tests helps to increase reuse and
efficiency and in [[GKR+06]](#GKR+06) the integration of
models and ordinary programming code.


<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/model_uml_2.png title: 
        "Modellierung mit UML" class: "img-fluid z-depth-1" 
        href="http://mbse.se-rwth.de/book1/" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/agile_model_uml_2.png title: "Agile 
        Modellierung mit UML" class: "img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: 
        assets/img/Modeling-with-UML--Language-Concepts-Methods.jpeg title: 
        "Modeling with UML" class: "img-fluid z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: 
        assets/img/Agile-Modeling-with-UML--Code-Ceneration-Testing-Refactoring.jpeg 
        title: "Agile Modeling with UML" class: "img-fluid z-depth-1" %}
    </div>
</div>
</center>
<br />

Moreover, in [[Rum12]](#Rum12), [[Rum11]](#Rum11), [[Rum16]](#Rum16), and [[Rum17]](#Rum17),
which are also [online available](https://www.mbse.se-rwth.de/),
the **UML/P**, a variant of the UML especially designed for programming,
refactoring and evolution, is defined. The UML/P embodies class, object,
sequence diagrams, Statecharts, and OCL in combination with Java to model code
as well as tests as sketched in the following figure.
Moreover, these publications include a
detailed discussions on how to use the UML/P for **code generation**,
**testing** and on how to **refactor** structural models such as class diagrams,
as well as behavioral models such as Statecharts. Additionally, forms of
language integration, e.g., using object diagrams within OCL to describe
desired or unwanted object structures, are presented there as well.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/UMLP.jpeg title: "UMPL/P" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

In the last decade, we implemented a **language workbench** called MontiCore
(see [MontiCore - Language Workbench for DSLs](/research/MontiCore))
that was first described in [[GKR+06]](#GKR+06) and [[GKR+08]](#GKR+08).
The MontiCore handbook [[HKR21]](#HKR21) explains technical details as well
as the principal guidelines for its use and 
also offers a core layer of reusable language components.
On top of MontiCore, we
realized most of the language components of the UML/P [[Sch12]](#Sch12).
This work includes a precise definition of textual languages, type checks,
checks for context conditions within and between
UML sub-languages and a framework for the implementation of code generators.

MontiCore also serves as demonstration tool of the yearly
*Software Language Engineering* course at RWTH
and serves as basis for the mechanisms to teach agile modeling
adressed in [[RRSW17]](#RRSW17).

## Specific Concepts Assisting Agile Development

Agile development processes require quite a lot of specific activities,
techniques and concepts. Our research includes a general discussion of
how to **manage and evolve models** [[LRSS10]](#LRSS10) and a precise definition
for model and **modeling language composition** [[HKR+09]](#HKR+09).
Compositionality is particularly important and must be designed
carefully as it allows for incremental analyses and code generation,
thus being much more agile than today's modeling tools. We also
discussed in detail what **refactoring** means and how it looks
like in various modeling and programming languages [[PR03]](#PR03). UML/P is
implemented to support modeling without redundancies even on different
levels of abstraction, which enhances refactoring and evolution
techniques on models. To better understand the effect of an evolved
design, we discuss the need for semantic differencing in [[MRR10]](#MRR10).

When models are the central notation, **model quality** becomes an important
issue. Therefore, we have described a set of general requirements for model
quality in [[FHR08]](#FHR08). We distinguished between internal and external
quality. External quality refers to the correctness and completeness of a
model with respect to the original that it describes, while internal quality
refers to the model presentation and thus plays the same role as coding
guidelines for programming languages.

We also know that, even when using the UML/P, there is additional effort
necessary to adapt the tooling infrastructure to the project specific
needs. This becomes more pressing, when a domain specific language is
specifically designed for a project. We discuss the additional roles and
activities necessary in a DSL-based software development project
in [[KRV06]](#KRV06). However, it may be that not all of the participants in
a project need to be physically at the same place and fully available
anymore [[JWCR18]](#JWCR18).

We expect that the use of **models at runtime** will soon become an agile
and efficient development technique. It allows developers to defer
design decisions to runtime adaptation and configuration of systems.
However, reliability then becomes an issue. In [[CEG+14]](#CEG+14) we have
therefore discussed how to improve reliability while retaining
adaptability. In [[KMA+16]](#KMA+16) we have also introduced a classification
of forms of reuse of modelled software components.


{% include trennlinie.html %}

## Key Statements

1. Model-based development becomes interesting, when the model language is the
   central notation and thus replacing the programming language.
2. Tooling for MBSE must include code and test generation as well as type and
   context condition checking already on models. These techniques must be quick and
   thus modular and incremental.
3. Agile concepts, especially as refactoring, evolution, and automatic testing can be
   established with UML/P.
4. Executable UML/P is an extension of UML with Java, implemented using the
   MontiCore language workbench.

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
- [Evolution & Transformation of Models](/research/Evolution)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [UML/P](/research/UML-P)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
