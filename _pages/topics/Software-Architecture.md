---
layout: page
title: Modeling Software Architecture & the MontiArc Tool
permalink: /topics/Software-Architecture/
description: 
img: 
importance: 1
keys: [BKR+17,BKRW19,BRKW17a,BR07,PR99,HRR12,RRW13c,RRW14a,HRR10,RRRW15b,HRR+11,HRRS11,HKR+11,HRRS12,GHK+07,GHK+08,GKPR08,MRR13,Rin14,MRR14b,MMR10,HRR98,HKR+16]
---
## Summary of Selected Papers
**Distributed interactive systems** have become more and more important in the 
last decades. It is becoming the standard case that a system is distributed. 
Typically, these systems consist of subsystems and components such as
- sensors, control units, and actuators in cyber-physical machines,
- high performance computing nodes,
- big data storage nodes,
- messages transmitted between web services in cloud computing applications, or
- interaction between mobile humans.
The main paradigm for communication in distributed systems is asynchronous 
message passing between actors. The **logical or physical architecture** of a 
**hierarchically decomposed system** can be modeled like this excerpt of a car 
locking device:

Messages can be
- event signals, e.g., messages on a bus,
- values measured by sensors and discrete event signals,
- streams of telephone or video data,
- method invocation, or
- complex data structures passed between software services.
**Semantically** our approach is formally **sound** and **well-defined** using 
streams, state machines, components, as well as expressive forms of composition 
and refinement ([see here for Semantics](/topics/Semantics)). We leverage this, 
for instance, to enable a semantic differentinc of component & connector 
architectures [[BKR+17]](#BKR+17) [[BKRW19]](#BKRW19).

Some challenges in the design and implementation of these systems are the 
development of an appropriate architectural decomposition of the system and 
fitting component interfaces suitable for property analysis, effective 
realization, and reuse of components under variability considerations. We have 
made a number of contributions to this field from more theoretical 
considerations up to a concrete tooling infrastructure called 
MontiArc[[BKRW17a]](#BKRW17a).

## Theoretical Foundations of Software Architecture Modeling
A theoretical foundation of a model-based development in terms of an integrated, 
homogeneous, but modular construction kit for architectural models is described 
in [[BR07]](#BR07). Mathematical foundations are given for modeling of 
interfaces, building architectures through composition and decomposition, 
layering architectures as well as hierarchical decomposition, and implementation 
of components using state machines. Especially the refinement (see also 
[[PR99]](#PR99)) of hierarchy, interfaces, and behavior is discussed as well as 
abstraction mechanisms for the integration of abstract viewpoints. The presented 
theory consists of a set of theorems and provides a basis for architectural 
modeling without sticking to a concrete syntax of a modeling language.

## MontiArc - Architecture Modeling and Architectural Programming
The architectural design language MontiArc has been developed for modeling 
distributed interactive systems. It captures active components (agents, actors) 
of a logical or physical distribution, their interfaces (ports), the 
communication infrastructure between the components, and a hierarchic 
decomposition. MontiArc is a full ADL, although we have omitted some 
uninteresting concepts from the AADL standard and could then optimize others.

MontiArc is described in [[HRR12]](#HRR12) in detail. MontiArc is a textual 
language and comes with an eclipse-integrated editor. It provides a simulation 
framework that can execute behavior implemented in Java and attached to MontiArc 
models in a declarative way so that analysis on MontiArc models becomes 
possible.

Because the language MontiArc is **designed for extensibility** , several 
sublanguages for behavior may be embedded directly within component definitions. 
MontiArc is e.g. extended with automata to **MontiArcAutomaton** 
[[RRW13c]](#RRW13c) and 
[[RRW14a]](https://www.se-rwth.de/publications/Architecture-and-Behavior-Modeling-of-Cyber-Physical-Systems-with-MontiArcAutomaton.pdf). 
In [[HRR10]](#HRR10), an extension of MontiArc with Java is presented, which 
becomes a full programming language that exhibits architecture, data structure 
and behavior. 
[[RRRW15b]](https://www.se-rwth.de/publications/Language-and-Code-Generator-Composition-for-Model-Driven-Engineering-of-Robotics-Component-and-Connector-Systems.pdf) 
describes how the language is composed of individual sublanguages. With this 
approach, a smooth integration of architectural design and programming is 
achieved. We call this **architectural programming** [[HRR10]](#HRR10), 
[[BKRW17a]](#BKRW17a).

## Architectural Variability
The article "[Variability](/topics/Variability)" discusses our contributions in 
more detail, but it is worth to mention that much variability research was 
applied to and experimentally verified using MontiArc.

**Variability** of a system has to be considered and modeled by appropriate 
means during all phases of the development but especially in the architectural 
design. MontiArc has thus been extended in two different ways, **hierarchical 
variability modeling** and **delta-modeling**, in order to explore ways to 
enable architectural modeling of variants defined in a product line.

In [[HRR+11]](https://www.se-rwth.de/topics/Software-Architecture.php#HRR+11), 
we explored a variability mechanism based on MontiArc that allows specifying 
component variants fully integrated at any level of the component hierarchy. 
Here, variation points may have hierarchical dependencies. Associated variants 
define how this variability can be realized in component configurations. As a 
general drawback of this approach, systems are restricted to the set of 
predefined variations and cannot be extended. This approach is not additive.

We thus explored **delta-modeling** as an additive approach to variability 
design. This will allow a company to immediately start to develop and think in 
terms of product lines, even years before the full variability model is 
extracted (reengineered) from former and ongoing projects. The main idea is to 
represent any system by a core system and a set of deltas that specifies 
modifications. In [[HRRS11]](#HRRS11) we describe Δ-MontiArc, which applies this 
concept successfully to MontiArc. The core is a MontiArc model. A 
**delta-language** is defined describing how to add, remove, or modify 
architectural elements. The concrete realization of Δ-MontiArc using the DSL 
development framework [MontiCore](/topics/MontiCore) 
([www.monticore.de](http://www.monticore.de/)) is described in 
[[HKR+11]](#HKR+11). The developed language allows the modular modeling of 
variable software architectures and supports proactive, reactive as well as 
extractive product line development. As a next step, we explored in 
[[HRRS12]](#HRRS12) how to evolve a complete delta-based product line, e.g. by 
merging or splitting deltas.

## Requirements, Evolution, Dynamics of Architecture
A methodological approach to close the gap between the **requirements 
architecture** and the logical architecture of a distributed system realized in 
a function net is described in [[GHK+07]](#GHK+07) and [[GHK+08]](#GHK+08). It 
supports the tracing of requirements to the logical software architecture by 
modeling the logical realization of a feature that is given in a requirement in 
a dedicated feature view. This allows us to break down complexity into 
manageable tasks and to reuse features and their modular realization in the next 
product generation. [[GKPR08]](#GKPR08) extends this modeling approach to model 
variants of an architecture. These concepts are now successfully integrated into 
automotive development processes.

We also defined a precise verification technique that allows developers to 
decompose logical architectures into smaller pieces of functionality, e.g., 
individual features in 
[[MRR13]](https://www.se-rwth.de/publications/Synthesis-of-Component-and-Connector-Models-from-Crosscutting-Structural-Views.pdf) 
and 
[[Rin14]](https://www.se-rwth.de/phdtheses/Diss-Ringert-Analysis-and-Synthesis-of-Interactive-Component-and-Connector-Systems.PDF), 
and to verify their consistency against a complete architecture in 
[[MRR14b]](https://www.se-rwth.de/publications/Verifying-Component-and-Connector-Models-against-Crosscutting-Structural-Views.pdf). 
Our hypothesis is that with this technique, developers will be able to decompose 
requirements into features and compose their implementation late in the 
development process. That will definitely increase reusability of features.

An overview and a detailed discussion on the challenges of **co-evolution** of 
architectural system descriptions and the system implementation is given in 
[[MMR10]](#MMR10). Architectural descriptions of a system deal with multiple 
views of a system including both its functional and nonfunctional aspects. 
Especially, critical aspects of a system should be reflected in its 
architecture. The description must also be accurately and traceably linked to 
the software's implementation so that any change of the architecture is 
reflected directly in the implementation, and vice versa. Otherwise, the 
architecture description will rapidly become obsolete as the software evolves to 
accommodate changes.

While many architecture styles assume static structures, we explored a modeling 
technique to describe **dynamic architectures** in [[HRR98]](#HRR98) 
[[HKR+16]](#HKR+16). The former [[HRR98]](#HRR98) allows developers to express 
dynamically extensible interfaces of components with so-called component 
interface diagrams. The latter [[HKR+16]](#HKR+16) allows developers to 
associate component configurations to modes and to specify dynamic 
reconfiguration behavior via mode automata that describe when to switch modes.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Distributed Software Architecture can be modeled in hierarchically decomposed 
systems using message passing.
2. The communication paradigm, advanced composition and refinement techniques 
are semantically sound and well explored.
3. MontiArc is an extensible tool infrastructure with an architectural 
definition language (ADL) at its core.
4. ADL + Statemachine integration is explored in MontiArcAutomaton and used for 
robotics applications.
5. ADL + Java integration is explored as GPL with architectural support.
6. Delta-MontiArc explores an additive variability mechanism, well suited for an 
agile start of SPL integration.

## Related Topics
- [Automotive](/topics/Automotive)
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Cloud Computing & Enterprise Information Systems](/topics/Cloud)
- [Cyber-Physical Systems (CPS)](/topics/Cyber-Physical-Systems)
- [Generative Software Engineering](/topics/Generative-SE)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Robotics](/topics/Robotics)
- [Semantics of Modeling Languages](/topics/Semantics)
- [State-Based Modeling (Automata)](/topics/State-Based-Modeling)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt=""
title="Trennlinie">

## Selected Related Publications

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>