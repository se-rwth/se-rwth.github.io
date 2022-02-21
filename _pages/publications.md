---
layout: page
permalink: /publications/
title: Publications
years: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009]
years2: [2008, 2007, 2006, 2004]
years3: [2003, 2002, 2001, 1999, 1998, 1997, 1996, 1995, 1994]
order: 4
nav: true
dropdown: true
children: 
    - title: All Publications
      permalink: /publications/
    - title: divider
    - title: Books
      permalink: /books/
    - title: divider
    - title: Ph.D. Theses
      permalink: /phdtheses/
---
For download: [Bibtex file with most papers](https://se-rwth.github.io/_bibliography/all-software-engineering-rwth-references.bib)

- [Part 1: Publications since 2009 (@RWTH Aachen)](#part1)
- [Part 2: Publications 2004 - 2008 (@TU Braunschweig)](#part2)
- [Part 3: Publications before 2004 (@TU Munich)](#part3)
- [SoSyM Editorials](http://www.sosym.org/editorials/)

<a name="part1"></a>

## Part 1: 2009 - now (RWTH Aachen)
<div class="publications">
  {% for y in page.years %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f all-software-engineering-rwth-references -q @*[year={{y}}]* %}
  {% endfor %}
</div>

<a name="part2"></a>

## Part 2: 2004 - 2008 (TU Braunschweig)
<div class="publications">
  {% for y in page.years2 %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f all-software-engineering-rwth-references -q @*[year={{y}}]* %}
  {% endfor %}
</div>

<a name="part3"></a>

## Part 3: 1994 - 2003 (TU Munich)
<div class="publications">
  {% for y in page.years3 %}
    <h2 class="year">{{y}}</h2>
    {% bibliography -f all-software-engineering-rwth-references -q @*[year={{y}}]* %}
  {% endfor %}
</div>