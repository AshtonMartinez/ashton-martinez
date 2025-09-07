---
title: "The Bureau Adventure Games"
websiteLink: "https://thebureauorlando.com/"
heroImage: "home-view.png"
slug: "the-bureau"
description: "The Bureau Adventure Games site was designed to deliver a seamless user experience, with a focus on speed, easy content management, and intuitive design for visitors seeking their next great adventure."
tech: ["Astro", "Tailwind", "Directus"]

content:
  - type: text
    subheading: "Project Vision"
    paragraphs:
      - "The goal of this project was to rebuild The Bureau Adventure Games’ website into a more user-friendly and performance-driven platform. With a focus on speed, simplicity, and easy content management, I aimed to create a site that helps users find what they’re looking for quickly and without distractions."
      - "Key to this was making sure the design felt modern and approachable, without overcomplicating things. Using Astro and Tailwind allowed us to build a lightweight, responsive site that performs well across all devices, while keeping the layout clean and easy to navigate."
      - "The project’s real value came in how the client could now manage content. By integrating with their existing Directus instance, I streamlined their ability to edit escape room details, blog posts, and other essential site content with minimal hassle. This meant they could focus more on their business and less on worrying about updates or tech."

  # Container block: side-by-side text + image
  - type: container
    blocks:
      - type: text
        subheading: "Technology Stack"
        paragraphs:
          - "At the heart of the website is Astro, which enabled us to build a fast, static site with minimal JavaScript. This was crucial in keeping the page load times quick, ensuring visitors had a smooth experience, whether they were browsing on a desktop or mobile device."
          - "Tailwind CSS made styling easy and consistent across the site. With its utility-first approach, I was able to quickly implement responsive layouts and fine-tune design details without the need for heavy, bloated CSS files."
          - "For content management, I integrated the site with Directus. The Bureau was already using Directus for another website, so it made sense to extend this to the new site as well. This integration lets them manage escape room details, blog posts, and other site content directly through a user-friendly interface."
          - "I worked closely with The Bureau team throughout the process, making small tweaks to the design along the way to ensure everything was aligned with their vision for a functional, fast, and easy-to-manage website."
      - type: image
        src: "home-view.png"
        alt: "Escape rooms view of The Bureau Adventure Games"
        caption: "Dynamic and modular display of Directus content."

  # Gallery block
  - type: gallery
    images:
      - src: "awards-view.png"
        alt: "Escape Room Puzzle 1"
      - src: "rooms-view.png"
        alt: "Escape Room Puzzle 2"
      - src: "faq-view.png"
        alt: "Escape Room Puzzle 3"

  # Quote block
  - type: quote
    text: "Working with Ashton on this project transformed our online presence. The new site is fast, clean, and easy to manage — exactly what we needed."
    author: "The Bureau Team"


  # Another container: image + text side by side
  - type: container
    blocks:
      - type: image
        src: "game-show.png"
        alt: "Interior view of an escape room"
        caption: "Immersive escape room design showcased on the site."
      - type: text
        subheading: "Immersive Visuals"
        paragraphs:
          - "High-quality images were integrated into the site design to highlight the atmosphere of each escape room."
          - "By pairing visuals with descriptions, we created an engaging and immersive experience for visitors browsing potential adventures."
---
