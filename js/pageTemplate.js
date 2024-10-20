// Function to create and return a header element
function createHeader(title) {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    header.appendChild(h1);
    return header;
}

// Function to create a section with a subheading and content
function createSection(headerText, contentText) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = headerText;
    const p = document.createElement('p');
    p.textContent = contentText;
    section.appendChild(h2);
    section.appendChild(p);
    return section;
}

// Function to build the entire page content
function buildPage(content) {
    const container = document.querySelector('.container');
    container.appendChild(createHeader(content.title));

    content.sections.forEach(section => {
        container.appendChild(createSection(section.header, section.content));
    });
}

// Function to create and append a footer element
function createFooter(footerText) {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = footerText;
    footer.appendChild(p);
    return footer;
}

// Function to add footer to the page
function addFooter(content) {
    const container = document.querySelector('.container');
    container.appendChild(createFooter(content.footer));
}
