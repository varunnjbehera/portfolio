---
name: COVID-19 Spread Predictor
tools: [Clustering, Graph, GMaps API, Python]
image: /data/images/covid/nws2.png
description: A system to model the spread of COVID-19 cases after lockdown has been proposed, to define new preventive measures based on hotspots, using the graph clustering algorithm.
---

# COVID-19 Spread Predictor

![preview](/data/images/covid/map.png)

<p class="text-center">
{% include elements/button.html link="https://research.jamlab.in/covid" target="_blank" text="Try it out" %}
</p>

## Abstract
A system to model the spread of COVID-19 cases after lockdown has been proposed, to define new preventive measures based on hotspots, using the graph clustering algorithm. This method allows for more lenient measures in areas less prone to the virus spread. There exist methods to model the spread of the virus, by predicting the number of confirmed cases. But the proposed system focuses more on the preventive side of the solution from a geographical point of view, by predicting the areas or regions that may become hotspots for the virus in the near future. The fact that the virus can only be transmitted by being in close proximity to an already infected person, suggests that, the regions that can easily be reached from an existing hotspot, have a higher chance of becoming a new hotspot. Moreover, in smaller regions, even after strict provisions, positive cases have been found. To consider this fact, the geographic distance between the nearest hotspots can be used as a measure of likelihood of the region also becoming a hotspot. In this paper, a weighted graph of regions with the regions themselves as weighted nodes with weight of the nodes as the number of active cases and the distance as edge weights. The graph can be completely connected or connected based on a distance threshold. The nodes are the administrative, and the distance measure tells the possible transmission between separate communities. Using this data, the potential regions that can become hotspots can be predicted, and preventive measures can be devised.

<p class="text-center">
{% include elements/button.html link="https://arxiv.org/abs/2011.00414" target="_blank" text="Read the Paper" %}
</p>