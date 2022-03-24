---
layout: page
title: Domain-Specific Languages (DSLs)
description: 
img: 
importance: 1
---
## Summary of Selected Papers
People are modeling everywhere. Both science and philosophy use models to understand and describe the concepts and phenomena in their fields. Engineering disciplines use models to describe the systems they want to design. **We all use models**, but only computer science defines and studies the set valid of models, namely the **modeling language** explicitly. This is made necessary because computer scientists use models not only to communicate among each other, but also with computers.

Computer science, therefore, is very much about languages. We use universally applicable modeling languages to describe problems and problem contexts. We employ general-purpose programming languages (GPLs) to implement solutions. We specify properties, architect and design solutions. And we define tests, as well as an increasing number of application specific languages and **domain-specific languages (DSLs)** tailored for a concrete target area. Such DSLs always are constructed with a particular domain in mind. Examples include HTML for websites, Matlab for numerical computation, or SQL for relational database management. In each instance the DSL trades some of the expressiveness of GPLs in order to allow for more concise models in the target domain.

As software systems have become essential components of nearly all innovative products, increasingly many non-ICT experts now find themselves working with these systems.
Furthermore, complexity of software-based systems is increasing. While modeling languages such as the [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language) provide a high level of abstraction to deal with complexity, these languages are usually still too technical (hence UML profiles are useful, as discussed in [[GHK+07]](#GHK+07) and [[FPR02]](https://www.se-rwth.de/topics/~rumpe/publications/Product-Line-Annotations-with-UML-F.pdf)). DSLs address both of these problems. Non-ICT experts benefit from DSLs by being able to transfer already familiar language concepts to the new application. Experienced users benefit by having a smaller mental gap between the software system and the associated real world models.

The main challenge of domain specific languages currently is their sophisticated engineering, which requires more than fundamental contirbutions, such as a carefully defined grammar and corresponding translation programs. Productive usage of a language also requires extensive tool support. [Generative Software Engineering](/topics/Generative-SE) techniques are at the center of attention for attempts to meet these challenges. In [[SRV+10]](#SRV+10) we discuss the state of the art and current efforts to develop languages through meta modeling.

The figure below depicts the role of DSLs in a model-based software engineering process. DSLs and the models expressed with them are becoming first-class elements of the software engineering process. In order to support this development, research needs to be focused on new, effective, and efficient ways of creating DSLs and corresponding tool support.

### DSL Definition
DSLs have to be designed carefully to meet their respective requirements. The prime concern of DSL design consists of a desired **concrete and abstract syntax** [[CFJ+16]](#CFJ+16). We examine the relations between concrete and abstract syntax and propose a language definition format in [[KRV07b]](#KRV07b) and [[KRV10]](#KRV10), which allows the **combined definition** of concrete and abstract syntax.

How to define the **semantics** of DSLs is discussed in [Semantics of Modeling Languages](/topics/Semantics). The aspect of **variability in syntax and semantics** for DSLs in general and UML in particular has been discussed in [[GR11]](#GR11).

In [FHR08] we discuss metrics and potential guidelines, that help to achieve high quality models and extend this into a collection of design guidelines for DSLs in [KKP+09]. Our experience shows that these guidelines tremendously improve the quality of DSLs. They target and enable suitability, reuse, conciseness, and usability.

### Composition of DSLs
Modularity is a key concept in software development and the enabler for efficient reuse. We investigated the application of modularity to the development of DSLs in [[GKR+07]](https://www.se-rwth.de/topics/~rumpe/publications20042008//Textbased-Modeling.pdf), [[KRV08]](#KRV08) and [[Voe11]](#Voe11). **Modularity** has been successfully applied in various areas of the DSL development process, such as concrete and abstract syntax, context conditions, and symbol table structures and has been implemented in our language workbench [MontiCore](/topics/MontiCore).

We can compose independently developed languages into integrated **families of DSLs**, which allows us to describe a system from various viewpoints using these different DSLs. The language family [UML/P](/topics/UML-P), defined in [[Sch12]](#Sch12), serves as an example of this technique.

As described in [[KRV08]](#KRV08) we can **inherit from existing languages** and adapt certain language concepts. An often used example is to extend an action language by new forms of actions.

We can reuse existing languages by **embedding** them as **sub-languages**. For instance, Java's expression language can be used for various purposes within a modeling DSL. This way we have integrated Java statements and expressions into UML/P. We are further investigating the decomposition of generators and modular composition of generated code.

These concrete techniques are summarized in the broader discussion on the so called "global" integration of domain specific modelling languages and techniques in a conceptual model [[CBCR15]](https://www.se-rwth.de/publications/Conceptual-Model-of-the-Globalization-for-Domain-Specific-Languages.pdf), which is published in [[CCF+15a]](https://www.se-rwth.de/publications/Globalizing-Domain-Specific-Languages2.pdf).

### DSL Tooling
As previously mentioned, the usability of a language depends on the availability of powerful tooling. We have implemented the [MontiCore](/topics/MontiCore) DSL workbench as a realization of all the aforementioned concepts regarding DSLs. It is available as a stand alone tool as well as a **collection of Eclipse plugins**. It also creates stand alone tools as well as tailored Eclipse-based plugins for the defined DSLs [[KRV07]](#KRV07). We **generate editors** with syntax highlighting, syntactic and semantic content assist and auto completion, graphical outlines, error reporting, hyperlinks, etc., from the DSL's definition only.

In [[LRS+10]](#LRS+10) we discuss the need for evolution and management of models. We especially identify the need for comfortable transformation languages. Therefore, [[Wei12]](#Wei12) presents a tool that creates an **infrastructure for transformations** that are specifically dedicated to an underlying DSL. The generated transformation language is quite understandable for domain experts and comes with an engine dedicated to transform models of this DSL.

### MontiCore
More details about the MontiCore DSL workbench can be found in [[GKR+06a]](#GKR+06a), [[KRV08]](#KRV08), [[KRV10]](#KRV10) as well as the MontiCore Website.

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie">

## Summary
1. DSLs are a promising technology to deal with complexity of software products and the pervasion of software into various domains.
2. Quality assurance and efficient ways to create, manage, and evolve DSLs are essential for the success of DSLs.
3. Key factors for efficient DSL tooling design are compositionality and thus reusability of tooling and language infrastructures.
4. [MontiCore](/topics/MontiCore) is a successful tooling infrastructure for the development of DSLs.

## Related Topics
- [Agile Model-Based Software Engineering](/topics/Agile-MBSE)
- [Compositionality/Modularity of Models](/topics/Compositionality)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Generative Software Engineering](/topics/Generative-SE)
- [MontiArc - Architectural Modeling](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/topics/Variability)