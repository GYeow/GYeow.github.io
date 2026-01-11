---
layout: page
title: Brew Wise
description: A Feedback-Driven Precision Brewing Consultant
img: assets/img/brew_wise/workflow.png
# redirect: https://brewwise.ai
importance: 1
category: fun
---

Specialty coffee beans have unique extraction needs depending on their origin and processing, yet many home enthusiasts are unfamiliar with how to dial in brewing parameters and strategy. [BrewWise](https://github.com/GYeow/BrewWiseMini) addresses this by treating brewing as a dynamic optimization problem, using AI to adapt brewing process and align expected flavor with the actual sensory experience.

(read more about <a href="https://github.com/GYeow/BrewWiseMini">BrewWise</a>)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/brew_wise/workflow.png" title="Workflow image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The BrewWise Workflow
</div>

---

## System Workflow

1.  **Semantic Parsing (VLM)**:
    The system utilizes VLM to parse unstructured visual data from coffee packaging, extracting key variables such as Origin, Processing Method (e.g., Washed, Natural), Roast Level, and Sensory Notes into a structured JSON format.
2.  **Parametric Generation (Reasoning)**:
    Rather than relying on static templates, the core engine dynamically calculates brewing parameters (Grind Size, Water Temperature, Ratio) based on the bean's estimated physical properties. It infers solubility and density from roast level and processing method to determine the optimal energy input (Temperature) and surface area (Grind Size) for balanced extraction.
3.  **Iterative Optimization (Feedback Loop)**:
    The "Dial-in" feature implements a closed-loop control system. It accepts multi-dimensional sensory feedback (e.g., Acidity, Body, Balance) referencing SCA standards. The reasoning engine then computes a delta against the previous parameters to generate an adjusted protocol (e.g., increasing surface area via finer grind to address under-extraction), converging towards the optimal extraction point.

---

### Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) + [UniApp](https://uniapp.dcloud.io/)
- **AI Engine**: [Qwen-Plus](https://help.aliyun.com/zh/model-studio/getting-started/models) (LLM) & [Qwen-VL](https://github.com/QwenLM/Qwen-VL) (VLM)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
