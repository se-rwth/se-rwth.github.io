---
layout: page
title: Artificial Intelligence in Software Engineering
description: 
img: 
importance: 1
---

## Summary of Selected Papers
Our resarch on artificial intelligence divides into modeling deep learning and applying artificial intelligence to different application domains. We developed

- MontiAnna, a family of domain specific languages for describing the architectures of neural networks, their training, and their training data.
- different variants of semantic differencing operators that can be used for non-trivial model evolution analyses that focus on detecting the semantic differences between model versions.
- MontiBelle, which uses Isabelle and its logic-based intelligence to support semi-automated formal verification of software architectures.
- a methodology to automatically test system requirements in automotive software engineering via test case generation.
- frameworks exploiting machine learning to analyse the data generated, e.g., by modern buildings and cards in operation and production systems.

## MontiAnna - A Modeling Framework for Deep Learning
Deep learning is gaining a more and more important role in today's software systems. Developing such systems requires appropriate methodologies and tools taking learning into account at all stages of a development process and at runtime. At our chair we have developed MontiAnna, a family of domain specific languages for the consice description of the architecture of (1) a neural network, (2) its training, and (3) the training data [[KNP+19]](https://www.se-rwth.de/publications/Modeling-and-Training-of-Neural-Processing-Systems.pdf). What's more, using MontiCore language composition we have developed a technique to integrate neural networks into larger software architectures [[KRRW17]](https://www.se-rwth.de/publications/Modeling-Architectures-of-Cyber-Physical-Systems.pdf) as standardized machine learning components [[KPRS19]](https://www.se-rwth.de/publications/On-the-Engineering-of-AI-Powered-Systems.pdf). This enables the compiler to support the systems engineer by automating the lifecycle of such components. Thereby, we support multiple learning approaches such as supervised learning, reinforcement learning, generative adversarial networks, etc. Figure 1 summarizes the main aspects of the MontiAnna framework.

## Semantic Differencing
The semantic difference between two models *m* and *m'* is the set of elements in the semantics of the model m that are not elements in the semantics of the model *m'*. Each element in a semantic difference is called a diff witness. Diff witnesses can be presented to developers. The developers can review the diff witnesses to increase their understandings of the semantic differences between the models. A semantic differencing operator is an automatic procedure for computing diff witnesses for two given models. As the semantics of models is usually an infinite set, detecting whether the semantic difference is empty and effectively computing a diff witnesses are no trivial tasks.

- [[MRR11d]](https://www.se-rwth.de/publications/ADDiff-Semantic-Differencing-for-Activity-Diagrams.pdf) describes a semantic differencing operator for activity diagrams.
- [[MRR11b]](https://www.se-rwth.de/publications/CDDiff-Semantic-Differencing-for-Class-Diagrams.pdf) presents a semantic differencing operator for class diagrams.
- [[DKMR19]](https://www.se-rwth.de/publications/Semantic-Evolution-Analysis-of-Feature-Models.pdf) describes a semantic differencing operator for feature diagrams.
- [[DEKR19]](https://www.se-rwth.de/publications/Semantic-Differencing-of-Statecharts-for-Object-oriented-Systems.pdf) discusses a semantic differencing operator for statecharts.
- [[BKRW17]](https://www.se-rwth.de/publications/Semantic-Differencing-for-Message-Driven-Component-and-Connector-Architectures.pdf) and [[BKRW19]](https://www.se-rwth.de/publications/Continuously-Analyzing-Finite-Message-Driven-Time-Synchronous-Component-and-Connector-Systems-During-Architecture-Evolution.pdf) present semantic differencing operators for automaton variants describing the behavior of interactive systems.
- [[MRR11g]](https://www.se-rwth.de/publications/Summarizing-Semantic-Model-Differences.pdf) describes a method for summarizing semantic model differences to condensate and increase the amount of information provided by semantic differencing operators.

We further developed a modeling language-independent method for determining syntactic changes that are responsible for the existence of semantic differences in [[KR18a]](https://www.se-rwth.de/publications/On-Computing-Instructions-to-Repair-Failed-Model-Refinements.pdf). The method relies on a search in a tree where the nodes of the tree represent possible changes to models. As an example for semantic differencing, Figure 2 depicts the two class diagrams *cd1* and *cd2* and the object structures *os1* and *os2*. The object structure *os1* is an element of the semantics of *cd2* and no element of the semantics of *cd1*. It is thus a diff witness in the semantic difference from *cd2* to *cd1*. Similarly, the object structure *os2* is a diff witness in the semantic difference from *cd1* to *cd2*.

## Intelligent Verification
We apply logic, knowledge representation and intelligent reasoning to software engineering to perform correctness proofs, execute symbolic tests or find counterexamples. The theorem prover Isabelle is a mature and fundamental tool, which allows to represent knowledge as a collection of definitions and theorems and reason about systems. To increase the usability we provide a high-level API encapsulating the low-level logic engine as well as a domain-specific modeling language as front end coupled with an Isabelle code generator.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/krl4Q7MAAlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

These and the rapid increase of computation capabilities suggest that a prominent application for reducing certification costs of critical systems such as intelligent flight control systems or assistance systems for air or road traffic management is not far in the future [[KRRS19]](https://www.se-rwth.de/publications/Model-Based-Engineering-for-Avionics-Will-Specification-and-Formal-Verification-Based-on-Broys-Streams-Become-Feasible.pdf) [[HRR12]](https://www.se-rwth.de/publications/MontiArc-Architectural-Modeling-of-Interactive-Distributed-and-Cyber-Physical-Systems.pdf) [[RR11]](https://www.se-rwth.de/publications/A-Little-Synopsis-on-Streams-Stream-Processing-Functions-and-State-Based-Stream-Processing.pdf) [[BR07]](https://www.se-rwth.de/~rumpe/publications20042008/Modulare-hierarchische-Modellierung-als-Grundlage-der-Software-und-Systementwicklung.pdf). Figure 3 overviews the most important constituents of the verification framework.

## Test Case Generation
Efficient testing is essential to engineer reliable automotive software. However, deriving test cases from ambiguous textual requirements is often a costly and error-prone endeavor. Model-based software engineering uses models as the primary artifacts during the engineering process. Therefore, requirements are captured by structured, comprehensible, formal models. This enables early consistency checking and verification as well as model-based testing. Crucial for the latter is automated test case derivation. For automotive software engineering, [[EJK+19]](https://www.se-rwth.de/publications/Applying-Product-Line-Testing-for-the-Electric-Drive-System.pdf), [[DGH+19]](https://www.se-rwth.de/publications/SMArDT-modeling-for-automotive-software-testing.pdf), [[DGH+18]](https://www.se-rwth.de/publications/Model-Based-Testing-of-Software-Based-System-Functions.pdf), [[KMS+18]](https://www.se-rwth.de/publications/Improving-Model-based-Testing-in-Automotive-Software-Engineering.pdf) describe a methodology to test system requirements automatically. Our method is realized for a variant of SysML activity diagrams and statecharts. The modeling languages are tailored towards testing automotive software and automatic test case derivation and applying a model transformation to automatically derive executable test cases.

Figure 4 shows an overview of the test case creation process. Customer requirements in combination with customer requirement models are the input for the specification of the functional behavior of the system under development. The output of specifying the functional behavior are activity diagrams and statecharts. These diagrams contain additional trace links to functional requirements. Our test case generator uses the diagrams as well as the linked functional requirements during the process of test case creation to generate test sets for each functionality modeled by the diagrams. During the generation process traceability between test cases and functional requirements is ensured. Next, these test sets are the input to verify the system under development using a suitable test environment.

## Building, Car, and Production System Analysis using Machine Learning
Nowadays modern systems generate a massive amount of observable data. This data can be used to optimize the operation efficiency and prevent unneeded CO2 emission or reduce costs. [[FLP+11]](https://www.se-rwth.de/publications/Der-Energie-Navigator-Performance-Controlling-fuer-Gebaeude-und-Anlagen.pdf), [[GLPR15]](https://www.se-rwth.de/publications/Energieeffiziente-Staedte--Herausforderungen-und-Loesungen-aus-Sicht-des-Software-Engineerings.pdf). E.g. a building’s ventilation system consists of multiple sensors and actors measuring observable data over time (time series data). Each operation mode of a ventilation system can be clearly assigned to a combination of specific sensor and actor behavior within a system [[KLPR12]](https://www.se-rwth.de/publications/Modeling-cyber-physical-systems-model-driven-specification-of-energy-efficient-buildings.pdf). This creates a structural and behavioural system theoretical view on buildings as cyber-physical systems (digital twin) [[RW18]](https://www.se-rwth.de/publications/Abstraction-and-Refinement-in-Hierarchically-Decomposable-and-Underspecified-CPS-Architectures.pdf).

The digital modelling of buildings and their facilities as well as the availability of sensor and actor data enables the implementation of Big Data analyses. For instance, machine and deep learning approaches are used to automate anomaly detection. Furthermore, machine learning can be applied on sensor data to automatically detect different system operation modes. Based on this, classification models can be utilised to autonomously detect fault situations. The application of neural networks also allows to classify unknown sensor and actor information (e.g. type of sensor/actor). Figure 5 illustrates these circumstances.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie">

## Summary
1. MontiAnna is a model-driven framework for the design and training of deep neural networks.
1. Semantic differencing is a non-trivial task that facilitates developers in understanding the semantic differences between two model versions.
3. If knowledge is represented by logic, theorem proving is reasoning, and the use of an underlying compositional verification methodology can be leveraged to reduce certification costs.
4. Automated test case generation for SysML activity diagrams and statecharts facilitates the essential element of testing when engineering reliable automotive software.
5. A good building analysis is a prerequisite for every optimization. Machine learning supports the analysis with various methods.

## Related Topics
- [Semantics of Modeling Languages](/topics/Semantics)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Modeling Software Architecture & the MontiArc Tool](/topics/Software-Architecture)
- [Automotive](/topics/Automotive)