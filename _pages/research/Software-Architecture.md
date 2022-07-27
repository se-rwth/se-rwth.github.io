---
layout: page
title: Modeling Software Architecture & MontiArc 
permalink: /research/Software-Architecture/
description: 
img: 
importance: 1
keys: [BS01,Rum96,Rin14,Hab16,BR07,HRR98,
      PR99,HRR10,RRW13c,RRW14a,Wor16,
      PR13,HHR+15,BKRW17a,RRRW15b,
      BHH+17,AHRW17b,HRR+11,HRRS11,
      HKR+11,HRRS12,HKR+16,GHK+07,
      GHK+08,GKPR08,MRR13,MRR14b,
      MRRW16,DGH+19,MMR10,BKRW19,
      AHRW17,BHK+17,HRR12,KKR19,MRR14a,RRW13,RW18,
      BKRW17]
---

## Summary of Most Relevant Topic Papers


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

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/Arc.png 
         title: "Excerpt of a component and connector model of a car locking device" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

Messages can be
- event signals, e.g., messages on a bus,
- values measured by sensors and discrete event signals,
- streams of telephone or video data,
- method invocation, or
- complex data structures passed between software services.

**Semantically** our approach is formally **sound** and **well-defined** using 
streams, state machines, components, as well as expressive forms of composition 
and refinement ([see here for Semantics](/research/Semantics)). We leverage this, 
for instance, to enable a semantic differentinc of component & connector 
architectures [[BKRW17]](#BKRW17) [[BKRW19]](#BKRW19).

Some challenges in the design and implementation of these systems are the 
development of an appropriate architectural decomposition of the system and 
fitting component interfaces suitable for property analysis, effective 
realization, and reuse of components under variability considerations. We have 
made a number of contributions to this field from more theoretical 
considerations up to a concrete tooling infrastructure called 
MontiArc [[BKRW17a]](#BKRW17a) [[HRR12]](#HRR12)
and also and applied it among others to Cyber-Physical Systems [[RRW13]](#RRW13).


## Theoretical Foundations of Software Architecture Modeling

A **theoretical foundation** of a model-based development in terms of an integrated, 
homogeneous, but modular construction kit for architectural models is described 
in [[BR07]](#BR07). Mathematical foundations are given for modeling of 
interfaces, building architectures through composition and decomposition, 
layering architectures as well as hierarchical decomposition, and implementation 
of components using state machines. Especially the refinement (see also 
[[PR99]](#PR99) [[RW18]](#RW18))
of hierarchy, interfaces, and behavior is discussed as well as 
abstraction mechanisms for the integration of abstract viewpoints. The presented 
theory consists of a set of theorems and provides a basis for architectural 
modeling without sticking to a concrete syntax of a modeling language.


## MontiArc - Architecture Modeling with Semantics

MontiArc [[HRR10]](#HRR10) [[Hab16]](#Hab16) is a framework for modeling and
simulation
of software architectures that has been developed for modeling
distributed interactive systems using [MontiCore](/research/MontiCore).

The domain of the architecture description language (ADL) MontiArc are
information-flow architectures which describe the components of a
(software) system and their message-based communication.
Hence, MontiArc captures active components (agents, actors) of a logical
or physical distribution, their interfaces (ports), the communication
infrastructure between components, and hierarchical decomposition. A
component is a unit which executes computations or stores data. It may
have arbitrary complexity and size being a subsystem or a single
function. A component has an explicitly defined interface via which it
communicates with its environment. It is implemented as a textual
language and comes with an eclipse-integrated editor.

On one hand MontiArc is an architecture description language that helps
to model distributed systems by supporting the user with context
condition (well-formedness rules) checks and analyses. On the other hand
MontiArc serves a simulation environment and a code generator to generate
simulation components out of MontiArc models.
MontiArc provides a timed, event-based simulation framework that can
execute behavior implemented in Java and attached to MontiArc models in
a declarative way so that analysis and validation of MontiArc models
becomes possible [[Hab16]](#Hab16).

Because the language MontiArc is **designed for extensibility** , several 
sub-languages for behavior may be embedded directly within component definitions. 
MontiArc is e.g. extended with automata to **MontiArcAutomaton** 
[[RRW13c]](#RRW13c), [[Wor16]](#Wor16) and 
[[RRW14a]](#RRW14a), with Cloud-constructs to ClArc [[PR13]](#PR13), 
and with security annotations to MontiSecArc [[HHR+15]](#HHR+15). 


## MontiArc - Architecture Programming

In [[HRR10]](#HRR10), an extension of MontiArc with Java is presented, which 
becomes a full programming language that exhibits architecture, data structure 
and behavior. 
[[RRRW15b]](#RRRW15b) 
describes how the language is composed of individual sublanguages. With this 
approach, a smooth integration of architectural design and programming is 
achieved. We call this **architectural programming** [[HRR10]](#HRR10), 
[[BKRW17a]](#BKRW17a) which supported by powerful
code generation mechanisms based on chains of model
transformations [[AHRW17]](#AHRW17) [[AHRW17b]](#AHRW17b).
General mechanisms for a systematic extension of 
the language MontiArc for various purposes are discussed in [[BHH+17]](#BHH+17).

## Architectural Variability

The article "[Variability](/research/Variability)" discusses our contributions in 
more detail, but it is worth to mention that much variability research was 
applied to and experimentally verified using MontiArc.

**Variability** of a system has to be considered and modeled by appropriate 
means during all phases of the development but especially in the architectural 
design. MontiArc has thus been extended in two different ways, **hierarchical 
variability modeling** and **delta-modeling**, in order to explore ways to 
enable architectural modeling of variants defined in a product line.

In [[HRR+11]](#HRR+11), 
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
development framework [MontiCore](/research/MontiCore) 
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

We have defined a precise verification technique that allows developers
to decompose logical architectures into smaller pieces of functionality,
e.g., individual features in [[MRR13]](#MRR13) and [[Rin14]](#Rin14),
to synthesize implementations of crosscutting views [[MRR14a]](#MRR14a), and to verify
their consistency against a complete architecture in [[MRR14b]](#MRR14b). Our
hypothesis is that with this technique, developers will be able to
decompose requirements into features and compose their implementation
late in the development process. We have documented an evaluation our
specification and verification techniques in an experience
report [[MRRW16]](#MRRW16). These concepts are now successfully integrated
into automotive development processes [[DGH+19]](#DGH+19).

An overview and a detailed discussion on the challenges of co-evolution
of architectural system descriptions and the system implementation is
given in[[MMR10]](#MMR10). Architectural descriptions of a system deal with
multiple views of a system including both its functional and
nonfunctional aspects. Especially, critical aspects of a system should
be reflected in its architecture. The description must also be
accurately and traceably linked to the software’s implementation so that
any change of the architecture is reflected directly in the
implementation, and vice versa. We provide powerful analyses of software
architecture behavior evolution in [[BKRW19]](#BKRW19).
Otherwise, the architecture description will rapidly become obsolete as
the software evolves to accommodate changes. One way for understanding
evolution based on semantic differences is presented in [[BKRW17]](#BKRW17).

While many architecture styles assume static structures, we explored a modeling 
technique to describe **dynamic architectures** in [[HRR98]](#HRR98) 
[[HKR+16]](#HKR+16). 
The former [[HRR98]](#HRR98) allows developers to express 
dynamically extensible interfaces of components with so-called component 
interface diagrams. The latter [[HKR+16]](#HKR+16) allows developers to 
associate component configurations to modes and to specify dynamic 
reconfiguration behavior via mode automata that describe when to switch modes.

This is based on a
classification of dynamic reconfiguration approaches in these kinds of
architecture description languages [[BHK+17]](#BHK+17) 
and also applied to dynamic architectural changes 
in self-adaptive cooperative systems [[KKR19]](#KKR19).

{% include trennlinie.html %}

## Key Statements
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
- [Semantics of Modeling Languages](/research/Semantics)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)
- [MontiThings - Modeling the IoT](/research/MontiThings)


{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
