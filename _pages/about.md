---
permalink: /
title: "Welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I'm Adrián, an incoming Health & Social Behavior MPH candidate at the Harvard T.H. Chan School of Public Health within the Social & Behavioral Sciences department. Also a researcher, I'm actively involved in labs/centers across the Harvard scientific community including: the Harvard Faculty of Arts & Sciences, Athinoula A. Martinos Center for Biomedical Imaging, Lee Kum Sheung Center for Health & Happiness/Harvard T.H. Chan School of Public Health, McLean Hospital, and Harvard Graduate School of Education.

Research Areas of Focus
======
**Developmental Affective Neuroscience of Childhood Trauma:** 
Among my primary research areas of focus is the developmental affective neuroscience of childhood trauma, with a particular interest in using neuroimaging and neurophysiology techniques to understand the impact of early life stress on brain development and mental health. By studying the neural mechanisms underlying emotional regulation and affective processing, I aim to uncover how early life experiences shape the brain's response to stress and increase susceptibility to mental health disorders later in life. By combining cutting-edge imaging technologies with innovative data analysis methods, I seek to provide a better understanding of the long-term effects of childhood trauma on brain function.

**Brain Connectomics & Neuropsychopharmacology of Psychedelics:** 
Another of my research areas focuses on the intersection of brain connectomics and psychedelics neuropsychopharmacology, using neuroimaging and neurophysiology to investigate the effects of psychedelic substances on brain connectivity and mental health. I am interested in exploring how psychedelics modulate brain networks associated with mental health disorders such as depression and anxiety, and how these changes may underlie the therapeutic potential of these substances. By leveraging advanced neuroimaging techniques and rigorous experimental design, my research aims to shed light on the neural mechanisms underlying the therapeutic effects of psychedelics, and to provide new insights into the treatment of mental health disorders.

**Psychiatric Epidemiology of Trauma and Psychiatric Epigenetics:**
My last research area of focus is the psychiatric epidemiology of trauma and psychiatric epigenetics, exploring the relationship between environmental factors such as childhood trauma and the development of mental health disorders. I am interested in using epidemiological methods to investigate the prevalence and impact of trauma-related mental health conditions, as well as the role of epigenetics in shaping susceptibility to these disorders. By combining large-scale epidemiological studies with cutting-edge molecular biology techniques, my research aims to uncover the genetic and environmental factors that contribute to the development of mental health disorders, with the ultimate goal of developing more effective prevention and treatment strategies.

**Human Flourishing, Happiness, & Identity:**
My research focuses on the intersection of positive psychology and philosophy, with a particular emphasis on the concept of human flourishing. By examining the factors that contribute to a fulfilling and meaningful life, such as positive emotions, engagement, relationships, meaning, and accomplishment, I aim to develop a deeper understanding of the human experience and contribute to the development of interventions that promote well-being and happiness. Through a combination of empirical research, philosophical inquiry, and real-world applications, I seek to address some of the most pressing issues related to human flourishing using a sociocultural approach that would evaluate the impact of ecological systems on our sense of self, identity, and life purpose.

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
