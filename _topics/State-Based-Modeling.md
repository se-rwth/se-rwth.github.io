---
layout: page
title: State-Based Modeling (Automata)
description: 
img: 
importance: 1
---
## Summary of Selected Papers
Today we see that many computer science theories are based on state machines in various forms including Petri nets or temporal logics. Software engineering is particularly interested in using state machines for **modeling systems**.

We believe that a sound and precise integration of the digital theory (automata) of computer science with control theory (calculus) used by almost all other engineering and science disciplines is one of the most interesting challenges that we experience at the moment. Cyber-physical systems (CPS) urgently require such an integrated theory.

Our major contributions to state-based modeling can currently be divided into three parts:

1. Understanding how to model object-oriented and distributed software using state machines respectively Statecharts.
2. Understanding refinement and composition on state machines.
3. Applying state machines for modeling of systems.

## State Machines as Semantics for Object-Oriented Distributed Software
A practically useable language for state based modeling is quite different from a pure theory, because a concrete modeling notation, for example, allows us to denote finitely many (typically very few) states while the implementation normally has an infinite state space.

In early papers, such as [[GKR96]](https://www.se-rwth.de/topics/~rumpe/publications/Enhancing-the-SysLab-System-Model-with-State.pdf), we have discussed how a [system model](/topics/Semantics) can describe object-oriented systems. Built on this experience, a complete semantic model has been created for object-oriented systems in [[BCR07b]](https://www.se-rwth.de/~rumpe/publications20042008/Towards-a-System-Model-for-UML.-Part-3.-The-State-Machine-Model.pdf). Objects, inheritance, states, method calls, stack, distribution, time as well as synchronous and asynchronous communication are completely defined and encoded into state machines. The theory is, therefore, suitable as semantic model for any kind of discrete systems. [[BCGR09a]](https://www.se-rwth.de/publications/Definition-of-the-UML-system-model.pdf) describes a condensed version of this system model and [[BCGR09]](https://www.se-rwth.de/publications/Considerations-and-Rationale-for-a-UML-System-Model.pdf) discusses design decisions, how to use the system model for denotational semantics, and taming the complexity of the system model.

## Refinement and Refactoring of Statemachines
Starting with [[PR94]](https://www.se-rwth.de/topics/~rumpe/publications/A-new-Concept-of-Refinement-used-for-Behaviour-Modelling-with-Automata-FME.pdf), we want to know, how to use state machines to describe abstract behavior of superclasses and refine it in subclasses. While [[PR94]](https://www.se-rwth.de/topics/~rumpe/publications/A-new-Concept-of-Refinement-used-for-Behaviour-Modelling-with-Automata-FME.pdf) was rather informal, we have formalized the refinement relation in [[RK96]](https://www.se-rwth.de/topics/~rumpe/publications/Automata-Describing-Object-Behavior.pdf) by mapping a state machine to a set of possible component behaviors based on Focus's streams. In the Ph.D. thesis [[Rum96]](https://www.se-rwth.de/topics/~rumpe/publications/diss_rumpe) constructive transformation rules for refining automata behavior are given and proven correct. This theory is applied to features in [[KPR97]](https://www.se-rwth.de/topics/~rumpe/publications/Feature-Specification-and-Refinement-with-State-Transition-Diagrams.pdf), where a feature is a sub-automaton that adapts the original behavior in a refining form, precisely clarifying where feature interaction is allowed or harmful.

It became apparent that a state machine either serves as an implementation, where the described behavior is partial and can only be extended but not adapted, or that a state machine describes a specification, where the behavior is constrained to a possible, **underspecified** set of reactions, promised to the external users of a state machine. Here, refinement always means reduction of underspecification, telling more behavioral details to the external user. This is constructively achieved, e.g., by removing transitions that have alternatives or adding new behavior (transitions), if previously no transition was given at all.

Specification languages are particularly strong, if only explicitly given statements and no implicit additional assumptions hold (such as: implicit ignoring of messages, if they cannot be processed by a transition). See [[Rum96]](https://www.se-rwth.de/topics/~rumpe/publications/diss_rumpe) and [[Rum16]](http://www.se-rwth.de/mbse/) for details. The concept of chaos completion should be used to define semantics of incomplete state machines. This is much better for behavioral refinements than the concept of ignoring messages or error handling in cases where no explicit transition is given. The main disadvantage of "implicit ignoring" is that you never know whether the specifier intended this as desired behavior or just did not care (which is a big difference when we want to refine the specifier's model!).

## Our State Machine Formalism: I/O<sup>ω</sup> Automata
[[Rum96]](https://www.se-rwth.de/topics/~rumpe/publications/diss_rumpe) describes an I/O<sup>ω</sup>-automaton as (S, Min, Mout, δ, I) consisting of:

- states S
- input messages Min
- output messages Mout
- transition relation δ ⊆ S x Min x S x Mout<sup>ω</sup>;
- initial states I

where Mout<sup>ω</sup> = Mout<sup>*ω*</sup> ∪ Mout<sup>∞</sup> is the set of all finite and infinite words over Mout.

Transition relation δ is nondeterministic and incomplete. Each transition has one single input message from Min but an arbitrary long sequence of output messages from Mout. Nondeterminism is handled as underspecification allowing the implementation (or the developer) to choose. Incompleteness is also understood as underspecification allowing arbitrary (chaotic) behavior, assuming that a later implementation or code generator will choose a meaningful implementation, but a specifier does not have to decide upfront. Fairness of choice for transitions is not assumed (but possible), as it is counterproductive to refinement by deciding on one alternative during the implementation process.

Most interestingly, describing transitions in δ with input and corresponding output leads to a much more abstract form of state machines, which can actually be used in the modeling process. First there are no (explicit) intermediate states necessary that would distribute a sequence of output messages in individual transitions (which is the case in classic Lynch/Tuttle I/O-automata, where a transition has exactly one input or output message). Second our I/O<sup>ω</sup> automata preserve the causal relation between input and output on the transitions (whereas I/O automata distribute this over many transitions). We believe I/O<sup>ω</sup> automata are therefore suited as a human modeling language and are thus used in a syntactically enriched, comfortable form as Statecharts in [[Rum16]](http://www.se-rwth.de/mbse/) and [[Rum17]](http://www.se-rwth.de/mbse/).

## Composition of State Machines
One state machine describes one component. In a distributed system, many state machines are necessary to describe collaborating components. The overall behavior of the component collaboration must then be derivable from the knowledge about the form of composition (architecture describing communication channels) and the specified behavior (state machines) of the components. [[GR95]](https://www.se-rwth.de/topics/~rumpe/publications/Concurrent-Timed-Port-Automata.pdf) describes how timed state machines are composed. This technique is embedded in the composition and behavioral specifications concepts of Focus using streams and state machines in a nice overview article [[BR07]](https://www.se-rwth.de/~rumpe/publications20042008/Modulare-hierarchische-Modellierung-als-Grundlage-der-Software-und-Systementwicklung.pdf). Most important, refinement of a component behavior by definition leads to a refinement of the composed system. This is a very important property, which is unfortunately not present in many other approaches, where system integration is a nightmare when components evolve.

Unfortunately, the untimed, event driven version of state machines that is very well suited for refinement and abstract specification has no composition in general. Further investigation is necessary.

## Usage of Automata-based Specification
All our knowledge about state machines is being embedded in the model-based development method for the UML in [[Rum16]](http://www.se-rwth.de/mbse/) and [[Rum17]](http://www.se-rwth.de/mbse/). Furthermore, it is applied for robots in MontiArcAutomaton [[RRW14a]](https://www.se-rwth.de/publications/Architecture-and-Behavior-Modeling-of-Cyber-Physical-Systems-with-MontiArcAutomaton.pdf), a modeling language combining state machines and an architectural description language in [[THR+13]](https://www.se-rwth.de/publications/A-New-Skill-Based-Robot-Programming-Language-Using-UML-P-Statecharts.pdf) as well as in building management systems in [[FLP+11b]](https://www.se-rwth.de/publications/State-Based-Modeling-of-Buildings-and-Facilities.pdf).

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie">

## Summary
1. I/O<sup>ω</sup> automata (state machines) can be used for I/O-specification of components, objects, agents.
2. Semantics of finitely depictable state machine models can be mapped to infinite behavior implementations.
3. Nondeterminism of the state machine is interpreted as underspecification of the model and can be refined in the development process as well as inherited to subclasses.
4. Refinement of state machines is described as set of constructively applicable transformations (refactoring techniques).
5. A sound semantics for a state machine is given by a mapping to Focus streams that is compatible with refinement and composition.

## Related Topics
- [Automotive](/topics/Automotive)
- [Cyber-Physical Systems (CPS)](/topics/Cyber-Physical-Systems)
- [Domain-Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Evolution & Transformation of Models](/topics/Evolution)
- [Robotics](/topics/Robotics)
- [Modeling Software Architecture](/topics/Software-Architecture)
- [Semantics of Modeling Languages](/topics/Semantics)
- [Unified Modeling Language (UML)](/topics/Unified-Modeling-Language)