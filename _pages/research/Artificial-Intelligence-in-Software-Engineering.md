---
layout: page
title: Artificial Intelligence in Software Engineering
permalink: /research/Artificial-Intelligence-in-Software-Engineering/
description: 
img: 
importance: 1
keys: [AKK+21, KMP+21, KPRS19, DKMR19, EJK+19, KNP+19, BKRW19, DEKR19, DGH+19, KRRS19, 
    RW18, KR18a, DGH+18, KMS+18, BKRW17, KRRW17, GLPR15, KLPR12, MRR11g, MRR11d, 
    MRR11b, FLP+11]
---

## Summary of Most Relevant Topic Papers

Our resarch on artificial intelligence divides into modeling deep learning and 
applying artificial intelligence to different application domains. We developed

- MontiAnna, a family of domain specific languages for describing the 
architectures of neural networks, their training, and their training data.
- different variants of semantic differencing operators that can be used for 
non-trivial model evolution analyses that focus on detecting the semantic 
differences between model versions.
- MontiBelle, which uses Isabelle and its logic-based intelligence to support 
semi-automated formal verification of software architectures.
- a methodology to automatically test system requirements in automotive software 
engineering via test case generation.
- frameworks exploiting machine learning to analyse the data generated, e.g., by 
modern buildings and cards in operation and production systems.


## MontiAnna - A Modeling Framework for Deep Learning

Deep learning is gaining a more and more important role in today's software 
systems. Developing such systems requires appropriate methodologies and tools 
taking learning into account at all stages of a development process and at 
runtime. At our chair we have developed MontiAnna, a family of domain specific 
languages for the consice description of the architecture of (1) a neural 
network, (2) its training, and (3) the training data 
[[KNP+19]](#KNP+19).
What's more, using MontiCore language composition we have developed a technique 
to integrate neural networks into larger software architectures 
[[KRRW17]](#KRRW17)
as standardized machine learning components 
[[KPRS19]](#KPRS19).
This enables the compiler to support the systems engineer by automating the 
lifecycle of such components. Thereby, we support multiple learning approaches 
such as supervised learning, reinforcement learning, generative adversarial 
networks, etc. The core structure of MontiAnna is shown in the following figure:

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/ai/montiannafw.png  
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

To facilitate the analysis and enable MLOps in an agile development of machine learning-based
systems we derived a software 2.0 artifact model and use it as a basis for a 
modular build system, distinguishing between different kinds of artifacts such as
training/test data, software model, machine learning model, trained machine learning model, etc. [[AKK+21]](#AKK+21). 


## Semantic Differencing

The semantic difference between two models *m* and *m'* is the set of elements 
in the semantics of the model m that are not elements in the semantics of the 
model *m'*. Each element in a semantic difference is called a diff witness. Diff 
witnesses can be presented to developers. The developers can review the diff 
witnesses to increase their understandings of the semantic differences between 
the models. A semantic differencing operator is an automatic procedure for 
computing diff witnesses for two given models. As the semantics of models is 
usually an infinite set, detecting whether the semantic difference is empty and 
effectively computing a diff witnesses are no trivial tasks.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/ai/semdiff.png  
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

- 
[[MRR11d]](#MRR11d)
describes a semantic differencing operator for activity diagrams.
- 
[[MRR11b]](#MRR11b)
presents a semantic differencing operator for class diagrams.
- 
[[DKMR19]](#DKMR19)
describes a semantic differencing operator for feature diagrams.
- 
[[DEKR19]](#DEKR19)
discusses a semantic differencing operator for statecharts.
- 
[[BKRW17]](#BKRW17)
and 
[[BKRW19]](#BKRW19)
present semantic differencing operators for automaton variants describing the 
behavior of interactive systems.
- 
[[MRR11g]](#MRR11g)
describes a method for summarizing semantic model differences to condensate and 
increase the amount of information provided by semantic differencing operators.

We further developed a modeling language-independent method for determining 
syntactic changes that are responsible for the existence of semantic differences 
in 
[[KR18a]](#KR18a).
The method relies on a search in a tree where the nodes of the tree represent 
possible changes to models. As an example for semantic differencing, the given class diagram
depicts the two class diagrams *cd1* and *cd2* and the object structures *os1* 
and *os2*. The object structure *os1* is an element of the semantics of *cd2* 
and no element of the semantics of *cd1*. It is thus a diff witness in the 
semantic difference from *cd2* to *cd1*. Similarly, the object structure *os2* 
is a diff witness in the semantic difference from *cd1* to *cd2*.


## Intelligent Verification

We apply logic, knowledge representation and intelligent reasoning to software 
engineering to perform correctness proofs, execute symbolic tests or find 
counterexamples. The theorem prover Isabelle is a mature and fundamental tool, 
which allows representing knowledge as a collection of definitions and theorems 
and reason about systems. To increase the usability we provide a high-level API 
encapsulating the low-level logic engine as well as a domain-specific modeling 
language as front end coupled with an Isabelle code generator.

<center>
<div class="embed-responsive embed-responsive-16by9" style="width: 85%">
<iframe width="560" height="315" src="https://www.youtube.com/embed/krl4Q7MAAlo" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
</div>
</center>
<br />

These and the rapid increase of computation capabilities suggest that a 
prominent application for reducing certification costs of critical systems such 
as intelligent flight control systems or assistance systems for air or road 
traffic management is not far in the future 
[[KMP+21]](#KMP+21).
The following figure overviews the most important constituents of the verification 
framework.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/ai/MontiBelleNew.png  
           class: "img-fluid rounded z-depth-1"%}
    </div>
</div>
</center>
<br />


## Test Case Generation
Efficient testing is essential to engineer reliable automotive software. 
However, deriving test cases from ambiguous textual requirements is often a 
costly and error-prone endeavor. Model-based software engineering uses models as 
the primary artifacts during the engineering process. Therefore, requirements 
are captured by structured, comprehensible, formal models. This enables early 
consistency checking and verification as well as model-based testing. Crucial 
for the latter is automated test case derivation. For automotive software 
engineering, 
[[EJK+19]](#EJK+19),
[[DGH+19]](#DGH+19),
[[DGH+18]](#DGH+18),
[[KMS+18]](#KMS+18)
describe a methodology to test system requirements automatically. Our method is 
realized for a variant of SysML activity diagrams and state charts. The modeling 
languages are tailored towards testing automotive software and automatic test 
case derivation and applying a model transformation to automatically derive 
executable test cases.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/ai/testcasegenerator.png  
           class: "img-fluid rounded z-depth-1"%}
    </div>
</div>
</center>
<br />

Customer 
requirements in combination with customer requirement models are the input for 
the specification of the functional behavior of the system under development. 
The output of specifying the functional behavior are activity diagrams and 
state charts. These diagrams contain additional trace links to functional 
requirements. Our test case generator uses the diagrams as well as the linked 
functional requirements during the process of test case creation to generate 
test sets for each functionality modeled by the diagrams. During the generation 
process traceability between test cases and functional requirements is ensured. 
Next, these test sets are the input to verify the system under development using 
a suitable test environment.

## Building, Car, and Production System Analysis using Machine Learning
Nowadays modern systems generate a massive amount of observable data. This data 
can be used to optimize the operation efficiency and prevent unneeded CO2 
emission or reduce costs. 
[[FLP+11]](#FLP+11),
[[GLPR15]](#GLPR15).
E.g. a building’s ventilation system consists of multiple sensors and actors 
measuring observable data over time (time series data). Each operation mode of a 
ventilation system can be clearly assigned to a combination of specific sensor 
and actor behavior within a system 
[[KLPR12]](#KLPR12).
This creates a structural and behavioural system theoretical view on buildings 
as cyber-physical systems (digital twin) 
[[RW18]](#RW18).

The digital modeling of buildings and their facilities as well as the 
availability of sensor and actor data enables the implementation of Big Data 
analyses. For instance, machine and deep learning approaches are used to 
automate anomaly detection. Furthermore, machine learning can be applied on 
sensor data to automatically detect different system operation modes. Based on 
this, classification models can be utilised to autonomously detect fault 
situations. The application of neural networks also allows to classify unknown 
sensor and actor information (e.g. type of sensor/actor). The following figure illustrates 
these circumstances.

<center>
<div class="row" style="width: 50%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/ai/AI_BigDataEnvironment.png  
           class: "img-fluid rounded z-depth-1"%}
    </div>
</div>
</center>
<br />

{% include trennlinie.html %}

## Key Statements
1. MontiAnna is a model-driven framework for the design and training of deep 
neural networks.
1. Semantic differencing is a non-trivial task that facilitates developers in 
understanding the semantic differences between two model versions.
3. If knowledge is represented by logic, theorem proving is reasoning, and the 
use of an underlying compositional verification methodology can be leveraged to 
reduce certification costs.
4. Automated test case generation for SysML activity diagrams and statecharts 
facilitates the essential element of testing when engineering reliable 
automotive software.
5. A good building analysis is a prerequisite for every optimization. Machine 
learning supports the analysis with various methods.

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
- [Semantics of Modeling Languages](/research/Semantics)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Evolution & Transformation of Models](/research/Evolution)
- [Modeling Software Architecture & the MontiArc 
Tool](/research/Software-Architecture)
- [Automotive](/research/Automotive)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
