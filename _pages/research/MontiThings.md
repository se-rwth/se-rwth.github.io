---
layout: page
title: MontiThings - Modeling the IoT
permalink: /research/MontiThings/
description:
img:
importance: 1
keys: [KRS+22, KMR21, AKK+21, KMR+20]
---

[//]: # Bem: Die folgenden Papiere sind noch nicht veröffentlicht und fehlen hier (Konferenznamen, keine Keys): SEAA22, TIOT

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsBanner.png 
         title: "MontiThings Logo" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

## MontiThings IoT Modelling Language

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsExample.png 
         title: "Example of MontiThings' graphical syntax " 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

MontiThings [[KRS+22]](#KRS+21) [[KMR21]](#KMR21) [[AKK+21]](#AKK+21) [[KMR+20]](#KMR+20) is an ecosystem for model-driven development of IoT applications. 
The core of MontiThings is a domain-specific language for the specification of IoT applications. 
Like [MontiArc](/research/Software-Architecture), this language describes IoT applications as a component-and-connector (C&C) architecture. 
Applications consist of components that can exchange data with other components via (directed and typed) ports that are linked by connectors.
Via sensor/actuator ports (shown by black filling), ports can also interact with the hardware of the IoT devices and, for example, accept a sensor value.
The behavior of components can be described in one of four ways:

- using statecharts
- using an IoT-focussed Java-like language
- using handwritten C++ Code
- by instantiating and connecting other components

## Ecosystem Overview

<!--
<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsProcess.png 
         title: "Overview of MontiThings" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />
-->

<center>
<div class="row" style="width: 100%; max-width: 1000px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsOverview.png 
         title: "Overview of MontiThings" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

At design time, developers model several aspects of their IoT application: 
- MontiThings models describe the business logic, i.e., functionality and data flow
- Class diagrams describe the data structures used by components to exchange data
- Handwritten code describes the behavior of components (C++) or the interaction with hardware (C++, Python)
- Tagging is used for various purposes, e.g., tagging components with hardware requirements or connecting IoT applications to digital twins [[KMR+20]](#KMR+20)

In addition to this, there can also be platform dependent artifacts such as different libraries that are used to allow the generated code to interact with specific platforms.
The project's artifacts are uploaded to an online repository such as GitLab or GitHub. 
There, a CI/CD pipline transforms the models (if necessary [[KMR21]](#KMR21)), generates C++ code from the models, (cross-)compiles the code, and finally packages the applications as Docker images. 
If not specified otherwise by the developers, there is one Docker image per component type. 

At runtime, IoT devices download these Docker images to execute parts of the application and, together, execute the full IoT application. 
The IoT devices may interact with numerous services that provide, e.g., communication between the components, digital twins [[KMR+20]](#KMR+20), monitoring [[KMR21]](#KMR21), or deployment decisions.


## Adaptive Device-Owner-Controlled Deployment 

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsDeployment.png 
         title: "Overview of MontiThings' Deployment Process" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

IoT applications can be very dynamic. 
New devices may join the system at runtime and others may fail and, thus, leave the system.  
Accordingly, deployment decisions must be made at runtime.
Since IoT systems can also be very heterogeneous (both in terms of single IoT devices and the set of a devices present in a system), IoT applications should be developed as product lines that can adapt to varying environments. 
Therefore, MontiThings offers a deployment algorithm that can decide at runtime which device runs which software. 


For this purpose, the developers (which we call *global managers* in this context) define the hardware requirements of the individual components.
On the one hand, the deployment algorithm takes into account the technical requirements of the software and the technical capabilities of the IoT devices so that software is only ever run on compatible devices.
On the other hand, the algorithm also considers the requirements of the device owners (which we call *local managers*).
Device owners can express their *local requirements* in the form of rules. 
For example, you can prohibit recording software from running in the bedroom or require that smoke detector software be listed in each room.

Unfortunately, not all requirements of the device owners can always be met. 
For example, if they request that smoke detector software be run in every room, even though the necessary hardware is not available in every room, the rule cannot be met. 
In these cases, MontiThings automatically makes modification proposals according to which either new hardware is purchased (*"buy a new smoke detector for the living room"*) or rules are weakened (*"run the smoke detector software in all rooms except the living room"*).
The device owners always have the final say on whether a proposal is accepted.
If a valid deployment could be found, the IoT devices are automatically informed about which software they have to run.

Technically, MontiThings' deployment supports four different ecosystems for deploying the Docker images to IoT devices:
- Microsoft [Azure IoT Edge](https://azure.microsoft.com/de-de/services/iot-edge/)
- Docker Compose
- Kubernetes
- [GeneSIS](https://gitlab.com/enact/GeneSIS)


## Failure Detection, Analysis and Recovery

<center>
<div class="row" style="width: 100%; max-width: 700px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsFailureExample.png 
         title: "Example of application failures invisible in the model" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

Even if developers take great care in modeling their application, unfortunately not all errors are always predictable. 
Some errors are not visible due to the higher abstraction level of the models. 
In practice, it can therefore happen that an application does not behave as expected, even if no error is visible in the model. 
For example, the hardware on which the software is running may fail due to harsh environmental conditions (vibrations, humidity, ...) or a network may not be available.

MontiThings provides tools and methods to analyze such errors [[KMR21]](#KMR21) as well as to fix them automatically (within certain limits) [[KRS+22]](#KRS+22).
At runtime, log messages of components can be traced within the architecture similar to a "stack trace" to find the root cause of their occurrence. 
For this purpose, the messages exchanged by components are traced back to find the component that first exhibited the unexpected behavior.
Furthermore, Architectures can be observed at runtime and then modified by model-to-model transformations to make their behavior reproducible for developers retrospectively [[KMR21]](#KMR21).


<center>
<div class="row" style="width: 100%; max-width: 1000px">
    <div class="col-sm mt-3 mt-md-0">
        {% responsive_image path: assets/img/MontiThingsFailureRecovery.png 
         title: "Example of one of MontiThings' failure recovery strategies" 
         class: "img-fluid rounded z-depth-1" %}
    </div>
</div>
</center>
<br />

If a component fails because the IoT device running it is no longer functional, one possible automatic troubleshooting strategy is for MontiThings to transfer the component to another suitable device [[KRS+22]](#KRS+22). 
This automatically restores the state of the failed component. 
In order to put the replacement component in the state of the failed component, the messages that the failed component processed are played back to the replacement component. 
The connectors of the replacement component are not yet connected to other components, so that messages generated during this recovery process do not affect the other components.
The connectors are connected only after the recovery.
To handle non-deterministic behavior and to reduce the complexity of this procedure to $\mathcal{O}(1)$ (instead of $\mathcal{O}(n)$ if all messages have to be restored, where $n$ is the number of messages), components can also serialize their state directly (usually after a constant number of processed messages) and store it in a central system. 
Thus, in the event of a failure, only a constant number of messages - namely the messages since the last state storage - need to be restored. 
To bridge short-term downtimes, e.g. of a power saving mode, without causing network overhead, components can also store their serialized state locally.


{% include trennlinie.html %}

## Key Statements
1. IoT software architectures can be modeled in hierarchically decomposed 
systems using message passing.
2. To achieve the flexibility required by future IoT app stores, the connection between high-level application software and low-level hardware drivers shall be established at runtime.
3. By generating Prolog code to compute the deployment, device owners can not only set rules for the deployment, but also be given modification proposals (such as buying new hardware) in the case of unfulfillable rules.
4. When IoT applications are developed using model-driven techniques (such as with C&C architectures), the reliability of the application can be increased by providing error analysis and handling systematically by the code generator.

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
- [Automotive](/research/Automotive)
- [Agile Model-Based Software Engineering](/research/Agile-MBSE)
- [Model-based Cloud Computing Applications](/research/Cloud)
- [Enterprise Information Systems](/research/Enterprise-Information-Systems)
- [Cyber-Physical Systems (CPS)](/research/Cyber-Physical-Systems)
- [Model-Driven Systems Engineering](/research/Model-Driven-Systems-Engineering)
- [Generative Software Engineering](/research/Generative-SE)
- [Modeling Software Architecture](/research/Software-Architecture)
- [MontiCore - Language Workbench](/research/MontiCore)
- [Robotics Architectures and Tasks](/research/Robotics)
- [State-Based Modeling (Automata)](/research/State-Based-Modeling)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
