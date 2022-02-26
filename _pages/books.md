---
layout: page
title: Books
permalink: /books/
description: 
keys: [
        FHK+21, HKR21, BBK+21, FHK+20, BKR+20, Nag19, 
        HR17, GHR17, ABH+17, CMR17, Rum17, CFJ+16, 
        Rum16, BCR15, CCF+15a, CR15, RRW14a, KRR14, 
        KR13, Rum12, RL12, JRS12, Rum11, GKLRS10, 
        GR10, LMPPR10, Rum04, Rum04a, RH04, FPR03b, 
        FPR03, BR01, EFMR01, BEPRT00, BR00, RF99, 
        KRS99, BR98, BR97, Rum96
      ]
nav: false
horizontal: false
---
{% for i in (0..7)%}
  <div class="row mt-3">
    {% for k in page.keys limit:6 offset:continue %}
      <div class="col-sm-2 mt-3 mt-md-0">
        <cite>
          <a href="#{{k}}"><img class="cover" src="/assets/img/covers/{{k}}.png" width="100%"></a>
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