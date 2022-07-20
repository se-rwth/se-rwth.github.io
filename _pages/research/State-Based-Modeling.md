---
layout: page
title: State-Based Modeling (Automata)
permalink: /research/State-Based-Modeling/
description: 
img: 
importance: 1
keys: [GKR96, BCR07b, BCGR09a, BCGR09, 
        PR94, RK96, Rum96, KPR97, 
        Rum16, Rum17, GR95, BR07, 
        RRW14a, THR+13, FLP+11b]   
---

## Summary of Most Relevant Topic Papers

Today, we see that many informatics theories are based on state
machines in various forms, including Petri Nets or temporal logics.
Moreover, software engineering is particularly interested in using state 
machines for modeling systems. 

Nonetheless, we believe that a sound and precise
integration of the digital theory (automata) of informatics with
control theory (calculus) used by almost all other engineering and science
disciplines is one of the most interesting challenges we experience now. 
Moreover, cyber-physical systems (CPS) 
(see [Cyber Physical Systems (CPS)](/research/Cyber-Physical-Systems)) urgently
require such an integrated theory.


Our contributions to state-based modeling can be split into three
parts:

1. Understanding how to model object-oriented and distributed software using 
state machines, respectively, Statecharts.
2. Understanding refinement and composition on state machines.
3. Applying state machines for modeling of systems.


## State Machines as Semantics for Object-Oriented Distributed Software

A practically usable language for state-based modeling must be
different from the pure theory because a concrete modeling notation, for
example, allows us to denote finitely many (typically very few) states only,
while the underlying theory usually has an infinite state space.

In early publications, such as [[GKR96]](#GKR96), we have discussed how a system
model can describe object-oriented systems.
We then build onto these experiences to create a complete semantic model for 
object-oriented systems in [[BCR07b]](#BCR07b).
Objects, inheritance, states, method calls, stack, distribution, time as
well as synchronous and asynchronous communication are completely defined
and encoded into state machines.
The theory is, therefore, suitable as a semantic model for any kind of
discrete system. Hence, [[BCGR09a]](#BCGR09a) describes a condensed version of
this system model and [[BCGR09]](#BCGR09) discusses design decisions and
how to use the system model for denotational semantics -- and taming the 
complexity of the system model.


## Refinement and Refactoring of State Machines

Starting with [[PR94]](#PR94), we investigated how to use state machines to
describe the abstract behavior of superclasses and refine it in subclasses.
While the description in [[PR94]](#PR94) ist relatively informal, 
we have formalized the refinement relation in [[RK96]](#RK96) by mapping a state 
machine to a set
of possible component behaviors based on the streams of the Focus (see
[Modeling Software Architecture](/research/Software-Architecture)) theory.
In [[Rum96]](#Rum96), we provide constructive transformation rules for
refining automata behavior and prove their correctness.
This theory is applied to features in [[KPR97]](#KPR97), where a feature is a
sub-automaton that adapts the original behavior in a refining form,
precisely clarifying where feature interaction is allowed or harmful.

It became apparent that a state machine either serves as an implementation,
where the described behavior is partial and can only be extended but not
adapted, or that a state machine describes a specification, where the
behavior is constrained to a possible, underspecified set of reactions,
promised to the external users of a state machine.
Here, refinement always means the reduction of underspecification, telling 
more behavioral details to the external user.
This is constructively achieved, e.g., by removing transitions that have
alternatives or adding new behavior (transitions) in cases where previously 
no transition was applicab.

Specification languages are particularly strong if only explicitly given 
statements, and no additional implicit assumptions,  hold (such as implicitly 
ignoring messages if a transition cannot process them) as detailed in 
[[Rum96]](#Rum96) and [[Rum16]](#Rum16).
The concept of chaos completion should be used to define the semantics of
incomplete state machines.
This is much better suited for behavioral refinements than the concept of
ignoring messages or error handling in cases where no explicit transition is
given.
The main disadvantage of *"implicit ignoring"* is that you never know
whether the specifier intended this as desired behavior or just did not care
-- which is a big difference when aiming to refine the specifier's model.


## Our State Machine Formalism: I/O<sup>ω</sup> Automata

[[Rum96]](#Rum96) 
describes an I/O<sup>ω</sup>-automaton as (S, M<sub>in</sub>, 
M<sub>out</sub>, δ, I) consisting of:

- states S
- input messages M<sub>in</sub>
- output messages M<sub>out</sub>
- transition relation δ ⊆ S x M<sub>in</sub> x S x M<sub>out</sub><sup>ω</sup>;
- initial states I

where M<sub>out</sub><sup>ω</sup> = M<sub>out</sub><sup>*ω*</sup> 
∪ M<sub>out</sub><sup>∞</sup> is the set of all 
finite and infinite words over M<sub>out</sub>.

Transition relation δ is nondeterministic and incomplete. Each transition has 
one single input message from M<sub>in</sub> but an arbitrary long sequence of output 
messages from M<sub>out</sub>. Nondeterminism is handled as underspecification allowing the 
implementation (or the developer) to choose. Incompleteness is also understood 
as underspecification allowing arbitrary (chaotic) behavior, assuming that a 
later implementation or code generator will choose a meaningful implementation.
Still, a specifier does not have to decide up-front. Fairness of choice for 
transitions is not assumed (but possible), as it is counterproductive to 
refinement by deciding on one alternative during the implementation process.

Most interestingly, describing transitions in δ with input and corresponding 
output leads to a much more abstract form of state machines, which can actually 
be used in the modeling process. First, no (explicit) intermediate 
states are necessary to distribute a sequence of output messages in 
individual transitions (which is the case in classic Lynch/Tuttle I/O-automata, 
where a transition has exactly one input or output message). Second, our 
I/O<sup>ω</sup> automata preserve the causal relation between input and output 
on the transitions (whereas I/O automata distribute this over many transitions). 
We believe I/O<sup>ω</sup> automata are therefore suited as a human modeling 
language and are thus used in a syntactically enriched, comfortable form as 
Statecharts in [[Rum16]](https://www.mbse.se-rwth.de/) and 
[[Rum17]](https://www.mbse.se-rwth.de/).

## Composition of State Machines

One state machine describes one component.
In a distributed system, many state machines are necessary to describe
collaborating components.
The overall behavior of the component collaboration must then be derivable
from the knowledge about the form of composition (architecture describing
communication channels) and the specified behavior (state machines) of the
components. [[GR95]](#GR95) describes how timed state machines are composed.

This technique is embedded in the composition and behavioral specifications
concepts of Focus using streams and state machines in a compact overview
article [[BR07]](#BR07).
Most important, refinement of a component behavior by definition leads to a
refinement of the composed system.
This is a very important property, which is unfortunately not present in
many other approaches, where system integration is a nightmare when
components evolve.

Unfortunately, the untimed, event-driven version of state machines that
is very well suited for refinement and abstract specification has no
composition in general. Further investigation is necessary.

## Usage of Automata-based Specification

All our knowledge about state machines is being embedded in the model-based
development method for the UML in [[Rum16]](#Rum16) and [[Rum17]](#Rum17).
Furthermore, we applied it to robotics (see also
[Robotics Architectures and Tasks](/research/Robotics)) with
the MontiArcAutomaton infrastructure ([[RRW14a]](#RRW14a), see also
[Modeling Software Architecture](/research/Software-Architecture)), a
modeling language combining state machines and an architectural description
language in [[THR+13]](#THR+13) as well as in building management systems in
[[FLP+11b]](#FLP+11b).


{% include trennlinie.html %}

## Key Statements

1. I/O<sup>ω</sup> automata (state machines) can be used for I/O-specification 
of components, objects, agents.
2. Semantics of finitely depictable state machine models can be mapped to 
infinite behavior implementations.
3. Nondeterminism of the state machine is interpreted as underspecification of 
the model and can be refined in the development process as well as inherited to 
subclasses.
4. Refinement of state machines is described as set of constructively applicable 
transformations (refactoring techniques).
5. A sound semantics for a state machine is given by a mapping to Focus streams 
that is compatible with refinement and composition.

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
- [Evolution & Transformation of Models](/research/Evolution)
- [Robotics Architectures and Tasks](/research/Robotics)
- [Modeling Software Architecture](/research/Software-Architecture)
- [Semantics of Modeling Languages](/research/Semantics)
- [Unified Modeling Language (UML)](/research/Unified-Modeling-Language)

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
