---
layout: page
title: Generative Software Engineering
permalink: /research/Generative-SE/
description:
img:
importance: 1
keys: [Rum12,Rum11,Rum16,Rum17,
Sch12,Hab16,HRR12,AMN+19,
KRV10,GKR+06,KRV06,GKRS06,
GHK+15,GHK+15a,Wei12,HRW15,
Hoe18,HHR+15,AHRW17,
Rum04c,Rum03,Rum02]
---

## Summary of Most Relevant Topic Papers

We believe that
**modeling will only become an integral part of the process in many industrial
projects**, if **automatic derivation of executable code** and **smooth integration
with handwritten code** is a standard feature of its tooling.

In [Agile Model-Based Software Engineering](/research/Agile-MBSE), we clarify that generating
software is an important capability for a tooling infrastructure that
successfully assists modeling in the development process.
We therefore examined various aspects of generation. For instance, in
[[Rum12]](#Rum12) [[Rum11]](#Rum11) [[Rum16]](#Rum16) [[Rum17]](#Rum17)
(see also [MBSE website](http://mbse.se-rwth.de/))
we define the language family UML/P (a
simplified and semantically sound derivative of the UML) which is designed
specifically for product and test code generation from class diagrams,
object diagrams, statechart and sequence diagrams as shown in this figure:

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/UMLP.jpeg title: "UMPL/P" class: 
        "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

We developed several generators, e.g.,
a flexible, modular and reusable **generator for
the UML/P** [[Sch12]](#Sch12),
a generator for generating simulation components out of the
architectural analysis and design language MontiArc [[Hab16]](#Hab16)
(used for the cloud as well as cyber-physical systems (CPS),
such as cars or robotics [[HRR12]](#HRR12),
see [MontiArc](/research/Software-Architecture))
or the generator MontiGEM [[AMN+19]](#AMN+19) for enterprise information systems
(see [MontiGem](/research/MontiGem)).
All of them are based on the MontiCore language workbench [[KRV10]](#KRV10) [[GKR+06]](#GKR+06).
With MontiCore we are able to easily define extensions of languages as well
as new combinations and thus are able to reuse the defined UML/P
sub-languages and generation techniques in various applied projects.

Tooling and especially generators will only be successful in practical projects,
if they have an appropriate impact on the development process, i.e., **development
processes need to be adapted** or completely reshaped according to the
availability of a generator. In [[KRV06]](#KRV06), we discuss additional roles
necessary in a model-based software development project (while other roles
either vanish or their workload can greatly be reduced).

Working with **generated and handwritten code** leads to
challenges related with continuous repetitive generation
(the generation gap problem).
In [[GKRS06]](#GKRS06) [[GHK+15]](#GHK+15) [[GHK+15a]](#GHK+15a) we discuss mechanisms
to keep generated and handwritten code
separated, while integrating them in the product and enabling the repetitive
generation (which is much more valuable than one-shot generation).

For various purposes, including preparation of a model for generation, it is
helpful to define **model transformations**. We are able to create
transformation languages in concrete syntax, that reuse the underlying
language concepts [[Wei12]](#Wei12) [[HRW15]](#HRW15) [[Hoe18]](#Hoe18). Even more important, we describe
how to systematically derive a transformation language in concrete syntax.
Since then, we have applied this technique successfully for several UML
sub-languages and DSLs [[HHR+15]](#HHR+15) [[AHRW17]](#AHRW17) [[Hoe18]](#Hoe18)
(see [Evolution & Transformation of Models](/research/Evolution)).

Sometimes **executability** can be a disadvantageous characteristics for a
modeling language, especially when people start modeling concrete algorithms
instead of abstract properties. We therefore discuss needs and advantages of
executable modeling with UML in agile projects in [[Rum04c]](#Rum04c), how to
apply UML for testing in [[Rum03]](#Rum03) as well as the advantages and perils
of using modeling languages for programming in [[Rum02]](#Rum02).


{% include trennlinie.html %}

## Key Statements
1. Generation of code and tests is a core capability for model-based software
   engineering (MBSE).
2. Generators depend on the source modeling language, a precise clarification of
   semantic variants and the target infrastructure, including frameworks that are
   generated against.
3. A generator consists of a transformation engine (model source to code) and a
   runtime environment.
4. A domain specific generator can add a high amount of functionality to the
   target that was not "modeled" in the source.
5. [Agile projects](/research/Agile-MBSE) require generators to be incremental,
   compositional and therefore quick. Thus, big monolithic tools (storing all in
   one model) cannot be used in agile projects.
6. The [MontiCore](/research/MontiCore) language workbench provides infrastructure
   for generative software development.

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
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Compositionality/Modularity of Models & Languages](/research/Compositionality)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/research/Evolution)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [UML/P](/research/UML-P)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
