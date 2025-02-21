---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: hero
    content:
      title: ""
      subtitle: ""
      image:
        filename: "placeholder.png"
        focal_point: "center"
    design:
      background:
        color: "transparent"  # Makes the background behind the image transparent
        video: 
          filename: "projects.mp4"
          size: cover # Ensures full width
          type: local
          loop: true  # Ensures the video loops continuously
          autoplay: true  # Automatically plays when the page loads
          muted: true  # Mutes the video (recommended for UX)
          position: center
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
