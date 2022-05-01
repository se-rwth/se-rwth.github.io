---
layout: page
title: MaCoCo - Management Cockpit for Controlling
permalink: /projects/MaCoCo
nav: false
keys: [GHK+20, ANV+18]
---

**A research project of RWTH Aachen University realized by the Controlling Group and Software Engineering Group**

Within the **MaCoCo (Management Cockpit for Controlling) project** we realize a multi-user web-application for the decentralized management and controlling of organizational processes within the chairs or institutes of a university. The project was startet in 2016. The key elements of the project focus on finance, staff and project organization.

In the development of web-applications the frontend and backend are implemented separately and often use different programming languages. Developers of both parts have to communicate intensively and have to adjust their implementation to the corresponding other side. Consequently, this increases the risk for communication overhead and inconsistencies.

Thus, large parts of the code of MaCoCo is generated with the [MontiCore (MC) language workbenchand code generation framework](http://monticore.de/) to ensure a highly adaptable system. Lead users are involved actively in the development process to be able to provide a useful solution.

The MaCoCo project is funded by the RWTH Aachen University and jointly realized by the chairs of Controlling and Software Engineering.

## Impressions

<div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-interval="false" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{ '/assets/img/Dashboard.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Dashboard" >
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Finanzdashboard.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Dashboard Finances" >
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Finanzuebersicht.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Overview Finances">
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Konto-Details.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Account Details">
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Buchungen_zu_Konto.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Bookings">
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Stellenzuweisungen.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="" title="Job Assignment">
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Personal_Dashboard.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="..." title="Employees Dashboard">
    </div>
    <div class="carousel-item">
      <img src="{{ '/assets/img/Planstellen.png' | relative_url }}" class="img-fluid rounded z-depth-1" alt="..." title="Permanent Positions">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>

**-- Only reachable from RWTH network --**

The [user manual](https://macoco.rwth-aachen.de/w/index.php/) provides detailed information about MaCoCo functionalities and our [online test version](https://macoco.rwth-aachen.de/w/index.php/Testversion).

## MaCoCo in a nutshell:
- Enterprise Information System
- Agile, Model-Driven Software Engineering
- Code Generators
- Cr-eation and use of domain-specific languages (DSLs)
- User centered development process
- Web Application
- Angular Frontend (Typescript/HTML)
- Java Backend

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Related Research Topics:
- [Agile Model Based Software Engineering](/topics/Agile-MBSE)
- [Domain Specific Languages (DSLs)](/topics/Domain-Specific-Languages)
- [Generative Software Engineering](/topics/Generative-SE)
- [Software Language Engineering (SLE)](/topics/Language-Engineering)
- [UML/P](/topics/UML-P)
- [Unified Modeling Language (UML)](https://www.se-rwth.de/topics/Unified-Modeling-Language.php)

<img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" 
title="Trennlinie">

## Publications
<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>