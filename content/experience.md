---
title: 'Curriculum Vitae'
date: 2023-10-24
type: landing

design:
  spacing: '3rem'

# Note: `username` refers to the user's folder name in `content/authors/`

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
          filename: "experience.mp4"
          size: cover # Ensures full width
          type: local
          loop: true  # Ensures the video loops continuously
          autoplay: true  # Automatically plays when the page loads
          muted: true  # Mutes the video (recommended for UX)
          position: center
  - block: resume-experience
    content:
      title: Professional Background
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: markdown
    id: resume-student
    content:
      title: Student/Intern Research Experience
  - block: markdown
    id: resume-clinical
    content:
      title: Clinical Experience
  - block: markdown
    id: resume-teaching
    content:
      title: Teaching Experience
  - block: markdown
    id: resume-service
    content:
      title: Service & Extracurricular Experience
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
  - block: resume-awards
    content:
      title: Achievements, Awards, & Memberships
      username: admin
  - block: resume-languages
    content:
      title: Language Proficiency
      username: admin
---
