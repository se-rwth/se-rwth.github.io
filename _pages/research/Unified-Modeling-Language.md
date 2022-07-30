---
layout: page
title: Unified Modeling Language (UML)
permalink: /research/Unified-Modeling-Language/
description:
img:
importance: 1
keys: [KER99, Rum16, Rum17, Sch12,
GR11, BHP+98, BCGR09, BCGR09a,
BCR07b, BCR07a, CGR08, MRR11e,
MRR11c, MRR11f, MRR11a, MRR11d, GRR10,
FHR08, BGH+98b, Rum04c,Rum02,
PFR02, FEL+98, SRVK10,Rum12,Rum11,
JPR+22,
Rum03,EFLR99a]
---


## Summary of Most Relevant Topic Papers

Challenges for the standardization of the UML, such as problems for
defining a semantics for the entire UML, have been well-known for a
long time [[KER99]](#KER99). Thus, many of our contributions build on
the UML variant UML/P  which is suitable for programming. UML/P is
described in [[Rum16]](#Rum16) and [[Rum17]](#Rum17)
respectively [[Rum11]](#Rum11) and [[Rum12]](#Rum12)
and implemented in
a first version in [[Sch12]](#Sch12)
(see [UML/P - Executable Modeling with UML](/research/UML-P)).

Defining variants of a modeling language in a systematic way is useful
for adapting the language to domain or project specific needs. Thus,
**semantic variation points** of the UML are first discussed in
[[GR11]](#GR11). It discusses formal semantics for UML
[[BHP+98]](#BHP+98) and describes UML semantics using the *"System
Model"* [[BCGR09]](#BCGR09), [[BCGR09a]](#BCGR09a), [[BCR07b]](#BCR07b)
and [[BCR07a]](#BCR07a). Semantic variation points have, e.g., been
applied to define class diagram semantics [[CGR08]](#CGR08).

A precisely defined **semantics for variations** is applied, when
checking variants of class diagrams [[MRR11e]](#MRR11e) and objects
diagrams [[MRR11c]](#MRR11c) or the consistency of both kinds of
diagrams [[MRR11f]](#MRR11f). These concepts are also applied to
activity diagrams [[MRR11a]](#MRR11a) which allows us to check for
semantic differences of activity diagrams [[MRR11d]](#MRR11d). The
basic semantics for ADs and their semantic variation points is given in
[[GRR10]](#GRR10).

Other important questions are how to **ensure and identify model
quality** [[FHR08]](#FHR08), how models, views and the system under
development *correlate* to each other [[BGH+98b]](#BGH+98b) and how to
use modeling in **agile development projects**
[[Rum04c]](#Rum04c)[[Rum02]](#Rum02). The figure below demonstrates the
principal forms of uses of UML models in agile development projects.
The exemplary diagrams, namely object diagrams and sequence diagrams,
are used for test case definition, whereas the more complete
diagrams are used for code generation (see also
[Generative Software Engineering](/research/Generative-SE)).

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/UMLP.jpeg title: "UMPL/P" class: 
        "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


The idea of **adaption and extension** of the UML in order to better
suit the needs of specific domains or settings, is another important
aspect. [[PFR02]](#PFR02) describes product line annotations for UML.
More general discussions and insights on how to use meta-modeling for
defining and adapting the UML are included in [[EFLR99a]](#EFLR99a),
[[FEL+98]](#FEL+98) and [[SRVK10]](#SRVK10).

To use UML not only for analysis but also for programming has an impact
on the development process. To understand the *implications of
executability* for UML, we discuss *needs and advantages* of
executable modeling with UML in *agile projects* in
[[Rum04c]](#Rum04c), how to *apply UML for testing* in
[[Rum03]](#Rum03) and the *advantages and perils of using modeling
languages for programming* in [[Rum02]](#Rum02).

Many of the above mentioned insights to UML are now also transferred to the
Systems Modeling Language SysML 2.
This includes also a close examination of the SysML [[JPR+22]](#JPR+22).

## Key Statements

1. UML is a big language with many forms of uses.

2. UML needs to be adaptable and extensible, but also subsets
   selectable.

3. Semantic variation points can precisely be defined and used for
   generation as well as for high-level analysis.

4. Tooling is necessary to use UMl in agile projects.

5. Insights gained from UML language definition and methodical use can be transferred to SysML.

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
- [Evolution & Transformation of Models](/research/Evolution)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [UML/P](/research/UML-P)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
