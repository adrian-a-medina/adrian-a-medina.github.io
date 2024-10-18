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
      css_class: dark
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
      title: '🧠 Research Interest Overview 🧠'
      subtitle: 'Integrative Framework of Interdisciplinary Research in Brain, Cognitive, & Social Sciences'
      text: |-        
        My aspiration to become a physician-scientist drives my focus on the integrative study of developmental affective neuroscience, psychiatric epidemiology, and psychopharmacology. I am deeply engaged in exploring how multidimensional traumatic stressors (e.g., threat, deprivation, and unpredictability) affect psychopathology, influenced by neurodevelopmental and epigenetic mechanisms across the lifespan—particularly from prenatal stages to young adulthood. I am also keen on uncovering the therapeutic potentials of psychedelic medicine, specifically its effects on neuroplasticity, connectivity, and mental health outcomes. Through computational modeling, big neuroimaging data, and normative modeling, I aim to enhance comprehension of complex brain-behavior interactions and develop precision medicine approaches that tailor treatments to individual psychopathological profiles. This approach not only seeks to discover novel therapeutic targets but also to refine existing treatments to more effectively address the nuanced and interconnected facets of mental disorders.
        
        In my future clinical practice, I aim to specialize in Neuropsychiatry-Behavioral Neurology, Developmental-Behavioral Pediatrics, and Child-Adolescent Psychiatry. I am committed to providing critical support to vulnerable youths living with mood, anxiety, and neurodevelopmental disorders. My vision is to establish a trauma-informed treatment program that serves children and families from oppressed communities through integrative and culturally-sensitive psychopharmacological, psychoeducational, and psychotherapeutic approaches.
        
        This synthesis of my research and clinical objectives underscores my dedication to bridging scientific discoveries with tangible health solutions, striving for a profound impact on mental health care practices, particularly for those most in need.
  - block: markdown
    content:
      title: '🌟 Accessibility, Diversity, Equity, Inclusion, & Belonging 🌟'
      subtitle: ''
      text: |-
        My philosophy on ADEIB is deeply influenced by my intersectional experiences as a Latinx, Queer, Non-Binary, Disabled, First-Generation, and Low-Income individual. These identities, coupled with my professional and educational experiences, shape my understanding of power, privilege, and oppression.
        
        In academic and community spaces, I strive to apply these principles through mindful mentorship and collaboration. Recognizing the complexity of growth in ADEIB, I commit to learning from both successes and failures. I aspire to maintain an open mind and humility, acknowledging that progress in fostering inclusive environments is ongoing, non-linear, and unique to each context.
        
        I actively seek opportunities to improve, listen, and adapt, ensuring that my actions contribute positively to building spaces where everyone feels seen, heard, and empowered by default.
---

<!--
- block: collection
  id: papers
  content:
    title: Featured Publications
    filters:
      folders:
        - publication
      featured_only: true
  design:
    view: article-grid
    columns: 2
- block: collection
  content:
    title: Recent Publications
    text: ""
    filters:
      folders:
        - publication
      exclude_featured: false
  design:
    view: citation
- block: collection
  id: talks
  content:
    title: Recent & Upcoming Talks
    filters:
      folders:
        - event
  design:
    view: article-grid
    columns: 1
- block: collection
  id: news
  content:
    title: Recent News
    subtitle: ''
    text: ''
    # Page type to display. E.g. post, talk, publication...
    page_type: post
    # Choose how many pages you would like to display (0 = all pages)
    count: 5
    # Filter on criteria
    filters:
      author: ""
      category: ""
      tag: ""
      exclude_featured: false
      exclude_future: false
      exclude_past: false
      publication_type: ""
    # Choose how many pages you would like to offset by
    offset: 0
    # Page order: descending (desc) or ascending (asc) date.
    order: desc
  design:
    # Choose a layout view
    view: date-title-summary
    # Reduce spacing
    spacing:
      padding: [0, 0, 0, 0]
- block: cta-card
  demo: true # Only display this section in the Hugo Blox Builder demo site
  content:
    title: 👉 Build your own academic website like this
    text: |-
      This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

      <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

      Easily build anything with blocks - no-code required!
      
      From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
    button:
      text: Get Started
      url: https://hugoblox.com/templates/
  design:
    card:
      # Card background color (CSS class)
      css_class: "bg-primary-700"
      css_style: ""
-->
