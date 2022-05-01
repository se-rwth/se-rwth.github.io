---
layout: page
title: Ph.D. Theses
permalink: /phdtheses/
description: Aachener Informatik-Berichte, Software Engineering
keys: [
        Kus21, HKR21, Foe21, Kau21, vW20, Hac19, Gre19, Her19, Sch19,
        Blu19, Mat19, Nic18, Hoe18, Mul18, Plo18, HR17, Rot17, GHR17,
        Naz17, ABH+17, Loo17, Via17, Wor16, Hab16, Ren16, Jen15, RRW14a,
        Rin14, Gue14, Pin14, Her14, Hof13, KPR12, Wei12, Sch12, 
        Voe11, Sch10, Ber10, Kra10
      ]
nav: false
horizontal: false
---
{% for i in (0..10)%}
  <div class="row mt-3">
    {% for k in page.keys limit:6 offset:continue %}
      <div class="col-sm mt-3 mt-md-0">
        <cite>
          <a href="#{{k}}"><img class="cover" src="/assets/img/covers/{{k}}.png"></a>
        </cite>
      </div>
    {% endfor %}
  </div>
{% endfor %}

<p><img src="{{ '/assets/img/balken.jpg' | relative_url }}" width = "100%" alt="" title="Trennlinie"></p>

<div class="publications">
  {% for k in page.keys %}
    {% bibliography -f all-software-engineering-rwth-references -q @*[key={{k}}]* %}
  {% endfor %}
</div>