---
layout: page
title: MontiGem - Generating Enterprise Management Systems
permalink: /research/MontiGem/
description:
img:
importance: 1
keys: [HKR21, GMN+20, DMR+20, AMN+20a, MRV20, MNRV19, DGH+18, GHK+15a,GLRR15, GHK+20,BMR+22]
---
## Summary of Most Relevant Topic Papers

MontiGem [[AMN+20a]](#AMN+20a) is a generator for
data-centric applications. To a large
extent, it uses standard models from [UML/P](/research/UML-P) 
as sources, namely, Class
Diagrams and OCL. While the standard
semantics of these modeling languages remains untouched, the generator
produces a lot more functionality around these models, because it is
well integrated into the target framework and target infrastructure
which is used to execute the enterprise management system. The
generator thus knows the backend technology stack, with an
application core in Java, storage using a relational database
and the frontend consisting of Typescript 
components based on Angular and thus running in the browser.

The generator creates custom data structures based on the input models
and domain dependent target code within each layer of the three 
tier architecture of the target application.
The generated source code includes database configurations for the 
persistence tier, permission checks and APIs for the application 
tier and user interfaces for the presentation tier.
As a highlight, the storage paradigm is based on the command pattern
that allows to merge current changes much better and thus allows an
optimistic update scheme.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiGem.Process.png 
        title: "Overview of the Generation Process and Artifacts of MontiGem" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


As an extension, a [DSL](/research/Domain-Specific-Languages) 
is used to describe the graphical layout of the user
interface in a comfortable way. The GUI sub-language is well
integrated with the class diagram models allowing to directly describe
what to visualize based on the storage structure in the database.

The internal architecture of the MontiGem generator includes the three
typical main processes: reading, transformation and generation, 
while generation produces a lot of
resulting Java classes, Typescript and HTML files and related artifacts.



The
whole generation is designed in a very extensible way: First, a
generator target itself is written in a modular way allowing to reuse
parts in a rather independent way. Secondly, templates are used allowing
developers to add functionality in the systematic manner. They can, e.g.,
add additional methods to all generated classes of certain kind. Thirdly,
the TOP mechanism created in MontiCore [[HKR21]](#HKR21) is applied for all
kinds of creative classes allowing to efficiently add handwritten code
extensions to the generated classes, while fully retaining the
ability to intentionally re-generate everything every time. For that
purpose, all classes are also equipped with builders, which can be
replaced using the TOP mechanism if required.

Thus, handwritten and generated code pieces are well
integrated [[GHK+15a]](#GHK+15a). This enables the continuous regeneration of the
application with changing models and thus the co-evolution of the
models and the handwritten additional functionality during the entire
development process.

The input of the generator for such enterprise management systems can
be expanded to allow the tagging of existing models [[GLRR15]](#GLRR15),
e.g., for the definition of roles and rights, as well as model-based
testing [[DGH+18]](#DGH+18).

We have developed an extension for MontiGem called CD2GUI [[GMN+20]](#GMN+20)
which can be used before code synthesis:
The generation process takes only one class diagram as input and generates
data and GUI models which are further processed by the MontiGem generator
framework into a running application.

MontiGem builds on earlier versions of generators for 
[information systems](/research/Enterprise-Information-Systems).
Together with MontiGem, they are
already in use for generating various applications, such as a library
system
and an [development artifact](/research/Artifacts) overview system.
MontiGem is used since several years in a real-world project 
for financial management [[GHK+20]](#GHK+20), where we apply an
[agile model-based software engineering](/research/Agile-MBSE) approach.
We use it in research projects on privacy-preserving information
systems [[MNRV19]](#MNRV19),
for energy management systems, 
for creating [digital twin](/research/Digital-Twins) 
cockpits [[DMR+20]](#DMR+20)
and process-aware digital twin cockpits [[BMR+22]](#BMR+22),
for the parameter management during the engineering process 
of wind turbines,
and goal modeling in 
[assistive systems](/research/Model-Based-Assistive-Systems) [[MRV20]](#MRV20).
Current extensions adapt and extend MontiGem for
mobile applications, further graphical representation components as
well as the development of information portals in the 
[Internet of Things](/research/IoT) domain.


{% include trennlinie.html %}

## Key Statements

1. We can generate data-centric applications from UML/P class diagrams
2. Such generators are well usable in agile development approaches and for real-world applications
3. Generators for information systems are highly reusable for a large variety of domains

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
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [UML/P](/research/UML-P)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Model-Based Assistive Systems](/research/Model-Based-Assistive-Systems)
- [Models in Enterprise Information System Development](/research/Enterprise-Information-Systems)
- [Digital Twins and Digital Shadows in Engineering, Operation and Production](/research/Digital-Twins)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
