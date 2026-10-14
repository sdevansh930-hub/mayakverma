# 🎓 Mayank Verma // Modern & Professional 1st Year B.Tech Portfolio

A modern, responsive, and student-friendly portfolio website engineered for **Mayank Verma**, a first-year **Bachelor of Technology (B.Tech) in Computer Science & Engineering** undergraduate.

Crafted with high-performance vanilla **HTML5**, modern **CSS3 variables**, and **ES6+ JavaScript**, this website highlights academic excellence, foundational computer science proficiencies in **C++, Python, and Web Development**, practical college projects, verified credentials, and direct links to **GitHub** and **LinkedIn**.

---

## 🌟 Key Features & Highlights

- **Hero & Digital Workstation**:
  - Live animated typewriter cycling through key skills and identities (*"Data Structures & Algorithms in C++"*, *"Responsive & Modern Web Apps"*, etc.).
  - Status indicator: `🟢 1st Year B.Tech CSE Undergrad • Open for Hackathons & Learning`.
  - Quick metrics banner: 1st Year B.Tech (2024–28), 9.1 CGPA, 150+ DSA problems solved, 5+ projects built.
  - Interactive C++ terminal code window with syntax highlighting and floating achievement badges.
  - Quick action buttons: *View Projects*, *Contact Me*, and *Resume / CV*.
  - Prominent direct social badges for **GitHub** and **LinkedIn**.

- **About Me**:
  - Narrative sharing Mayank's passion for core computing, algorithmic problem solving, and collaborative building.
  - 4 foundational engineering pillars: *Fast & Hungry Learner*, *Analytical Thinking*, *Collaborative Spirit*, and *Goal-Oriented*.
  - Student identity card showcasing degree, current 9.1 CGPA, tech club membership, and interest tags with initials **MV**.

- **Education & Coursework**:
  - Clean vertical academic timeline:
    1. **B.Tech CSE (1st Year, 2024–2028)**: 9.1 / 10.0 CGPA (Top 5% of batch), featuring coursework pills (*Programming in C/C++*, *Data Structures Foundations*, *Discrete Mathematics*, *Digital Electronics*, *Linear Algebra*).
    2. **Class XII Senior Secondary (2022–2024)**: 94.6% Distinction with 98/100 in Computer Science.
    3. **Class X Secondary Examination (2020–2022)**: 95.2% Merit Certificate.

- **Skills & Proficiencies**:
  - Interactive category filter tabs (*All*, *Languages*, *Web Development*, *CS Fundamentals*, *Tools & Environments*).
  - Cards with custom icons, badge level indicators (*Core Foundation*, *Primary DSA Language*, etc.), percentage tracks, and descriptive explanations.
  - Technologies covered: **C, C++, Python, JavaScript (ES6+), HTML5, CSS3 Grid/Flexbox, REST APIs, DSA, OOP, SQL, Git & GitHub, Linux/Bash, VS Code**.

- **Featured Projects**:
  - Filterable project grid (*All*, *Web Applications*, *Algorithms & Systems*, *Academic Tools*):
    1. **CampusSync // Academic & Attendance Tracker**: Real-time SGPA simulator and 75% attendance margin alert engine.
    2. **AlgoFlow // Sorting Algorithm Visualizer**: Interactive Canvas DSA tool visualizing Bubble, Selection, Insertion, and Merge sort with speed controls and Big-O notation.
    3. **EduVault // CLI Student Record Engine**: C++17 pointer-based singly linked list with persistent binary file serialization (`fstream`).
    4. **ByteNotes // Engineering Revision Hub**: Searchable technical documentation and C cheatsheets with reading time indicators.
    5. **Mayank Dev // Personal Portfolio**: Modern responsive web portfolio with theme toggling and zero bloat.
  - Comprehensive detail modals for every project detailing the problem statement, architectural solution, and GitHub source links.

- **Interactive Bonus: Student Attendance & Safety Margin Tool**:
  - A live calculator on the page allowing visitors/peers to calculate their attendance percentage and find out exactly how many classes they can safely skip or need to attend consecutively to stay above their university target (e.g., 75%).

- **Certifications & Achievements**:
  - **Certifications**: HackerRank Problem Solving (Intermediate), Harvard CS50's Introduction to Computer Science, freeCodeCamp Responsive Web Design (300h), Coursera Python for Everybody.
  - **Achievements & Honors**: Intra-College Freshers Hackathon 2nd Runner Up, 150+ DSA LeetCode streak, Dean's List (9.1 CGPA), College Coding Club & IEEE Core Member.
  - Interactive "View Credential" modals with verified IDs.

- **Contact & Networking**:
  - Prominent profile cards for **GitHub** (`github.com/mayank-dev`) and **LinkedIn** (`linkedin.com/in/mayank-verma`).
  - 1-click **Copy Email** button with instant feedback toast (`mayank.btech.dev@gmail.com`).
  - Interactive contact form with client-side field validation, loading animation, and success notification banner.

- **Design & UX Polish**:
  - Dark mode by default with a crisp light mode toggle (saved to `localStorage`).
  - Sticky glassmorphic navbar with active scroll spy highlighting sections as you scroll.
  - Responsive mobile drawer navigation with animated hamburger button.
  - Smooth back-to-top floating button.
  - 100% accessible (semantic HTML5, focus visible outlines, keyboard navigable modals).

---

## 📁 Project Structure

```text
mayank-portfolio/
│
├── index.html        # Semantic HTML5 architecture & complete content
├── style.css         # Modern design system, themes, glassmorphism, responsive grid
├── script.js         # Typewriter, filtering, modals, calculator, theme, form validation
└── README.md         # Documentation & guide
```

---

## 🚀 How to Run the Website

### Option 1: Direct File Preview
Simply double-click `index.html` or right-click and choose **Open with Google Chrome** / **Microsoft Edge** / **Brave**.

### Option 2: Local HTTP Server (Python)
Run the built-in Python web server in your terminal:
```powershell
python -m http.server 3000 --directory "C:\Users\user\.gemini\antigravity\scratch\anish-portfolio"
```
Then navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## ✏️ Customizing Details

1. **GitHub & LinkedIn Links**:
   In `index.html`, search for `https://github.com` and `https://linkedin.com` and replace them with your personalized URLs.
2. **Email Address**:
   Update `mayank.btech.dev@gmail.com` in `index.html` and in `script.js` (under section 10).
3. **College Name**:
   Replace `University Institute of Engineering & Technology` with your specific college/university name.
4. **Resume / CV**:
   Place your PDF resume (e.g. `Mayank_Verma_Resume.pdf`) in the folder and update the link on the `#resume-btn` button.
