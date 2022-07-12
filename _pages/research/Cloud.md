---
layout: page
title: Model-based Cloud Computing Applications
permalink: /research/Cloud/
description:
img:
importance: 1
keys: [KRR14,HHK+14,HHK+15a,
        KRS12,PR13,HKR12,
        FPPR12,KPR12,ELR+17]
---

## Summary of Most Relevant Topic Papers

The paradigm of Cloud Computing is arising out of a convergence of
existing technologies for web-based application and service
architectures with high complexity, criticality and new application
domains.
The development,
integration, evolution, operation and migration of web-based
application and service architectures poses ever more
and ever larger challenges to Software Engineering. In [[KRR14]](#KRR14), we
discuss the paradigm of Cloud Computing that is arising out of a convergence
of existing and new technologies. It promises to enable new
business models, to lower the barrier for web-based innovations and to
increase the efficiency and cost-effectiveness of web development.

Cloud-based systems pose a multitude of different challenges. The demand for
seamless scalability with system load leads to highly distributed
infrastructures and software architectures that can grow and shrink at
runtime. The lack of standards, complemented by the variety of proprietary
infrastructure and service providers, leads to a high degree of technological
heterogeneity. High availability and interconnectivity with a multitude of
clients leads to complex evolution and maintenance processes. These
challenges come coupled with distinct requirements posed by the individual
application domain. Application classes like 
[Internet of Things](/research/IoT) [[HHK+14]](#HHK+14) [[HHK+15a]](#HHK+15a), 
[Cyber-Physical Systems](/research/Cyber-Physical-Systems) [[KRS12]](#KRS12),
Big Data, App and
Service Ecosystems bring attention to aspects like responsiveness, privacy
and open platforms. Regardless of the application domain, developers of such
systems are in need for robust methods and efficient, easy-to-use languages
and tools. 
For example in [[HHK+14]](#HHK+14) and [[HHK+15a]](#HHK+15a), we discuss how to
handle privacy in the cloud in a trusted environment.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/cloud_trustedEnvironment.png
        title: "Example for a trusted cloud environment" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

In our research [[NPR13]](#NPR13), we tackle these challenges by perusing a model-based,
generative approach. The core of this approach are several modeling languages
that describe different aspects of a cloud-based system in a concise and
technology-agnostic way. Software architecture and infrastructure models
describe the system and its physical distribution on a large scale. 
[UML/P](/research/UML-P)
models, and class diagrams in particular, describe several other aspects of
the system, such as its domain and data models, its interfaces and
interactions, and its monitoring and scaling capabilities. Among other tools,
code generators most prominently take these models as input and generate
application-specific frameworks that implement big parts of the system's
technical aspects and provide technology-agnostic, ease-to-use interfaces for
the cloud-based application's actual business logic.

We have applied these technologies to various cloud systems, cars, buildings,
smart phones and smart pads and various other kinds of sensors. We built a
rather successful and technologically sound framework for web-based software
portals [[HKR12]](#HKR12) that we offer under sselab.de for general use. Another
set of cloud systems helps to deal with [energy management](/research/Energy-Management)
[[FPPR12]](#FPPR12) [[KPR12]](#KPR12). 
It continuously monitors building operating systems to
derive operational data and compare these to the building specification. 
We use
cloud technologies to maintain data, dynamically execute calculations and
host management services enabling reduction of building energy costs.
Furthermore, we investigate the architecture of Cloud Services for
the digital me in a privacy-aware environment [[ELR+17]](#ELR+17).
We support developers with a model-driven and generative methodology
supporting reuse of existing services, automated conversion between different
data models, integration of ecosystems facilitating service composition,
user data access control, and user data management.

We apply cloud technology also for our tool demonstrators and our own
development platforms. New services, e.g., collecting data from temperature,
cars etc. can now be developed easily.


{% include trennlinie.html %}

## Key Statements
1. Model-based, generative development of cloud-based systems helps to reduce 
development time, increase flexibility and adaptivity.
2. Models can be used for architecture as well as domain and data modeling.
3. For connecting the Cloud with Cyber-Physical Systems it is especially 
interesting to use configurable model-based technology.

{% include trennlinie.html %}

## Selected Topic-Specific Publications

<div class="publications">
  {% assign sortedKeys = page.keys | sort %}
  {% for k in sortedKeys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

{% include trennlinie.html %}

## Related Topics
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Energy Management](/research/Energy-Management)
- [Enterprise Information Systems](/research/Enterprise-Information-Systems)
- [Generative Software Engineering](/research/Generative-SE)
- [Internet of Things](/research/IoT)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Modeling Software Architecture](/research/Software-Architecture)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [UML/P](/research/UML-P)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
