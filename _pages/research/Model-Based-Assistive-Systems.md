---
layout: page
title: Model-Based Assistive Systems
permalink: /research/Model-Based-Assistive-Systems/
description:
img:
importance: 1
keys: [HMR+19,MMR+17,MM13,MSS+18,
        MM13,MM15,MS17,MRZ21, MNRV19,
	MKB+19,MRV20,SM18a,
        MKM+19,SM18,SM20,ELR+17,AMN+20a,LMK+11]
---

## Summary of Most Relevant Topic Papers

<img style = "padding-left: 10px;" 
src="{{ '/assets/img/research/assistiveSystems/AssistiveSystems2.png' | relative_url }}" 
width = "30%" alt="" title="Assistive Systems" align="right">


Assistive systems offer people support in a wide variety of situations. 
This can be relevant in all areas of life, from our private 
home, in health care, in vehicles or in the professional world. 
If we consider our own home, such an assistive system can help us when 
we forget things. 
Assistive systems use information about processes and context 
information, e.g., about rooms, objects in the rooms or
devices we are interacting with.

**Assistive systems** [[HMR+19]](#HMR+19)
1. provide situational support for human behaviour 
2. based on
information from previously stored and real-time monitored structural context
and behaviour data 
3. at the time the person needs or asks for it.

The main components of an assistive
system according to the architectural patterns for model
centered architecture solutions [[MMR+17]](#MMR+17) are sensors, storages,
observation components, a behavior engine, and support components.
Information about human behavior is collected via sensors, e.g., 
via sensor floors [[LMK+11]](#LMK+11) or smart devices
and processed in observation components, which stores the data and models.
The behavior engine compares and connects the current behavior step with
already existing models of behavior.
The support engine decides which next step should be provided as behavior
support for the assisted person. This support can be provided as
step-by-step information multi-modal on different kinds of devices.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/assistiveSystems/as_overview.png 
           title: "Main concepts of systems for human assistance" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

For both, information and assistive services and systems, the application of
[agile](/research/Agile-MBSE), model-based and 
[generative](/research/Generative-SE) methods 
fastens the development process,
enables a quick response to requirements changes in a user-centered
engineering process, and ensures consistency-by-design.

Our current work on assistive systems is based on former work within the
Human Behavior Monitoring and Support (HBMS)
project [[MSS+18]](#MSS+18)
in which a domain specific language [[MM13]](#MM13) 
including structural and behavior data,
and domain specific modeling
method for assistive systems [[MM15]](#MM15) were developed.
A technique for using goal modeling languages [[MRV20]](#MRV20)
or UML/P based languages [[MNRV19]](#MNRV19)
describes, how languages for assistive systems can be
created.

Current work extends these approaches: to enable useful support, it
is important to know more than just the behavior of a person.
Context-aware systems need detailed information about the task context
(including temporal information), the personal and social context, the
environmental context, as well as the spatial context.
We have investigated the modeling of these contexts primary for the active
assisted living and smart home domain [[MS17]](#MS17).
Recent research discusses the context model for user-centered privacy-driven
systems in the IoT domain including special aspects for the use in 
combination with process mining
systems [[MKM+19]](#MKM+19).

The mark-up of online manuals for non-smart devices [[SM18]](#SM18) 
as well as
websites [[SM20]](#SM20) is one further step to provide human-centered
assistance.
Using these approaches reduces system set-up time and improves flexibility
for changes by automatically integrating device and application
functionality into supporting systems.

Due to the General Data Protection Regulation (GDPR) organizations are
obliged to consider privacy throughout the complete development process,
which is also relevant for assistive systems.
Our work suggests solutions for privacy-aware environments for cloud
services [[ELR+17]](#ELR+17) as well as privacy preserving information systems
demonstrated on an IoT manufacturing use case [[MNRV19]](#MNRV19).

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/research/assistiveSystems/AssistGeneration.png 
           title: "Generation Process for Assistive Systems" 
           class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

We are successfully using the generator framework MontiGem [[AMN+20a]](#AMN+20a) 
to create assistive systems for smart homes supporting, e.g., cooking 
processes. Process and context models allow us to generate web-based 
multi-modal user interfaces that compose supporting texts from model 
information and provide pictures and audio support. We cover concepts for 
leading users to find or place objects using spatial relationships 
and object nesting.
Within assistive systems, we can use different kinds of DSLs for generation 
and during runtime, e.g., 
we are investigating how goal modeling can be used as addition to
behavior modeling languages [[MRZ21]](#MRZ21) and
how to define context information and user tasks. 




{% include trennlinie.html %}

## Key Statements

1. The engineering of interactive assistive systems is challenging as they
   might support critical functionality in dangerous
   environments and have a high need for safety and privacy considerations due
   to the processing of personal data about human behavior. 
2. Using agile, model-based and generative methods fastens the development 
   process, enables a quick response to requirements changes in a 
   user-centered 
   engineering process, and ensures consistency-by-design.
3. There are still challenges to overcome such as the high amount of relevant 
   contextual information needed to set-up such systems or high adaptability 
   requirements to personal needs.

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
- [Generative Software Engineering](/research/Generative-SE)
- [MontiCore - Language Workbench](/research/MontiCore)
- [UML/P](/research/UML-P)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)
- [Models in Enterprise Information System Development](/research/Enterprise-Information-Systems)
- [Digital Twins and Digital Shadows in Engineering, Operation and Production](/research/Digital-Twins)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
