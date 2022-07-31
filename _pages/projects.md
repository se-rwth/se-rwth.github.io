---
layout: page
title: Projects
permalink: /projects/
description: Projects at Software Engineering at RWTH Aachen, Bernhard Rumpe
order: 5
nav: true
AutoKnigge_keys: [KKR19, KPRS19, KKMR19]
CarOLO_keys: [BR09a, BR12b, BR12]
CrESt_keys: [KRSW20, BEK+19, BEK+18b, BGRW18]
EMA_keys: [KNP+19, KRS+18a, KRRW17]
MSim_keys: [KKRZ19, FIK+18]
HBP_keys: [Plo18, BPEM18, PBI+16]
iserveU_keys: [HNR+15, ABH+16, ABK+17]
IoP_keys: [DJM+19, DJR+19, SHH+20, BDH+20]
MaCoCo_keys: [GHK+20]
MontiBelle_keys: [KMP+21, KPRR21, BKR+20, KPRR20a, KPRR20, KRRS19]
MontiGem_keys: [GMN+20, AMN+20a]
SemDiff_keys: [DKMR20, DKMR19, BKRW19, KR18a, BKRW17, MRR11d, MRR11b, MRR10]
SenCloud_keys: [HHK+15a, HHK+14, HPR13]
SPES_keys: [RSW+15, BMP+16, RSW16]
---

The explanations below will give you an overview over some recent and 
major research
projects our chair is or has recently been part of.
All our [project results](/research) 
are aggregated to [research topics on our research website](/research).

- [Agile Data Development](#ADD)
- [AutoKnigge](#AutoKnigge)
- [BEST Energy](#BestEnergy)
- [The CarOLO Project on Autonomous Driving](#CarOLO)
- [Collaborative Embedded Systems (CrESt)](#CrESt)
- [EmbeddedMontiArc](#EMA)
- [Human Brain Project (HBP)](#HBP)
- [Intelligente modulare Serviceroboter-Funktionalitäten im menschlichen Umfeld am Beispiel von Krankenhäusern (iserveU)](#iserveU)
- [Interaktive, visuelle Datenräume zur souveränen, datenschutzrechtlichen Entscheidungsfindung (InviDas)](#InviDas)
- [Internet of Production (IoP)](#IoP)
- [Management Cockpit for University Chair Controlling (MaCoCo)](#MaCoCo)
- [Modelling Solution for Complex Software Systems (ModelPlex)](#ModelPlex)
- [MontiBelle - Intelligent Verification](#MontiBelle)
- [The MontiCore Language Workbench](#MontiCore)
- [MontiCore-based Generator framework for Enterprise Management (MontiGem)](#MontiGem)
- [A Semantic Approach to Evolution Analysis in Model-Based Software Development (Semantic Diff)](#SemanticDiff)
- [SensorCloud, a BMBF Trusted Cloud Computing project](#SensorCloud)
- [Software Plattform Embedded Systems (SPES 2020 / SPES XT)](#SPES)
- [SysML Workbench for the SPES Method (SpesML)](#SpesML)

{% include trennlinie.html %}
<a name="ADD"></a>


## Agile Data Development

In cooperation with the WZL, MSE and Bewind as industrial partner, the
goal of this project is to develop a guideline in the sense of a
procedure description for the implementation of an agile development
process by integrating agile and plan-driven methods as well as their
data-based support. Thus, the project aims at (1) an increase of
effectiveness by a targeted addressing of requirements in the sense of
the agile idea shall be achieved, (2) an improvement of efficiency by
avoiding unwanted iterations due to improved data transparency shall be
supported, (3) a data-based decision support by an integrated data and
system architecture shall be enabled and (4) a reduction of
time-to-market with a simultaneous increase of market.

This approach is thus intended to increase the overall profitability of
the windmill portfolio in the medium to long term. In addition, the
approach focuses on efficiency gains in the development of new plants
as well as improvements in the costs of parts, components and modules
used across projects. Sub-goals of this project are:

- Integration of agile and plan-driven development methods in the
  development of mechatronic systems in the context of the wind energy
  industry.

- Real-time, data-based development of new product variants,
  considering volatile market and customer requirements.

- Targeted, efficient realization of volatile and uncertain market
  requirements.

- Creation of transparency through a linked, providing cross-company of
  development-relevant data.

- Dynamic design of requirements management across the entire
  development process and adaptation of the development process, the
  development tools, and the downstream validation and certification
  strategy.

* Project is embedded in 
  [MontiGem - Generating Enterprise Management Systems](/research/MontiGem)

{% include trennlinie.html %}
<a name="AutoKnigge"></a>


## AutoKnigge

AutoKnigge is a subproject of the second phase of the DFG SPP1835
program on the research of interactively cooperating vehicles. The
focus of the first phase, in the predecessor project RapidCoop, was on
the concept of local traffic systems (LTS), which are ad-hoc networks
for vehicular cooperation, and an architecture-centric, dynamic
modeling methodology for the design of such systems. In AutoKnigge, a
dynamic framework specifying vehicle behavior is to be developed. The
vehicles ought to be able to select appropriate behavioral patterns
based on a situation and hence, to perform corresponding cooperative
maneuvers. Furthermore, a set of behavioral rules is to be defined which
serves as a guidelines catalogue for cooperative vehicles.

#### Selected publications AutoKnigge, cf. [EMA and MontiSim publications](#EMA), as well
<div class="publications">
  {% for k in page.AutoKnigge_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

* Project is embedded in
  [Autonomic Driving & Intelligent Driver
    Assistance](/research/Autonomic-Driving) and [Automotive](/research/Automotive)

{% include trennlinie.html %}
<a name="BestEnergy"></a>


## BEST Energy

[BEST Energy](http://www.bestenergyproject.eu/) is a project to improve
the energy efficiency in buildings, which project belongs to the ICT
Policy Support Programme. The main objective of this project was to
improve the energy efficiency in public buildings and street public
lighting, by the ICT-based centralized monitoring and management of the
energy consumption and production, and to provide decision makers with
the necessary tools to be able to plan energy saving measures. To
achieve this objective BEST Energy project did implement and validate
four pilots, two related to energy efficiency in public buildings (one
in a Sports centre in Spain and one in a University building in
Germany), and another two regarding energy efficiency in public street
lighting. The pilots implement innovative advanced control mechanisms
allowing to substantially improve the energy efficiency in the
respective buildings and spaces.

The [Synavision GmbH](https://www.synavision.de/) is an offspring of
these activities.

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/ena.jpeg title: "Energie navigator" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Smart Energy Management](/research/Energy-Management)

{% include trennlinie.html %}
<a name="CarOLO"></a>


## The CarOLO Project on Autonomous Driving

In the context of the CarOLO project, we developed Caroline already at
the TU Braunschweig. Caroline is a fully autonomous car, which allowed
us to take part in the Darpa Urban Challenge. Caroline managed to win
7th place, was the best newcomer in the competition and our chair
became the best non-american team (see also [Darpa Grand
Challenge](https://en.wikipedia.org/wiki/DARPA_Grand_Challenge_(2007))).

#### Selected publications

<div class="publications">
  {% for k in page.CarOLO_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/caroline.jpeg title: "Caroline" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Autonomic Driving & Intelligent Driver
    Assistance](/research/Autonomic-Driving) and [Automotive](/research/Automotive)

{% include trennlinie.html %}
<a name="CrESt"></a>


## Collaborative Embedded Systems (CrESt)

In the [CrESt](https://crest.in.tum.de/) research project, 23 partners
from industry and research investigated how to reliably engineer the
software of the future's smart, distributed CPS. We investigated
modeling techniques, methods, and processes to manage the complexity of
engineering software for dynamically coupled, automated CPS. Our main
contributions focus on tool integration and artifact-based analysis,
language variability, and evolution of software product line
architectures. The project was funded by the German Federal Ministry
for Education and Research (BMBF).

#### Selected publications

<div class="publications">
  {% for k in page.CrESt_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/crest.jpeg title: "CrESt" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  various areas including
  [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering),
  [Variability & Software Product Lines (SPL)](/research/Variability),
  [Semantics of Modeling Languages](/research/Semantics), 
  [Modeling Software Architecture](/research/Software-Architecture), and
  [MontiArc - Architectural Modeling](/research/Software-Architecture).


{% include trennlinie.html %}
<a name="EMA"></a>


## EmbeddedMontiArc

EmbeddedMontiArc is an architecture-centric component-based modeling
methodology focusing on automotive software and cyber-physical systems
engineering. Its elaborate type system supporting SI units, a math
oriented behaviour description language, as well as compact syntax for
the instantiation and interconnection of large systems enables
developers to focus on functionality rather than on annoying technical
details. The EmbeddedMontiArc compiler produces high-performance
executable code and generates interfaces to middleware solutions such
as ROS. What's more, EmbeddedMontiArcDL supports the design of
intelligent systems by providing a dedicated and easy-to-learn neural
network modeling and training language. The models can be executed and
validated in MontiSim, our distributed and service-oriented simulator
for autonomous, interactively collaborative vehicles.

Playlist: [EmbeddedMontiArc: C&C Modeling and Simulation for Embedded Systems](https://www.youtube.com/embed/videoseries?list=PLuHxQfNRwKzOjqjur1TMYfQOlGT9dGjrL)
- 2 Minute Madness on MDSE and AI
- EmbeddedMontiArc: Textual Modeling Alternative to Simulink
- Simulation of Autonomous Driving Vehicles-Technology Overview
- Simulation of Autonomous Driving Vehicles - Driving at Rain and at Night
- Simulation of Autonomous Driving Vehicles - Driving at Sun and Daytime
- Component and Connectors Views: Definition, Verification, Witnesses (Bachelor Thesis)
- Event based Dynamic Reconfiguration of Component and Connector Architectures
- Defining Semantics of Extra Functional Properties in Component and Connector Mod
- Bounded Model Checking of Self Driving Cars Requirements against its Implementat
- Evolutionary Tuning of PID Controllers
- Multi User Online IDE for DSLs on the example language MontiArc
- Component and Connectors Views Definition Verification Witnesses
- Example Video for EmbeddedMontiArcStudio
- EmbeddedMontiArcStudio Overview Video
- Simulating several Cars
- Modeling an Autopilot for Self Driving Cars with EmbeddedMontiArc
- Modeling PacMan with EmbeddedMontiArc

Playlist: [Case Study Videos for "Highly-Optimizing and Multi-Target Compiler for Embedded System Models"](https://www.youtube.com/watch?v=IDBabDrlB5M&list=PLuHxQfNRwKzPhyxNzBjGGInlmFzoUh2Xy)
- ClustererNoKMeans Matlab
- Matlab MatrixModifier
- ClustererOpt Matlab
- EMA Armadillo part1
- EMA Armadillo part2
- ClustererNoKMeansOpt Matlab
- Clusterer EMA
- Matlab Clusterer

#### Selected publications EmbeddedMontiArc

<div class="publications">
  {% for k in page.EMA_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
    {% if k == "KRS+18a" %} <ul> <ul> <li> <a href="https://zenodo.org/record/1314370">Additional Materials </a> </li> </ul> </ul> {% endif %}
  {% endfor %}
</div>

#### Selected Publications MontiSim

<div class="publications">
  {% for k in page.MSim_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/emas.png title: "EMA" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Artificial Intelligence in Software Engineering](/research/Artificial-Intelligence-in-Software-Engineering),
  [Modeling Software Architecture](/research/Software-Architecture),
  [State-Based Modeling (Automata)](/research/State-Based-Modeling),
  [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages), and
  [MontiArc - Architectural Modeling](/research/Software-Architecture)

{% include trennlinie.html %}
<a name="HBP"></a>


## Human Brain Project (HBP)

The [Human Brain Project](http://www.humanbrainproject.eu/en/) is a
H2020 FET flagship project that strives to accelerate the fields of
neuroscience, computing and brain-related medicine. In this project,
conceive and contributed the NESTML modelling language for neuronal
behavior.

#### Selected publications

<div class="publications">
  {% for k in page.HBP_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/nestml.jpeg title: "nest::ml" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Software Language Engineering (SLE)](/research/Language-Engineering) and
  [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages).

{% include trennlinie.html %}
<a name="iserveU"></a>


## Intelligente modulare Serviceroboter-Funktionalitäten im menschlichen Umfeld am Beispiel von Krankenhäusern (iserveU)

In [iserveU](http://www.se-rwth.de/materials/iserveu/), we explore
model-driven engineering methods for service robotics applications in
dynamic environments with a consortium of three companies and four
universities. We develop a family of integrated
[MontiCore](http://www.monticore.de/) modeling languages to describe,
plan, and execute robotics tasks without in-depth programming
expertise. Models of these languages are used by a
[MontiArc](http://www.monticore.de/) software architecture which
integrated robotics middlewares to, ultimately, operate service robots
in a German hospital. The project is funded by the [German Federal
Ministry for Education and Research
(BMBF)](https://www.softwaresysteme.dlr-pt.de/de/forschungsvorhaben-servicerobotik.php).
Additional materials can be found at our [iserveU Materials
Website](http://www.se-rwth.de/materials/iserveu/).

#### Selected publications

<div class="publications">
  {% for k in page.iserveU_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/iserveu.jpeg title: "iserveU" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Robotics Architectures and Tasks](/research/Robotics) and
  [MontiArc - Architectural Modeling](/research/Software-Architecture).

{% include trennlinie.html %}
<a name="InviDas"></a>


## Interaktive, visuelle Datenräume zur souveränen, datenschutzrechtlichen Entscheidungsfindung (InviDas)

Many people are increasingly surrounded by digital technologies and
applications that collect, process and share personal data. At the same
time, few read and understand the often long and complicated privacy
statements of their individual devices and applications. Within the
InviDas project, we ensure that users of smart wearables, such as
fitness watches, will in future have better insight into their data
profiles and will thus be able to make informed decisions more easily.
New forms of data visualization and gamification are being researched,
with which both manufacturers and users can make data privacy
declarations more comprehensible and transparent.

The project is funded by the
[BMBF](https://www.technik-zum-menschen-bringen.de/projekte/invidas).

The InviDas project is jointly realized by the [Gesellschaft für
Informatik e.V.](https://gi.de/), Stiftung Digitale Chancen, Garmin
Würzburg GmbH, RWTH Aachen University ([Software
Engineering](https://www.se-rwth.de/), [Chair and Institute of
Industrial Engineering and Ergonomics](https://www.iaw-aachen.de/) and
[Applied Ethics](https://www.ethics.rwth-aachen.de/)), Universität
Bremen and Otto-Friedrich Universität Bamberg.

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/InviDas.png title: "InviDas" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Model-Based Assistive Systems](/research/Model-Based-Assistive-Systems),
  [Cloud Computing Applications](/research/Cloud),
  [Enterprise Information Systems](/research/Enterprise-Information-Systems), and
  [MontiGem - Generating Enterprise Management Systems](/research/MontiGem)

{% include trennlinie.html %}
<a name="IoP"></a>


## Internet of Production (IoP)

The Internet – in its meaning of a worldwide socio-technical network –
has revolutionized accessibility of data and knowledge. This idea has
been transferred to the physical world with the concept of the Internet
of Things (IoT). A direct application of the IoT approach to production
is currently not sufficiently feasible. There are many more parameters
but much less available data than other big data application domains.
Vast amounts of data characterize modern production. However, this data
is neither easily accessible, interpretable, nor connected to gain
knowledge. With the [Internet of Production
(IoP)](https://www.rwth-aachen.de/go/id/bktz), we have the vision to
enable a new level of cross-domain collaboration by providing
semantically adequate and context-aware data from production,
development, and usage in real-time on an appropriate level of
granularity. The central scientific approach is the introduction of
Digital Twins and Digital Shadows. The Cluster of Excellence will
design and implement a conceptual reference infrastructure for the
Internet of Production that enables the generation and application of
Digital Shadows. The vision of IoP is to enable a new level of
cross-domain collaboration by providing semantically adequate and
context-aware data from production, development, and usage in
real-time, on an adequate level of granularity.

#### Selected publications
<div class="publications">
  {% for k in page.IoP_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/iop.png title: "IoP" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering),
  [Digital Twins and Digital Shadows in Engineering, Operation and Production](/research/Digital-Twins),
  [MontiGem - Generating Enterprise Management Systems](/research/MontiGem).

{% include trennlinie.html %}
<a name="MaCoCo"></a>


## Management Cockpit for University Chair Controlling (MaCoCo)

Within the [MaCoCo (Management Cockpit for
Controlling)](/projects/MaCoCo) project we
realize a multi-user enterprise information system for the decentralized management
and controlling of organizational processes within the chairs or
institutes of a university. The key elements of the project focus on
finance, staff and project organization.

Large parts of the code are generated with the [MontiCore language
workbench and code generation
framework](https://se-rwth.github.io/research/MontiCore/) to ensure a
highly adaptable system. Lead users are involved actively in the
development process to be able to provide a useful solution.

The MaCoCo project is funded by the RWTH Aachen University and jointly
realized by the two Chairs of Management Accounting and Software Engineering.

#### Selected publications
<div class="publications">
  {% for k in page.MaCoCo_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/macoco.jpeg title: "MaCoCo" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Cloud Computing Applications](/research/Cloud),
  [Enterprise Information Systems](/research/Enterprise-Information-Systems), and
  [MontiGem - Generating Enterprise Management Systems](/research/MontiGem)

{% include trennlinie.html %}
<a name="ModelPlex"></a>


## Modelling Solution for Complex Software Systems (ModelPlex)

The three major objectives of
[ModelPlex](http://cordis.europa.eu/project/rcn/79760_en.html) are to
develop an open solution for complex systems engineering improving
quality and productivity, lead its industrialisation and ensure its
successful adoption by the industry.

* Project is embedded in
  [Software Language Engineering (SLE)](/research/Language-Engineering), 
  [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages), and
  [MontiCore - Language Workbench for DSLs](/research/MontiCore).

{% include trennlinie.html %}
<a name="MontiBelle"></a>


## MontiBelle - Intelligent Verification

Based on a [well-established mathematical dataflow-theory](#KMP+21), we apply
logic, knowledge representation and intelligent reasoning to software
engineering to perform correctness proofs, execute symbolic tests or
find counterexamples. The theorem prover Isabelle is a mature and
fundamental tool, which allows representing knowledge as a collection
of definitions and theorems and reason about systems. To increase the
usability we provide a high-level API encapsulating the low-level logic
engine as well as a domain-specific modeling language as front end
coupled with an Isabelle code generator.

Playlist: [MontiBelle - Interactive Verificaton made Powerful](https://www.youtube.com/watch?v=cl403KXZrrc&list=PLuHxQfNRwKzO5DJq2X6DOI1FDcQ5sJAyO)
- Verified Design of Safety-Critical Cyber-Physical Avionics Systems with the MontiBelle Framework
- Vehicle Feature Interaction Verification at the Push of a Button
- Model-Based Development and Logical AI for Secure and Safe Avionics Systems

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/montibelle2.png title: "MontiBelle" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

These and the rapid increase of computation capabilities suggest that a
prominent application for reducing certification costs of critical
systems such as intelligent flight control systems or assistance
systems for air or road traffic management is not far in the future.

#### Selected publications
<div class="publications">
  {% for k in page.MontiBelle_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

* Project is embedded in
   [Artifacts in Complex Development Projects](/research/Artifacts),
   [Semantics of Modeling Languages](/research/Semantics), and
   [State-Based Modeling (Automata)](/research/State-Based-Modeling)


{% include trennlinie.html %}
<a name="MontiCore"></a>

## The MontiCore Language Workbench

MontiCore is a language workbench for an efficient development of
domain-specific languages (DSLs). It processes an extended grammar
format which defines the DSL and generates Java components for
processing the DSL documents. Examples for these components are parser,
AST classes, symboltables or visitors. This enables a user to rapidly
define a language and use it together with the MontiCore-framework to
build domain specific tools. Some MontiCore advantages are the
reusability of predefined language components, conservative extension
and composition mechanisms and an optimal integration of hand-written
code into the generated tools. MontiCore enables the research of
model-based software development methods employing a variety of DSLs
and modeling languages. On top of this, MontiCore and its DSL products
are successfully in use in academic and industrial research projects in
various domains such as automotive software modeling, cloud
architecture and security modeling, model-based robotics, smart energy
management, neural network modeling. The design rationale of MontiCore
is to provide a powerful and efficient workbench for the agile creation
of DSLs along with their accompanying infrastructure such as analyses,
transformations, and code generators.

#### MontiCore features:

- Combined specification of concrete and abstract syntax in a
  context-free grammar

- Customizable generation of parser and abstract syntax tree

- Generation of analysis infrastructure including visitors

- Adaptable grammar processing via interpreted Groovy scripts

- Configurable logging and process reporting

- Freemarker Template Engine for easy code generation

#### DSLs created with MontiCore:

- Unified Modeling Language for Programming (UML/P)

- MontiArc Architecture Description Language (ADL) and languages based
  on it such as
  - MontiArcAutomaton - ADL with automaton behavior specification
  - clArc - Cloud ADL Family
  - MontiSecArc - ADL with security constraints
  - EmbeddedMontiArc - ADL for automotive software and cyber-physical
    systems engineering

- Aerospace Constraint Specification Language - DSL for the
  specification of significant air traffic scenarios

- MontiTrans - Generator and Infrastructure for domain-specific
  transformation languages

- GUIDSL - DSL to describe the layout of websites

- A language to model restrictions in television broadcasts

- Java, Class Diagrams, Feature Diagrams, JSON, XML, OCL/P, Object
  Diagrams, Statecharts, and [many
  more](http://www.monticore.de/languages)

There are many publications about MontiCore (see e.g.
[here](https://www.se-rwth.de/publications/)). Especially the
[MontiCore Handbook](http://monticore.de/handbook.pdf) contains a good
summary of how to use [MontiCore](http://monticore.de/).

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/mc-logo-new.png title: "MontiCore" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* This project is described in the topic 
  [MontiCore - Language Workbench for DSLs](/research/MontiCore),
  but it provides the core tool infrastructure for many other 
  language definitions and projects.


{% include trennlinie.html %}
<a name="MontiGem"></a>


## MontiCore-based Generator framework for Enterprise Management (MontiGem)

The MontiGem framework allows developers to generate large parts of a
web application for a domain specific Enterprise Information System
based on the input models and provides a runtime environment for such
systems.

Playlist: [Gerating Information Systems with MontiGem](https://www.youtube.com/watch?v=f62kl-BW834&list=PLuHxQfNRwKzNIfS2FXGm9Dnw6fBEULprs)
- Textual BPMN Notation for Generative Software Engineering
- Information Systems for Privacy of Wearable Data
- Modellbasierte Entwicklung einer mobilen Applikation zur ParkinsonfrÃŒherkennung
- Development of an Information System for a Fully Automated Stem Cell Production System
- Modellbasierte Visualisierung von DBLP-Publikationsdaten
- Digitalisierung der Hochschule: Ein Informationsportal zur Dokumentation von persÃ¶nlichen Daten
- MontiGEM: Generating a GraphQL API
- Modell-basierte Informationssysteme am Beispiel einer Wetterstation
- Zielmodellierung in generierten Informationssystemen
- Zielmodellierung in MontiGEM
- Transformation monolithischer Enterprise-Anwendungen zu Microservice-Architekturen.
- Generating Tutorial System for a User Iterface of a Web Application
- Generative Approach to Implementation of Undo Functionality in a Web-Application Front-End
- Goal Modeling and MDSE for Behavior Assistance

The generated parts include:

- Database schema

- Persistence layer - communication interface between application
  back-end and the database

- Command infrastructure - communication interface between application
  front-end and back-end of the application as well as between parts of
  the back-end

- Graphical user interface

#### Selected publications
<div class="publications">
  {% for k in page.MontiGem_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/montigem.png title: "MontiGem" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* This project is described in the topic
  [MontiGem - Generating Enterprise Management Systems](/research/MontiGem),
  but it provides the core tool infrastructure for many other
  projects.


{% include trennlinie.html %}
<a name="SemanticDiff"></a>


## A Semantic Approach to Evolution Analysis in Model-Based Software Development (Semantic Diff)

The semantic difference from one model to another model contains the
elements in the semantics of the former model that are no elements in
the semantics of the latter model. Revealing the semantic differences
from one model version to a successor model version facilitates to
understand the semantic impact of the syntactic changes that have been
applied to the original model version to obtain the successor model
version. In this project, we develop

- semantic differencing methods for various concrete modeling languages and

- concrete modeling language-independent methods that facilitate
  solving semantic model evolution analysis problems.

#### Selected publications

<div class="publications">
  {% for k in page.SemDiff_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/cddiff.png title: "CDDiff" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Semantics of Modeling Languages](/research/Semantics),
  [Unified Modeling Language (UML)](/research/Unified-Modeling-Language), and
  [Artificial Intelligence in Software Engineering](/research/Artificial-Intelligence-in-Software-Engineering).

{% include trennlinie.html %}
<a name="SensorCloud"></a>

## SensorCloud, a BMBF Trusted Cloud Computing project

In Cloud Computing the user no longer owns all the devices which
process personal data. To lower scepticism, the project SensorCloud
investigates techniques to understand and compensate all adoption
barriers in a scenario consisting of cloud applications that utilize
sensors and actuators in private places. This project addresses the
interdisciplinary, i.e. social and technical research challenges for
the trustworthy integration of sensor and actuator devices with the
Cloud Computing paradigm. Most importantly, these challenges include
ease of development, security and privacy, and social dimensions of a
cloud-based system which integrates into private life.

#### Selected publications

<div class="publications">
  {% for k in page.SenCloud_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/SensorCloud.png title: "SensorCloud" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Cloud Computing Applications](/research/Cloud).

{% include trennlinie.html %}
<a name="SPES"></a>

## Software Plattform Embedded Systems (SPES 2020 / SPES XT)

[SPES 2020](https://www.in.tum.de/in/forschung/forschungs-highlights/spes-2020/) and [SPES
XT](https://link.springer.com/chapter/10.1007/978-3-319-48003-9_3) are
two research project sponsored by the BMBF that aim to develop a
methodology to realize a consistent modelbased development of embedded
systems.

#### Selected publications
<div class="publications">
  {% for k in page.SPES_keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

<center>
<div class="row" style="width: 85%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/spes.jpeg title: "SPES" class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

* Project is embedded in
  [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages),
  [Unified Modeling Language (UML)](/research/Unified-Modeling-Language),
  [State-Based Modeling (Automata)](/research/State-Based-Modeling), and
  [Agile Model-Based Software Engineering](/research/Agile-MBSE).

{% include trennlinie.html %}
<a name="SpesML"></a>

## SysML Workbench for the SPES Method (SpesML)

The [Systems Modeling Language
(SysML)](https://www.omgsysml.org/SysML-2.htm) is extensively used in
practice as a modeling language by tool vendors and standardization
organizations such as the OMG. The industrial introduction of
model-based system engineering (MBSE) often consists only of using the
SysML modeling language and simple drawing tools, without an
appropriate semantic concept and a consistent development methodology.
Existing, more advanced methods and tools are not directly applicable.
Thus, the essential potentials of the methodology of integrated MBSE
are not used. SPES provides a semantically based concept for MBSE with
a set of methods.

This project aims to develop a SysML workbench for the SPES methodology
and make it available for practical use. This workbench will support
the SPES methods and models continuously to ensure the dissemination of
MBSE, especially among small and medium-sized enterprises. Thus, the
widely used modeling language SysML will be semantically and
methodically substantiated and will pave the way to a comprehensive
MBSE approach, especially for industry.

* Project is embedded in
  [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages),
  [Unified Modeling Language (UML)](/research/Unified-Modeling-Language),
  [Semantics of Modeling Languages](/research/Semantics),
  [State-Based Modeling (Automata)](/research/State-Based-Modeling), and
  [Agile Model-Based Software Engineering](/research/Agile-MBSE).



{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)

