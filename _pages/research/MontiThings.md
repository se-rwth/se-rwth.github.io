---
layout: page
title: MontiThings - Modeling the IoT
permalink: /research/MontiThings/
description:
img:
importance: 1
keys: [KRS+22, KMR21, AKK+21, KMR+20]
---

[//]: # Bem: Die folgenden Papiere sind noch nicht veröffentlicht und fehlen hier (Konferenznamen, keine Keys): SEAA22, TIOT

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsBanner.png 
         title: "MontiThings Logo" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

## MontiThings IoT Modelling Language

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsExample.png 
         title: "Example of MontiThings' graphical syntax " 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

MontiThings is ecosystem for model-driven development of IoT applications. 
The core of MontiThings is a domain-specific language for the specification of IoT applications. 
Like MontiArc, this language describes IoT applications as a component-and-connector (C&C) architecture. 
Applications consist of components that can exchange data with other components via (directed and typed) ports that are linked by connectors.
Via sensor/actuator ports (shown by black filling), ports can also interact with the hardware of the IoT devices and, for example, accept a sensor value.
The behavior of components can be described in one of four ways:

- using statecharts
- using an IoT-focussed Java-like language
- using handwritten C++ Code
- by instantiating and connecting other components

## Ecosystem Overview

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsProcess.png 
         title: "Overview of MontiThings" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />





<center>
<div class="row" style="width: 100%; max-width: 1000px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsOverview.png 
         title: "Overview of MontiThings" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


## Adaptive Device-Owner-Controlled Deployment 

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsDeployment.png 
         title: "Overview of MontiThings' Deployment Process" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


## Failure Detection, Analysis and Recovery

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsFailureExample.png 
         title: "Example of application failures invisible in the model" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


<center>
<div class="row" style="width: 100%; max-width: 1000px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsFailureRecovery.png 
         title: "Example of one of MontiThings' failure recovery strategies" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


{% include trennlinie.html %}

## Key Statements
1. IoT software architectures can be modeled in hierarchically decomposed 
systems using message passing.
2. To achieve the flexibility required by future IoT app stores, the connection between high-level application software and low-level hardware drivers shall be established at runtime.
3. By generating Prolog code to compute the deployment, device owners can not only set rules for the deployment, but also be given modification proposals (such as buying new hardware) in the case of unfulfillable rules.
4. When IoT applications are developed using model-driven techniques (such as with C&C architectures), the reliability of the application can be increased by providing error analysis and handling systematically by the code generator.

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
- [Automotive](/research/Automotive)
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Model-based Cloud Computing Applications](/research/Cloud)
- [Enterprise Information Systems](/research/Enterprise-Information-Systems)
- [Cyber-Physical Systems (CPS)](/research/Cyber-Physical-Systems)
- [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering)
- [Generative Software Engineering](/research/Generative-SE)
- [Modeling Software Architecture](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Robotics Architectures and Tasks](/research/Robotics)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
