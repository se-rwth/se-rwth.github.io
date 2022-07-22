---
layout: page
title: Domain-Specific Languages (DSLs)
permalink: /research/Domain-Specific-Languages/
description: 
img: 
importance: 1
keys: [GHK+07,PFR02,SRVK10,
      CFJ+16,KRV07b,KRV10,
      FHR08,KKP+09,GR11,
      GKR+07,KRV08,Voe11,
      HKR21,Sch12,HRW18,
      CBCR15,CCF+15a,KRV07a,
      GKR+06,LRSS10,Wei12,HRW15,Hoe18,
      BDL+18, BEK+18a, BEK+18b, BEK+19, BJRW18,
      DHH+20, GKR+08, GMR+16, HLMSN+15, HLMSN+15a, KRV06,
      Kra10, ZPK+11]
---

## Summary of Most Relevant Topic Papers

The ability to abstraction is one of the basic cognitive abilities of the human
being. Both science and philosophy use models to
understand and describe the concepts and phenomena in their fields. Engineering
disciplines use models to describe the systems they intend to design.
All human beings use
models, but only informatics started to define and study the set of valid models,
namely the **modeling language** explicitly.
This is made necessary because computer
scientists use models not only to communicate among each other, but also with
computers.

Informatics, therefore, is very much about languages. We use
universally applicable modeling languages to describe problems and problem
contexts. We employ general-purpose programming languages (GPLs) to
implement solutions. We specify properties, architect and design solutions.
And we define tests, as well as an increasing number of application specific
languages and DSLs tailored for a concrete target area.

A DSL is always constructed with a **particular domain** in mind. Examples include
HTML for websites, Matlab for numerical computation, or SQL for relational
database management. In each instance, the DSL trades some expressiveness
of GPLs in order to allow for more concise models in the target domain.

As software systems have become essential components of nearly all
innovative products, increasingly many non-ICT experts now find themselves
working with these systems. Furthermore, complexity of software-based
systems is increasing.
While modeling languages such as the 
[Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
provide a high level of abstraction to
deal with complexity, these languages are usually still too technical (hence
UML profiles are useful, as discussed in [[GHK+07]](#GHK+07) and [[PFR02]](#PFR02)).
DSLs address both of these problems. **Non-ICT experts benefit from DSLs**
by
being able to transfer already familiar language concepts to the new
application. Experienced users benefit by having a smaller mental gap
between the software system and the associated real world models.

The main drawback of domain specific languages currently is still their
**challenging creation process**. Not only does the creation of a computer
language
necessitate the fundamentals, such as a carefully defined grammar and
corresponding translation programs. Productive usage of a language also
requires
extensive tool support. 
[Generative Software Engineering](/research/Generative-SE) techniques are at the
center of attention for attempts to meet these challenges. In [[SRVK10]](#SRVK10) we
discuss the state of the art and current efforts to develop languages through
meta-modeling.

The figure below depicts the architecture of a typical DSL processing tool
in a model-based software engineering
process. DSLs and the models expressed with them are becoming first-class
elements of the software engineering process. In order to support this
development, research was and is necessary focusing on new, effective, and efficient ways
of creating DSLs and corresponding tool support.
The processing of a model is relatively similar to classical compiler
architecture it consists of a front end handling the input,
an internal validation and transformation part and a back and
to produce the desired results. Like in classical compiler construction
parts of this infrastructure is generated using a meta-tool, in this
case MontiCore.


<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/dsl01.png 
        title: "The role of DSLs in a model-based software engineering process" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

### DSL Definition

DSLs have to be designed carefully to meet their respective requirements. The
core design of a DSL consists of a desired **concrete and abstract syntax**
[[CFJ+16]](#CFJ+16). We examine the relations between concrete and abstract syntax
and propose a language definition format in [[KRV07b]](#KRV07b) and [[KRV10]](#KRV10),
which allows the combined definition of concrete and abstract syntax.

Our experience shows that guidelines for the creation of DSLs
tremendously improve their quality. They target and enable suitability,
reuse, conciseness, and usability. 
In [[FHR08]](#FHR08), we discuss **metrics and potential guidelines**, that help to
achieve high quality models and extend this into a **collection of design
guidelines for DSLs** in [[KKP+09]](#KKP+09).
We discuss the needed roles in software development using
domain specific languages already in [[KRV06]](#KRV06).

Another important aspect is how to define the [semantics](/research/Semantics) 
of DSLs.
**Variability in syntax and semantics** for DSLs in general
and UML in particular has been discussed in [[GR11]](#GR11) and
[[GMR+16]](#GMR+16).
Controlled and extensible variability of concrete and abstract syntax with
independent language features are defined in [[BEK+18a]](#BEK+18a)
and [[BEK+18b]](#BEK+18b). These are both prerequisites for a
systematic composition of independently defined **language features**
amounting to a **language product line** [[BEK+19]](#BEK+19).
From such a product line, many individual languages can be defined,
fitting perfectly to the desired needs of the users.

[[BDL+18]](#BDL+18) also presents a method to **derive internal DSLs**,
i.e. pure Java APIs that allow to directly build and manipulate 
the abstract syntax of a model, without offering a concrete syntax,
from grammars.
Similarly, grammars are translated to accurate metamodels as
described in [[BJRW18]](#BJRW18).

For an extensive discussion on semantics we refer the reader to
[Semantics of Modeling Languages](/research/Semantics).


### Composition of DSLs

**Modularity** is a key concept in software development and the enabler for
efficient reuse. We investigated the application of modularity to the
development of DSLs in [[GKR+07]](#GKR+07), [[KRV08]](#KRV08) and [[Voe11]](#Voe11).
This approach is extended by compositional techniques 
for context conditions and especially symbol tables in [[HLMSN+15]](#HLMSN+15)
and [[HLMSN+15a]](#HLMSN+15a). These internal composition techniques extend
the ability to reuse and compose tool internal algorithms that can be
applied on the abstract syntax and thus goes far beyond a mere
reuse of definitions of context-free language constructs (i.e. the grammar).

Therefore, modularity has been successfully applied in various areas of the DSL
development process, such as concrete and abstract syntax, context
conditions, and symbol table structures and has been implemented in our
language workbench [MontiCore](/research/MontiCore) [[HKR21]](#HKR21).

We can **compose independently developed languages** into **integrated families of
DSLs**, which allows us to describe a system from various viewpoints using these
different DSLs. The language family [UML/P](/research/UML-P),
initially realized in [[Sch12]](#Sch12), serves as an
example of this technique.

We can **reuse existing languages** by embedding them as sub-languages, e.g.,
Java's
expression language can be used for various purposes within a modeling DSL.
Consequently, we have integrated both, Java statements and expressions,
into UML/P. We are further investigating the decomposition of generators and
modular composition of generated code.
Another important aspect for composition is **inheritance
and adaption of existing concepts**.

As described in [[KRV08]](#KRV08) [[HRW18]](#HRW18), we can inherit from existing languages and
adapt certain language concepts. An often used example is to extend an action
language by new forms of actions.
These concrete techniques are summarized in the broader discussion on the so
called **"global" integration of domain specific modeling languages and
techniques in a conceptual model** [[CBCR15]](#CBCR15), which is published in
[[CCF+15a]](#CCF+15a).


### DSL Tooling

As previously mentioned, the usability of a language depends on the
availability of powerful tooling. We have implemented the
**MontiCore DSL workbench**
as a realization of all the aforementioned concepts regarding
DSLs. It is available as a stand-alone tool as well as a collection of
Eclipse plugins. It also creates stand-alone tools as well as tailored
Eclipse-based plugins for the defined DSLs [[KRV07a]](#KRV07a). We generate
editors with syntax highlighting, syntactic and semantic content assist and
auto-completion, graphical outlines, error reporting, hyperlinks, etc., just
from the DSL definition. 

Moreover, there is a strong need for evolution and management of models [[LRSS10]](#LRSS10),
especially for comfortable transformation languages.
Therefore, [[Wei12]](#Wei12) [[HRW15]](#HRW15) [[Hoe18]](#Hoe18) present a tool that creates an
infrastructure for transformations that are specifically dedicated to an
underlying DSL. The generated **transformation language** is quite understandable
for domain experts and comes with an engine dedicated to transform models of
this DSL.


### MontiCore

More details about the [MontiCore Language Workbench for DSLs](/research/MontiCore) 
can be found in 
[[GKR+06]](#GKR+06), [[KRV08]](#KRV08), [[KRV10]](#KRV10),
[[GKR+08]](#GKR+08) and [[Kra10](#Kra10) 
as well as the 
[MontiCore Website](http://www.monticore.de/).

Some successful applications are documented in the Air
Traffic Management \cite{ZPK+11} and television \cite{DHH+20} domains.

{% include trennlinie.html %}

## Key Statements
1. DSLs are a promising technology to deal with complexity of software products 
and the perversion of software into various domains.
2. Quality assurance and efficient ways to create, manage, and evolve DSLs are 
essential for the success of DSLs.
3. Key factors for efficient DSL tooling design are compositionality and thus 
reusability of tooling and language infrastructures.
4. [MontiCore](/research/MontiCore) is a successful tooling infrastructure for the 
development of DSLs.

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
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Compositionality/Modularity of Models](/research/Compositionality)
- [Evolution & Transformation of Models](/research/Evolution)
- [Generative Software Engineering](/research/Generative-SE)
- [MontiArc - Architectural Modeling](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Semantics of Modeling Languages](/research/Semantics)
- [Software Language Engineering (SLE)](/research/Language-Engineering)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Variability & Software Product Lines (SPL)](/research/Variability)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
