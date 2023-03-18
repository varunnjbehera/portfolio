---
title: COVID-19 Spread Predictor
name: COVID-19 Spread Predictor
tools: [Clustering, Graph, GMaps API, Python]
image: /data/images/covid/nws2.png
description: A system to model the spread of COVID-19 cases after lockdown has been proposed, to define new preventive measures based on hotspots, using the graph clustering algorithm.
---

# COVID-19 Spread Predictor

![](/data/images/covid/map.png)

## Abstract
This paper proposes a system to model the spread of COVID-19. This system will work in post lockdown conditions, when the only method of travel, is by road. It defines impact measures, that state the severity of the potential disease spread, in a specific area. These impact measures are calculated based on predicted hotspots, using a graph clustering algorithm. Using this method, more lenient measures may be taken, in areas less prone to the virus spread. There do exist other methodologies to model the spread of viruses, but most overlook the spatial nature of the viruses. The proposed system focuses on this limitation. Specifically, it focuses on preventing the virus spread, from a geographical point of view.  Since the virus spread depends entirely on contact, regions near existing hotspots may potentially become new hotspots. The country is first visualized as a weighted graph of regions. The weights of the nodes are the number of active cases, and the edge weights are the geodesics between those nodes. This graph is connected based on a distance threshold. The nodes are the administrative level, and the impact measure tells the possible transmission between separate regions. Using this data, potential hotspots are easily identified. This data will help administrative bodies, to make more fine-tuned lockdown restrictions, based on the impact measures.

<p class="text-center">
{% include elements/button.html link="https://research.jamlab.in/covid" text="Try it out" %}
{% include elements/button.html link="https://arxiv.org/abs/2011.00414" text="Read the Paper" %}
</p>

_Behera, V.N.J., Ranjan, A., Reza, M. (2022). Graph-Based Clustering Algorithm for Social Community Transmission Control of COVID-19 During Lockdown. In: Nayak, J., Naik, B., Abraham, A. (eds) Understanding COVID-19: The Role of Computational Intelligence. Studies in Computational Intelligence, vol 963. Springer, Cham._