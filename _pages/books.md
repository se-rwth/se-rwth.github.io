---
layout: page
title: Books
permalink: /books/
description: 
years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2001, 1996]
nav: false
horizontal: false
---

<div class="row mt-3">
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#FHK+21"><img src="/assets/img/covers/Ernst-Denert-Award-for-Software-Engineering-2020.jpg" width="100%"></a>
    </cite>
  </div>
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#HKR21"><img src="/assets/img/covers/handbook2021.cover.png" width="100%"></a>
    </cite>
  </div>
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#BBK+21"><img src="/assets/img/covers/crest.jpg" width="100%"></a>
    </cite>
  </div>
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#FHK+20"><img src="/assets/img/covers/denert20.jpg" width="100%"></a>
    </cite>
  </div>
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#BKR+20"><img src="/assets/img/covers/montibelle.cover.gif" width="100%"></a>
    </cite>
  </div>
  <div class="col-sm-2 mt-3 mt-md-0">
    <cite>
      <a href="#Nag19"><img src="/assets/img/covers/gotik.jpg" width="100%"></a>
    </cite>
  </div>
</div>

<div class="publications">
  {% for y in page.years %}
    <p>
      <img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie">
    </p>
    <h2 class="year">{{y}}</h2>
    {% bibliography -f all-software-engineering-rwth-references -q @book[year={{y}}]* %}
  {% endfor %}
</div>