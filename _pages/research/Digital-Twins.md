---
layout: page
title: Digital Twins and Digital Shadows in Engineering and Production
permalink: /research/Digital-Twins/
description:
img:
importance: 1
keys: [BMR+22, DHM+22, BDJ+22, MPRW22, BHK+21, BDR+21,
    KMR+20, BBD+21b, BBD+21a, DMR+20, BDH+20]
---

## Summary and Definitions of Most Relevant Topic Papers

<img style = "padding-left: 10px;" src="{{ 
'/assets/img/research/digitalTwins/DT.Perspectives.png' | relative_url }}" 
width = "45%" alt="" title="Digital Twin Perspectives" align="right">


There exists a plethora of definitions for **Digital Twins** (DTs),
Although there is a rough convergence,
there is little consensus about what a digital twin actually is.
The main weaknesses [[BMR+22]](#BMR+22) about the available definitions are
that they are:
1. ambiguous, by deferring to another undefined term;
2. narrow, by focusing on specific use cases, domains, or technologies;
3. underspecified, as they 
   fall short on discussing the role of models and additional information, 
   characteristics, and functionalities a DT has over its physical 
   object; or
4. utopian, due to all-encompassing aspirations.

As none of the found definitions fit, 
we have proposed generally and especially in the RWTH Cluster of 
Excellence "Internet of Production" [[BDJ+22]](#BDJ+22)
the following definition:

**Definition**: A **digital twin** of a system consists of
* a set of **models** of the system,
* a set of **digital shadows**, and
* provides a set of **services** to use the data and models purposefully 
with respect to the original system. (from [[DMR+20]](#DMR+20))

To be able to create a digital twin requires that we have observable elements 
in the physical world that can be monitored, sensed, or actuated and 
controlled.

The *set of models* helps to understand the system in the physical
world, e.g., structure, behavior, physical, geometrical or mathematical models.
These models can be, e.g., used to create the digital twin or to compare the 
current status of the twin with planned states.

**Definition**: A **digital shadow** includes
* a set of contextual data-traces and/or 
* their aggregation and abstraction collected concerning a system 
  for a specific purpose with respect to the 
  original system. (from [[BBD+21b]](#BBD+21b))

Within [[BBD+21b]](#BBD+21b), we present a conceptual model, 
give details on each concept
and provide an example from the production domain.
Following this definition, a digital shadow is
a passive set of data [[BDJ+22]](#BDJ+22) which is an information source about
a system's state and history.
The shadows are collected, filtered, and reduced for their purpose in
varying forms of abstractions and are purely digital artifacts produced by a 
(physical) system.
We can use, e.g., process mining algorithms for aggregating digital shadows 
from observed data [[BDJ+22]](#BDJ+22).
Moreover, shadows may contain information from different perspectives, e.g., 
systems (physical and organizations), processes, products, and humans.

The provided *services* during runtime of the digital twin
might include process mining, artificial intelligence, simulation
and predictive control services.
Process mining techniques can be used within DTs as services to further 
improve and adapt the used knowledge.
Artificial intelligence services help to realize real-time decisions and 
explainable AI within decision support helps to reduce human errors in 
decision making.
Services to control the physical object need to send execution commands 
via APIs to the physical object and are often related to 
self-adaptiveness [[BBD+21a]](#BBD+21a).

With a focus on the digital shadow and their use, we have in
[[BDR+21]](#BDR+21)
also investigated what the economic implications and
new business models of the use of digital twin services will be.

To visualize relevant information, an interface for domain experts is needed,
which leads us to the term 
 **digital twin cockpit**. 
  
**Definition**: 
A digital twin cockpit is the user interaction part (UI/GUI) of a 
digital twin.
It provides the graphical user interface for
visualizations of its data organized in digital shadows and models, and
the interaction with services of the digital twin, and thus
enables humans to access, adapt and add information and
monitor and partially control the physical system. (from [[BMR+22]](#BMR+22))

A cockpit is, by definition, a part of the digital twin, and  can be seen both
as a special service provided by the digital twin and an integrative front-end
component for various specific services that the digital twin provides.
A cockpit visualizes various forms of data, which includes, e.g., digital 
shadows, any form of data received from third-party systems, all kinds of data
and commands entered by the humans using the cockpit and models of the physical
system or the operation processes of the physical system.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/digitalTwins/DTC.Process.png 
           title: "Generating digital twin cockpits from models" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

A specific kind of a digital twin cockpits is a
**Process-Aware Digital Twin Cockpit (PADTC)**.  

**Definition**:
A **Process-Aware Digital Twin Cockpit (PADTC)** is a
digital twin cockpit that additionally provides functionality to handle 
explicated processes of the 
physical object and its' context. (from  [[BMR+22]](#BMR+22))


A PADTC is also a digital twin cockpit but has a stronger focus on 
processes, which
are explicitly defined using appropriate process definition languages.
A PADTC knows the allowed processes (in the form of models), the current status
of these processes (in the form of status data), and
the history of these processes states and executed actions (in the forms of 
data lakes).
Processes describe the steps needed to be carried out by (1) the physical 
object, (2) the digital twin, or (3) are expected to be executed by the 
context, which includes humans and other physical objects respectively their 
digital twins.
A process may have several active participants, but not all of those need to be 
participating in each process definition, which allows various forms of 
automation of processes. Thus, a process step may be executed 
automatically by the 
physical and digital twiins together, 
or even by one of them only.
Data processing, e.g., is digital twin only activity.
In addition, it a process step may be executed by physical objects 
of the neighboring context,
may be executed by humans involved, or
may be executed by humans together with both twins.

Besides these foundations of digital twins, we have further investigated 
which DSLs are relevant for the engineering of Digital Twins,
self-adaptive digital twin architectures [[BBD+21a]](#BBD+21a),
how to use 
[Generative Software Engineering](/research/Generative-SE) for 
creating digital twin architectures [[BDH+20]](#BDH+20),
how to generate
interfaces between a cyber-physical system and its DT [[KMR+20]](#KMR+20),
how to derive digital twin cockpits [[DMR+20]](#DMR+20) from models using 
the [MontiGem](/research/MontiGem) generator, and
how to use process prediction within digital twins [[BHK+21]](#BHK+21). 
Other research focuses on the creation of
low-code platforms for model-driven digital twins [[DHM+22]](#DHM+22) or
sustainable digital twin engineering for the production domain.
 

To realize digital twins and their cockpits is an increasingly complex task
that enforces a high degree of automation for
creating them. Within [[BMR+22]](#BMR+22), we have presented a
low-code development approach
that reduces the amount of hand-written code needed and uses
process mining techniques to derive PADTCs.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/digitalTwins/DT.SoS.png 
           title: "Composition and Integration of Digital Twin Systems-of-Systems" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

As such digital twins can exist for various domains, perspectives and
levels of detail, it is interesting to investigate how to combine
such digital twins in systems-of-systems.
Integration challenges
for digital twin systems-of-systems [[MPRW22]](#MPRW22)
include, e.g., the horizontal integration of
digital twin parts, the composition of DTs for different perspectives, or
how to handle different lifecycle representations of the original system.

{% include trennlinie.html %}

## Key Statements

1. A digital twin of a system consists of a set of models of the system,
 a set of digital shadows, and
 provides a set of services to use the data and models purposefully
  with respect to the original system.
2. A digital shadow includes
   a set of contextual data-traces and/or their aggregation and abstraction
   collected concerning a system for a specific purpose with respect to the
   original system.
3. To use model-driven methods for the engineering of digital twins 
reduces the development time and increases reuse.
4. To use low-code platforms to create model-driven digital twins 
allows us to reuse models and fastens the engineering of digital twins.

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
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [UML for Programming - UML/P](/research/UML-P)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Model-Based Assistive Systems](/research/Model-Based-Assistive-Systems)
- [Models in Enterprise Information System Development](/research/Enterprise-Information-Systems)
- [MontiGem - Generating Enterprise Management Systems](/research/MontiGem)
- [MontiThings](/research/MontiThings)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
