---
title: Parallel Face Recognition
name: Parallel Face Recognition
tools: [Caffe, GoogleNet, ResNet, Python]
image: /data/images/face/crowd.jpg
description: A new facial recognition system, capable of identifying a person, provided their likeness has been previously stored in the system, in real time.
---

# Parallel Face Recognition

![preview1](/data/images/face/model1.png)

![preview2](/data/images/face/model2.png)

## Abstract
We present a new facial recognition system, capable of identifying a person, provided their likeness has been previously stored in the system, in real time. The system is based on storing and comparing facial embeddings of the subject, and identifying them later within a live video feed. This system is highly accurate, and is able to tag people with their ID in real time. It is able to do so, even when using a database containing thousands of facial embeddings, by using a parallelized searching technique. This makes the system quite fast and allows it to be highly scalable.

<p class="text-center">
{% include elements/button.html link="https://arxiv.org/abs/2011.00443" text="Read the Paper" %}
</p>

_Ranjan, A., Behera, V.N.J. and Reza, M., 2020. A Parallel Approach for Real-Time Face Recognition from a Large Database. arXiv preprint arXiv:2011.00443._