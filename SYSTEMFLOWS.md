# JBE Portfolio - Expanded System Flow Specification

**Project\:** JBE Portfolio
**Owner\:** James Bryant Espino
**Repository\:** `Jamespinode`
**Deployment\:** Vercel
**Architecture\:** Next.js App Router + TypeScript
**Content Management\:** MDX + structured TypeScript data
**Interactive Environment\:** React Three Fiber + Three.js
**State Management\:** Zustand
**Design Direction\:** Adaptive light/dark, professional by default, playful by discovery
**Mascot Identity\:** Curious illustrated owl + personal illustrated avatar

---

## 1\. System Overview

JBE Portfolio is a dual-experience personal portfolio composed of two interconnected but independently usable interfaces\:

1. **Simple Portfolio\:** A conventional, responsive professional website designed to present James's identity, competencies, projects, experience, and contact information.
2. **Interactive Portfolio (JBE Canvas)\:** A simulated desktop environment with a Three.js-powered visual world, draggable application windows, interactive objects, and exploratory content.

Both interfaces use the same underlying content, design system, routing infrastructure, and shared services.

The simple portfolio prioritizes accessibility, information retrieval, professional credibility, and performance. The interactive portfolio prioritizes exploration, visual storytelling, interactivity, and personal expression.

The two interfaces must not be mutually dependent. A visitor must be able to understand James's professional background and access important project information without entering the Canvas or enabling WebGL.

### 1.1 High-level system relationship

```text
                         VISITOR
                            |
                            v
                  JBE PORTFOLIO WEBSITE
                            |
              +-------------+-------------+
              |                           |
              v                           v
       SIMPLE PORTFOLIO              JBE CANVAS
       Professional UI             Interactive UI
              |                           |
              |                           v
              |                   Canvas Desktop Shell
              |                           |
              |                 +---------+---------+
              |                 |                   |
              |                 v                   v
              |           Window Manager       3D Environment
              |                 |                   |
              |                 v                   v
              |           Applications        Interactive Objects
              |                 |                   |
              +-----------------+-------------------+
                                |
                                v
                       SHARED APPLICATION LAYER
                                |
             +------------------+------------------+
             |                  |                  |
             v                  v                  v
        Content System     Theme System       Navigation System
             |                  |                  |
             +------------------+------------------+
                                |
                                v
                       CONTENT AND ASSETS
                                |
              +-----------------+-----------------+
              |                 |                 |
              v                 v                 v
             MDX           TypeScript Data    Static Assets
          Case Studies     Configuration     Images / Models
```

### 1.2 Core system principles

- Professional information must remain accessible through conventional web navigation.
- The Canvas must function as an optional experience.
- Both interfaces must reference the same canonical project content.
- 3D elements must never become the only means of accessing information.
- User interface state must remain separate from content data.
- Theme preferences must be consistent between interfaces.
- The application must support desktop, tablet, and mobile layouts.
- Reduced-motion and low-performance modes must be available.
- Content must be maintainable without requiring changes to the UI implementation.

---

## 2\. Technology and Responsibility Matrix

| Technology        | Primary responsibility                              |
| ----------------- | --------------------------------------------------- |
| Next.js           | Application framework, routing, rendering, metadata |
| React             | Component architecture and interface rendering      |
| TypeScript        | Type safety and application contracts               |
| Tailwind CSS      | Styling and responsive layouts                      |
| shadcn/ui         | Accessible interface components                     |
| Three.js          | 3D rendering and scene management                   |
| React Three Fiber | React integration for Three.js                      |
| Drei              | 3D helpers, controls, and asset utilities           |
| Motion            | UI animations and transitions                       |
| Zustand           | Canvas state and window management                  |
| MDX               | Project case studies and long-form content          |
| gray-matter       | Frontmatter parsing                                 |
| Zod               | Content and configuration validation                |
| Lucide React      | Interface icons                                     |
| Vercel            | Deployment and hosting                              |
| GitHub            | Version control and source repository               |

### 2.1 Architectural separation

The system should be divided into the following logical layers\:

```text
PRESENTATION LAYER
    |
    +-- Simple Portfolio Components
    |
    +-- Canvas Components
    |
    +-- Three.js Components
    |
    v
APPLICATION LAYER
    |
    +-- Project Services
    |
    +-- Content Services
    |
    +-- Theme Services
    |
    +-- Canvas Window Services
    |
    +-- Navigation Services
    |
    v
DATA LAYER
    |
    +-- MDX Content
    |
    +-- TypeScript Configuration
    |
    +-- Static Images
    |
    +-- 3D Models and Textures
    |
    v
DELIVERY LAYER
    |
    +-- Next.js Rendering
    |
    +-- Static Asset Delivery
    |
    +-- Vercel Deployment
```

The presentation layer must not directly manipulate MDX files or hardcode project content into individual components.

The application layer provides reusable functions and typed data to both interfaces.

---

# PART I - SIMPLE PORTFOLIO

## 3\. Simple Portfolio Overview

The simple portfolio is the primary entry point and professional presentation layer.

Its purpose is to communicate\:

- Who James is.
- What James builds.
- What technical competencies James possesses.
- What projects James has completed or is developing.
- What professional and collaborative opportunities are available.
- How visitors can contact James.

It must provide a straightforward experience for recruiters, prospective clients, developers, collaborators, and other visitors.

### 3.1 Simple portfolio navigation structure

```text
/
|
+-- /about
|
+-- /projects
|   |
|   +-- /projects/saphene
|   |
|   +-- /projects/helm
|   |
|   +-- /projects/casa-lahardin
|   |
|   +-- /projects/[slug]
|
+-- /experience
|
+-- /resume
|
+-- /contact
|
+-- /canvas
```

The `/canvas` route provides access to the interactive experience.

A visitor must be able to return to the conventional portfolio from any Canvas application.

### 3.2 Landing page system flow

The homepage should provide the shortest route to understanding James's professional identity.

```text
VISITOR OPENS /
       |
       v
NEXT.JS RECEIVES REQUEST
       |
       v
RENDER LANDING PAGE
       |
       +-----------------------------+
       |                             |
       v                             v
LOAD SITE NAVIGATION          LOAD HOMEPAGE CONTENT
       |                             |
       v                             v
DISPLAY HEADER               DISPLAY HERO SECTION
                                     |
                                     v
                         INTRODUCE JAMES BRYANT ESPINO
                                     |
                                     v
                         DISPLAY PROFESSIONAL POSITIONING
                                     |
                                     v
                         DISPLAY PRIMARY CALLS TO ACTION
                                     |
                      +--------------+--------------+
                      |                             |
                      v                             v
               VIEW PROJECTS                  ENTER CANVAS
                      |                             |
                      v                             v
              /projects                      /canvas
                      |                             |
                      v                             v
              PROJECT INDEX                 CANVAS INITIALIZATION
```

#### Homepage sections

1. Header and navigation.
2. Hero introduction.
3. Professional positioning statement.
4. Featured projects.
5. Technical competencies.
6. Brief professional background.
7. Creative and technical interests.
8. Contact call to action.
9. Footer.

#### Proposed hero content

```text
JAMES BRYANT ESPINO

Developer. Systems thinker. Writer.

I build systems that solve practical problems,
explore the engineering behind them, and bring
a creative perspective to the way technology
is designed and experienced.

[Explore Projects] [Enter Canvas]
```

The mascot may appear as an illustrated supporting element.

The personal avatar should be used where a human introduction is appropriate.

The hero should not require a 3D scene to load before displaying its content.

---

## 4\. About Page System Flow

The About page provides a more detailed overview of James's professional identity and multidisciplinary interests.

```text
VISITOR OPENS /about
       |
       v
LOAD ABOUT CONTENT
       |
       v
DISPLAY PERSONAL INTRODUCTION
       |
       v
DISPLAY PROFESSIONAL BACKGROUND
       |
       v
DISPLAY TECHNICAL INTERESTS
       |
       v
DISPLAY CREATIVE INTERESTS
       |
       v
DISPLAY DEVELOPMENT PHILOSOPHY
       |
       v
DISPLAY RELATED PROJECTS
       |
       v
VISITOR SELECTS PROJECT OR CONTACT
       |
       +---------------------+
       |                     |
       v                     v
PROJECT DETAILS          CONTACT PAGE
```

### Content categories

- Personal introduction.
- Education.
- Technical interests.
- Development philosophy.
- Software development.
- Database engineering.
- System architecture.
- AI and automation.
- Creative writing and worldbuilding.
- Graphic design and visual communication.

The content must distinguish demonstrated skills from technologies currently being explored.

---

## 5\. Projects Page System Flow

The projects page is one of the most important parts of the portfolio.

It should present actual work and provide evidence of implementation, technical decision-making, and problem-solving.

### 5.1 Project index

```text
VISITOR OPENS /projects
       |
       v
LOAD PROJECT INDEX
       |
       v
RETRIEVE PROJECT METADATA
       |
       v
VALIDATE PROJECT DATA
       |
       v
DISPLAY PROJECT CARDS
       |
       v
VISITOR SELECTS FILTER
       |
       v
FILTER PROJECT COLLECTION
       |
       v
DISPLAY MATCHING PROJECTS
       |
       v
VISITOR SELECTS PROJECT
       |
       v
NAVIGATE TO /projects/[slug]
```

### 5.2 Project categories

Suggested filters\:

- All projects.
- Web applications.
- Software engineering.
- AI and automation.
- System architecture.
- Branding and design.
- Experiments.

Each project card should include\:

- Project title.
- Short description.
- Project category.
- Technology stack.
- Current status.
- Thumbnail or visual representation.
- Link to project details.
- External repository or demonstration link, where available.

### 5.3 Individual project case study

```text
VISITOR OPENS PROJECT SLUG
       |
       v
RESOLVE PROJECT SLUG
       |
       v
CHECK PROJECT CONTENT EXISTS
       |
       +-----------------------------+
       |                             |
       v                             v
     EXISTS                      NOT FOUND
       |                             |
       v                             v
LOAD MDX CONTENT               DISPLAY 404 PAGE
       |
       v
PARSE FRONTMATTER
       |
       v
VALIDATE FRONTMATTER WITH ZOD
       |
       +-----------------------------+
       |                             |
       v                             v
    VALID                      INVALID
       |                             |
       v                             v
RENDER CASE STUDY             HANDLE CONTENT ERROR
       |
       v
DISPLAY PROJECT DETAILS
       |
       v
DISPLAY TECHNICAL IMPLEMENTATION
       |
       v
DISPLAY CHALLENGES AND SOLUTIONS
       |
       v
DISPLAY RESULTS AND LESSONS
       |
       v
DISPLAY RELATED PROJECTS
       |
       v
DISPLAY EXTERNAL LINKS
```

### 5.4 Project case study structure

Each case study should follow a consistent content structure\:

```text
PROJECT OVERVIEW
    |
    +-- Project Name
    +-- Summary
    +-- Project Status
    +-- Timeline
    +-- Role and Responsibilities
    |
    v
PROBLEM STATEMENT
    |
    v
OBJECTIVES AND REQUIREMENTS
    |
    v
SYSTEM ARCHITECTURE
    |
    v
TECHNOLOGY SELECTION
    |
    v
IMPLEMENTATION
    |
    v
CHALLENGES
    |
    v
SOLUTIONS
    |
    v
RESULTS
    |
    v
LESSONS LEARNED
    |
    v
REPOSITORY / DEMONSTRATION
```

### 5.5 Initial project catalog

#### Saphene

```text
PROJECT: Saphene
CATEGORY: AI / Developer Tools
TAGLINE: Clarity Through Evidence
STATUS: Completed hackathon project

PURPOSE:
An evidence-backed verification layer for AI agent
memory and project documentation.

PRESENTATION:
- Claim ledger
- Evidence scope
- Verification workflows
- Evidence traceability
- Implementation examples
- Architecture and design decisions
- Known limitations and future development
```

#### HELM / AnvilOS

```text
PROJECT: HELM
CATEGORY: Business Software / Web Application
STATUS: Existing system with planned enhancements

PURPOSE:
Inventory and business management system.

PRESENTATION:
- Business problem
- Original system
- System architecture
- Database implementation
- Web application conversion
- Client-oriented development
- Planned integrations
```

Planned features such as BIR integrations, mobile support, delivery tracking, and AI analysis must be explicitly labeled as planned unless implementation is verified.

#### Casa Lahardin

```text
PROJECT: Casa Lahardin
CATEGORY: Branding / Graphic Design
STATUS: Completed design project

PURPOSE:
Visual identity and promotional materials for a
private rental and events venue.

PRESENTATION:
- Brand direction
- Logo development
- Color palette
- Typography
- Promotional materials
- Design rationale
```

---

## 6\. Experience Page System Flow

```text
VISITOR OPENS /experience
       |
       v
LOAD EXPERIENCE DATA
       |
       v
VALIDATE EXPERIENCE RECORDS
       |
       v
DISPLAY EXPERIENCE TIMELINE
       |
       v
DISPLAY ROLE DETAILS
       |
       v
DISPLAY RESPONSIBILITIES
       |
       v
DISPLAY RELEVANT SKILLS
       |
       v
VISITOR SELECTS RELATED PROJECT
       |
       v
NAVIGATE TO PROJECT CASE STUDY
```

The experience page should include relevant employment, client work, academic work, and other verified experience.

Academic projects should not be presented as commercial employment.

---

## 7\. Resume Page System Flow

```text
VISITOR OPENS /resume
       |
       v
DISPLAY RESUME SUMMARY
       |
       v
DISPLAY DOWNLOAD OPTION
       |
       v
VISITOR REQUESTS PDF
       |
       v
BROWSER ACCESSES STATIC PDF
       |
       +-----------------------+
       |                       |
       v                       v
DOWNLOAD FILE              OPEN IN BROWSER
```

The resume should be a static PDF stored under `public/documents/`\.

The website should not dynamically generate the resume in the first implementation.

---

## 8\. Contact Page System Flow

The first version should use direct contact methods instead of building an unnecessary messaging backend.

```text
VISITOR OPENS /contact
       |
       v
DISPLAY CONTACT INFORMATION
       |
       +-------------------------------+
       |               |               |
       v               v               v
      EMAIL          LINKEDIN         GITHUB
       |               |               |
       v               v               v
 OPEN MAIL APP     OPEN PROFILE     OPEN PROFILE
```

Optional contact form, if implemented later\:

```text
VISITOR ENTERS FORM DETAILS
       |
       v
CLIENT-SIDE VALIDATION
       |
       v
SERVER-SIDE VALIDATION
       |
       v
ANTI-SPAM VALIDATION
       |
       v
SEND MESSAGE THROUGH EMAIL SERVICE
       |
       v
DISPLAY SUCCESS OR FAILURE
```

A contact form is not required for the first milestone.

---

# PART II - INTERACTIVE PORTFOLIO

## 9\. JBE Canvas Overview

JBE Canvas is a simulated desktop environment embedded within the portfolio.

It combines\:

- Desktop interaction.
- Application windows.
- Interactive navigation.
- 3D environmental storytelling.
- Project exploration.
- Creative archives.
- Technical experiments.
- Mascot interactions.

The Canvas should feel like a small personal digital workspace rather than a conventional webpage with decorative 3D elements.

### 9.1 Canvas architecture

```text
                    VISITOR OPENS /canvas
                              |
                              v
                      CANVAS INITIALIZER
                              |
               +--------------+--------------+
               |              |              |
               v              v              v
          LOAD THEME      LOAD SETTINGS   CHECK DEVICE
               |              |              |
               +--------------+--------------+
                              |
                              v
                      INITIALIZE DESKTOP
                              |
               +--------------+--------------+
               |              |              |
               v              v              v
          DESKTOP UI     WINDOW MANAGER    3D SCENE
               |              |              |
               |              |              |
               v              v              v
          TASKBAR       APPLICATIONS      WORLD OBJECTS
               |              |              |
               +--------------+--------------+
                              |
                              v
                       READY FOR INPUT
                              |
              +---------------+----------------+
              |               |                |
              v               v                v
         POINTER INPUT    KEYBOARD INPUT    TOUCH INPUT
              |               |                |
              +---------------+----------------+
                              |
                              v
                       EVENT DISPATCHER
                              |
               +--------------+--------------+
               |              |              |
               v              v              v
          WINDOW ACTION   APP ACTION     SCENE ACTION
```

### 9.2 Canvas initialization flow

```text
USER NAVIGATES TO /canvas
       |
       v
LOAD CANVAS ROUTE
       |
       v
LOAD CANVAS SHELL
       |
       v
READ USER PREFERENCES
       |
       +------------------------------+
       |                              |
       v                              v
CHECK REDUCED MOTION           CHECK DEVICE CAPABILITIES
       |                              |
       +---------------+--------------+
                       |
                       v
                INITIALIZE UI
                       |
                       v
               INITIALIZE 3D SCENE
                       |
                       +-----------------------+
                       |                       |
                       v                       v
                  WEBGL READY             WEBGL FAILURE
                       |                       |
                       v                       v
                 RENDER SCENE          RENDER FALLBACK
                       |                       |
                       +-----------+-----------+
                                   |
                                   v
                            INITIALIZE DESKTOP
                                   |
                                   v
                            DISPLAY TASKBAR
                                   |
                                   v
                           DISPLAY MASCOT
                                   |
                                   v
                           CANVAS READY
```

The Canvas must not fail completely if WebGL is unavailable.

In fallback mode, the desktop should still support application windows and navigation.

---

## 10\. Canvas Desktop Environment

The desktop is the primary interaction surface.

### 10.1 Desktop components

```text
JBE CANVAS
|
+-- Desktop Background
|
+-- 3D Environment
|
+-- Desktop Icons
|
+-- Application Windows
|
+-- Mascot Companion
|
+-- Taskbar
|   |
|   +-- Start / Launcher
|   +-- Open Applications
|   +-- Theme Toggle
|   +-- Settings
|   +-- Clock
|   +-- Exit Canvas
|
+-- Context Menu
|
+-- Command Palette
|
+-- Desktop Preferences
```

### 10.2 Desktop startup

```text
CANVAS INITIALIZED
       |
       v
RENDER DESKTOP BACKGROUND
       |
       v
RENDER AVAILABLE APPLICATIONS
       |
       v
LOAD DEFAULT DESKTOP STATE
       |
       v
DISPLAY TASKBAR
       |
       v
DISPLAY MASCOT
       |
       v
WAIT FOR USER INPUT
```

The initial desktop should not automatically open multiple windows.

Instead, provide a small welcome message and clear access to the launcher.

### 10.3 Window manager

The window manager is a central subsystem.

It handles\:

- Window creation.
- Window destruction.
- Window positioning.
- Window resizing.
- Focus management.
- Minimize and restore.
- Maximize and restore.
- Z-index ordering.
- Window snapping.
- Active application tracking.

#### Window lifecycle

```text
USER SELECTS APPLICATION
       |
       v
CHECK IF WINDOW ALREADY EXISTS
       |
       +-----------------------------+
       |                             |
       v                             v
     EXISTS                       DOES NOT EXIST
       |                             |
       v                             v
RESTORE EXISTING WINDOW         CREATE WINDOW INSTANCE
       |                             |
       v                             v
SET WINDOW FOCUS              SET DEFAULT POSITION
       |                             |
       v                             v
UPDATE Z-INDEX                 SET DEFAULT SIZE
       |                             |
       +--------------+--------------+
                      |
                      v
                RENDER WINDOW
                      |
                      v
               WAIT FOR INPUT
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
        MOVE       RESIZE      MINIMIZE
          |           |           |
          v           v           v
      UPDATE       UPDATE      HIDE WINDOW
     POSITION       SIZE           |
          |           |            v
          +-----------+       ADD TO TASKBAR
                      |
                      v
                 WINDOW ACTIVE
```

### 10.4 Window interaction rules

Each window should support\:

```text
TITLE BAR
    |
    +-- Drag Window
    |
    +-- Minimize
    |
    +-- Maximize / Restore
    |
    +-- Close

WINDOW BODY
    |
    +-- Application Content
    |
    +-- Scrollable Area
    |
    +-- Internal Navigation
```

The desktop must prevent windows from being dragged entirely outside the visible viewport.

Mobile devices should use full-screen or near-full-screen application panels instead of trying to reproduce desktop dragging with tiny touch targets.

### 10.5 Window data model

```ts
type CanvasWindow = {
  id: string;
  appId: string;
  title: string;

  position: {
    x: number;
    y: number;
  };

  size: {
    width: number;
    height: number;
  };

  zIndex: number;

  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
};
```

Additional fields can be introduced when required, but this is sufficient for the first implementation.

---

## 11\. Application Launcher

The launcher provides centralized access to Canvas applications.

### Application launcher flow

```text
USER SELECTS START BUTTON
       |
       v
OPEN APPLICATION LAUNCHER
       |
       v
DISPLAY AVAILABLE APPLICATIONS
       |
       v
USER SELECTS APPLICATION
       |
       v
DISPATCH APPLICATION ID
       |
       v
WINDOW MANAGER RECEIVES REQUEST
       |
       v
OPEN OR RESTORE WINDOW
       |
       v
CLOSE LAUNCHER
```

### Proposed applications

```text
JBE CANVAS APPLICATIONS
|
+-- Projects
|
+-- Library
|
+-- Studio
|
+-- Workshop
|
+-- Terminal
|
+-- About
|
+-- Settings
```

Each application should be registered in a central application registry.

Example\:

```ts
type CanvasApplication = {
  id: string;
  title: string;
  description: string;
  icon: string;
  defaultSize: {
    width: number;
    height: number;
  };
  component: React.ComponentType;
};
```

The application registry should be the authoritative source for available Canvas applications.

---

## 12\. Canvas Application Workflows

### 12.1 Projects Application

Purpose: Provide an interactive version of the project index.

```text
USER OPENS PROJECTS
       |
       v
LOAD PROJECT APPLICATION
       |
       v
FETCH PROJECT METADATA
       |
       v
DISPLAY PROJECT COLLECTION
       |
       v
USER SELECTS CATEGORY
       |
       v
FILTER PROJECTS
       |
       v
USER SELECTS PROJECT
       |
       v
LOAD PROJECT DETAILS
       |
       v
DISPLAY PROJECT OVERVIEW
       |
       v
USER SELECTS CASE STUDY
       |
       v
OPEN PROJECT DETAIL WINDOW
       |
       v
RENDER MDX CONTENT
```

Possible enhancements\:

- Project cards.
- Interactive timelines.
- Technology tags.
- Architecture diagrams.
- Embedded screenshots.
- External repository links.
- Project status indicators.

All project information must come from the same content system used by `/projects`\.

### 12.2 Library Application

Purpose: Display technical competencies, tools, and knowledge areas.

```text
USER OPENS LIBRARY
       |
       v
LOAD SKILL DATA
       |
       v
DISPLAY CATEGORY COLLECTION
       |
       +------------------------------+
       |              |               |
       v              v               v
   DEVELOPMENT    DATABASES       DESIGN
       |              |               |
       +--------------+---------------+
                      |
                      v
              USER SELECTS CATEGORY
                      |
                      v
               DISPLAY SKILLS
                      |
                      v
              USER SELECTS SKILL
                      |
                      v
             DISPLAY SKILL DETAILS
                      |
                      v
              DISPLAY RELATED WORK
```

Skill categories may include\:

- Programming.
- Web development.
- Databases.
- Software architecture.
- AI and automation.
- Cloud and infrastructure.
- Design.
- Creative production.

Do not use arbitrary percentage bars to represent skill proficiency. Prefer evidence-backed descriptions and related projects.

### 12.3 Studio Application

Purpose: Present creative writing, worldbuilding, and visual work.

```text
USER OPENS STUDIO
       |
       v
LOAD STUDIO INDEX
       |
       v
DISPLAY CREATIVE CATEGORIES
       |
       +------------------------------+
       |              |               |
       v              v               v
   WRITING        WORLDBUILDING      DESIGN
       |              |               |
       +--------------+---------------+
                      |
                      v
             USER SELECTS CATEGORY
                      |
                      v
              DISPLAY CONTENT INDEX
                      |
                      v
              USER SELECTS ITEM
                      |
                      v
              OPEN DETAIL WINDOW
                      |
                      v
               DISPLAY CONTENT
```

Potential content\:

- Dawn of Dilemmas.
- Creative writing excerpts.
- Worldbuilding notes.
- Visual design experiments.
- Concept art.
- Selected writing projects.

Creative works should have clear publication and confidentiality boundaries. Unpublished or private material should not be exposed by default.

### 12.4 Workshop Application

Purpose: Present technical experiments and prototypes.

```text
USER OPENS WORKSHOP
       |
       v
LOAD EXPERIMENT INDEX
       |
       v
DISPLAY EXPERIMENT CARDS
       |
       v
USER SELECTS EXPERIMENT
       |
       v
CHECK EXPERIMENT TYPE
       |
       +----------------------------+
       |                            |
       v                            v
  STATIC DEMO                  INTERACTIVE DEMO
       |                            |
       v                            v
DISPLAY DESCRIPTION          LOAD REQUIRED MODULE
       |                            |
       |                            v
       |                      INITIALIZE DEMO
       |                            |
       +--------------+-------------+
                      |
                      v
                DISPLAY RESULTS
                      |
                      v
                USER EXITS DEMO
```

Possible experiments\:

- Three.js environments.
- Shader demonstrations.
- UI prototypes.
- Small interactive systems.
- Data visualizations.
- AI workflow demonstrations.

Experiments should be isolated from the desktop's core state so a faulty demo cannot crash the entire Canvas.

### 12.5 Terminal Application

Purpose: Provide a playful command-based navigation interface.

The terminal should be a simulated command interface, not a real operating system shell.

```text
USER OPENS TERMINAL
       |
       v
INITIALIZE TERMINAL SESSION
       |
       v
DISPLAY PROMPT
       |
       v
USER ENTERS COMMAND
       |
       v
PARSE COMMAND
       |
       v
VALIDATE COMMAND
       |
       +----------------------------+
       |                            |
       v                            v
   VALID COMMAND               UNKNOWN COMMAND
       |                            |
       v                            v
EXECUTE ACTION              DISPLAY ERROR MESSAGE
       |                            |
       v                            |
DISPLAY RESPONSE                  |
       |                            |
       +--------------+-------------+
                      |
                      v
                WAIT FOR INPUT
```

Suggested commands\:

```text
help
about
projects
skills
experience
open projects
open library
open studio
open workshop
theme light
theme dark
clear
exit
```

Additional hidden commands can be added as Easter eggs.

Never execute arbitrary shell commands or expose server-side environment variables.

### 12.6 Settings Application

Purpose: Manage Canvas preferences.

```text
USER OPENS SETTINGS
       |
       v
LOAD CURRENT PREFERENCES
       |
       v
DISPLAY SETTINGS CATEGORIES
       |
       +-----------------------------+
       |             |               |
       v             v               v
    APPEARANCE     MOTION          DISPLAY
       |             |               |
       v             v               v
    SET THEME     SET MOTION      SET QUALITY
       |             |               |
       +-------------+---------------+
                     |
                     v
             UPDATE PREFERENCES
                     |
                     v
             UPDATE APPLICATION
                     |
                     v
             PERSIST SETTINGS
```

Settings should include\:

- Light mode.
- Dark mode.
- System theme.
- Reduced motion.
- 3D quality.
- Sound preferences, if sound is introduced.
- Reset desktop.
- Exit Canvas.

---

## 13\. Three.js Environment Architecture

The 3D environment is a major differentiating feature of JBE Canvas.

It must be implemented as a separate rendering subsystem.

### 13.1 3D scene composition

```text
THREE.JS ENVIRONMENT
|
+-- Scene
|   |
|   +-- Background
|   |
|   +-- Environment Lighting
|   |
|   +-- Camera
|   |
|   +-- Main Environment
|   |   |
|   |   +-- Ground / Base
|   |   |
|   |   +-- Architecture / Structures
|   |   |
|   |   +-- Vegetation / Props
|   |   |
|   |   +-- Interactive Objects
|   |
|   +-- Mascot Character
|   |
|   +-- Decorative Elements
|
+-- Interaction System
|   |
|   +-- Raycasting
|   |
|   +-- Pointer Events
|   |
|   +-- Object Selection
|   |
|   +-- Hover Feedback
|
+-- Animation System
|   |
|   +-- Idle Animation
|   |
|   +-- Object Animation
|   |
|   +-- Mascot Animation
|   |
|   +-- Camera Transitions
|
+-- Rendering System
    |
    +-- Renderer
    |
    +-- Shadows
    |
    +-- Quality Settings
    |
    +-- Resize Handling
```

### 13.2 Visual direction

The initial environment should be a stylized digital atelier or miniature world.

It should communicate exploration and creativity without overwhelming the desktop interface.

Potential visual elements\:

- Floating or elevated platforms.
- Small architectural structures.
- A central geometric sculpture.
- A workshop-like area.
- A library-inspired structure.
- A project exhibition space.
- An illustrated owl mascot.
- Subtle environmental animation.

The environment should use the established olive, cream, charcoal, and muted brown palette.

### 13.3 Scene initialization

```text
CANVAS REQUESTS 3D SCENE
       |
       v
DYNAMICALLY IMPORT SCENE COMPONENT
       |
       v
CHECK WEBGL SUPPORT
       |
       +-----------------------------+
       |                             |
       v                             v
    SUPPORTED                   UNSUPPORTED
       |                             |
       v                             v
CREATE RENDERER                LOAD FALLBACK
       |
       v
CREATE SCENE
       |
       v
CREATE CAMERA
       |
       v
LOAD ENVIRONMENT
       |
       v
LOAD OBJECTS AND MODELS
       |
       v
REGISTER INTERACTIVE OBJECTS
       |
       v
START RENDERING
       |
       v
SCENE READY
```

### 13.4 Interactive object flow

Each interactive 3D object should have a registered action.

Example object registry\:

```ts
type InteractiveObject = {
  id: string;
  label: string;
  description: string;
  action: "open-app" | "navigate" | "show-info";
  target: string;
};
```

Interaction\:

```text
USER POINTS AT OBJECT
       |
       v
RAYCASTER DETECTS OBJECT
       |
       v
RESOLVE OBJECT REGISTRY ENTRY
       |
       v
DISPLAY HOVER FEEDBACK
       |
       v
USER SELECTS OBJECT
       |
       v
DISPATCH REGISTERED ACTION
       |
       +----------------------------+
       |                            |
       v                            v
OPEN CANVAS APPLICATION       NAVIGATE TO ROUTE
       |                            |
       v                            v
WINDOW MANAGER                NEXT.JS ROUTER
```

Do not hardcode navigation logic independently into every 3D object.

The object registry should control the mapping between scene objects and application actions.

### 13.5 Performance management

The 3D environment must support quality levels.

```text
USER OPENS CANVAS
       |
       v
CHECK DEVICE CAPABILITIES
       |
       v
DETERMINE INITIAL QUALITY
       |
       +-----------------------------+
       |              |              |
       v              v              v
      LOW          MEDIUM          HIGH
       |              |              |
       v              v              v
LOW SHADOWS      STANDARD        ENHANCED
LOW RESOLUTION   LIGHTING        EFFECTS
FEWER OBJECTS    NORMAL DETAIL   HIGHER DETAIL
       |              |              |
       +--------------+--------------+
                      |
                      v
                RENDER SCENE
```

Quality settings must be adjustable manually.

Additional optimization rules\:

- Use GLTF/GLB for 3D models.
- Compress geometry where appropriate.
- Use compressed textures when supported.
- Avoid excessive dynamic shadows.
- Avoid unnecessary post-processing.
- Reuse geometries and materials.
- Use instancing for repeated objects.
- Lazy-load scenes and models.
- Stop or reduce rendering when the Canvas is hidden or inactive.
- Respect reduced-motion preferences.

---

## 14\. Mascot and Avatar Integration

The mascot and avatar are part of the portfolio identity system.

They have different purposes.

### 14.1 Mascot: Curious Owl

The owl is the recurring illustrated companion.

Its personality is\:

- Curious.
- Inventive.
- Observant.
- Approachable.
- Playful.

It serves as\:

- Brand representative.
- Canvas companion.
- Interactive guide.
- Easter egg character.

### 14.2 Personal avatar

The personal avatar represents James directly.

It should be used in\:

- About page.
- Profile introduction.
- Canvas About application.
- Selected project introductions.
- Optional resume presentation.

It must not replace the mascot.

### 14.3 Mascot interaction flow

```text
CANVAS INITIALIZES
       |
       v
DISPLAY MASCOT IDLE STATE
       |
       v
WAIT FOR INTERACTION
       |
       +-------------------------------+
       |               |               |
       v               v               v
OBJECT SELECTED    APP OPENED      IDLE TIME
       |               |               |
       v               v               v
CURIOUS STATE     EXCITED STATE    SLEEP STATE
       |               |               |
       +---------------+---------------+
                       |
                       v
               RETURN TO IDLE
```

Mascot animation must be optional and should not create continuous high-cost rendering.

### 14.4 Asset architecture

```text
public/characters/
|
+-- mascot/
|   |
|   +-- logo/
|   |
|   +-- expressions/
|   |
|   +-- poses/
|   |
|   +-- illustrations/
|   |
|   +-- 3d/
|       |
|       +-- model.glb
|       |
|       +-- textures/
|
+-- avatar/
    |
    +-- portraits/
    |
    +-- expressions/
    |
    +-- illustrations/
```

The illustrated assets should be available independently of the 3D models.

---

## 15\. Cross-System Integration

The simple and interactive sides should not become separate content management systems.

They must use the same underlying project records and canonical content.

### 15.1 Shared project content flow

```text
MDX PROJECT FILE
       |
       v
CONTENT LOADER
       |
       v
FRONTMATTER PARSER
       |
       v
ZOD VALIDATION
       |
       v
NORMALIZED PROJECT RECORD
       |
       +-----------------------------+
       |                             |
       v                             v
SIMPLE PORTFOLIO                JBE CANVAS
       |                             |
       v                             v
PROJECT CARD                   PROJECT APPLICATION
       |                             |
       v                             v
CASE STUDY PAGE                DETAIL WINDOW
```

This ensures that updating a project does not require editing two separate interfaces.

### 15.2 Shared theme flow

```text
USER CHANGES THEME
       |
       v
THEME STORE
       |
       v
UPDATE ROOT THEME
       |
       +-----------------------------+
       |                             |
       v                             v
SIMPLE PORTFOLIO                JBE CANVAS
       |                             |
       v                             v
UPDATE CSS VARIABLES            UPDATE CANVAS COLORS
       |                             |
       +--------------+--------------+
                      |
                      v
              SAVE USER PREFERENCE
```

### 15.3 Navigation between systems

```text
SIMPLE PORTFOLIO
       |
       v
USER SELECTS ENTER CANVAS
       |
       v
NAVIGATE TO /canvas
       |
       v
INITIALIZE CANVAS
       |
       v
USER EXPLORES APPLICATIONS
       |
       v
USER SELECTS EXIT CANVAS
       |
       v
RETURN TO SIMPLE PORTFOLIO
```

The Canvas should provide an obvious exit mechanism at all times.

---

# PART III - CONTENT AND DATA ARCHITECTURE

## 16\. Content Management System

The project uses a hybrid content architecture\:

- MDX for long-form content.
- TypeScript for structured configuration and application metadata.
- Static assets for images, documents, and models.

No database is required for the initial release.

### 16.1 Content structure

```text
src/content/
|
+-- projects/
|   |
|   +-- saphene.mdx
|   |
|   +-- helm.mdx
|   |
|   +-- casa-lahardin.mdx
|
+-- experience/
|   |
|   +-- experience-data.ts
|
+-- writing/
|   |
|   +-- writing-data.ts
|
+-- skills/
    |
    +-- skills-data.ts
```

### 16.2 Project schema

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;

  category: string[];
  technologies: string[];

  status:
    | "completed"
    | "ongoing"
    | "experimental"
    | "planned";

  featured: boolean;

  timeline?: {
    start?: string;
    end?: string;
  };

  role?: string;

  links: {
    repository?: string;
    demo?: string;
    documentation?: string;
  };

  highlights: string[];
  challenges: string[];
  solutions: string[];
  lessonsLearned: string[];
};
```

### 16.3 Content validation flow

```text
CONTENT FILE CREATED OR MODIFIED
       |
       v
CONTENT LOADER DETECTS FILE
       |
       v
PARSE FRONTMATTER
       |
       v
VALIDATE AGAINST ZOD SCHEMA
       |
       +-----------------------------+
       |                             |
       v                             v
    VALID                       INVALID
       |                             |
       v                             v
GENERATE PROJECT RECORD       REPORT VALIDATION ERROR
       |
       v
MAKE CONTENT AVAILABLE
       |
       v
RENDER IN BOTH INTERFACES
```

The content loader should provide a consistent API\:

```ts
getAllProjects()
getFeaturedProjects()
getProjectBySlug(slug)
getAllExperience()
getAllSkills()
getAllWriting()
```

The UI should consume these functions instead of reading files directly.

---

## 17\. State Management

Zustand will manage interactive state.

Separate stores should be used for different responsibilities.

```text
STATE MANAGEMENT
|
+-- Theme Store
|   |
|   +-- Current Theme
|   +-- System Preference
|
+-- Canvas Store
|   |
|   +-- Canvas Active State
|   +-- Active Application
|   +-- Open Windows
|   +-- Focused Window
|   +-- Window Positions
|   +-- Window Dimensions
|
+-- Settings Store
|   |
|   +-- Motion Preference
|   +-- Rendering Quality
|   +-- Interface Preferences
|
+-- Scene Store
    |
    +-- Selected Object
    +-- Hovered Object
    +-- Camera State
    +-- Scene Readiness
```

Avoid placing rapidly changing Three.js animation values in Zustand. Keep frame-by-frame values inside the rendering components or refs to avoid unnecessary React re-renders.

### 17.1 Persistence policy

Persist\:

- Theme preference.
- Reduced-motion preference.
- Rendering quality.
- Selected desktop preferences.

Do not initially persist\:

- Every window movement.
- Every window resize.
- Animation state.
- Pointer coordinates.
- Temporary application state.

The first release should initialize a predictable desktop layout each time the user enters the Canvas.

---

# PART IV - SYSTEM SECURITY, PERFORMANCE, AND RELIABILITY

## 18\. Security and Privacy

The initial portfolio is primarily a static, content-driven application.

It does not require user accounts, authentication, or a database.

Security requirements\:

- Never expose API secrets in client-side code.
- Keep environment variables server-side.
- Do not execute terminal input as shell commands.
- Validate all externally supplied values.
- Sanitize any HTML content that is rendered from untrusted sources.
- Avoid unnecessary tracking scripts.
- Do not collect visitor data without a clear purpose.
- Keep unpublished writing and private project details outside public content directories.

## 19\. Performance Requirements

The professional portfolio should prioritize fast loading.

The Canvas may load more assets, but it must not slow down the conventional pages.

### 19.1 Loading strategy

```text
USER OPENS HOMEPAGE
       |
       v
LOAD ESSENTIAL HTML AND CSS
       |
       v
RENDER PROFESSIONAL CONTENT
       |
       v
LOAD REQUIRED PAGE ASSETS
       |
       v
WAIT FOR USER TO ENTER CANVAS
       |
       v
DYNAMICALLY LOAD CANVAS MODULES
       |
       v
LOAD THREE.JS
       |
       v
LOAD 3D ASSETS
```

The simple portfolio should not load the Three.js bundle by default.

### 19.2 Error handling

```text
APPLICATION INITIALIZES
       |
       v
CHECK REQUIRED MODULES
       |
       +-----------------------------+
       |                             |
       v                             v
     SUCCESS                       FAILURE
       |                             |
       v                             v
CONTINUE NORMAL FLOW          DISPLAY FALLBACK
       |                             |
       v                             v
RENDER APPLICATION           PRESERVE NAVIGATION
```

Separate error boundaries should exist for\:

- Canvas initialization.
- Individual Canvas applications.
- Three.js scene rendering.
- MDX rendering.

A failed Workshop experiment should not crash the entire desktop.

### 19.3 Accessibility requirements

- Semantic HTML for conventional pages.
- Keyboard navigation.
- Visible focus indicators.
- Appropriate color contrast.
- Screen-reader labels.
- Reduced-motion support.
- Alternative navigation to all 3D interactions.
- Touch-friendly controls.
- No essential information conveyed exclusively through animation or color.

---

# PART V - DEPLOYMENT AND DEVELOPMENT OPERATIONS

## 20\. Development Environment

Repository\:

```text
GitHub:
https://github.com/Jamespino20/Jamespinode

Local project:
D:\Development\Jamespinode
```

The local path is a proposed location; adjust it to match the actual USB drive layout.

### 20.1 Development workflow

```text
DEVELOPER
    |
    v
LOCAL DEVELOPMENT ENVIRONMENT
    |
    v
EDIT SOURCE CODE
    |
    v
RUN LOCAL TESTS
    |
    v
RUN PRODUCTION BUILD
    |
    v
COMMIT CHANGES
    |
    v
PUSH TO GITHUB
    |
    v
VERCEL DETECTS COMMIT
    |
    v
BUILD APPLICATION
    |
    +-----------------------------+
    |                             |
    v                             v
BUILD SUCCESS                BUILD FAILURE
    |                             |
    v                             v
DEPLOY PREVIEW                REPORT BUILD ERROR
    |                             |
    v                             |
VERIFY DEPLOYMENT <---------------+
    |
    v
MERGE TO MAIN
    |
    v
PRODUCTION DEPLOYMENT
```

### 20.2 Branch strategy

```text
main
 |
 +-- feature/simple-portfolio
 |
 +-- feature/canvas-desktop
 |
 +-- feature/three-environment
 |
 +-- feature/content-system
 |
 +-- fix/responsive-layout
```

For a solo project, branches should be used for meaningful features rather than every minor adjustment.

### 20.3 Deployment responsibilities

| Component         | Responsibility                  |
| ----------------- | ------------------------------- |
| GitHub            | Version control                 |
| Vercel            | Build and deployment            |
| Next.js           | Rendering and routing           |
| Public directory  | Static assets                   |
| MDX content       | Project and writing information |
| Local development | Testing and iteration           |

### 20.4 Environment variables

The initial release should require minimal environment configuration.

```env
# .env.example

# Reserved for future integrations.
```

No database connection string or API key is required for the first release.

---

# PART VI - DEVELOPMENT ROADMAP

## 21\. Development Milestones

The implementation should be progressive. Build the reliable professional foundation first, then introduce the more complex interactive systems.

### Milestone 01 - Project Foundation

```text
OBJECTIVE:
Establish the application and development environment.

TASKS:
- Create Jamespinode repository.
- Initialize Next.js.
- Configure TypeScript.
- Configure Tailwind CSS.
- Install dependencies.
- Configure MDX.
- Establish design tokens.
- Configure theme management.
- Create shared layouts.
- Connect GitHub to Vercel.

ACCEPTANCE:
- Local application runs.
- Production build succeeds.
- GitHub repository works.
- Vercel preview deployment works.
- Light and dark themes work.
```

### Milestone 02 - Professional Portfolio

```text
OBJECTIVE:
Build the complete simple portfolio.

TASKS:
- Landing page.
- About page.
- Projects index.
- Project case study templates.
- Experience page.
- Resume page.
- Contact page.
- Responsive navigation.
- SEO metadata.

ACCEPTANCE:
- All professional routes work.
- MDX project content renders.
- Project metadata is validated.
- Mobile layouts work.
- No Canvas dependency exists.
```

### Milestone 03 - Canvas Desktop Foundation

```text
OBJECTIVE:
Create the simulated desktop environment.

TASKS:
- Canvas route.
- Desktop shell.
- Taskbar.
- Application launcher.
- Application registry.
- Window manager.
- Window focus management.
- Dragging and resizing.
- Minimize and maximize.
- Exit Canvas navigation.

ACCEPTANCE:
- Desktop initializes reliably.
- Applications open and close.
- Windows can be manipulated.
- Keyboard navigation works.
- Mobile layout is usable.
```

### Milestone 04 - Three.js Environment

```text
OBJECTIVE:
Introduce the interactive 3D environment.

TASKS:
- React Three Fiber integration.
- Scene initialization.
- Camera and lighting.
- Environment geometry.
- Materials.
- Interactive objects.
- Raycasting.
- Object selection.
- Quality settings.
- WebGL fallback.

ACCEPTANCE:
- Scene renders correctly.
- Interactive objects respond.
- Applications can be opened from scene interactions.
- Fallback works without WebGL.
- Performance is acceptable on target devices.
```

### Milestone 05 - Canvas Applications

```text
OBJECTIVE:
Build the Canvas application collection.

TASKS:
- Projects.
- Library.
- Studio.
- Workshop.
- Terminal.
- About.
- Settings.

ACCEPTANCE:
- Each application opens through the window manager.
- Content is sourced from shared data.
- Applications can be navigated using keyboard and pointer.
- Errors remain isolated to individual applications.
```

### Milestone 06 - Character Identity

```text
OBJECTIVE:
Integrate the mascot and personal avatar.

TASKS:
- Finalize owl character design.
- Create expression library.
- Create personal avatar.
- Add mascot to Canvas.
- Add mascot reactions.
- Prepare 3D counterpart.
- Integrate 3D counterpart into environment.

ACCEPTANCE:
- Character assets are consistent.
- 2D fallback exists.
- Mascot interactions work.
- Avatar is used in appropriate professional contexts.
```

### Milestone 07 - Refinement and Release

```text
OBJECTIVE:
Prepare the portfolio for public release.

TASKS:
- Responsive testing.
- Accessibility audit.
- Performance optimization.
- SEO validation.
- Metadata and social previews.
- Broken link checks.
- Browser testing.
- Production deployment.
- Documentation.

ACCEPTANCE:
- Professional pages are production-ready.
- Canvas is stable.
- No critical navigation failures.
- No major accessibility blockers.
- Production deployment works.
```

---

## 22\. Suggested Three-Month Development Schedule

This schedule assumes roughly twelve weeks of development. It is a planning target, not a guarantee; the 3D environment and desktop window manager are the largest uncertainties.

| Week | Primary focus          | Deliverable                           |
| ---- | ---------------------- | ------------------------------------- |
| 1    | Foundation             | Repository, framework, design tokens  |
| 2    | Professional homepage  | Landing and navigation                |
| 3    | Content system         | MDX and project case studies          |
| 4    | Remaining simple pages | About, experience, resume, contact    |
| 5    | Canvas shell           | Desktop and taskbar                   |
| 6    | Window manager         | Window lifecycle and interactions     |
| 7    | Three.js               | Initial scene and object interactions |
| 8    | Canvas applications    | Projects and Library                  |
| 9    | Canvas applications    | Studio, Workshop, Terminal            |
| 10   | Character identity     | Mascot and avatar integration         |
| 11   | Refinement             | Mobile, accessibility, performance    |
| 12   | Release                | QA and production deployment          |

The schedule should prioritize a complete professional portfolio over a visually elaborate but incomplete Canvas.

If development falls behind, reduce the number of 3D objects and application features rather than sacrificing core navigation or project case studies.

---

## 23\. Final System Acceptance Criteria

The project is considered complete when the following conditions are satisfied.

### Simple Portfolio

```text
[ ] Homepage displays professional identity.
[ ] About page displays background and interests.
[ ] Projects index displays verified projects.
[ ] Individual case studies render MDX.
[ ] Experience page displays relevant experience.
[ ] Resume can be accessed.
[ ] Contact methods work.
[ ] Navigation is responsive.
[ ] Light and dark themes work.
[ ] SEO metadata is configured.
```

### Interactive Portfolio

```text
[ ] Canvas initializes independently.
[ ] Desktop shell renders.
[ ] Taskbar works.
[ ] Application launcher works.
[ ] Windows can open and close.
[ ] Windows can be dragged and resized.
[ ] Minimize and maximize work.
[ ] Window focus management works.
[ ] Three.js scene renders.
[ ] Interactive objects work.
[ ] Mascot interactions work.
[ ] Applications use shared content.
[ ] Terminal commands work.
[ ] Settings work.
[ ] WebGL fallback works.
[ ] Mobile Canvas is usable.
```

### Shared Infrastructure

```text
[ ] MDX content is validated.
[ ] Shared project data works.
[ ] Theme is consistent.
[ ] Navigation between experiences works.
[ ] Error boundaries are implemented.
[ ] No unnecessary backend dependency exists.
[ ] Production build succeeds.
[ ] Vercel deployment works.
```

---

# PART VII - RECOMMENDED IMPLEMENTATION PRIORITIES

## 24\. What to Build First

There is a temptation to begin with the Three.js environment because it is the most visually exciting part.

I would resist that.

The order should be\:

```text
                    JBE PORTFOLIO
                          |
                          v
                  PROFESSIONAL BASE
                          |
                          v
                    CONTENT SYSTEM
                          |
                          v
                   CANVAS FRAMEWORK
                          |
                          v
                   WINDOW MANAGER
                          |
                          v
                    THREE.JS SCENE
                          |
                          v
                  CANVAS APPLICATIONS
                          |
                          v
                 MASCOT AND AVATAR
                          |
                          v
                   FINAL REFINEMENT
```

This order establishes the essential application infrastructure before introducing the most complicated rendering and interaction systems.

### 24.1 Features to defer

Do not include these in the initial release\:

- User accounts.
- Cloud-synchronized desktop settings.
- Multiplayer Canvas.
- Real-time collaboration.
- Database-backed content management.
- AI chatbot.
- Backend analytics platform.
- Music player.
- Full operating-system simulation.
- Complex physics simulation.
- Procedurally generated 3D worlds.
- User-customizable desktop themes beyond the defined preferences.

These features increase maintenance and implementation complexity without being necessary to achieve the portfolio's purpose.

---

## 25\. Recommended Next Development Artifact

Before writing application code, I recommend producing the following implementation documents\:

```text
docs/
|
+-- 01-SYSTEM-SPECIFICATION.md
|
+-- 02-ARCHITECTURE.md
|
+-- 03-DATABASE-AND-CONTENT-SCHEMA.md
|
+-- 04-UI-UX-SPECIFICATION.md
|
+-- 05-CANVAS-INTERACTION-SPECIFICATION.md
|
+-- 06-THREEJS-SCENE-SPECIFICATION.md
|
+-- 07-DEVELOPMENT-ROADMAP.md
|
+-- 08-TESTING-AND-DEPLOYMENT.md
```

Even though the initial system doesn't need a database, the third document should define the content schemas and relationships.

**My recommendation\:** Treat this specification as the baseline for JBE Portfolio v1.0. Any feature added afterward should be evaluated against its purpose, implementation cost, and effect on the delivery schedule.

The first actual coding milestone should be the Next.js foundation, shared design system, MDX content loader, and professional homepage. Once those work, we can build the Canvas as a separate feature without destabilizing the main portfolio.

---

Powered by [ChatGPT Exporter](https://www.chatgptexporter.com)
