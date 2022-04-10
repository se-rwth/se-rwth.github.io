---
layout: page
title: Generative Software Engineering
description: 
img: 
importance: 1
---

## Summary of Selected Papers
In [Agile Model-Based Software Engineering](/Agile-MBSE), we clarify that 
generating software is crucial to successfully integrated modeling in 
development processed. Modeling will only become an integral to industrial 
software engineering, if automated derivation of executable code and smooth 
integration with handwritten code become commonplace.

We therefore examined various aspects of code generation. For instance, in 
[[Rum12]](http://mbse.se-rwth.de/book2/), 
[[Rum11]](http://mbse.se-rwth.de/book1/), 
[[Rum16]](http://www.se-rwth.de/mbse/), and 
[[Rum17]](http://www.se-rwth.de/mbse/) we define the language family 
[UML/P](/topics/UML-P) (a reduced and semantically sound derivate of the UML) 
which is designed specifically for product and test code generation from class 
diagrams, object diagrams, Statecharts, and sequence diagrams as shown in the 
following figure.

In 
[[Sch12]](https://www.se-rwth.de/phdtheses/Diss-Schindler-Eine-Werkzeuginfrastruktur-zur-agilen-Entwicklung-mit-der-UML-P.pdf), 
we developed a **flexible, modular and reusable code generator** for the UML/P 
based on the MontiCore language workbench 
([[KRV10]](https://www.se-rwth.de/publications/MontiCore-a-Framework-for-Compositional-Development-of-Domain-Specific-Languages.pdf), 
[[GKR+06a]](https://www.se-rwth.de/~rumpe/publications20042008/MontiCore-1.0-Ein-Framework-zur-Erstellung-und-Verarbeitung-domaenenspezifischer-Sprachen.pdf)). 
With MontiCore, we can easily define extensions of languages as well as new 
language combinations. Thus, we can reuse the defined UML/P sublanguages and 
generation techniques in various [projects](/projects).

Our architectural analysis and design language 
[MontiArc](/topics/Software-Architecture) is also based on this generation 
technology. As described in 
[[HRR12]](https://www.se-rwth.de/publications/MontiArc-Architectural-Modeling-of-Interactive-Distributed-and-Cyber-Physical-Systems.pdf) 
it can be used for the cloud systems, as well as [cyber-physical 
systems](/topics/Cyber-Physical-Systems), such as [cars](/topics/Automotive) or 
[robotics](/topics/Robotics). MontiArc also has been applied to various 
[projects](/projects).

Tooling and especially generators will only be successful in practical projects, 
if they have an appropriate impact on the development process, i.e., development 
processes need to be adapted or completely reshaped according to the 
availability of a generator. In 
[[KRV06]](https://www.se-rwth.de/~rumpe/publications20042008/Roles-in-Software-Development-using-Domain-Specific-Modeling-Languages.pdf), 
we discuss additional roles necessary in a model-based software development 
project (while other roles either vanish or their workload can greatly be 
reduced).

The generation gap problem is addressed in 
[[GKR+06b]](https://www.se-rwth.de/~rumpe/publications20042008/Integration-von-Modellen-in-einen-codebasierten-Softwareentwicklungsprozess.pdf). 
There, we discuss mechanisms to keep generated and handwritten code separated, 
while integrating them in the product and enabling the repetitive generation 
(which is much more valuable than one-shot generation).

For various purposes, including preparation of a model for generation, it is 
helpful to define model transformations. We can create transformation languages 
in concrete syntax, that reuse the underlying language concepts. In 
[[Wei12]](https://www.se-rwth.de/publications/Generierung-domaenenspezifischer-Transformationssprachen.pdf) 
we show how this looks like. Even more important we describe how to 
systematically derive a transformation language in concrete syntax. Since then 
we have applied this technique successfully for several UML sub-languages and 
domain-specific languages.

Sometimes executability can be a disadvantageous characteristics for a modeling 
language, especially when people start modeling concrete algorithms instead of 
abstract properties. We therefore discuss needs and advantages of executable 
modeling with UML in agile projects in 
[[Rum04c]](https://www.se-rwth.de/topics/~rumpe/publications20042008/Agile-Modeling-with-the-UML.pdf), 
how to apply UML for testing in 
[[Rum03]](https://www.se-rwth.de/topics/~rumpe/publications/Model-Based-Testing-of-Object-Oriented-Systems.pdf) 
as well as the advantages and perils of using modeling languages for programming 
in 
[[Rum02]](https://www.se-rwth.de/topics/~rumpe/publications/Executable-Modeling-with-UML-A-Vision-or-a-Nightmare.pdf).

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Summary
1. Generation of code and tests is a core capability for model-based software 
engineering (MBSE).
2. Generators depend on the source modeling language, a precise clarification of 
semantic variants and the target infrastructure, including frameworks that are 
generated against.
3. A generator consists of a transformation engine (model source to code) and a 
runtime environment.
4. A domain specific generator can add a high amount of functionality to the 
target that was not "modeled" in the source.
5. [Agile projects](/topics/Agile-MBSE) require generators to be incremental, 
compositional and therefore quick. Thus, big monolithic tools (storing all in 
one model) cannot be used in agile projects.
6. The [MontiCore](/topics/MontiCore) language workbench provides infrastructure 
for generative software development.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Compositionality/Modularity of Models & Languages](/topics/Compositionality)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [UML/P](/topics/UML-P)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
