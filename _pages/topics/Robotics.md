---
layout: page
title: Robotics
permalink: /topics/Robotics/
description: 
img: 
importance: 1
keys: [RRW12,RRW13c,RRRW15b,THR+13,BBR07,BR12b]
---

## Summary of Selected Papers
We consider modern robotics as a special field of [Cyber-Physical 
Systems](/topics/Cyber-Physical-Systems) (CPS) which is defined by an inherent 
heterogeneity of involved domains, relevant platforms, and real world 
challenges. The engineering of robotics applications requires composition and 
interaction of many software modules. This usually leads to complex monolithic 
software solutions hardly reusable, maintainable, and comprehensible, which 
hampers broad propagation of robotics applications.

Our research in model-driven software engineering for robotics on one hand 
focuses on software architectures to structure reusable units of behavior. On 
the other hand, we concentrate on modeling languages (DSLs) for robotic product 
assembly tasks in industrial contexts as well as planned and unplanned logistic 
tasks. We apply this to indoor robots interacting with humans as well as to 
industrial robots as well as to autonomously driving cars.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Modeling Robotic Application Architectures and Behavior
Describing a robot's software architecture and its behavior in integrated 
models, yields many advantages to cope with this complexity: the models are 
platform independent, can be decomposed to be developed independently by experts 
of the respective fields, are highly reusable and may be subjected to formal 
analysis.

In 
[[RRW12]](https://www.se-rwth.de/publications/A-Requirements-Modeling-Language-for-the-Component-Behavior-of-Cyber-Physical-Robotics-Systems.pdf) 
we have introduced the architecture and behavior modeling language and framework 
MontiArcAutomaton which provides an integrated, platform independent structure 
and behavior modeling language family with an extensible code generation 
framework. MontiArcAutomaton’s central concept is encapsulation and 
decomposition known from Component & Connector Architecture Description 
Languages (ADLs). This concept applied to the modeling language, the code 
generation process and the target runtime to bridge the gap of platform specific 
and independent implementations along well designed interfaces. This facilitates 
the reuse of robot applications and makes their development more efficient.

MontiArcAutomaton extends the ADL [MontiArc](http://www.monticore.de/languages/) 
and integrates various component behavior modeling languages implemented using 
[MontiCore](http://www.monticore.de/). The integration of automata and tables to 
model component behavior are described in 
[[RRW13c]](https://www.se-rwth.de/publications/MontiArcAutomaton-Modeling-Architecture-and-Behavior-of-Robotic-Systems.pdf). 
The integration capabilities of MontiArc have been extended and generalized in 
[[RRRW15b]](https://www.se-rwth.de/publications/Language-and-Code-Generator-Composition-for-Model-Driven-Engineering-of-Robotics-Component-and-Connector-Systems.pdf). 
If interested, the MontiCore website provides further information on 
[MontiCore](http://www.monticore.de/languages/) languages.

In several projects, we modeled logistics services with Festo Robotino Robots, 
ROS, and Python.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qvCU3Hz89ZM" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
</div>

## LightRocks: Modeling Robotic Assembly Tasks
The importance of flexible automatized manufacturing grows continuously as 
products become increasingly individualized. Flexible assembly processes with 
compliant robot arms are still hard to be developed due to many uncertainties 
caused - among others - by object tolerances, position uncertainties and 
tolerances from external and internal sensors. Thus, only domain experts are 
able to program such compliant robot arms. The reusability of these programs 
depends on each individual expert and tools allowing to reuse and the compose 
models at different levels of detail are missing.

In cooperation with the DLR Institute on Robotics and Mechatronics we have 
introduced the LightRocks (Light Weight Robot Coding for Skills) framework in 
[[THR+13]](https://www.se-rwth.de/publications/A-New-Skill-Based-Robot-Programming-Language-Using-UML-P-Statecharts.pdf) 
which allows robotics experts and laymen to model robotic assembly tasks on 
different levels of abstraction, namely: assembly tasks, skills, and elemental 
actions. Robotics experts provide a domain model of the assembly environment and 
elemental actions which reference this model. Factory floor workers combine 
these to skills and task to implement assembly processes provided by experts. 
This allows a separation of concerns, increases reuse and enables flexible 
production.

The framework is implemented based on [MontiCore](http://www.monticore.de/) 
language profiles for UML/P Statecharts and UML/P class diagrams, which allows 
to reuse much of the UML/P framework for modeling, model validation, code 
generation, and editor generation.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Autonomous Driving
Many of the concepts we learnt in engineering autonomic robotics come from 
automotive software engineering and especially our successful participation in 
the DARPA Urban Challenge. In 
[[BBR07]](https://www.se-rwth.de/topics/~rumpe/publications20042008/Software-and-Systems-Engineering-Process-and-Tools-for-the-Development-of-Autonomous-Driving-Intelligence.pdf) 
we describe the well-engineered model-driven toolchain, which is heavily based 
on automatic simulation of a cars context (actually streets, obstacles, other 
cars of an entire city) and automatic testing for correct a driving behavior. We 
discussed in 
[[BR12b]](https://www.se-rwth.de/publications/Autonomous-Driving-5-Years-after-the-Urban-Challenge-The-Anticipatory-Vehicle-as-a-Cyber-Physical-System.pdf) 
that this a main enabler for intensive regression testing and thus agile 
development and has now become the primary technique for virtually driving 
millions of miles for safety validation in the car domain.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" 
alt="" title="Trennlinie"></p>

## Summary
1. Development of robotics applications is highly complex and requires 
abstraction, e.g using appropriate abstract modeling techniques.
2. Domain specific modeling languages (DSLs) apply perfect to model tasks of 
robots, the surrounding world, test scenarios etc.
3. Abstraction through DSLs leads to better standardization and allows improve 
quick development of robotic application as well a agile adaptation of robot 
tasks by users.
4. Autonomously driving cars exhibit lots of robotic characteristics and many 
techniques used there for function validation can be carried over.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Generative Software Engineering](/topics/Generative-SE)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [State Based Modeling (Automata)](/topics/State-Based-Modeling)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt=""
title="Trennlinie">

## Selected Related Publications

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>