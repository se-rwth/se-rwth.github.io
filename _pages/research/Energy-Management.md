---
layout: page
title: Smart Energy Management
permalink: /research/Energy-Management/
description: 
img: 
importance: 1
keys: [FPPR12,KPR12,FLP+11b,KLPR12]
---

## Summary of Most Relevant Topic Papers

In the past years it became more and more evident that saving energy and 
reducing CO2 emissions is an important challenge. Today housing, offices, shops 
and other buildings are responsible for 40% of the overall energy consumption 
and 36% of the EU CO2 emissions. Therefore, the EU 2020 Climate & Energy package 
sets three key objectives compared to 1990:

1. 20% reduction in EU greenhouse gas emissions.
2. Raising the share of EU energy consumption produced from renewable resources 
to 20%.
3. 20% improvement in the EU's energy efficiency.

Thus, the management of energy in buildings as well as in neighborhoods
becomes equally important to efficiently use energy.
Improvements in this field can be found at multiple scales: Smart Grids,
Demand-Response Systems, Energy Efficient Neighborhoods, Energy Efficient
Buildings, User awareness, Micro- and Mini Renewable Energy Sources, to name
a few. While there has been a lot of research on increasing the efficiency of
single devices and also of single buildings, there is a huge need for ICT
based approaches within this field to integrate and combine the heterogeneous
approaches. By such an integrated solution the efficiency can be raised even
more.

Within several research projects we developed **methodologies and solutions for
integrating heterogeneous systems at different scales**. Starting with single
buildings we developed in collaboration with the Synavision GmbH and the
Technical University Braunschweig the ICT tool **Energy Navigator** (see
the following figure).

<center>
<div class="row" style="width: 80%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/ena_screen.png 
           title: "StruScreenshot of the Energy Navigator software" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

During the design phase, the Energy Navigator's *Active Functional
Specification (AFS)*
[[FPPR12]](#FPPR12), [[KPR12]](#KPR12)
is used for technical specification
of building services already.
Resulting from a lack of process integration the AFS can close the loop
between modeling the structure and behavior of the building and its
facilities, measuring operational data from sensors, matching model and
operational data during analysis and reporting of the results (see
the following figure). The results can be reused to adapt the model or to
find faults in the implementation.

<center>
<div class="row" style="width: 40%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/ena_loop.png 
           title: "The Energy Navigators' process loop" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

Within the Energy Navigator a DSL is used to enable the domain expert to
express his specific domain knowledge via first class language concepts.
These concepts include **Rules, Functions, Characteristics, Metrics, Time
Routines and States**. Proposed by the DIN EN ISO 16484 a state based
approach should be used to describe the functional behavior of facilities.
We adapted the well known concept of state machines to be able to describe
different states of a facility and to validate it against the monitored
values [[FLP+11b]](#FLP+11b). We show how our data model, the constraint rules and
the evaluation approach to compare sensor data can be applied [[KLPR12]](#KLPR12).

Moving up the scale we investigated several existing approaches for **energy
efficient neighborhoods** that aim at moving from a local, building specific
optimum to a more global optimum. By efficiently using results of simulation
and optimization calculated optimal set points for local consumption and
generation can be utilized. Therefore, information from several heterogeneous
data sources, such as single sensor data, structural data, data on installed
devices, geospatial data or weather data is needed. Based on existing
approaches we developed a **Neighborhood Information Model** that
follows a **metamodel-based** approached and utilized code generation techniques
to automatically generate adapters between heterogeneous data models. Following
this approach we are able to fully integrate the data sources on an abstract
level and are still **extensible at runtime**.

Also **Demand Response Systems** are used to distribute energy more equally over
time and enable a consumption during peak loads. We developed a secure high
performance storage that is able to capture sensor data and DR signals.


{% include trennlinie.html %}

## Key Statements

1. We defined a practically used DSL for modeling structure and functionality 
of buildings and facilities using MontiCore.
2. Specification and analysis for buildings, closing the loop in the lifecycle 
of a building.
3. Meta-model based Neighbourhood Information Model to enable integration of 
heterogeneous data.
4. We designed a secure, high-performance storage for Demand-Response Systems 
based on generative technologies from the MontiCore Language Workbench.

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
- [Model-based Cloud Computing Applications](/research/Cloud)
- [Enterprise Information Systems](/research/Enterprise-Information-Systems)
- [Cyber-Physical Systems (CPS)](/research/Cyber-Physical-Systems)
- [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Generative Software Engineering](/research/Generative-SE)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Modeling Software Architecture](/research/Software-Architecture)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
