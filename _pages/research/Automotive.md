---
layout: page
title: Automotive
permalink: /research/Automotive/
description: 
img: 
importance: 1
keys: [GRJA12,GHK+07,GHK+08,
        BR12b,BR12,BBR07,
        DGH+19,KMS+18,HKM+13,
        HRRW12,KRR+16,RRS+16,
        RSW+15,KKR19]
---

## Summary of Most Relevant Topic Papers

Development of software for automotive systems has become increasingly
complex in the past years. Sophisticated driver assistance,
infotainment and Car2X-communication systems as well as advanced active
and passive safety-systems result in complex embedded systems. As these
feature-driven subsystems may be arbitrarily combined by the customer,
a huge amount of distinct variants needs to be managed, developed and
tested. While we are carrying out in numerous projects in the
Automotive domain, here we concentrate on three aspects: Autonomic
driving, modeling of functional and logical architectures and on
variability. To understand all these features in [[GRJA12]](#GRJA12) we
describe requirements' management that connects with features in all
phases of the development process helps to handle complex development
tasks and thus stabilizes the development of automotive systems.

## Autonomous driving

Quality assurance, especially of safety-related functions, is crucial to
successfully deploy autonomous vehicles. In the Carolo project (see
[[BR12b]](#BR12b),[[BR12]](#BR12) and [Autonomous Driving & Intelligent Driver
Assistance](/research/Autonomic-Driving)), we have developed a rigorous test
infrastructure for intelligent, sensor-based functions through fully-automatic
simulation (not only visualization) of the car within its surrounding: the city,
pedestrians and especially other cars [[BBR07]](#BBR07). Beside the simulation
of a complete autonomous car with its sensors and actors, the simulation
environment may also be used to test dedicated subsystems without any real
hardware involved. By producing sensor input from the simulation and comparison
of expected and actual behavior, subsystems may be automatically validated and
thus developed in an agile way.

## Modeling Logical Architecture: Function Nets

The conceptual gap between requirements and the logical architecture of
a car is closed in [[GHK+07]](#GHK+07) and [[GHK+08]](#GHK+08). Here, feature views
modeled as a function net are used to implement the mapping between
feature-related requirements and the complete logical architecture of a
car.

In a more elaborate version, we have helped a larger car manufacturer
to design their company specific method, **SMaRDT**, that injects
model-based software development for the logical architecture of a car
and connects it with the requirements and the technical implementation.
Furthermore, we have added automatic testing techniques to ensure model
quality from the beginning in [[DGH+19]](#DGH+19) and [[KMS+18]](#KMS+18).


## Variability of Car Software

Automotive functions that may be derived from a feature view are often
developed in Matlab/Simulink. As variability needs also to be handled
in development artifacts, we extended Matlab/Simulink with
Delta-Modeling techniques (see also 
[Variability and SPL](/research/Variability)). A core Simulink
model represents the base variant that is transformed to another
variant by applying deltas to it. A delta contains modifications that
add, remove or modify existing model elements. This way, features of an
automotive system may be developed modular without mixing up
variability and functionality in development artifacts [[HKM+13]](#HKM+13).
New delta models that derive new variants may be added bottom-up
without the need for a fully elaborated feature model.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/DeltaSL.png 
        title: "Screenshot of the Delta-Simulink tool" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

In practice, product lines often origin from a single variant that is
copied and altered to derive a new variant. In [[HRRW12]](#HRRW12), we
provide means to extract a well-defined Software Product Line from a
set of copy and paste variants. This way, further variant development
is alleviated, as new variants directly reuse common elements of the
product line.

Ways to identify potential variants of components for potential product
lines are to use similarity analysis on interfaces [[KRR+16]](#KRR+16), or to
execute tests to identify similar behavior [[RRS+16]](#RRS+16). And a third
approach is described in [[RSW+15]](#RSW+15) that uses logical and model
checking techniques to identify commonalities and differences of two
Simulink models describing the same control device in different
variants. All these techniques allow us to understand incompatibilities
or identify the portion of compatibility of two components respectively
their models.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/auto/Caroline-Recognition.png 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

In [[KKR19]](#KKR19), we introduce a framework for modeling the dynamic
reconfiguration of component and connector architectures
and apply it to the domain of cooperating vehicles.

{% include trennlinie.html %}

## Key Statements
1. A consistent requirement management leads to a more stable and predictable 
development of automotive systems.
2. Various functional and architectural variants need to be explicitly managed 
in all phases of the development cycle.
3. Agile development techniques may be used by introducing continuous tests 
based on automatic simulations.
4. The quality of autonomous driving cars and smart assistance systems is 
assured using automatic simulations.

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
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Modeling Software Architecture](/research/Software-Architecture)
- [Robotics Architectures and Tasks](/research/Robotics)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
