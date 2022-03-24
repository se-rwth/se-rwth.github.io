---
layout: page
title: Unified Modeling Language (UML)
description: 
img: 
importance: 1
---
## Summary of Selected Papers
This website sketches our contributions to the Unified Modeling Language (UML) only. For detailed discussion see the more specific topics listed below.

Many of our contributions build on UML/P, which is described in the two books [[Rum16]](http://www.se-rwth.de/mbse/) and [[Rum17]](http://www.se-rwth.de/mbse/) and implemented in [[Sch12]](https://www.se-rwth.de/phdtheses/Diss-Schindler-Eine-Werkzeuginfrastruktur-zur-agilen-Entwicklung-mit-der-UML-P.pdf).

UML's semantic variation points are discussed in [[GR11]](https://www.se-rwth.de/publications/Modeling-Language-Variability.pdf). We discuss formal semantics for UML [[BHP+98]]() and describe UML semantics using the "system model" [[BCGR09]](https://www.se-rwth.de/publications/Considerations-and-Rationale-for-a-UML-System-Model.pdf), [[BCGR09a]](https://www.se-rwth.de/publications/Definition-of-the-UML-system-model.pdf), [[BCR07b]](https://www.se-rwth.de/~rumpe/publications20042008/Towards-a-System-Model-for-UML.-Part-3.-The-State-Machine-Model.pdf) and [[BCR07]](https://www.se-rwth.de/~rumpe/publications20042008/Towards-a-System-Model-for-UML.-Part-2.-The-Control-Model.pdf). They have e.g. been applied to define class diagram semantics [[CGR08]](https://www.se-rwth.de/~rumpe/publications20042008/System-Model-Semantics-of-Class-Diagrams.pdf) and activity diagram semantics [[GRR10]](https://www.se-rwth.de/publications/Towards-a-Semantics-of-Activity-Diagrams-with-Semantic-Variation-Points.pdf).

Precisely defined semantics for variations is applied, when checking variants of class diagrams [[MRR11e]](https://www.se-rwth.de/publications/CD2Alloy-Class-Diagrams-Analysis-Using-Alloy-Revisited.pdf) and objects diagrams [[MRR11c]](https://www.se-rwth.de/publications/Modal-Object-Diagrams.pdf) or the consistency of both kinds of diagrams [[MRR11f]](https://www.se-rwth.de/publications/Semantically-Configurable-Consistency-Analysis-for-Class-and-Object-Diagrams.pdf). We also apply these concepts to activity diagrams [[MRR11a]](https://www.se-rwth.de/publications/An-Operational-Semantics-for-Activity-Diagrams-using-SMV.pdf) which allows us to check for semantic differences for ADs [[MRR11d]](https://www.se-rwth.de/publications/ADDiff-Semantic-Differencing-for-Activity-Diagrams.pdf). The basic semantics for ADs and their semantic variation points is given in [[GRR10]](https://www.se-rwth.de/publications/Towards-a-Semantics-of-Activity-Diagrams-with-Semantic-Variation-Points.pdf).

We also discuss how to ensure and identify model quality [[FHR08]](https://www.se-rwth.de/~rumpe/publications20042008/Modellqualitaet-als-Indikator-fuer-Softwarequalitaet-eine-Taxonomie.pdf), how models, views and the system under development correlate to each other [[BGH+98]](https://www.se-rwth.de/topics/~rumpe/publications/Systems-Views-and-Models-of-UML.pdf) and how to use modeling in agile development projects [[Rum04c]](https://www.se-rwth.de/topics/~rumpe/publications20042008/Agile-Modeling-with-the-UML.pdf), [[Rum02]](https://www.se-rwth.de/topics/~rumpe/publications/Executable-Modeling-with-UML-A-Vision-or-a-Nightmare.pdf).

The question how to adapt and extend the UML led to [[FPR02]](https://www.se-rwth.de/topics/~rumpe/publications/Product-Line-Annotations-with-UML-F.pdf) on product line annotations for UML and to more general discussions and insights on how to use meta-modeling for defining and adapting the UML [[EFL+99]](https://www.se-rwth.de/topics/~rumpe/publications/Meta-Modeling-Semantics-of-UML.pdf), [[SRV+10]](https://www.se-rwth.de/publications/Metamodelling-State-of-the-Art-and-Research-Challenges.pdf) and potentially use the UML even as formal notation [[FEL+98]](https://www.se-rwth.de/topics/~rumpe/publications/The-UML-as-a-formal-modeling-notation-CSI-Journal-Version.pdf).

A very early discussion on the challenges for the UML discussed by the pUML group can be found at [[KER99]](https://www.se-rwth.de/topics/~rumpe/publications/UML-Semantics-FAQ.pdf).

## Summary
1. UML is a big language with many forms of uses.
2. UML needs to be adaptable and extensible, but also subsets selectable.
3. Semantic variation points can precisely be defined and used for generation as well as for high-level analysis.
4. Tooling is necessary to use UMl in agile projects.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [UML/P](https://www.se-rwth.de/topics/UML-P.php)