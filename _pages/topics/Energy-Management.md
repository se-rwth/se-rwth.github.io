---
layout: page
title: Smart Energy Management
permalink: /topics/Energy-Management/
description: 
img: 
importance: 1
keys: [FPPR12,KPR12,FLP+11b,KLPR12]
---
## Summary of Selected Papers
In the past years it became more and more evident that saving energy and 
reducing CO2 emissions is an important challenge. Today housing, offices, shops 
and other buildings are responsible for 40% of the overall energy consumption 
and 36% of the EU CO2 emissions. Therefore, the EU 2020 Climate & Energy package 
sets three key objectives compared to 1990:

1. 20% reduction in EU greenhouse gas emissions.
2. Raising the share of EU energy consumption produced from renewable resources 
to 20%.
3. 20% improvement in the EU's energy efficiency.

Thus the management of energy in buildings as well as in neighbourhoods becomes 
equally important to efficiently use the generated energy. Improvements in this 
field can be found at multiple scales: Smart Grids, Demand-Response Systems, 
Energy Efficient Neighbourhoods, Energy Efficient Buildings, User awareness, 
Micro- and Mini Renewable Energy Sources, to name a few. While there has been a 
lot of research on increasing the efficiency of single devices and also of 
single buildings there is a huge need for ICT based approaches within this field 
to integrate and combine the heterogeneous approaches. By such an integrated 
solution the efficiency can be raised even more.

Within several research projects we developed **methodologies and solutions for 
integrating heterogeneous systems at different scales**. Starting with single 
buildings we developed in collaboration with the [Synavision 
GmbH](http://www.synavision.de/) and the [Technical University 
Braunschweig](https://www.tu-braunschweig.de/igs/) the ICT tool **Energy 
Navigator**.

The Energy Navigator's **Active Functional Specification (AFS)** 
[[FPPR12]](https://www.se-rwth.de/publications/The-Energy-Navigator-A-Web-Platform-for-Performance-Design-and-Management.pdf), 
[[KPR12]](https://www.se-rwth.de/publications/Der-Energie-Navigator.pdf) is used 
for technical specification of building services already during the design 
phase. Resulting from a lack of process integration the AFS can close the loop 
between modelling the structure and behaviour of the building and its 
facilities, measuring operational data from sensors, matching model and 
operational data during analysis and reporting of the results. The results can 
be reused to adapt the model or to find faults in the implementation.

Within the Energy Navigator, a DSL is used to enable the domain expert to 
express his specific domain knowledge via first class language concepts. These 
concepts include **Rules, Functions, Characteristics, Metrics, Time Routines and 
States**. Proposed by the DIN EN ISO 16484 a state based approach should be used 
to describe the functional behavior of facilities. We adapted the well known 
concept of state machines to be able to describe different states of a facility 
and to validate it against the monitored values 
[[FLP+11b]](https://www.se-rwth.de/publications/State-Based-Modeling-of-Buildings-and-Facilities.pdf). 
We show how our data model, the constraint rules and the evaluation approach to 
compare sensor data can be applied 
[[KLPR12]](https://www.se-rwth.de/publications/Modeling-cyber-physical-systems-model-driven-specification-of-energy-efficient-buildings.pdf).

Moving up the scale we investigated several existing approaches for **energy 
efficient neighbourhoods** that aim at moving from a local, building specific 
optimum to a more global optimum. By efficiently using results of simulation and 
optimization calculated optimal set points for local consumption and generation 
can be utilized. Therefore information from several heterogeneous data sources, 
such as single sensor data, structural data, data on installed devices, 
geospatial data or weather data is needed. Based on existing approaches we 
developed a **Neighbourhood Information Model** that follows a **meta-model 
based approached** and utilized code generation techniques to automatically 
generate adapters between heterogeneous data models. Following this approach we 
are able to fully integrate the data sources on an abstract level and are still 
**extensible at runtime**.

Also **Demand Response Systems** are used to distribute energy more equally over 
time and enable a consumption during peak loads. We developed a secure high 
performance storage that is able to capture sensor data and DR-signals.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Summary
1. We defined a practically used DSL for modelling structure and functionality 
of buildings and facilities using MontiCore.
2. Specification and analysis for buildings, closing the loop in the lifecycle 
of a building.
3. Meta-model based Neighbourhood Information Model to enable integration of 
heterogenous data.
4. We designed a secure, high-performance storage for Demand-Response Systems 
based on generative technologies from the MontiCore Language Workbench.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Cloud Computing & Enterprise Information Systems](/topics/Cloud)
- [Cyber-Physical Systems (CPS)](/topics/Cyber-Physical-Systems)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Generative Software Engineering](/topics/Generative-SE)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Modeling Software Architecture](/topics/Software-Architecture)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt=""
title="Trennlinie">

## Selected Related Publications

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>