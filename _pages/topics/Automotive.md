---
layout: page
title: Automotive
permalink: /topics/Automotive/
description: 
img: 
importance: 1
keys: [GRJA12,BR12b,BR12,BBR07,GHK+07,GHK+08,HKM+13,HRRW12,RSW+15]

---

## Summary of Selected Papers
Development of software for automotive systems has become increasingly complex. 
Sophisticated driver assistance, infotainment and Car2X-communication systems as 
well as advanced active and passive safety-systems result in complex, 
software-intensive embedded systems. As these feature-driven subsystems may be 
arbitrarily combined by the customer, a huge amount of distinct variants needs 
to be managed, developed and tested. Thus, we are carrying out numerous projects 
in the automotive software engineering, here we concentrate on three aspects: 
(1) Autonomous driving; (2) Modeling of functional; and (3) Logical 
architectures and on variability.

To understand all these features, we describe in [[GRJA12]](#GRJA12) a 
requirements management that connects with features in all phases of the 
development process helps to handle complex development tasks and thus 
stabilizes the development of automotive systems.

Autonomous driving
Quality assurance, especially of safety-related functions, is crucial to 
successfully deploy autonomous vehicles. In the Carolo project (see 
[[BR12b]](#BR12b),[[BR12]](#BR12) and [Autonomous Driving & Intelligent Driver 
Assistance](/topics/Autonomic-Driving)), we have developed a rigorous test 
infrastructure for intelligent, sensor-based functions through fully-automatic 
simulation (not only visualization) of the car within its surrounding: the city, 
pedestrians and especially other cars [[BBR07]](#BBR07). Beside the simulation 
of a complete autonomous car with its sensors and actors, the simulation 
environment may also be used to test dedicated subsystems without any real 
hardware involved. By producing sensor input from the simulation and comparison 
of expected and actual behavior, subsystems may be automatically validated and 
thus developed in an agile way.

## Modeling logical architecture: function nets
The conceptual gap between requirements and the logical architecture of a car is 
closed in [[GHK+07]](#GHK+07) and [[GHK+08]](#GHK+08). Here, feature views 
modeled as a function net are used to implement the mapping between 
feature-related requirements and the complete logical architecture of a car.

## Variability of car software
Automotive functions that may be derived from a feature view are often developed 
in Matlab/Simulink. As variability needs also to be handled in development 
artifacts, we extended Matlab/Simulink with delta modeling techniques (see also 
[Variability & Software Product Lines (SPL)](/topics/Variability)). A core 
Simulink model represents the base variant that is transformed to another 
variant by applying deltas to it. A delta contains modifications that add, 
remove, or modify existing model elements. Thus, features of an automotive 
system may be developed modularly without mixing up variability and 
functionality in development artifacts [[HKM+13]](#HKM+13). New delta models 
that derive new variants may be added bottom-up without the need for a fully 
elaborated feature model.

In practice, product lines often originate from a single variant that is copied 
and altered to derive a new variant. In [[HRRW12]](#HRRW12), we provide means to 
extract a well defined software product line from a set of copy and paste 
variants. This way, further variant development is alleviated, as new variants 
directly reuse common elements of the product line. To identify potential 
product lines and variants, 
[[RSW+15]](https://www.se-rwth.de/publications/Behavioral-Compatibility-of-Simulink-Models-for-Product-Line-Maintenance-and-Evolution.pdf) 
describes an approach to use logical and model checking techniques to identify 
commonalities and differences of two Simulink models describing the same control 
device in different variants and thus allows to understand incompatibilities.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Summary
1. A consistent requirement management leads to a more stable and predictable 
development of automotive systems.
2. Various functional and architectural variants need to be explicitly managed 
in all phases of the development cycle.
3. Agile development techniques may be used by introducing continuous tests 
based on automatic simulations.
4. The quality of autonomous driving cars and smart assistance systems is 
assured using automatic simulations.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Cloud Computing & Enterprise Information Systems](/topics/Cloud)
- [Cyber-Physical Systems (CPS)](/topics/Cyber-Physical-Systems)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [Robotics](/topics/Robotics)
- [Variability & Software Product Lines (SPL)](/topics/Variability)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt=""
  title="Trennlinie">

## Selected Related Publications

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>