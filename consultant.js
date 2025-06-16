const knowledgeBase = [
  {
    keywords: ["dean", "list"],
    response: "To be on the Dean’s List, you need a CGPA of 3.7 or above with at least 16 credits."
  },
  {
    keywords: ["subject", "semester", "recommended", "3", "computer science"],
    response: "Recommended subjects: Data Structures and Web Development."
  },
  {
    keywords: ["lecturer", "data structures", "recommended"],
    response: "Dr. Lee is a highly recommended lecturer for Data Structures."
  },
  {
    keywords: ["grade", "dean"],
    response: "Aim for at least an A- in each subject to boost your CGPA toward the Dean’s List."
  },
    {
    keywords: ["first year", "ai", "recommended", "subject"],
    response:
        "As a First Year AI student, here are your recommended courses:\n\n" +
        "Faculty Core Courses (8 Credits):\n" +
        "Fundamentals of Programming (5)\n" +
        "Computing Mathematics I (3)\n\n" +
        "Programme Core Courses (7 Credits):\n" +
        "Machine Learning (3)\n" +
        "Network Technology Foundation (4)\n\n" +
        "University Courses (6 Credits):\n" +
        "English for Communication (3)\n" +
        "Appreciation of Ethics and Civilizations (3)\n\n" +
        "Total: 21 Credit Hours"
},
{
    keywords: ["second", "year", "ai"],
    response:
        "As a Second Year AI student, here are your recommended courses:\n\n" +
        "Core Courses (6 Credits):\n" +
        "Thinking and Communication Skills (3)\n" +
        "Project Management (3)\n" +
        "Database (3)\n\n" +
        "Student Holistic Empowerment (SHE) Courses (4 Credits):\n" +
        "KIAR (Integrity and Anti-Corruption) (2)\n" +
        "Real Estate (2)\n" +
        "Quranic Language (2)\n\n" +
        "Specialization Electives (6 Credits):\n" +
        "Internet of Things (3)\n" +
        "Knowledge Representation and Reasoning (3)\n\n" +
        "Total: 21 Credit Hours"
    },
    // 🧑‍🏫 Lecturer Basics
    {
        keywords: ["lecturer", "who", "teaches"],
        response: "To know who teaches a subject, check your faculty’s course schedule or student portal. I can also help based on past semesters!"
    },
    {
        keywords: ["choose", "lecturer"],
        response: "Choosing a lecturer depends on your learning style. Do you prefer detailed explanations, structured slides, or project-based learning?"
    },
    {
        keywords: ["best", "lecturer"],
        response: "Each lecturer has their own strengths. Some are great with practical examples, while others excel at theory. I can suggest based on subject and your preferences."
    },

    // 👨‍🏫 Lecturer Styles & Strengths
    {
        keywords: ["lecturer", "teaching", "style"],
     response: "Some lecturers are more structured with slides, while others prefer whiteboard explanations. You can also ask seniors for reviews."
    },
    {
        keywords: ["lecturer", "notes"],
        response: "Some lecturers provide detailed notes, while others may encourage students to take their own. Check past reviews or ask seniors."
    },
    {
        keywords: ["lecturer", "assignment", "strict"],
        response: "Lecturers vary in their grading strictness. If you're concerned about marks, I can suggest those known to be fair but challenging."
    },
    {
        keywords: ["lecturer", "recorded", "class"],
        response: "Not all lecturers provide recorded lectures. You may want to check with the course outline or ask during the first class."
    },

    // 📚 Subject-Lecturer Matching
    {
        keywords: ["lecturer", "data", "structures"],
        response: "Lecturers for Data Structures include Dr. Ahmad and Mr. Lim. Dr. Ahmad is known for tough quizzes but strong concepts, while Mr. Lim is great with practicals."
    },
    {
        keywords: ["lecturer", "web", "programming"],
        response: "Dr. Aisyah and Ms. Tan usually teach Web Programming. Dr. Aisyah emphasizes theory while Ms. Tan focuses on hands-on coding."
    },
    {
        keywords: ["lecturer", "ai"],
        response: "For AI-related subjects, you may encounter lecturers like Dr. Lee or Prof. Siti. Dr. Lee uses research papers; Prof. Siti gives weekly assignments."
    },
    {
        keywords: ["lecturer", "machine", "learning"],
        response: "Dr. Bala and Mr. Syed teach Machine Learning. Dr. Bala emphasizes algorithms and math, while Mr. Syed includes Python projects."
    },
    {
        keywords: ["lecturer", "data", "science"],
        response: "Prof. Siti and Dr. Rozita teach Data Science. Prof. Siti focuses on statistics and theory, Dr. Rozita brings real-world datasets and Kaggle-like tasks."
    },
    {
        keywords: ["lecturer", "software", "engineering"],
        response: "Mr. Ariff and Dr. Hana usually handle Software Engineering. Mr. Ariff uses structured project phases; Dr. Hana encourages Agile methodology."
    },
    {
        keywords: ["lecturer", "database"],
        response: "For Database courses, Dr. Kamal and Ms. Liyana are common. Dr. Kamal is strict on ER diagrams, while Ms. Liyana gives practical SQL labs."
    },
    {
        keywords: ["lecturer", "network", "security"],
        response: "Dr. Noor and Prof. Chan cover Network Security. Dr. Noor gives lab challenges; Prof. Chan is theory-focused with lots of reading."
    },
    {
        keywords: ["lecturer", "human", "computer", "interaction", "hci"],
        response: "Lecturers like Dr. Aisyah and Mr. Faiz are known for HCI. Dr. Aisyah requires design mockups; Mr. Faiz focuses on usability testing."
    },
    {
        keywords: ["lecturer", "mobile", "app", "development"],
        response: "Mr. Hafiz and Ms. Tan typically teach Mobile App Dev. Mr. Hafiz covers Firebase integration, while Ms. Tan guides through Android Studio hands-on."
    },
    {
        keywords: ["lecturer", "final", "year", "project", "fyp"],
        response: "For FYP, you may work with lecturers like Dr. Lee (AI focus), Dr. Rozita (data analytics), or Prof. Lim (IoT & embedded systems)."
    },
    {
        keywords: ["lecturer", "popular", "famous", "recommended"],
        response: "Some popular lecturers are loved for their engaging lectures, fairness, and helpful consultation sessions. Ask me about a specific subject or name!"
    },
    {
        keywords: ["lecturer", "kind", "helpful", "supportive"],
        response: "Lecturers like Ms. Tan and Dr. Rozita are often praised for their supportive nature, willingness to explain, and caring for students' wellbeing."
    },
    {
        keywords: ["lecturer", "clear", "explanation"],
        response: "Clarity is a major strength for lecturers like Dr. Lee and Prof. Chan — students often say their explanations make complex topics easy to understand."
    },
    {
        keywords: ["lecturer", "fast", "mark", "quick"],
        response: "Students appreciate lecturers who return graded work quickly. If that matters to you, I can recommend those with fast feedback cycles."
    },

    // 💬 Feedback and Reviews
    {
        keywords: ["lecturer", "famous", "recommended"],
        response: "Some popular lecturers are loved for their engaging lectures, fairness, and helpful consultation sessions. Ask me about a specific subject or name!"
    },
    {
        keywords: ["dr. shah"],
        response: "Dr. Shah is so kind to his students. Seniors reviewed that many of them love him as they got high grades for carry marks and for final exam."
    },
    {
        keywords: ["lecturer", "kind", "helpful", "supportive"],
        response: "Lecturers like Ms. Tan and Dr. Rozita are often praised for their supportive nature, willingness to explain, and caring for students' wellbeing."
    },
    {
        keywords: ["lecturer", "clear", "explanation"],
        response: "Clarity is a major strength for lecturers like Dr. Lee and Prof. Chan — students often say their explanations make complex topics easy to understand."
    },
    {
        keywords: ["review", "lecturer"],
        response: "Lecturer reviews are often shared informally between students or in course evaluation summaries. Who is it? I can summarize common feedback for you."
    },
    {
        keywords: ["dr. rohana"],
        response: "Dr. Rohana! You should consider taking her for KRR if you're an AI student. She's so kind, loves to give snacks in the start of the class and fun in learning."
    },
    {
        keywords: ["lecturer", "friendly"],
        response: "Students find lecturers like Mr. Hafiz and Dr. Nor friendly and approachable, especially during consultation hours."
    },
    {
        keywords: ["strict", "lecturer"],
        response: "Strict lecturers like Prof. Chan may be tough graders, but their classes are well-structured and informative."
    },
    {
        keywords: ["lecturer", "helpful"],
        response: "Helpful lecturers are usually the ones who are open to questions and give extended consultation sessions. Ask seniors for names!"
    },
    {
        keywords: ["lecturer", "strict", "grading", "tough"],
        response: "Some students find lecturers strict in marking, but they often help build strong fundamentals. Dr. Kamal and Prof. Lim are examples of tough but fair instructors."
    },

    // 🕓 Office Hours / Consultations
    {
        keywords: ["lecturer", "office", "hours"],
        response: "Office hours are typically listed in the course outline or announced in the first lecture. You can email them to confirm."
    },
    {
        keywords: ["lecturer", "consultation"],
        response: "Consultation sessions are meant for academic help. You can approach most lecturers via email to set a time."
    },
    {
        keywords: ["how", "meet", "lecturer"],
        response: "You can usually meet lecturers during office hours or via email. Use formal language when requesting appointments."
    },

    // 🛠️ Adjustments and Requests
    {
        keywords: ["change", "lecturer"],
        response: "Changing lecturers is rarely allowed unless there are serious concerns. Speak to the program coordinator if needed."
    },
    {
        keywords: ["lecturer", "available"],
        response: "Availability depends on the semester. Some lecturers only teach certain subjects in specific semesters."
    },
    {
        keywords: ["lecturer", "response", "email"],
        response: "Some lecturers respond quickly to emails, while others may take 2–3 days. Keep your message polite and to the point."
    },

    // 💡 Strategy and Matching
    {
        keywords: ["which", "lecturer", "easy"],
        response: "“Easy” depends on your strengths. Some students find technical lecturers easier, others prefer flexible grading. I suggest you to pick Dr. Shah."
    },
    {
        keywords: ["lecturer", "project"],
        response: "Some lecturers include mini projects or final year research. If you prefer hands-on work, Dr.Zati is interesting to choose."
    },
    {
        keywords: ["lecturer", "interactive"],
        response: "Lecturers like Mr. Faiz and Dr. Nisa often encourage in-class participation and group discussion."
    },
    {
        keywords: ["lecturer", "group", "project"],
        response: "Lecturers like Dr. Rozita and Mr. Imran often assign group projects. Great for building teamwork skills!"
    },
    {
        keywords: ["lecturer", "theory"],
        response: "If you're looking for strong theoretical foundation, Dr. Bala and Prof. Siti are known for deep academic coverage in AI and ML."
    },
    {
        keywords: ["lecturer", "practical", "coding"],
        response: "For practical coding emphasis, look for lecturers like Ms. Tan or Dr. Kamal who assign frequent hands-on tasks and lab work."
    },
    {
        keywords: ["lecturer", "discussion", "debate"],
        response: "If you enjoy class discussions and critical thinking, lecturers like Dr. Hana and Mr. Farid encourage student participation and debate."
    },
    {
        keywords: ["lecturer", "flexible", "deadline"],
        response: "Some lecturers are flexible with deadlines, especially if informed early. Dr. Noraini and Mr. Syazwan are known for being understanding."
    },
    {
        keywords: ["lecturer", "project", "based", "assessment"],
        response: "If you prefer project-based assessments instead of final exams, consider taking classes with Dr. Aisyah or Mr. Hafiz."
    },
    {
        keywords: ["lecturer", "attendance", "strict"],
        response: "Lecturers like Prof. Lim are strict with attendance and participation. Be sure to follow class rules closely!"
    },
    // 🧑‍🎓 Experience Matching
    {
        keywords: ["lecturer", "repeat", "subject"],
        response: "If you're repeating a subject, check if the same lecturer is teaching again or if you can request someone else."
    },

    // 📋 Miscellaneous
    {
        keywords: ["lecturer", "vs", "tutor"],
        response: "Lecturers lead the course and grade your work. Tutors (usually postgrads) assist with labs and tutorials."
},

    // 📚 Course-related FAQs
{
  keywords: ["how", "many", "credits", "machine", "learning"],
  response: "The Machine Learning course is usually 3 credit hours."
},
{
  keywords: ["who", "teach", "data", "structure"],
  response: "Data Structure is taught by Dr. Norisma Idris, Dr. Lim Chee Kau, and Dr. Woo Chaw Seng."
},
{
  keywords: ["assessment", "format", "machine", "learning"],
  response: "Assessment for Machine Learning: 15% midterm, 15% lab, 20% group assignment, 50% final exam."
},
{
  keywords: ["how", "long", "lecture", "data", "structure"],
  response: "The lecture duration for Data Structure is 2 hours per week, plus 1 hour of tutorial."
},
{
  keywords: ["course", "suggest", "first", "year"],
  response: "As a first-year AI student, we suggest: Fundamentals of Programming, Computing Math I, Machine Learning, and English for Communication."
},
{
  keywords: ["elective", "subject", "second", "year"],
  response: "Recommended electives in your second year: Internet of Things, Knowledge Representation and Reasoning, and NLP."
},
{
  keywords: ["real", "estate", "course", "credit"],
  response: "The Real Estate SHE course carries 2 credit hours."
},
{
  keywords: ["group", "assignment", "data", "structure"],
  response: "The group assignment in Data Structure contributes 15% to your total grade."
},
{
  keywords: ["lab", "component", "machine", "learning"],
  response: "Yes, Machine Learning includes a lab component worth 15% of your total grade."
},
{
  keywords: ["course", "impact", "cgpa"],
  response: "Courses with higher credit hours like Machine Learning (3) or Programming (5) have a greater impact on your CGPA."
},
{
  keywords: ["course","before", "data", "structure"],
  response: "The prerequisite for Data Structure is Fundamentals of Programming."
},
{
  keywords: ["when", "take", "machine", "learning"],
  response: "Machine Learning is usually taken in the first or second year, depending on your study plan."
},
{
  keywords: ["course", "ai", "specialization"],
  response: "AI specialization courses include Natural Language Processing, Knowledge Representation, and Machine Learning."
},
{
  keywords: ["difficulty", "level", "programming"],
  response: "Fundamentals of Programming can be challenging if you're new, but it's manageable with practice and lab work."
},
{
  keywords: ["lab", "required", "data", "structure"],
  response: "Yes, Data Structure includes a required lab component worth 20%."
},
{
  keywords: ["how", "many", "classes", "real", "estate"],
  response: "Real Estate (SHE course) usually meets once a week for 2 hours."
},
{
  keywords: ["how", "to", "score", "machine", "learning"],
  response: "To score well in Machine Learning, focus on tutorials, labs, and understanding key ML algorithms."
},
{
  keywords: ["difference", "data", "structure", "database"],
  response: "Data Structure focuses on algorithm design and memory models, while Database covers storage and querying data."
},
{
  keywords: ["project", "based", "course"],
  response: "Courses like Project Management and Machine Learning often include project-based assessments."
},
{
  keywords: ["recommended", "elective", "third", "year"],
  response: "In your third year, you can explore electives like Distributed Systems, Computer Vision, or Cybersecurity."
},
 // 📊 CGPA Basics
  {
    keywords: ["how", "calculate", "cgpa"],
    response: "CGPA = Total Grade Points / Total Credit Hours. Each subject's grade is multiplied by its credit hours."
  },
  {
    keywords: ["difference", "gpa", "cgpa"],
    response: "GPA is calculated for a single semester, while CGPA is cumulative for all semesters you've completed."
  },
  {
    keywords: ["grade", "points"],
    response: "Typical grade points: A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, D = 1.0, F = 0.0."
  },

  // 📈 Improving CGPA
  {
    keywords: ["improve", "cgpa"],
    response: "To improve your CGPA, aim for higher grades in current courses, focus on core/major subjects, and avoid fails."
  },
  {
    keywords: ["how", "raise", "cgpa"],
    response: "Raising your CGPA takes time. Focus on high credit subjects, attend consultations, and revise smartly."
  },
  {
    keywords: ["cgpa", "increase", "fast"],
    response: "CGPA increases slowly. Try to get A’s in as many credit-heavy courses as possible. Avoid repeating failures."
  },
  {
    keywords: ["repeat", "subject", "cgpa"],
    response: "Repeating a subject allows you to replace a bad grade. The new grade affects your CGPA but the old one stays in your transcript."
  },

  // 🏆 Dean’s List & Thresholds
  {
    keywords: ["dean", "list", "cgpa"],
    response: "To qualify for the Dean’s List, you usually need a CGPA of 3.7 or higher and no grades below B, with at least 16 credit hours."
  },
  {
    keywords: ["minimum", "cgpa", "graduate"],
    response: "Most universities require a minimum CGPA of 2.0 to graduate. This may vary by program or faculty."
  },
  {
    keywords: ["first", "class", "honours"],
    response: "First-class honours typically require a CGPA of 3.7 and above. Check with your faculty for exact criteria."
  },

  // 💡 Scenarios & Strategy
  {
    keywords: ["fail", "subject", "cgpa"],
    response: "Failing a subject gives you 0 points for those credit hours, lowering your CGPA. Repeating can help recover it."
  },
  {
    keywords: ["low", "cgpa", "what", "do"],
    response: "Meet with your academic advisor, retake failed subjects, and plan your semester to focus on credit-heavy, easier subjects."
  },
  {
    keywords: ["subject", "impact", "cgpa"],
    response: "Subjects with higher credit hours impact your CGPA more. Aim to excel in them."
  },
  {
    keywords: ["gpa", "achieve", "calculate", "cgpa", "target"],
    response: "Yes! Tell me your current CGPA, your target, and subjects this semester — I’ll help you calculate if it's achievable."
  },
  {
    keywords: ["subject: ", "current cgpa", "3.40"],
    response: "You must score a perfect GPA of 4.0 this semester to get close to 3.8 CGPA — but technically, it's not achievable this semester because the highest you can achieve is 3.70."
  },
  {
    keywords: ["subject: ", "target", "current cgpa", "3.55"],
    response:
        "To reach a 3.75 CGPA, the you must average 3.94 GPA this semester — meaning nearly all A (4.00), with perhaps one A- (3.7) at most:\n\n" +
        "English for Communication (2 credits) – A\n" +
        "Ethics and Civilitation(2 credits) – A\n" +
        "Data Structure (5 credits) – A\n" +
        "Computer System Architecture (3 credits) – A\n" +
        "Network Technology Foundation (4 credits) – A\n" +
        "Machine Learning (3 credits) – A\n" +
        "Total: 21 Credit Hours"
  },

  // 📉 Consequences
  {
    keywords: ["probation", "cgpa"],
    response: "If your CGPA falls below 2.0, you may be placed on academic probation. You’ll need to improve it next semester or risk suspension."
  },
  {
    keywords: ["cgpa", "dismissal"],
    response: "Continued low CGPA over multiple semesters can lead to dismissal. Always monitor your progress and ask for help early."
  },

  // 🧮 Technical CGPA
  {
    keywords: ["cgpa", "formula"],
    response: "CGPA = (GPA1 × credits1 + GPA2 × credits2 + ...) / (credits1 + credits2 + ...). Each semester’s GPA is weighted by its credit hours."
  },
];

// Show greeting message when page loads
window.onload = () => {
  addMessage("Hi! I’m Kev, your academic advisor 🤖. Ask me anything about subjects, lecturers, or how to get on the Dean’s List!", "bot");
};

function handleInput() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  if (input === "") return;

  addMessage(input, "user");

  let response = "I'm not sure about that yet. Try asking in a different way.";

  for (let rule of knowledgeBase) {
    if (rule.keywords.every(k => input.includes(k))) {
      response = rule.response;
      break;
    }
  }

  setTimeout(() => addMessage(response, "bot"), 500);
  document.getElementById("userInput").value = "";
}

function addMessage(text, sender) {
  const chatbox = document.getElementById("chatbox");

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}-bubble`;

  if (sender === "bot") {
    bubble.innerHTML = text.replace(/\n/g, "<br>");
  } else {
    bubble.textContent = text; // user message stays as normal
  }

  messageDiv.appendChild(bubble);
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}