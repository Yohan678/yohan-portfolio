/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    /* =====================================================
        GAME 1
    ===================================================== */
    game1: {
        category: "game",
        type: "GAME",
        title: "Survive and Find Star",
        date: "11/2025", // 날짜 추가 (월/연도)
        image: "images/surviveandfindstar.png",
        description:
            "A 3D FPS zombie survival game set in a forest environment, where players must survive against waves of enemies. " +
            "Implemented a star-based upgrade system that allows players to improve damage, movement speed, " +
            "or health by exploring the map and collecting stars. Developed the entire project independently.",
        technologies: [
            { name: "Unity", icon: "devicon-unity-plain" },
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        youtubeId: "TeyYheX0-3I",
        github: "", // 빈 값이므로 모달에서 GitHub 버튼이 자동으로 숨겨집니다.
        demo: "https://devyohan.itch.io/survive-and-find-star"
    },

    /* =====================================================
        GAME 2
    ===================================================== */
    game2: {
        category: "game",
        type: "GAME",
        title: "Wizard's Last Standing",
        date: "04/2025", // 날짜 추가
        image: "images/wizard.png",
        description:
            "A 3D top-down zombie shooter where players defeat enemies, earn points, " +
            "and upgrade their character to progress through increasingly challenging runs. " +
            "Implemented Object Pooling to efficiently manage enemy spawning and respawning, " +
            "as well as a persistent progression system that carries upgrades between runs.",
        technologies: [
            { name: "Unity", icon: "devicon-unity-plain" },
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        youtubeId: "LIWnXXp5OBg",
        github: "", // 빈 값이므로 숨겨짐
        demo: "https://devyohan.itch.io/wizards-last-standing"
    },

    /* =====================================================
        GAME 3
    ===================================================== */
    game3: {
        category: "game",
        type: "GAME",
        title: "Through The Night",
        date: "12/2024", // 날짜 추가
        image: "images/throughthenight.png",
        description:
            "A 2D Unity game independently designed and developed from the ground up " +
            "I created most of the character assets and implemented the core gameplay systems.",
        technologies: [
            { name: "Unity", icon: "devicon-unity-plain" },
            { name: "C#", icon: "devicon-csharp-plain" }
        ],
        youtubeId: "",
        github: "", // 빈 값이므로 숨겨짐
        demo: "https://yoonyohan6.itch.io/through-the-night"
    },

    /* =====================================================
        APP 1
    ===================================================== */
    app1: {
        category: "app",
        type: "APP",
        title: "Safe Step",
        date: "10/2026", // 날짜 추가
        image: "images/safestep.jpg",
        description:
            "SafeStep is an AI-powered walking assistant that uses real-time object detection and " +
            "voice guidance to help visually impaired individuals navigate their surroundings more safely and independently ",
        technologies: [
            { name: "Flutter", icon: "devicon-flutter-plain" },
            { name: "Dart", icon: "devicon-dart-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "FastAPI", icon: "devicon-fastapi-plain" },
            { name: "ElevenLabsAPI", icon: "devicon-elevenlabs-plain" },
            { name: "YOLO-World", icon: "devicon-tensorflow-plain" },
            { name: "GitHub", icon: "devicon-github-plain"}
        ],
        youtubeId: "8KmzF3tsJvU",
        github: "https://github.com/Yohan678/nodata_eye",
        demo: ""
    },

    /* =====================================================
        APP 2
    ===================================================== */
    app2: {
        category: "app",
        type: "APP",
        title: "LOL Profile Finder",
        date: "02/2026", // 날짜 추가
        image: "images/lolfinder.png",
        description:
            "A mobile app that uses the Riot Games API to search for League of Legends players " +
            "and display their profiles, rankings, and game statistics. " ,
        technologies: [
            { name: "Flutter", icon: "devicon-flutter-plain" },
            { name: "Dart", icon: "devicon-dart-plain" },
            { name: "GitHub", icon: "devicon-github-plain"}
        ],
        youtubeId: "",
        github: "https://github.com/Yohan678/LOLFinder.git", // 값이 존재하므로 표시됨
        demo: ""
    },

    /* =====================================================
        APP 3
    ===================================================== */
    app3: {
        category: "app",
        type: "APP",
        title: "Focus Pomodoro",
        date: "09/2025", // 날짜 추가
        image: "images/pomodoro.png",
        description:
            "An iOS productivity app that helps users stay focused " +
            "and manage their study sessions using the Pomodoro Technique. ",
        technologies: [
            { name: "XCode", icon: "devicon-xcode-plain" },
            { name: "SwiftUI", icon: "devicon-swiftui-plain" },
            { name: "GitHub", icon: "devicon-github-original" }
        ],
        youtubeId: "iUMBT2s9pY0",
        github: "https://github.com/Yohan678/LOLFinder", // 값이 존재하므로 표시됨
        demo: ""
    }

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("primary-navigation");
let previouslyFocusedElement = null;


/* =========================================================
   CREATE TECHNOLOGY ELEMENT
========================================================= */

function createTechnologyElement(technology) {
    const technologyElement = document.createElement("span");
    technologyElement.className = "technology";

    const icon = document.createElement("i");
    icon.className = technology.icon;

    const name = document.createElement("span");
    name.textContent = technology.name;

    technologyElement.appendChild(icon);
    technologyElement.appendChild(name);

    return technologyElement;
}


/* =========================================================
   CREATE PROJECT CARD
========================================================= */

function createProjectCard(projectId, project) {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.category = project.category;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");

    card.addEventListener("click", function () {
        openProject(projectId);
    });

    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(projectId);
        }
    });

    /* --- Image --- */
    const imageContainer = document.createElement("div");
    imageContainer.className = "project-image";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;

    imageContainer.appendChild(image);

    /* --- Project Info --- */
    const projectInfo = document.createElement("div");
    projectInfo.className = "project-info";

    /* Type */
    const type = document.createElement("p");
    type.className = "project-type";
    type.textContent = project.type;

    /* Date (새로 추가됨) */
    const date = document.createElement("p");
    date.className = "project-date";
    date.textContent = project.date || "";

    /* Title */
    const title = document.createElement("h3");
    title.textContent = project.title;

    /* Description */
    const description = document.createElement("p");
    description.textContent = project.description;

    /* Technologies */
    const technologies = document.createElement("div");
    technologies.className = "project-technologies";

    project.technologies.forEach(function (technology) {
        const element = createTechnologyElement(technology);
        technologies.appendChild(element);
    });

    /* Assemble Info */
    projectInfo.appendChild(type);
    if (project.date) {
        projectInfo.appendChild(date);
    }
    projectInfo.appendChild(title);
    projectInfo.appendChild(description);
    projectInfo.appendChild(technologies);

    /* Assemble Card */
    card.appendChild(imageContainer);
    card.appendChild(projectInfo);

    return card;
}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects(filter = "all") {
    projectsGrid.innerHTML = "";

    const sortedProjects = Object.entries(projects).sort(function ([, projectA], [, projectB]) {
        const [monthA, yearA] = (projectA.date || "01/0000").split("/").map(Number);
        const [monthB, yearB] = (projectB.date || "01/0000").split("/").map(Number);

        return yearB - yearA || monthB - monthA;
    });

    sortedProjects.forEach(function ([projectId, project]) {
        if (filter !== "all" && project.category !== filter) {
            return;
        }

        const card = createProjectCard(projectId, project);
        projectsGrid.appendChild(card);
    });
}


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
        const filter = button.dataset.filter;
        renderProjects(filter);
    });
});


/* =========================================================
   OPEN PROJECT MODAL
========================================================= */

function openProject(projectId) {
    const project = projects[projectId];

    if (!project) {
        console.error("Project not found:", projectId);
        return;
    }

    if (!modal) {
        console.error("Project modal not found.");
        return;
    }

    previouslyFocusedElement = document.activeElement;

    /* Modal Elements */
    const modalImage = document.getElementById("modal-image");
    const modalType = document.getElementById("modal-type");
    const modalDate = document.getElementById("modal-date"); // 모달 날짜 요소
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalTags = document.getElementById("modal-tags");
    const modalGithub = document.getElementById("modal-github");
    const modalDemo = document.getElementById("modal-demo");
    const videoContainer = document.getElementById("modal-video-container");
    const youtube = document.getElementById("modal-youtube");

    /* Basic Info */
    if (modalImage) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
    }
    if (modalType) modalType.textContent = project.type;
    if (modalDate) modalDate.textContent = project.date || ""; // 날짜 바인딩
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;

    /* Technologies */
    if (modalTags) {
        modalTags.innerHTML = "";
        project.technologies.forEach(function (technology) {
            modalTags.appendChild(createTechnologyElement(technology));
        });
    }

    /* GitHub 링크 체크 (없거나 "#" 또는 공백이면 안 보임) */
    if (modalGithub) {
        if (project.github && project.github.trim() !== "" && project.github !== "#") {
            modalGithub.href = project.github;
            modalGithub.style.display = "inline-flex";
        } else {
            modalGithub.style.display = "none";
        }
    }

    /* Demo 링크 체크 */
    if (modalDemo) {
        if (project.demo && project.demo.trim() !== "" && project.demo !== "#") {
            modalDemo.href = project.demo;
            modalDemo.style.display = "inline-flex";
        } else {
            modalDemo.style.display = "none";
        }
    }

    /* YouTube Embed */
    if (youtube && videoContainer) {
        if (project.youtubeId && project.youtubeId.trim() !== "") {
            youtube.src = `https://www.youtube.com/embed/${project.youtubeId}`;
            videoContainer.style.display = "block";
        } else {
            youtube.src = "";
            videoContainer.style.display = "none";
        }
    }

    /* Show Modal */
    modal.classList.add("active");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    if (modalClose) modalClose.focus();
}


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProject() {
    if (!modal) return;

    modal.classList.remove("active");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    const youtube = document.getElementById("modal-youtube");
    if (youtube) {
        youtube.src = "";
    }

    document.body.classList.remove("no-scroll");
    if (previouslyFocusedElement) previouslyFocusedElement.focus();
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function closeNavigation() {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isExpanded));
        navLinks.classList.toggle("is-open", !isExpanded);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeNavigation);
    });
}


/* =========================================================
   MODAL EVENT LISTENERS
========================================================= */

if (modalClose) {
    modalClose.addEventListener("click", closeProject);
}

if (modal) {
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeProject();
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && modal.classList.contains("active")) {
        closeProject();
    }
});


/* =========================================================
   INITIALIZE
========================================================= */

renderProjects();