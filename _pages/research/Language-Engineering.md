---
layout: page
title: Software Language Engineering (SLE)
permalink: /research/Language-Engineering/
description: 
img: 
importance: 1
keys: [Rum16,Rum17,HWR15,
        HKR21,KRV07b,KRV10,
        HRW18,CFJ+16,CBCR15,
        BEK+18b,CCF+15a,CKM+18,
        SRVK10,Voe11,KRV08,
        HMSNRW16,Naz17,RRRW15b,
        BBC+18,HHK+13,HHK+15,
        HRW15,GLRR15,BDL+18,
        BJRW18,Wei12,Hoe18,
        BEK+18a, BEK+19, CGR09, 
        GR11, Kra10]
---

[//]: # Bem: einige Key's absichtlich nicht im Text refernziert: CGR09, GR11, Kra10

## Summary of Most Relevant Topic Papers

Identifying or engineering appropriate languages for the various activities
in software and systems development is one of the most important issues in
software engineering. Even programming languages are still subject to
improvement. For many other activities, such as architectural design,
behavioral modeling, and data structure specifications, we use the general
purpose [Unified Modeling 
Language (UML) ](/research/Unified-Modeling-Language) 
[[Rum16]](#Rum16) [[Rum17]](#Rum17). Nevertheless, UML and its tooling still are much less
elaborate and hence subject to extensive syntactic, semantic, and methodical
improvement.

In various domains, however, it is more appropriate to employ [Domain Specific 
Languages (DSLs)](/research/Domain-Specific-Languages) to enable
non-software developers specifying properties, configuring their systems,
etc. in terms of established domain concepts and corresponding language
elements. DSLs have already achieved a significant degree of penetration in industry [[HWR14]](#HWR14).
With the upcoming age of digitization, we thus expect DSLs
to grow even stronger and
therefore also involve increasing effort in their efficient engineering, integration and composition.

Design of a DSL is a complex task, because, on one hand, it needs to be
precise enough for being processed by a computer and, on the other hand,
comprehensible by humans. Monolithic design of a language can already
benefit from methods for language engineering in the small including design
guidelines and tooling. The [MontiCore language workbench](/research/MontiCore) 
[[HKR21]](#HKR21) is such
a tool to assist development of languages. It provides, e.g.,
techniques for an integrated definition of concrete and abstract syntax of a
language [[KRV07b]](#KRV07b) [[Kra10]](#Kra10), but is much more a framework for
compositional language design [[KRV10]](#KRV10) [[HRW18]](#HRW18).



## Language Engineering in the Large

To efficiently engineer languages in the large, we need all the help that we
can get. As software languages are software too, it is not surprising that
the following techniques largely discussed in [[CFJ+16]](#CFJ+16) help:


1. Elaborate tooling to assist language development.
2. Reuse of tools, e.g. for parsing and for parameterizable pretty printing.
3. **Reuse** of **language components**.
4. **Decomposition** of the language to be designed in smaller components.
5. **Refinement** and **adaptation** of existing languages.
6. **Automatic derivation** of new languages from existing ones.

To improve understanding of language engineering, we have defined the terms
**language** and **language components** in [[CBCR15]](#CBCR15) 
[[BEK+18b]](#BEK+18b) and how to
capitalize on this from a global perspective in [[CCF+15a]](#CCF+15a) 
[[CKM+18]](#CKM+18). Additionally, we discuss
the possibilities and the challenges using **metamodels for language
definition** [[SRVK10]](#SRVK10), identifying, for instance, the need for
metamodel merging and
inference, as well as assistance for their evolution .

Of course, we also 
consider variability for modeling languages and have investigated a method to 
model syntactic language [variability](/research/Variability) through **language 
product lines** 
[[BEK+18a]](#BEK+18a) 
[[BEK+18b]](#BEK+18b) 
[[BEK+19]](#BEK+19).


## Language and Tool Composition

**Divide and conquer** is one of the core concepts for managing large and
complex tasks.
Language design therefore needs to be decomposed along several dimensions:
First, we want to decompose the language in language
components [[BEK+18b]](#BEK+18b).
Some of these components, for example the basic language for full qualified
names, constants, expressions, or imperative statements, should be designed
in a reusable form.

In a second dimension, we decompose the tooling along the activities
(front-end: model processing, context conditions, internal transformations,
backend: printing) and decompose each of these activities along the
individual language components. MontiCore 3 [[HR17]](#HR17), e.g., is able to
decompose the front-end language processing along the decomposition of the
language itself [[KRV10]](#KRV10) [[Voe11]](#Voe11) [[KRV08]](#KRV08) 
[[HMSNRW16]](#HMSNRW16) [[Naz17]](#Naz17) [[RRRW15b]](#RRRW15b). 

MontiCore also
assists modular decomposition of the backend code generation based on
different targets and different sublanguages [[RRRW15b]](#RRRW15b) 
[[BBC+18]](#BBC+18) (see also [Compositionality/Modularity of 
Models](/research/Compositionality)).


## Language Derivation

**Language derivation** is, to our belief, a promising technique to **develop new
languages** for a specific purpose that are relying on existing basic
languages [[HHK+13]](#HHK+13) [[HHK+15]](#HHK+15) [[HRW15]](#HRW15) 
[[GLRR15]](#GLRR15) [[BDL+18]](#BDL+18) [[BJRW18]](#BJRW18).
Formally, a language derivation is a mapping **D**, that maps a base language **B**
into another language **D(B)**. This mapping produces new languages, not models.
To automatically derive such new languages **D(B)** or, at least, assist such
derivation with tools, the base language **B** itself has to be modeled
explicitly, for instance as a metamodel or as a grammar together with its
well-formedness rules in a reasonably explicit form. Thus, language
derivation can be partially understood as model transformation on a
metalanguage. We, so far, successfully conceived three language derivation
techniques.


#### Transformation Languages in Concrete Syntax

Instead of using a fully generic transformation language that is applicable
to a base language **B**, we automatically derive a transformation language **T(B)**
that merges elements of the concrete syntax of **B** with generic - and thus
reusable - elements for defining transformations on **B** models. The result is
a comprehensible and easy applicable transformation language that modelers
find familiar, because it systematically reuses the syntax of the base
language **B**. Automatic derivation of such transformation languages using
concrete syntax of the base language is described in
[[HRW15]](#HRW15) [[Wei12]](#Wei12) [[Hoe18]](#Hoe18).

As the language derivation operator **T** is applicable to any language, we
have successfully applied it to, e.g., class diagrams, object diagrams, MontiArc,
Automata. The operator **T** not only derives the new languages **T(B)**, but
the tool infrastructure behind **T** also generates the transformation engine
necessary to execute transformations defined in **T(B)** (which finally transform
models of the base language **B**).


#### Tagging Languages

A **tagging model** is used in the context of a base model **M** and adds additional
information in form of tags to the elements defined in **M**. This, for example,
can be used to add technology-specific information or advice on how code
generation, model merging and other algorithmic transformations have to
handle the tagged elements. Tags can, for example, instruct a persistence
generator, whose data model classes are mapped into single transportable
DAOs or add security restrictions to data objects. For activity diagrams,
tags can describe, where to find the appropriate activity implementation,
etc.

Tagging models share the idea of UML's stereotypes, but are not part of the
base model. Instead, the separate tagging model references the base model. This
has the advantages (1) that the base model can be reused without technology
specific pollution, (2) several different tag models are possible for the same
base model in different technological spaces (e.g., iPhone, Android or Windows
clients), and (3) a tag model can also be reused for different base models.

A **tagging language** is the language of the tagging models and thus is highly
dependent on the base language that it tags (i.e., it must be aware of the
modeling elements of the base language). [[GLRR15]](#GLRR15) describes how to
systematically derive tagging languages from a base language and how code for
processing tagging models can be generated automatically.

This also rests on the concept of a tag definition language, which allows
defining the possible form and values that tags may have, as well as which
kind of model elements they can be applied to and therefore acts as type
definition for tags.


## Delta Languages

Another way of deriving new languages from
existing languages is described in [[HHK+15]](#HHK+15) and [[HHK+13]](#HHK+13), where a
base language **B** is used to derive a delta language **Delta(B)**. The delta
language **Delta(B)** enables to explicitly describe differences between a base
model of **B** and the model variant (also of **B**). This helps to define system
variability in a bottom-up fashion. A delta model describes which model
elements are added, modified, or deleted on the base model. Thus delta
approach is popular for the management of Variability and Software Product
Lines (SPL) (see [Variability and Software Product Lines 
(SPL)](/research/Variability)).
Again the delta operator transforms a base language **B** into a language **Delta(B)**
allowing to describe delta models. Each delta model can be applied individually
and therefore n deltas amount to 2^n variants (modulo application
dependencies
and orders).

Delta language techniques are **specifically suited for architectural languages**,
such as MontiArc to add and modify components as well as channels, but also
have been **applied to Simulink in an industrial context**.


{% include trennlinie.html %}

## Key Statements
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

{% include trennlinie.html %}

## Selected Topic-Specific Publications

<div class="publications">
  {% assign sortedKeys = page.keys | sort %}
  {% for k in sortedKeys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

{% include trennlinie.html %}

## Related Topics
- [Compositionality/Modularity of Models](/research/Compositionality)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/research/Evolution)
- [MontiCore - Language Workbench](/research/MontiCore)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
