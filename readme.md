# Ironhack Final Project M1 – Víctor Juárez

(https://spiffy-licorice-aa8143.netlify.app/)

## Project Description

A responsive landing page built as the final project for the Web Development Module 1 at Ironhack. The design is based on a Figma prototype and includes mobile adaptation for responsive layout.

## Technologies

- HTML5
- CSS
- JavaScript
- Hosting via Netlify

## Site Structure & Features

### Home Page

- Overview of the company’s mission and services.
- List of clients the company has worked with.
- Display of past projects (data fetched via API).
- Customer testimonials.
- Description of services offered.

### Project Page

- Detailed view of an individual project.
- Data is dynamically fetched from an external API.

### Contact Page

- A contact form for reaching out to the company.
- Form validation is handled via HTML and JavaScript:
  - All fields are required.
  - The name field cannot contain the word "ironhack".

## Structure

/assets

/css
└── styles.css
└── menu.css

/js
└── menu.js
└── formvalidation.js
└── components/
    └── header.js
    └── footer.js
    └── project.js
    └── projects.js

/pages
└── project.html
└── contact.html

index.html

## Deployment

Deployed automatically with Netlify with each new commit.

## License

This project is licensed under the MIT License. You are free to use, modify, and share it.
