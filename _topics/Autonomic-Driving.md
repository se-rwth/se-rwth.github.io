---
layout: page
title: Autonomous Driving and Driver Intelligence
description: 
img: 
importance: 1
---

## Summary of Selected Papers
From the viewpoint of software engineering, **intelligent driver assistance** and, in particular, **autonomous driving** is an interesting and demanding challenge, because it includes the development of complex software embedded within a distributed, life-critical system (car) and the connection of heterogeneous, autonomous mobile devices (other cars, infrastructure, etc.) into one, large, distributed system. Therefore, we are involved in a number of projects with major European car manufacturers in which we transfer modern software development techniques to the car domain. This transfer is necessary as, with its increasing complexity, software becomes a demanding driver of the overall systems development process and not just an add-on.

In the **Carolo project**, we built **Caroline** [[R+10]](https://www.se-rwth.de/publications/Caroline-An-Autonomously-Driving-Vehicle-for-Urban-Environments.pdf) - a completely autonomous car - and participated in the [Darpa Urban Challenge](http://archive.darpa.mil/grandchallenge/), where our car was driving autonomously in an urban area for hours. We successfully achieved the best place as newcomers (and best non-Americans). This resulted from a number of facts, including the rigorous application of **agile development methods**, such as XP and Scrum and a simulation for driving scenarios. In [[BR12]](https://www.se-rwth.de/publications/Engineering-Autonomous-Driving-Software.pdf) we describe the process driven by story cards as a form of use cases, a continuously integrated and running software up to a rigorous test, and simulation infrastructure, called Hesperia.

In particular, we have developed a **rigorous test infrastructure** for intelligent, sensor-based functions through **fully-automatic simulation** (not only visualization!) of the car within its surrounding: the city, pedestrians and especially other cars [[BBR07]](https://www.se-rwth.de/topics/~rumpe/publications20042008/Software-and-Systems-Engineering-Process-and-Tools-for-the-Development-of-Autonomous-Driving-Intelligence.pdf). Our simulator is capable of running automatic back-to-back tests on the complete software system with no real hardware involved by producing sensoric input from the simulation and acting according to the steering output of the autonomous driving software. Every night and, when necessary for every version change, the tests are automatically executed.

This technique allows us a **dramatic speedup in development and evolution** of autonomous car functionality, and thus, enables us to develop software in an agile way [[BR12b]](https://www.se-rwth.de/publications/Autonomous-Driving-5-Years-after-the-Urban-Challenge-The-Anticipatory-Vehicle-as-a-Cyber-Physical-System.pdf). We have successfully shown that agile development of high-quality software is possible and very effective in the automotive domain. However, it remains a challenge to combine this innovative modern way of agile, iterative systems development with the current development standards, such as ISO 26262, in order to allow the OEMs to benefit both from efficiency and quality on one hand and legal issues on the other hand.

In newer projects, we have **evaluated and designed OEM specific architectures and processes**, on individual assistance functions and on the complete architecture. [[BBH+13]](https://www.se-rwth.de/publications/Meta-Metrics-for-Simulations-in-Software-Engineering-on-the-Example-of-Integral-Safety-Systems.pdf) contains metrics, e.g., to understand the cross-linkage complexity for software and functions.

In [[MMR10]](https://www.se-rwth.de/publications/Evolving-Software-Architecture-Descriptions-of-Critical-Systems.pdf) we give an overview of the current state-of-the-art in development and evolution on a more general level by considering any kind of critical system that relies on architectural descriptions.

As tooling infrastructure, we mainly used an IDE such as Eclipse and in particular the SSElab storage, versioning and management services [[HKR12]](https://www.se-rwth.de/publications/SSELab-A-Plug-In-Based-Framework-for-Web-Based-Project-Portals.pdf). Without those agile development would not have been possible.

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie"></p>

## Summary
1. Automatic, repeatable tests speed up the development process.
2. Testing of sensor-based functions works best by simulating the sensoric input on realistic scenarios.
3. Intelligent driver assistance is tested best by simulating full urban scenarios, which is not that complicated.
4. Software-intensive functions in embedded domains can be developed using agile methods.

## Related Topics
- [Automotive](/topics/Automotive)
- [Cyber-Physical Systems (CPS)](/topics/Cyber-Physical-Systems)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [MontiCore - Language Workbench](/topics/MontiCore)
- [Robotics](/topics/Robotics)

## Youtube Videos of the Darpa Urban Challenge 2007
- [Channel of teamcarolo (9 videos)](https://www.youtube.com/user/teamcarolo)
- [Final Event Highlights](https://www.youtube.com/watch?v=aHYRtOvSx-M)
- [Mo-re videos of the Darpa Urban Challenge 2007](https://www.youtube.com/results?search_query=Darpa%20Urban%20Challenge&sm=3)