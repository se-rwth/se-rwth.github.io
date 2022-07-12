---
layout: page
title: Modeling Robotics Architectures and Tasks
permalink: /research/Robotics/
description: 
img: 
importance: 1
keys: [RRW12,QGC+09,RRW13c,
        RRRW15b,AHRW17b,ABH+16,
        ABH+17,MGH+98,HN01,
        ABK+17,THR+13,BRS+15,BBR07,BR12b]
---

[//]: # TODO: Video' Embedding is missing, siehe: https://www.se-rwth.de/topics/Robotics.php

## Summary of Most Relevant Topic Papers

Robotics can be considered a special field of [Cyber-Physical 
Systems](/research/Cyber-Physical-Systems)
that is defined by an inherent heterogeneity of involved domains,
relevant platforms, and challenges. Engineering robotics applications
requires composition and interaction of diverse distributed software
modules. This usually leads to complex monolithic software solutions
hardly reusable, maintainable, and comprehensible, which hampers broad
propagation of robotics applications.

Our research in model-driven software engineering for robotics on one hand
focuses on [Modeling Software Architecture](/research/Software-Architecture) 
to structure reusable units of behavior.
On the other hand, we concentrate on 
[Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
for
robotic product assembly tasks in industrial contexts as well as planned and
unplanned logistic tasks. We apply this to indoor robots interacting with
humans as well as to industrial robots and to autonomous cars.


## Modeling Robotic Application Architectures and Behavior


Describing both, a robot's software architecture and its behavior in integrated
models, yields many advantages to cope with complexity: the models are
platform independent, can be decomposed to be developed independently by
experts of the respective fields, are highly reusable and may be subjected
to formal analysis.

In [[RRW12]](#RRW12) we have introduced the architecture and behavior modeling
language and framework MontiArcAutomaton which provides an integrated,
platform independent structure and behavior modeling language family with an
extensible code generation framework. MontiArcAutomaton’s central concept is
encapsulation and decomposition known from component & connector
architecture description languages (ADLs). This concept applied to the
modeling language, the code generation process and the target runtime to
bridge the gap of platform specific and independent implementations along
well designed interfaces. This facilitates the reuse of robot applications
and makes their development more efficient.

MontiArcAutomaton extends the ADL [MontiArc](/research/Software-Architecture)
and integrates various component behavior
modeling languages implemented using [MontiCore](http://www.monticore.de/) 
as well as code generation
for the ROS robot operating system [[QGC+09]](#QGC+09).
The integration of automata and tables to model component behavior are described
in [[RRW13c]](#RRW13c).
The integration capabilities of MontiArc have been extended and
generalized in [[RRRW15b]](#RRRW15b) [[AHRW17b]](#AHRW17b). For interested readers, the
[MontiArcAutomaton](https://github.com/MontiCore/montiarc)
provides further information on the MontiArcAutomaton framework.

In several projects, we modeled logistics services with Festo Robotino Robots, 
ROS, and Python.


## Capability-Based Robotics Architectures

Although the costs for robotics hardware and software decrease,
deploying a successful robotics application still requires tremendous
effort. While various challenging issues for service robotics have been
solved to a degree where their deployment is possible, integration of
the corresponding hardware components and software components requires
intensive collaboration of domain experts, robotics experts, and
software experts. Model-driven software engineering can facilitate
development and integration of robotics software components while
retaining a proper separation between domain expert concerns and
software expert concerns.

To foster the separation of concerns in engineering service robotics
applications, we conceived the iserveU modeling framework to describe
domains, actors, goals, and tasks of service robotics
applications [[ABH+16]](#ABH+16). From these declarative modeling
languages [[ABH+17]](#ABH+17), we generate parts of a MontiArcAutomaton
architecture including component structure and behavior. In this
architecture, goals and tasks are translated into models of the planning
domain description language (PDDL) [[MGH+98]](#MGH+98) and solved online using
the Metric-FF [[HN01]](#HN01) planner [[ABK+17]](#ABK+17). Through our work, domain
experts can focus on describing the domain and its properties and
robotics experts can focus on implementing actors with their properties
and actions.


## LightRocks: Modeling Robotic Assembly Tasks

The importance of flexible automated manufacturing grows continuously as
products become increasingly individualized. Flexible assembly processes
with compliant robot arms are still hard to be developed due to many
uncertainties caused - among others - by object tolerances, position
uncertainties and tolerances from external and internal sensors. Thus, only
domain experts are able to program such compliant robot arms. The
reusability of these programs depends on each individual expert and tools
allowing to reuse and the composed models at different levels of detail are
missing.

In cooperation with the DLR Institute on Robotics and Mechatronics we have
introduced the LightRocks (Lightweight Robot Coding for Skills) framework
in [[THR+13]](#THR+13) [[BRS+15]](#BRS+15) which allows robotics experts and laymen to model
robotic assembly tasks on different levels of abstraction, namely: assembly
tasks, skills, and elemental actions. Robotics experts provide a domain
model of the assembly environment and elemental actions which reference this
model.
Factory floor workers combine these to skills and task to implement assembly
processes provided by experts. This allows a separation of concerns,
increases reuse and enables flexible production.


## Autonomous Driving

Many of the concepts we learnt in engineering autonomic robotics come from 
automotive software engineering and especially our successful participation in 
the DARPA Urban Challenge. In [[BBR07]](#BBR07) 
we describe the well-engineered model-driven toolchain, which is heavily based 
on automatic simulation of a cars context (actually streets, obstacles, other 
cars of an entire city) and automatic testing for correct a driving behavior. We 
discussed in [[BR12b]](#BR12b) 
that this a main enabler for intensive regression testing and thus agile 
development and has now become the primary technique for virtually driving 
millions of miles for safety validation in the car domain.


{% include trennlinie.html %}

## Key Statements
1. Development of robotics applications is highly complex and requires 
abstraction, e.g. using appropriate abstract modeling techniques.
2. Domain specific modeling languages (DSLs) apply perfect to model tasks of 
robots, the surrounding world, test scenarios etc.
3. Abstraction through DSLs leads to better standardization and allows improve 
quick development of robotic application as well a agile adaptation of robot 
tasks by users.
4. Autonomously driving cars exhibit lots of robotic characteristics and many 
techniques used there for function validation can be carried over.

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
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Generative Software Engineering](/research/Generative-SE)
- [Modeling Software Architecture](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [State Based Modeling (Automata)](/research/State-Based-Modeling)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
