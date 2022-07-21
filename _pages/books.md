---
layout: page
title: Books
permalink: /books/
description: Books from Software Engineering at RWTH Aachen, Bernhard Rumpe
keys: [FHK+22, HKR21, BBK+21, FHK+20a, BKR+20, Nag19, 
        HR17, GHR17, ABH+17, CMR17, Rum17, CFJ+16, 
        Rum16, BCR15, CCF+15a, CR15, RRW14a, KRR14, 
        KR13, Rum12, LR12, JRS12, Rum11, GKL+10, 
        GR10, LMP+10, Rum04, Rum04b, RH04, FPR03, 
        FPR01, BR01, EFM+01, BEP+00, BR00, FR99, 
        KRS99, BR98, BR97, Rum96 ]
nav: false
horizontal: false
---
{% for i in (0..10)%}
  <div class="row mt-3">
    {% for k in page.keys limit:5 offset:continue %}
      <div class="col-sm mt-3 mt-md-0">
        <cite>
          <a href="#{{k}}"><img class="cover" src="/assets/img/covers/{{k}}.png"></a>
        </cite>
      </div>
    {% endfor %}
  </div>
{% endfor %}

{% include trennlinie.html %}

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>

{% include trennlinie.html %}


A. Borkowski/ M. Nagl (Guest Editors). Proc. of the First Polish-German Workshop on Research Cooperation in Computer 
Science. Technical Sciences, Cracow, 2009, Special Issue Vol. 58. No. 3 of the Bulletin of the Polish Academy of 
Sciences, pp. 347-458, September 2010.

M. Nagl/H.J. Bargstädt/M. Hoffmann/N. Müller. Zukunft Ingenieurwissenschaften - Zukunft Deutschland. Beiträge einer 
4ING-Fachkonferenz und der gemeinsamen Plenarversammlung der 4ING-Fakultätentage, 268 S., Springer-Verlag, 2008.

<a name="NM08"></a> 
M. Nagl, W. Marquardt (Editors). Collaborative and Distributed Chemical Engineering: From Understanding to Substantial
Design Process Support - Results of the IMPROVE Project. Lecture Notes in Computer Science 4970, 851 S., 
Springer-Verlag, 2008.


<a name="SNZ08"></a>
Andy Schürr, Manfred Nagl, Albert Zündorf (Editors). Applications of Graph Transformation with Industrial Relevance.
Lecture Notes in Computer Science 5088, 610 S., Springer-Verlag, 2008.

Juraj Hromkovic, Manfred Nagl, Bernhard Westfechtel (Editors). Graph Theoretic Concepts in Computer Science. Lecture 
Notes in Comp. Sci. 3353, 404 S., Springer-Verlag, 2004.

J.L. Pfaltz/M. Nagl/B. Böhlen (Eds.). Proc. 2nd Intl. Workshop on "Applications of Graph Transformation with Industrial
Relevance" (AGTIVE '03). Lecture Notes in Computer Science 3062, 500 S., Springer-Verlag, 2004.

M. Nagl/B. Westfechtel (Hrsg.). Modelle, Werkzeuge und Infrastrukturen zur Unterstützung von Entwicklungsprozessen. 
392 S., Wiley VCH, 2003.

M. Nagl (Hrsg.). B2B mit EAI: Strategien mit XML, Java + Agenten. Online 2001, Congressband VI, 456 S., Online-Verlag, 

M. Nagl/A. Schürr/M. Münch (Eds.). Proc. Intl. Workshop on 'Applications of Graph Transformation System with Industrial
Relevance' (AGTIVE '99). Lecture Notes in Comp. Sci. 1779, 496 S., Springer-Verlag, 2000.

M. Nagl/B. Westfechtel (Hrsg.). Integration von Entwicklungssystemen in Ingenieuranwendungen - Substantielle 
Verbesserung der Entwicklungsprozesse. 440 S., Springer-Verlag, 1999.

M. Nagl (Hrsg.), Verteilte, integrierte Anwendungsarchitekturen: Die Software-Welt im Umbruch. Congressband VI, 
Online '97, 416 S., Online-Verlag, 1997.

<a name="Nag96"></a>
M. Nagl (Editor). Building Tightly Integrated Software Development Environments - The IPSEN Approach. Lecture Notes in
Computer Science 1170, 709 S., Springer-Verlag, 1996.

<a name="Nag95"></a>
M. Nagl (Ed.). Proceedings WG '95, 21st Intl. Workshop on "Graph-Theoretic Concepts in Computer Science". Lecture Notes
in Computer Science 1017, 402 S., Springer-Verlag, 1995.

M. Nagl (Hrsg.). Software- und Information Engineering. Congress VI, Online-Konferenz 1993, 523 S., Online-Verlag, 

<a name="Nag90"></a>
M. Nagl. Softwaretechnik: Methodisches Programmieren im Großen. 387 S., Springer-Verlag, 1990.

M. Nagl (Ed.). Proc. WG'89 15th Int. Workshop on "Graphtheoretic Concepts in Computer Science". Lecture Notes in 
Computer Science 411, 372 S., Springer-Verlag, 1990.

H. Ehrig/M. Nagl/G. Rozenberg/A. Rosenfeld (Hrsg.). Graph Grammars and Their Application to Computer Science. Proc. 
3rd Int. Workshop on Graph Grammars, Virginia USA. Lect. Notes in Comp. Science 291, 609 S.,Springer-Verlag, 1987.

<a name="NP84"></a>
M. Nagl/J. Perl (Hrsg.). Proc. WG`83. International Workshop on Graphtheoretic Concepts in Computer Science, 397 S., 
Trauner-Verlag, 1984.

H. Ehrig/M. Nagl/G. Rozenberg (Hrsg.). Graph Grammars and Their Application to Computer Science. Proc. 2nd 
International Workshop, Osnabrück. Lect. Notes in Comp. Science 153, 452 S., Springer-Verlag, 1983.

M. Nagl. Einführung in die Programmiersprache Ada. 348 S., Vieweg-Verlag, 1982 (Nachdruck 1983), 2. Auflage 1988, 
341 S., 3. Auflage 1991 (Ada - Einführung in die Programmiersprache der Softwaretechnik), 343 S., 4. Auflage 1992, 
343 S., 5. Auflage 1999 (Softwaretechnik mit Ada '95 - Entwicklung großer Systeme), 504 S., 6. Auflage 2003, 504 S.

<a name="Nag79"></a>
M. Nagl. Graph-Grammatiken: Theorie, Anwendungen, Implementierung. Habilitationsschrift. 375 S., Vieweg-Verlag, 1979.

M. Nagl/H.J. Schneider (Hrsg.). Graphs, Data Structures, Algorithms. Proc. Workshop WG'78 on "Graphtheoretic Concepts 
in Computer Science". Applied Computer Science Band 13, 339 S., Carl Hanser Verlag, 1979.

H.J. Schneider/M. Nagl (Hrsg.). Programmiersprachen. 4, Fachtagung der Gesellschaft für Informatik. 
Informatik-Fachberichte Band 1, 270 S., Springer-Verlag, 1976.

{% include trennlinie.html %}

#### Further links:

- [Publications](/publications)
- [Topic sorted list of most interesting publications](/research)
- [Books](/books)
- [Aachener Informatik-Berichte, Software Engineering / Ph.D. Theses](/phdtheses)
- [Website of the SE](https://www.se-rwth.de)
