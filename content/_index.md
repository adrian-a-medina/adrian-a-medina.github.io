---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/AMedina_CV.pdf
    design:
      css_class: light
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: 'Professional & Research Aspirations'
      subtitle: ''
      text: |
        ### Integrative Framework of Interdisciplinary Research in Brain, Cognitive, & Social Sciences

        <img src="https://raw.githubusercontent.com/adrian-a-medina/adrian-a-medina.github.io/main/assets/media/ModelDiagram.svg" 
        alt="Research Diagram"
        style="width: 100%; max-width: 400px; margin: 10px auto; display: block;">

        My aspiration to become a physician-scientist drives my focus on the integrative study of developmental affective neuroscience, psychiatric epidemiology, and psychopharmacology. I am deeply engaged in exploring how multidimensional traumatic stressors (e.g., threat, deprivation, and unpredictability) affect psychopathology, influenced by neurodevelopmental and epigenetic mechanisms across the lifespan—particularly from prenatal stages to young adulthood. I am also keen on uncovering the therapeutic potentials of psychedelic medicine, specifically its effects on neuroplasticity, connectivity, and mental health outcomes. Through computational modeling, big neuroimaging data, and normative modeling, I aim to enhance comprehension of complex brain-behavior interactions and develop precision medicine approaches that tailor treatments to individual psychopathological profiles. This approach not only seeks to discover novel therapeutic targets but also to refine existing treatments to more effectively address the nuanced and interconnected facets of mental disorders.

        In my future clinical practice, I aim to specialize in Neuropsychiatry-Behavioral Neurology, Developmental-Behavioral Pediatrics, and Child-Adolescent Psychiatry. I am committed to providing critical support to vulnerable youths living with mood, anxiety, and neurodevelopmental disorders. My vision is to establish a trauma-informed treatment program that serves children and families from oppressed communities through integrative and culturally-sensitive psychopharmacological, psychoeducational, and psychotherapeutic approaches.

        This synthesis of my research and clinical objectives underscores my dedication to bridging scientific discoveries with tangible health solutions, striving for a profound impact on mental health care practices, particularly for those most in need.
    design:
      columns: '1'
  - block: markdown
    content:
      title: 'Scholarly Praxis'
      subtitle: ''
      text: |
        ### Embodying Accessibility, Diversity, Equity, Inclusion, & Belonging in Academia & Beyond

        <img src="https://raw.githubusercontent.com/adrian-a-medina/adrian-a-medina.github.io/main/assets/media/dei.svg" 
        alt="DEI Diagram"
        style="width: 100%; max-width: 400px; margin: 10px auto; display: block;">

        My philosophy on Accessibility, Diversity, Equity, Inclusion, & Belonging (ADEIB) is deeply influenced by my intersectional experiences as a Latinx, Queer, Non-Binary, Disabled, First-Generation, and Low-Income individual. These identities, coupled with my professional and educational experiences, shape my understanding of power, privilege, and oppression.

        In academic and community spaces, I strive to apply these principles through mindful mentorship and collaboration. Recognizing the complexity of growth in ADEIB, I commit to learning from both successes and failures. I aspire to maintain an open mind and humility, acknowledging that progress in fostering inclusive environments is ongoing, non-linear, and unique to each context.

        I actively seek opportunities to improve, listen, and adapt, ensuring that my actions contribute positively to building spaces where everyone feels seen, heard, and empowered by default.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: '🔖 Featured Publications 🔖'
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
---
