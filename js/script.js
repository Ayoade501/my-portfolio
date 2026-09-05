/* =============================================================
   script.js
   Every section below is commented so you can see what each part
   does and why. Read it top to bottom the first time — later
   sections (like the window manager) reuse ideas from earlier ones.
   ============================================================= */


/* -------------------------------------------------------------
   1. PROJECTS DATA
   This is the ONLY part of the file you need to touch to add a
   new project. Just copy one of the objects below, paste it as a
   new item in the array, and change the values.

   Fields you can fill in for each project:
     name          - project title (string)
     year          - e.g. "2026" (string)
     description   - a couple of sentences (string)
     tech          - array of strings, e.g. ["HTML", "CSS"]
     image         - path to a screenshot, e.g. "images/projects/my-shot.png"
     github        - link to the repo, or "" if you don't have one yet
     demo          - link to a live version, or "" if there isn't one
     learned       - one honest sentence about what you learned
     securityNote  - optional; leave as "" if there isn't one yet
   ------------------------------------------------------------- */
const projects = [
  {
    name: "web-dev-responsive-rebuild ",
    year: "2026",
    description: "A full responsive rebuild of the web.dev homepage, built from scratch with HTML and CSS and made to work across phone, tablet and desktop screen sizes.",
    tech: ["HTML", "CSS", "Flexbox", "Media Queries"],
    image: "images/IMG_10.png",
    github: "https://github.com/Ayoade501/web-dev-responsive-rebuild",
    demo: "https://ayoade501.github.io/web-dev-responsive-rebuild/",
    learned: "How to debug real responsive layout bugs — fixed heights vs. content, absolute positioning breaking on smaller screens, and how CSS cascade/specificity conflicts actually behave.",
  },
 
  {
    name: "print-shop-ui-practice",
    year: "2026",
    description: "A front-end rebuild of an e-commerce storefront layout, practicing product grids, category navigation, and cart/checkout UI patterns, A full responsive rebuild of the Printivo homepage, built from scratch with HTML and CSS and made to work across phone, tablet and desktop screen sizes.",
    tech: ["HTML", "CSS"],
    image: "images/IMG_12.png",
    github: "https://github.com/Ayoade501/print-shop-ui-practice",
    demo: "https://ayoade501.github.io/print-shop-ui-practice/",
    learned: "How real e-commerce sites structure product listings and navigation for usability, and how to build a responsive grid layout that adapts cleanly across screen sizes. and also mastered responsive layout debugging (fixed vs. fluid sizing), CSS specificity management, Debugged complex CSS cascade issues, eliminated absolute-positioning bugs on mobile viewportsand secure link handling for external resources.",
  },
  {
    name: "Traffic Simulation Animation",
    year: "2026",
    description: "A CSS-only animation simulating moving traffic (cars, lights, or road elements) to practice keyframes, timing functions, positioning and layered motion.", 
    tech: ["CSS", "HTML"],
    image: "images/IMG_13.png",
    github: "https://github.com/Ayoade501/traffic-simulation-animation",
    demo: "https://ayoade501.github.io/traffic-simulation-animation/",
    learned: "How to control animation timing and easing with @keyframes, layering multiple moving elements without JavaScript, and managing performance so animations stay smooth.",
  
  },
  {
    name: "Robot-T-bot-landing-rebuild",
    year: "2026",
    description: "A rebuild of a design/dev agency-style landing page, focused on hero sections, service breakdowns, and clean typography-driven layout. A full responsive rebuild of the Thoghtbot homepage, built from scratch with HTML and CSS and made to work across phone, tablet and desktop screen sizes.",
    tech: ["HTML", "CSS"],
   image: "images/IMG_15.png",
    github: "https://github.com/Ayoade501/Robot-T-bot-landing-rebuild",
    demo: "https://ayoade501.github.io/Robot-T-bot-landing-rebuild/",
    learned: "How to build a strong visual hierarchy using whitespace and typography alone, and how agency sites structure a landing page to move a visitor from headline to call-to-action. And also mastered responsive layout debugging (fixed vs. fluid sizing), CSS specificity management, and secure link handling for external resources. Debugged complex CSS cascade issues, eliminated absolute-positioning bugs on mobile viewports, and ensured fluid typography across all breakpoints.",
    securityNote: ""
  },
  {
    name: "encyclopedia-ui-practice",
    year: "2026",
    description: "A front-end rebuild of an encyclopedia-style search and article layout, Using positioning, focused on typography, content hierarchy, and readable long-form page structure.",
    tech: ["HTML", "CSS"],
    image: "images/IMG_14.png",
    github: "https://github.com/Ayoade501/encyclopedia-ui-practice",
    demo: "https://ayoade501.github.io/encyclopedia-ui-practice/",
    learned: "How to structure content-heavy pages for readability — spacing, font hierarchy, sidebar/infobox layout — and the difference between recreating a UI pattern versus copying a real brand's exact design and copy (this project taught me a lot about brand-safety and originality when building portfolio clones",
    securityNote: ""
  },
  {
    name: "analytics-style-dashboard ",
    year: "2026",
    description: "A front-end clone/rebuild of a Google Analytics-style dashboard, a dashboard-style landing page, practicing marketing-site layout patterns: hero section, feature highlights, and call-to-action placement. Built from scratch with HTML and CSS and made to work across phone, tablet and desktop screen sizes.",
    tech: ["HTML", "CSS", "grid", "Responsive Design"],
    image: "images/IMG_11.png",
    github: "https://github.com/Ayoade501/analytics-style-dashboard",
    demo: "https://ayoade501.github.io/analytics-style-dashboard/",
    learned: " Mastered responsive layout debugging (fixed vs. fluid sizing), CSS specificity management, and secure link handling for external resources,How dashboard/marketing landing pages balance data-visual elements with persuasive copy — and, importantly, why closely copying a real brand's exact logo, colors, and text (rather than just the layout pattern) can trigger phishing/impersonation flags like Google Safe Browsing. This project taught me to rebuild UI patterns originally instead of 1:1 cloning real brands.",
    securityNote: ""
  },
   {
    name: "This Portfolio (Windows 11-Inspired OS)",
    year: "2026",
    description: "A developer portfolio designed to look and behave like a simplified desktop operating system, with draggable windows, a working taskbar clock, and a dynamic project list.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "images/IMG_16.png",
    github: "https://github.com/Ayoade501/my-portfolio",
    demo: "https://ayoade501.github.io/my-portfolio/",
    learned: "Basic DOM manipulation, event listeners, and how to structure JavaScript so a UI with multiple moving parts (windows, taskbar, start menu) stays manageable.",
    securityNote: "Used textContent/createElement instead of innerHTML for anything dynamic, and added rel=\"noopener noreferrer\" to external links, as a small first step in building secure-by-default habits."
  },
];


/* -------------------------------------------------------------
   2. SMALL HELPER: build one project card safely
   We use document.createElement + textContent here instead of
   building a big HTML string and dropping it in with innerHTML.
   That matters because innerHTML runs whatever HTML/JS is inside
   the string — fine for text we wrote ourselves, but a bad habit
   to build, since the exact same code would be a stored XSS
   vulnerability the moment any of this data came from a user
   instead of from us. textContent never executes anything; it
   only ever inserts plain text. Practicing the safe pattern now,
   even here, is the point.
   ------------------------------------------------------------- */
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-flex-item";

  const image = document.createElement("img");
  image.className = "project-image";
  image.src = project.image;
  image.alt = project.name + " screenshot";

  const details = document.createElement("div");
  details.className = "project-details";

  const title = document.createElement("h3");
  title.className = "project-name";
  title.textContent = project.name;

  const year = document.createElement("p");
  year.className = "project-year";
  year.textContent = project.year;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const techList = document.createElement("div");
  techList.className = "project-tech-list";
  project.tech.forEach(function (techItem) {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = techItem;
    techList.appendChild(tag);
  });

  const learned = document.createElement("p");
  learned.className = "project-learned";
  learned.textContent = "What I learned: " + project.learned;

  details.appendChild(title);
  details.appendChild(year);
  details.appendChild(description);
  details.appendChild(techList);
  details.appendChild(learned);

  if (project.securityNote) {
    const securityNote = document.createElement("p");
    securityNote.className = "project-learned";
    securityNote.textContent = "Security note: " + project.securityNote;
    details.appendChild(securityNote);
  }

  const links = document.createElement("div");
  links.className = "project-links";

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer"; // safe external link, see note above
    githubLink.textContent = "GitHub →";
    links.appendChild(githubLink);
  }

  if (project.demo) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demo;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    demoLink.textContent = "Live Demo →";
    links.appendChild(demoLink);
  }

  details.appendChild(links);
  card.appendChild(image);
  card.appendChild(details);

  return card;
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");

  if (projects.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "projects-empty-message";
    emptyMessage.textContent = "No projects added yet — check back soon.";
    container.appendChild(emptyMessage);
    return;
  }

  projects.forEach(function (project) {
    container.appendChild(createProjectCard(project));
  });
}


/* -------------------------------------------------------------
   3. WINDOW MANAGEMENT
   Each "app" (about, skills, projects, security, resume, contact)
   has one <section class="app-window"> in the HTML, plus matching
   buttons in three places: the desktop icons, the Start Menu, and
   the taskbar. All three use the same data-app="..." attribute so
   one function can handle clicks from any of them.
   ------------------------------------------------------------- */

let topZIndex = 10; // increases every time a window is focused, so the
                     // most recently clicked window always renders on top

function getWindowElement(appName) {
  return document.getElementById("window-" + appName);
}

function bringToFront(windowEl) {
  topZIndex += 1;
  windowEl.style.zIndex = topZIndex;
}

function openApp(appName) {
  const windowEl = getWindowElement(appName);
  if (!windowEl) return;

  windowEl.classList.add("window-open");
  windowEl.classList.remove("window-minimized");
  bringToFront(windowEl);
  updateTaskbarIndicator(appName, true);
  closeStartMenu();
}

function focusOrOpenApp(appName) {
  const windowEl = getWindowElement(appName);
  if (!windowEl) return;

  // If it's already open, just bring it to the front instead of
  // opening a second copy — this is the "focus, don't duplicate" rule.
  if (windowEl.classList.contains("window-open") &&
      !windowEl.classList.contains("window-minimized")) {
    bringToFront(windowEl);
  } else {
    openApp(appName);
  }
}

function minimizeApp(windowEl) {
  windowEl.classList.add("window-minimized");
  const appName = windowEl.getAttribute("data-app");
  updateTaskbarIndicator(appName, false);
}

function closeApp(windowEl) {
  windowEl.classList.remove("window-open", "window-minimized", "window-maximized");
  const appName = windowEl.getAttribute("data-app");
  updateTaskbarIndicator(appName, false);
}

function toggleMaximize(windowEl) {
  windowEl.classList.toggle("window-maximized");
}

function updateTaskbarIndicator(appName, isActive) {
  const taskbarBtn = document.querySelector('.taskbar-app-btn[data-app="' + appName + '"]');
  if (!taskbarBtn) return;
  taskbarBtn.classList.toggle("app-active", isActive);
}

/* Wire up every button that can open an app: desktop icons,
   Start Menu items, and pinned taskbar icons all share this. */
function setupAppOpeners() {
  const openerButtons = document.querySelectorAll(
    ".desktop-icon, .start-app-btn, .taskbar-app-btn, .app-link-btn"
  );

  openerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const appName = button.getAttribute("data-app");
      focusOrOpenApp(appName);
    });
  });
}

/* Wire up the minimize/maximize/close buttons inside every window,
   and clicking anywhere on a window brings it to the front. */
function setupWindowControls() {
  const windows = document.querySelectorAll(".app-window");

  windows.forEach(function (windowEl) {
    windowEl.addEventListener("mousedown", function () {
      bringToFront(windowEl);
    });

    const minimizeBtn = windowEl.querySelector(".minimize-btn");
    const maximizeBtn = windowEl.querySelector(".maximize-btn");
    const closeBtn = windowEl.querySelector(".close-btn");

    minimizeBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // stop the click from also triggering drag/focus logic
      minimizeApp(windowEl);
    });

    maximizeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMaximize(windowEl);
    });

    closeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      closeApp(windowEl);
    });
  });
}


/* -------------------------------------------------------------
   4. DRAGGABLE WINDOWS
   Simple mouse-based dragging: on mousedown over a title bar, we
   record where the mouse and window started. On mousemove, we
   shift the window by however far the mouse has moved since.
   On mouseup, dragging stops. This does not use any library —
   it's plain event listeners and basic math.
   ------------------------------------------------------------- */
function setupDraggableWindows() {
  const titleBars = document.querySelectorAll(".window-titlebar");

  titleBars.forEach(function (titleBar) {
    const windowEl = titleBar.closest(".app-window");
    let isDragging = false;
    let startMouseX = 0;
    let startMouseY = 0;
    let startWindowX = 0;
    let startWindowY = 0;

    titleBar.addEventListener("mousedown", function (event) {
      // Don't start a drag if a window control button was clicked
      if (event.target.closest(".window-btn")) return;
      // Maximized windows shouldn't be draggable
      if (windowEl.classList.contains("window-maximized")) return;

      isDragging = true;
      startMouseX = event.clientX;
      startMouseY = event.clientY;

      const rect = windowEl.getBoundingClientRect();
      startWindowX = rect.left;
      startWindowY = rect.top;

      // Switch from the centred "transform" positioning to plain
      // left/top values the moment dragging begins, so our manual
      // pixel math below lines up correctly.
      windowEl.style.transform = "none";
      windowEl.style.left = startWindowX + "px";
      windowEl.style.top = startWindowY + "px";

      bringToFront(windowEl);
    });

    document.addEventListener("mousemove", function (event) {
      if (!isDragging) return;

      const deltaX = event.clientX - startMouseX;
      const deltaY = event.clientY - startMouseY;

      windowEl.style.left = (startWindowX + deltaX) + "px";
      windowEl.style.top = (startWindowY + deltaY) + "px";
    });

    document.addEventListener("mouseup", function () {
      isDragging = false;
    });
  });
}


/* -------------------------------------------------------------
   5. START MENU (open/close + search filter)
   ------------------------------------------------------------- */
const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const startSearchInput = document.getElementById("startSearchInput");

function openStartMenu() {
  startMenu.classList.add("start-menu-open");
  startBtn.classList.add("start-btn-active");
  startBtn.setAttribute("aria-expanded", "true");
}

function closeStartMenu() {
  startMenu.classList.remove("start-menu-open");
  startBtn.classList.remove("start-btn-active");
  startBtn.setAttribute("aria-expanded", "false");
}

function toggleStartMenu() {
  if (startMenu.classList.contains("start-menu-open")) {
    closeStartMenu();
  } else {
    openStartMenu();
  }
}

function setupStartMenu() {
  startBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleStartMenu();
  });

  // Clicking anywhere outside the Start Menu closes it
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = startMenu.contains(event.target);
    const clickedStartBtn = startBtn.contains(event.target);
    if (!clickedInsideMenu && !clickedStartBtn) {
      closeStartMenu();
    }
  });

  // Live search: filter the Start Menu app list as the user types
  startSearchInput.addEventListener("input", function () {
    const query = startSearchInput.value.trim().toLowerCase();
    const appButtons = document.querySelectorAll(".start-app-btn");

    appButtons.forEach(function (button) {
      const appLabel = button.textContent.toLowerCase();
      const matches = appLabel.includes(query);
      button.classList.toggle("app-hidden", !matches);
    });
  });
}


/* -------------------------------------------------------------
   6. TASKBAR CLOCK
   Runs once immediately, then again every second, so the time
   displayed is never more than a second out of date.
   ------------------------------------------------------------- */
function updateClock() {
  const now = new Date();

  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const dateString = now.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short"
  });

  document.getElementById("taskbarTime").textContent = timeString;
  document.getElementById("taskbarDate").textContent = dateString;
}


/* -------------------------------------------------------------
   7. CONTACT FORM (front-end only — no backend exists yet)
   We prevent the default page-reload submit behaviour, do a
   very basic check that the fields aren't empty, then just show
   a status message. Nothing is sent anywhere. See the notes at
   the end of the build for how to wire this up to a real service
   like Formspree later without needing your own backend server.
   ------------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field before sending.";
      return;
    }

    // textContent again here on purpose — never build this kind of
    // confirmation message with innerHTML from user-typed input.
    status.textContent = "Thanks, " + name + " — this form isn't connected to anything yet, but your message would be sent from here once it is.";
    form.reset();
  });
}


/* -------------------------------------------------------------
   8. BOOT SCREEN
   Purely cosmetic: fade the boot screen out shortly after the
   page loads, then remove it from layout entirely.
   ------------------------------------------------------------- */
function runBootSequence() {
  const bootScreen = document.getElementById("bootScreen");

  setTimeout(function () {
    bootScreen.classList.add("boot-hidden");
  }, 900);

  setTimeout(function () {
    bootScreen.style.display = "none";
  }, 1600);
}


/* -------------------------------------------------------------
   9. STARTUP
   Everything above is just function definitions — nothing runs
   until we actually call these, once the page has loaded.
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  runBootSequence();
  renderProjects();
  setupAppOpeners();
  setupWindowControls();
  setupDraggableWindows();
  setupStartMenu();
  setupContactForm();

  updateClock();
  setInterval(updateClock, 1000);
});
