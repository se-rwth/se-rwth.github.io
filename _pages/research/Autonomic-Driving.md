---
layout: page
title: Autonomous Driving and Driver Intelligence
permalink: /research/Autonomic-Driving/
description:
img:
importance: 1
keys: [RBL+10,BR12,BBR07,BR12b,BBH+13,MMR10,HKR12,   
        BBB+08,FIK+18,BBH+15]
---

## Summary of Most Relevant Topic Papers

Quality assurance, especially of safety-related functions, is a highly
important task. In the Carolo project [[BR12b]](#BR12b) [[BR12]](#BR12)),
we built the car **Caroline** as a rigorous test infrastructure for intelligent,
sensor-based functions through fully-automatic simulation (not only
visualization) of the car within its surrounding: the city, pedestrians
and especially other cars [[BBR07]](#BBR07). Beside the simulation of a
complete autonomic car with its sensors and actors, the simulation
environment may also be used to test dedicated subsystems without any
real hardware involved. By producing sensor input from the simulation
and comparison of expected and actual behavior, subsystems may be
automatically validated and thus developed in an agile way.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/Caroline-Recognition.png 
        title: "How an autonomous car sees the world (taken from the Carolo project)" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

### Driver Intelligence

From the viewpoint of software engineering, **intelligent driver assistance** 
and, in particular, **autonomous driving** is an interesting and demanding 
challenge, because it includes the development of complex software embedded 
within a distributed, life-critical system (car) and the connection of 
heterogeneous, autonomous mobile devices (other cars, infrastructure, etc.) into 
one, large, distributed system. Therefore, we are involved in a number of 
projects with major European car manufacturers in which we transfer modern 
software development techniques to the car domain. This transfer is necessary 
as, with its increasing complexity, software becomes a demanding driver of the 
overall systems' development process and not just an add-on.

**Caroline**
is a completely autonomous car, with which we participated in the [Darpa Urban 
Challenge](https://link.springer.com/book/10.1007/978-3-642-03991-1). There our car was driving 
autonomously in an urban area for hours. We successfully achieved the best place 
as newcomers (and best non-Americans). This resulted from a number of facts, 
including the rigorous application of **agile development methods**, such as XP 
and Scrum and a simulation for driving scenarios. In 
[[BR12]](#BR12) 
we describe the process driven by story cards as a form of use cases, a 
continuously integrated and running software up to a rigorous test, and 
simulation infrastructure, called Hesperia.

<center>
<div class="row" style="width: 70%">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/Caroline-Finish.png 
        title: "Caroline arriving in the finish area after a successful race" 
        class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />


In particular, we have developed a **rigorous test infrastructure**
for intelligent, sensor-based functions through **fully-automatic
simulation** (not only visualization!) of the car within its
surrounding: the city, pedestrians and especially other cars [[BBR07]](#BBR07).
Our simulator is capable of running automatic
back-to-back tests on the complete software system with no real
hardware involved by producing sensor input from the simulation and
acting according to the steering output of the autonomic driving
software. Every night and, when necessary for every version change, the
tests are automatically executed.

This technique allows us a **dramatic speedup in development and
evolution** of autonomous car functionality, and thus, enables us to
develop software in an agile way [[BR12b]](#BR12b). We have successfully
shown that agile development of high-quality software is possible and
very effective in the automotive domain. However, it remains a
challenge to combine this innovative, modern way of agile, iterative
systems' development with the current development standards, such as ISO
26262, in order to allow the OEMs to benefit both from efficiency and
quality on one hand and legal issues on the other hand.

As tooling infrastructure, we mainly used an IDE such as Eclipse and in
particular the SSElab storage, versioning and management services [[HKR12]](#HKR12).
Without those, agile development would not have been
possible.

In further projects, we have **evaluated and designed OEM specific
architectures and processes**, on individual assistance functions and on
the complete architecture. [[BBH+13]](#BBH+13) contains metrics, e.g., to
understand the cross-linkage complexity for software and functions.

In [[MMR10]](#MMR10) we give an overview of the state-of-the-art in
development and evolution on a more general level by considering **any
kind of critical system** that relies on architectural descriptions.

In recent years, we also investigate in the **next steps of autonomy**, namely
**cooperatively interacting autonomous vehicles**, allowing e.g., convoys
with almost no distance to drive very energy efficient [[FIK+18]](#FIK+18),
as well as virtualization of development of safety algorithms, e.g., for
the EuroNCAP and US NCAP scenarios discussed [[BBH+15]](#BBH+15).


{% include trennlinie.html %}

## Key Statements
1. Automatic, repeatable tests speed up the development process.
2. Testing of sensor-based functions works best by simulating the sensoric input 
on realistic scenarios.
3. Intelligent driver assistance is tested best by simulating full urban 
scenarios, which is not that complicated.
4. Software-intensive functions in embedded domains can be developed using agile 
methods.

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
- [Automotive](/research/Automotive)
- [Cyber-Physical Systems (CPS)](/research/Cyber-Physical-Systems)
- [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering)
- [Domain-Specific Languages (DSLs)](/research/Domain-Specific-Languages)
- [Modeling Software Architecture](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Robotics Architectures and Tasks](/research/Robotics)

## Youtube Videos of the Darpa Urban Challenge 2007
- [Channel of teamcarolo (9 videos)](https://www.youtube.com/user/teamcarolo)
- [Final Event Highlights](https://www.youtube.com/watch?v=aHYRtOvSx-M)
- [Mo-re videos of the Darpa Urban Challenge 
2007](https://www.youtube.com/results?search_query=Darpa%20Urban%20Challenge&sm=3) 

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
