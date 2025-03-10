---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '3rem'

# Page sections
sections:
  - block: markdown
    content:
      title: ""
    design:
      background:
        video:
          # Name of video in `assets/media/`.
          filename: projects.mp4
          # Post-processing: flip the video horizontally?
          flip: false
          loop: true  # Ensures the video loops continuously
          autoplay: true  # Automatically plays when the page loads
          muted: true  # Mutes the video (recommended for UX)
  - block: collection
    content:
      title: Active Research Projects
      text: |
        I am deeply committed to exploring the rich complexities of human neurodevelopment and mental health. This section highlights a variety of research projects where I actively engage, either leading or significantly contributing, in efforts to expand our understanding across multiple intersecting disciplines—Affective Neuroscience, Computational Psychiatry, Psychiatric Epidemiology, Developmental Psychology, and Neuropsychopharmacology.
        
        My approach to scientific praxis as a scholar emphasizes continual learning and critical reflection, ensuring that my contributions remain grounded in empathy and rigorous inquiry. Through this work, I strive to bridge the gap between theoretical research and practical applications, aiming to positively influence mental health interventions and policies.
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 3
---
