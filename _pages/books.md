---
layout: page
title: Books
permalink: /books/
description: 
years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2001, 1996]
nav: false
horizontal: false
---

<div class="publications">
  {% for y in page.years %}
    <p>
      <img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie">
    </p>
    <h2 class="year">{{y}}</h2>
    {% bibliography -f all-software-engineering-rwth-references -q @book[year={{y}}]* %}
  {% endfor %}
</div>