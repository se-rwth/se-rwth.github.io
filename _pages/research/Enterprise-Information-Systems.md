---
layout: page
title: Modelling Enterprise Information Systems
permalink: /research/Enterprise-Information-Systems/
description:
img:
importance: 1
keys: [HKR21, KRV10,MSNRR15a,Loo17,Rot17,
        Rei16,AMN+20a,ANV+18,DHM+22,
        ELR+17,MNRV19,DGM+21,GMN+20]
---

## Summary of Most Relevant Topic Papers

Enterprise Information Systems (EIS) provide information to different user
groups as main system goal. To be more precise, it is important to be able
to create,
read, update and delete data (CRUD). We use model-based methods to
support these functionalities.
Different types of models are used in the context of EIS:
structural models to describe data structures, dynamic models to describe
business processes, functional models to describe software functions or
Graphical User Interface (GUI) models to describe graphical user interfaces.
Usually, these models
are developed using 
[Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages).

Using our experiences in the model-based generation of code with
[MontiCore](/research/MontiCore) [[KRV10]](#KRV10) [[HKR21]](#HKR21),
we developed several generators for data-centric applications.
The following figure shows the main concepts for these approaches:
Models from different DSLs are used as input for the generator in combination
with predefined templates. As an output large parts of the information system
are produced: the databases, data communication and infrastructure as well as
the GUIs for different users and roles. Missing parts have to be added as
handwritten code, such as application logic.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/eis_mbse_overview.png 
        title: "Main concepts of information systems developed with mbse methods" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

The **MontiCore Data Explorer (MontiDEx)** code generator was used
for the automatic generation of customizable, extensible data-centric
business applications from [UML/P](/research/UML-P) Class Diagrams 
[[MSNRR15a]](#MSNRR15a) [[Rot17]](#Rot17).
It processes models to generate data-centric applications in Java and
Java Swing. The department has developed further generators such as
MontiEE [[Loo17]](#Loo17) or MontiWIS [[Rei16]](#Rei16).

The most recent generator, 
**[MontiGem](/research/MontiGem)** [[AMN+20a]](#AMN+20a), was successfully
applied
in an application project for the financial controlling of the chairs of RWTH
Aachen University, the [MaCoCo](/projects/MaCoCo) project [[ANV+18]](#ANV+18). 
With MontiGem, it is
possible to generate large parts of data centric business applications
from a set of models: The
data-structure and communication infrastructure, functions to access,
retrieve and store the data, the GUIs, and parts of the access
control.
Additional transformations from [UML/P](/research/UML-P/) class diagrams
to models for graphical user interfaces [[GMN+20]](#GMN+20)
allow to even reduce the information needed for the generation process. 
MontiGem has, e.g., been used for financial management [[GHK+20]](#GHK+20)
or for creating digital twin cockpits [[DMR+20]](#DMR+20).

Enterprise Information Systems are facing challenges: 
The General Data Protection Regulation (GDPR), in application since May 2018,
marks a new era in data privacy. These regulations are also relevant for EIS
dealing with private data.
Thus, we investigate the architecture of cloud services for
the **Digital Me** in a privacy-aware environment [[ELR+17]](#ELR+17).
Further approaches go beyond architectural aspects: [[MNRV19]](#MNRV19)
discusses a privacy preserving data model and system architecture.
The user-centered view on the system design allows to track who does
what, when, why, where and how with personal data and can make this
information available for users in an information portal.

We have developed a methodology for 
retrofitting generative aspects in existing applications
[[DGM+21]](#DGM+21) to improve the application of
[generative software engineering](/research/Generative-SE/) for
brown-field information systems in practice. 

{% include trennlinie.html %}

## Key Statements
1. Model-based, generative development of enterprise information systems helps to reduce 
development time, increase flexibility and adaptivity.
2. Models can be used for domain and data modeling.
3. Generative approaches for enterprise information systems help to cope with
new challenges such as privacy regulations.
4. A methodology for retrofitting generative aspects in existing applications allows to
replace existing code step-by-step with generated code.

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
- [Energy Management](/research/Energy-Management)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Modeling Software Architecture](/research/Software-Architecture)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [UML/P](/research/UML-P)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)

