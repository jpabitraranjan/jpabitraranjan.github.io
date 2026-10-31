export const EMAIL = 'jpabitraranjan@gmail.com';
export const PHONE = '+91 6268708946';
export const PHONE_HREF = 'tel:+916268708946';
export const GITHUB_URL = 'https://github.com/jpabitraranjan';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/pabitra-ranjan-jena';
export const RESUME_PATH = '/Pabitra_Ranjan_Jena_Resume.pdf';
export const LOCATION = 'Mysuru, Karnataka, India';
export const PERSON_LINKS = {
  'Rajani Trivedi': 'https://www.linkedin.com/in/rajani-trivedi-7bb7431b3/',
  'Pragyanshu Mishra': 'https://www.linkedin.com/in/pragyanshu-mishra-a6aa081a2/',
  'Harsh Patel': 'https://www.linkedin.com/in/harshpatel1009/',
  'Monica Pathak': 'https://www.linkedin.com/in/monica-pathak-485274a3/',
  'Shreyansh Shrivastava': 'https://www.linkedin.com/in/shreyansh-shrivastava-74a408184/',
};
export const PROJECT_LINKS = {
  aegistrace: [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/Code_Traceability_Harness',
    },
  ],
  'unischedule-erp': [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/UniSchedule',
    },
  ],
  'orbital-engine': [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/Full-Stack-course-recommendation-engine',
    },
  ],
  'ai-planet-rag': [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/PDF_parser',
    },
  ],
  'js-tennis-2020': [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/Tennis',
    },
  ],
  'django-backend-pivot': [
    {
      label: 'View repository',
      url: 'https://github.com/jpabitraranjan/My-First-Django-Project',
    },
  ],
  'llm-web-scraping': [
    {
      label: 'Web Scraper',
      url: 'https://github.com/jpabitraranjan/WebScraper',
    },
    {
      label: 'OPAI Chatbot',
      url: 'https://github.com/jpabitraranjan/OPAI-Chatbot',
    },
  ],
};
export const normalizeNames = (e) =>
  'string' === typeof e
    ? e
        .replace(/\bMonica Patkh\b/g, 'Monica Pathak')
        .replace(/\bShreyansh Srivastav\b/g, 'Shreyansh Shrivastava')
        .replace(/\bPragyanshu\b(?! Mishra)/g, 'Pragyanshu Mishra')
    : Array.isArray(e)
      ? e.map(normalizeNames)
      : e && 'object' === typeof e
        ? Object.fromEntries(
            Object.entries(e).map((e) => {
              let [t, n] = e;
              return [t, normalizeNames(n)];
            }),
          )
        : e;
export const STORY_ACTS = normalizeNames([
  {
    id: 'act-01',
    num: '01',
    title: 'The Spark',
    period: '7th grade \xb7 IT class',
    tagline: 'a teacher said something that never left me',
    accent: '#00F0FF',
    body: [
      'In an information technology class, one of my teachers said: everything \u2014 all the applications, the games, and the websites we see \u2014 is possible with coding.',
      "That single sentence rearranged my brain. I didn't want to use software anymore. I wanted to build my own game, with my own hands, by writing the code myself.",
    ],
    quote: {
      text: 'Everything, all the applications, the games and the websites we see are possible with coding.',
      by: 'my IT teacher, 7th grade',
    },
    code: "const spark = new Curiosity({ origin: '7th grade', goal: 'build my own game' });",
  },
  {
    id: 'act-02',
    num: '02',
    title: 'Four Hundred Lines of Belief',
    period: '2020 \xb7 the lockdown',
    tagline: "i made the thing i promised myself i'd make",
    accent: '#10B981',
    body: [
      'When the coronavirus lockdown hit in 2020, the world slowed down \u2014 and I used that time to explore. Somewhere in that exploring, I taught myself enough JavaScript, HTML and CSS to write a full tennis game from scratch.',
      "A few hundred lines of vanilla code: a ball, two paddles, a game loop. It sounds tiny. It wasn't. It was a dream come true \u2014 I wished to make a game, and I did.",
    ],
    code: 'function update() { ball.x += dx; ball.y += dy; checkPaddleCollision(); requestAnimationFrame(update); }',
    links: [
      {
        label: 'Play the game',
        kind: 'game',
      },
      {
        label: 'GitHub repo',
        kind: 'repo',
      },
    ],
    projectSlug: 'js-tennis-2020',
  },
  {
    id: 'act-03',
    num: '03',
    title: 'The Choice I Made for Myself',
    period: 'end of 10th standard',
    tagline: 'everyone said commerce. i checked myself first.',
    accent: '#F59E0B',
    body: [
      'By the end of class 10th I had to pick my stream. The mood around me said engineering had no jobs \u2014 commerce felt like the secured life.',
      "But then I caught myself: I wasn't choosing for myself. I looked at what I actually had \u2014 strong logical reasoning, strong maths. And eventually I realised something bigger: money is a secondary thing. What matters most is knowledge, and being ourselves.",
      'So I chose Physics, Chemistry, Mathematics \u2014 alongside Computer Science. Not for the market. For me.',
    ],
  },
  {
    id: 'act-04',
    num: '04',
    title: "Rajani Ma'am Lit the Candle",
    period: '11th & 12th \xb7 CBSE',
    tagline: 'the best teacher i have ever had',
    accent: '#8B5CF6',
    body: [
      'Choosing computer science turned out to be my best decision ever, and one name is the reason: Miss Rajani Trivedi.',
      "She had no grudges and no ego. She wasn't just a teacher \u2014 she was a learner too. If a student knew something she didn't, she would humbly, welcomingly ask them and learn it herself. Her lectures were delivered so well that I'd call her, if not the best, then one of the best teachers in the entire East region of CBSE.",
      "She told me something I still build by: writing code is not just for completing tasks. It's for an experience \u2014 and not just the developer's or the customer's experience. It's the experience for generations to come.",
      'She had the spark in me. She lit my candle. Every branch on this journey traces back to her.',
    ],
    quote: {
      text: "Code is not just for completing tasks. It's for an experience \u2014 the experience for generations to come.",
      by: 'Rajani Trivedi, my computer science teacher',
    },
    figures: [
      {
        name: 'Rajani Trivedi',
        role: 'CS teacher, 11th\u201312th',
        note: 'link coming soon',
      },
    ],
  },
  {
    id: 'act-05',
    num: '05',
    title: 'The Hunt, and the Fall',
    period: 'end of 12th \xb7 college applications',
    tagline: 'rejected by every university abroad',
    accent: '#F59E0B',
    body: [
      'I built myself up the honest way: small internships, social work, multiple clubs \u2014 the Going Global Club, the Interact Club \u2014 and even a no-code UI/UX internship with a pharmaceutical company in Singapore.',
      "Because of COVID-19, foreign universities were accepting Indian students at higher rates. I bet the trend would continue. It didn't. The impact was gone, acceptance snapped back to normal \u2014 and I was rejected by every university I applied to. My mistake: I applied to very few.",
      "In a hurry, unprepared for India's entrance exams, I sat them with only my board knowledge. And I landed a Computer Science seat at The National Institute of Engineering, Mysuru, through COMEDK.",
      "One detail: I filled no other branch. Only computer science \u2014 because Rajani ma'am had lit that spark, and I chose CS here with full enthusiasm.",
    ],
    figures: [
      {
        name: 'Going Global Club',
        role: 'global culture & events',
        note: 'school club',
      },
      {
        name: 'Interact Club',
        role: 'social welfare',
        note: 'school club',
      },
      {
        name: 'Singapore pharma internship',
        role: 'no-code / UI-UX',
        note: 'link coming soon',
      },
    ],
  },
  {
    id: 'act-06',
    num: '06',
    title: 'First-Year Fog',
    period: 'NIE Mysuru \xb7 freshman year',
    tagline: 'busy everywhere, growing nowhere',
    accent: '#8A90A2',
    body: [
      'First year was overwhelming \u2014 and honestly, quite depressing. I did everything: hackathons, college dance team performances on multiple occasions, club events like Adtract where I pitched a product idea and made an ad for it.',
      "But none of it was developing a skill in me. I was here to learn, here to build \u2014 and I wasn't doing much of either.",
      "So I studied my own roadmap. Python was my base (the CBSE syllabus ran on it). I tried data science and realised it's not for me yet \u2014 too much mathematics, territory for a master's. I switched to backend engineering, and at the end of first year I built my first Django project, following W3Schools step by step.",
      'Then an AI hackathon notification landed in my mail, and I threw myself into web scraping, LLM integration and chatbots. Third semester was a crazy one \u2014 Operating Systems, OOPs in Java, Data Structures in C, Digital Design & Computer Organization \u2014 and I loved all of it. Fourth semester brought DBMS, and DBMS needed a mini project.',
    ],
    figures: [
      {
        name: 'NIE dance team',
        role: 'performed & represented college',
        note: 'first year',
      },
    ],
  },
  {
    id: 'act-07',
    num: '07',
    title: 'Unischedule',
    period: '4th semester \u2192 5th semester',
    tagline: 'from a DBMS mini project to a campus ERP',
    accent: '#00F0FF',
    body: [
      'My teammate Pragyanshu brought the idea: colleges generate timetables with Excel sheets, and it eats human hours. Automate it. He was the ideation guy \u2014 I was the one who did the work. Everyone gets the credit; I was fine with that.',
      "I built it with ChatGPT over the next couple of weeks \u2014 and no, it was not a one-prompt project. The logic was complicated; even ChatGPT didn't hold the context of the whole system. I designed the entire workflow by hand, fed it to the model, checked every generation, kept separate versions, integrated parts \u2014 and every time I fixed bug B, bug A came back from the dead.",
      "I shipped it for DBMS. Then, in the fifth-semester minor project, I expanded it from a timetable generator into an entire ERP system for any university, college or institution. The reviews were great, it trended among teachers \u2014 and it's being considered for implementation on our own campus.",
    ],
    figures: [
      {
        name: 'Pragyanshu',
        role: 'ideation partner',
        note: 'link coming soon',
      },
    ],
    links: [
      {
        label: 'GitHub repo',
        kind: 'repo',
      },
    ],
    projectSlug: 'unischedule-erp',
  },
  {
    id: 'act-08',
    num: '08',
    title: 'HackVerse \u2014 Orbital',
    period: '2nd year \xb7 MIT Mysuru \xb7 24 hours',
    tagline: 'my first hackathon. we won it.',
    accent: '#10B981',
    body: [
      'Pragyanshu had watched me work like a maniac on Unischedule. One day he found a hackathon at Maharaja Institute of Technology, Mysuru \u2014 \u20b925,000 cash prize \u2014 and asked: should we go? I was desperate to build my r\xe9sum\xe9. I said yes before he finished the sentence.',
      "Me, Pragyanshu and Harsh Patel took the full-stack track \u2014 and discovered they'd blended AI/ML into it. We picked the learning recommendation system. The problem statement demanded gathering every kind of learning resource \u2014 articles, videos, posts, courses \u2014 and only Google could show everything. So I integrated Google itself, via Serp API.",
      "My job: turn user feedback and ratings into personalised recommendations. When a link had no ratings, the model's Singular Value Decomposition \u2014 a matrix factorisation method \u2014 generated them. Then sort descending and serve.",
      "The run itself was dependency hell: Python 3.12 vs 3.10, NumPy 1.x vs 2.x, scikit-learn fighting 32-bit vs 64-bit integers. I went inside libraries and fixed their code to make things run. Then, hours before the deadline, I hosted the recommendation engine as a server on a MacBook, feeding predictions to the full-stack app on Harsh's laptop.",
      'By night we had a crazy, legit project. And we won. My first hackathon with real skills \u2014 and a first-place finish.',
    ],
    figures: [
      {
        name: 'Pragyanshu',
        role: 'ideation & the guy who convinces judges',
        note: 'link coming soon',
      },
      {
        name: 'Harsh Patel',
        role: 'full-stack application',
        note: 'link coming soon',
      },
    ],
    projectSlug: 'orbital-engine',
  },
  {
    id: 'act-09',
    num: '09',
    title: 'AI Planet',
    period: 'June 2025 \xb7 Hyderabad',
    tagline: 'the assignment that taught me the industry',
    accent: '#F59E0B',
    body: [
      'Desperate to work, freelance or intern, I applied everywhere at the start of June 2025. A startup called AI Planet, based in Hyderabad, showed interest in my profile and gave me a task: build a RAG system that parses a document and answers questions with persistent context.',
      'I researched RAG properly, built the system, built the full stack around it, and shipped it. Then came an HR round and two technical rounds \u2014 both technicals were genuinely great, and they gave me a live insight into the current industry standards for agents and systems.',
      "I didn't get selected. The role was for final-year students \u2014 a 15,000/month stipend \u2014 and I was applying between second and third year. Still one of the best learning experiences I've had.",
    ],
    links: [
      {
        label: 'GitHub repo',
        kind: 'repo',
      },
    ],
    projectSlug: 'ai-planet-rag',
  },
  {
    id: 'act-10',
    num: '10',
    title: 'Fidelity \u2014 the Enterprise Crucible',
    period: '25 May \u2192 24 July 2026',
    tagline: 'spring boot, angular, and humility',
    accent: '#8B5CF6',
    body: [
      'The first company to visit our campus was Fidelity Investments. Around 300 students applied; six were selected through an OA, a technical interview and an HR interview. I was one of them.',
      'I walked in as a Python backend guy. Fidelity said: Java Spring Boot, plus an Angular UI. I underestimated it \u2014 industry standards, best coding practices, proprietary tools and libraries. The first weeks were overwhelming.',
      'I was a software developer intern through the Leap program, in the top business unit \u2014 Asset Management Technology, inside Fixed Income Technologies, working with the bond portfolio India team. My project: a dashboard for portfolio managers showing ETF constituent changes. A niche area, full of undocumented APIs. I raised over sixty access requests \u2014 the intern average was ten \u2014 and it took nearly a month to get the data. Once I had it, I was smooth.',
      'Then I finished my first project, got handed a second of comparable difficulty \u2014 and delivered it in four days. My mentor, Monica Patkh, was daring enough to put me through real code reviews while other mentors told their interns not to touch a working project. I wrote JUnit test cases, did API testing, sharpened my version control, and deployed through the pipeline on AWS \u2014 all in an extreme-programming style agile setup. I even demoed my project to the portfolio managers, the real clients.',
      'The best thing I learned there was humility towards assumptions. Even if I\'ve written print("hello world"), it does not mean it will always print hello world. Test vigorously. Log everything. Even the simplest block of code can break production.',
      'No PPO \u2014 better performers, limited business requirements. No complaints: that business unit taught me more in two months than I could have imagined. The internship ended on 24 July. Then I was back to square one, applying again \u2014 which brings me here, to Wispr Flow.',
    ],
    quote: {
      text: 'Even if you have written print("hello world"), it does not mean it will always print hello world.',
      by: 'Monica Patkh, my mentor at Fidelity',
    },
    figures: [
      {
        name: 'Monica Patkh',
        role: 'mentor, code reviews',
        note: 'link coming soon',
      },
    ],
    projectSlug: 'fidelity-internship',
  },
  {
    id: 'act-11',
    num: '11',
    title: 'AegisTrace \u2014 the Current Frontier',
    period: 'present day',
    tagline: "what i'm building right now",
    accent: '#00F0FF',
    body: [
      'At Fidelity I felt I could solve everything. Then my friend Shreyansh Srivastav handed me a real problem. He uses LLMs to design and rectify circuits \u2014 often inaccurate. He went through literature from Cornell and other institutions and found the core issue: coding agents skip requirement analysis. The better you understand the requirements, the better the results.',
      'That clicked. What should I build next?',
      "My thesis: a platform where a user states a requirement \u2014 maybe an architecture \u2014 and the system generates a design with human intervention to refine it. For each design component, multiple specialised agents build their piece against marked requirements. A master agent combines, tests and integrates everything into production-ready code. And the real industry pain \u2014 debugging and iteration \u2014 gets solved with line-level traceability: every line of code knows what it depends on, why it exists, and which agent wrote it. So when an LLM is asked to fix `if x > 10`, it can't silently rewrite a different file and resurrect bug A.",
      'Today, AegisTrace works with any local Python repository: it indexes the project, drafts a graph of what each function and file depends on, runs static analysis over the conditions and control flow, then passes it through an LLM to capture intent \u2014 and generates a detailed requirement file for every function, file, and the project as a whole.',
      'Traceability first. Then more agents. One zoom at a time: design \u2192 component \u2192 agent \u2192 line.',
    ],
    figures: [
      {
        name: 'Shreyansh Srivastav',
        role: 'idea partner, literature reviews',
        note: 'link coming soon',
      },
    ],
    links: [
      {
        label: 'GitHub repo',
        kind: 'repo',
      },
    ],
    projectSlug: 'aegistrace',
  },
]);
export const PROJECTS = normalizeNames([
  {
    slug: 'aegistrace',
    title: 'AegisTrace',
    fullTitle: 'AegisTrace \u2014 Agentic Code Traceability Engine',
    badge: 'in the works \xb7 flagship',
    period: '2026 \u2014 present',
    role: 'co-architect & builder',
    summary:
      'Describe a requirement. Get a system design. Let a crew of specialised agents build it \u2014 with line-level traceability on every single line of code.',
    stack: ['Python', 'AST static analysis', 'LLM agents', 'Dependency graphs'],
    facts: [
      {
        k: 'works on',
        v: 'any local Python repository',
      },
      {
        k: 'pipeline',
        v: 'index \u2192 graph \u2192 static analysis \u2192 intent',
      },
      {
        k: 'current stage',
        v: 'traceability engine',
      },
      {
        k: 'idea partner',
        v: 'Shreyansh Srivastav',
      },
    ],
    story: [
      {
        h: 'The itch',
        p: [
          "After Fidelity I felt I could solve everything \u2014 until my friend Shreyansh Srivastav showed me a real one. He uses LLMs for circuit design and rectification, and the results were often inaccurate. He dug through literature from Cornell and other institutions and found the core issue: coding agents don't do requirement analysis. The better the requirements are understood, the better the flow and the results.",
        ],
      },
      {
        h: 'The thesis',
        p: [
          'Replace the friction of software development with an agentic pipeline. A user submits a requirement \u2014 what they want to achieve or build, optionally a target architecture. The system generates a system design, with human intervention to modify and approve it.',
          'For each component of that design, multiple agents are deployed, each with its own marked requirements. The code templates they generate are combined by a master agent, tested and integrated \u2014 ending in complete, production-ready code.',
          "But the industry's real problem isn't just building apps. It's debugging and continuous iteration. Today, if you tell an LLM 'there's a bug: `if x > 10` should be `if x >= 10`', it hasn't seen the code \u2014 it may fix the line, or rewrite an entirely different file and resurrect a bug it already solved. Line-level traceability ends that: every line records what it depends on, why it's required, and what it does.",
        ],
      },
      {
        h: 'What it does today',
        p: [
          'AegisTrace currently works with any local Python repository. It indexes the entire project and drafts a dependency graph \u2014 what each function depends on, what each file depends on. The graph goes through static analysis, which understands conditions, `if` statements and control flow. Then an LLM layer captures the intent of why each line sits where it sits.',
          'The output is a requirement file: what each function does, what each file is about, what the whole project is for \u2014 in detail.',
          'Next: zooming from design into components, components into agents, agents into the lines they wrote. Then more agents. Currently, we are in the traceability state.',
        ],
      },
    ],
    code: 'graph = index_repository(repo)\nfor fn in graph.functions:\n    static_analyse(fn)          # conditions, if-statements, control flow\n    intent = llm.explain(fn, graph.context(fn))\nrequirements = draft_requirement_file(graph, intent)  # every function, file, project',
    people: [
      {
        name: 'Shreyansh Srivastav',
        role: 'idea partner \u2014 electronics undergrad, literature reviews from Cornell & co.',
        status: 'link coming soon',
      },
    ],
    repo: true,
  },
  {
    slug: 'fidelity-internship',
    title: 'Fidelity Investments',
    fullTitle: 'Fidelity Investments \u2014 Fixed Income Technologies',
    badge: 'summer internship \xb7 leap program',
    period: '25 May \u2014 24 July 2026',
    role: 'software developer intern',
    summary:
      'Two months in the top business unit of Fidelity: a Spring Boot + Angular dashboard for portfolio managers, sixty-plus access requests, real code reviews, and the best lesson of my career.',
    stack: ['Java Spring Boot', 'Angular', 'JUnit', 'API testing', 'AWS pipeline'],
    facts: [
      {
        k: 'team',
        v: 'Asset Management Tech \u2192 Fixed Income Tech, bond portfolio India',
      },
      {
        k: 'access requests',
        v: '60+ (intern average: ~10)',
      },
      {
        k: 'second project',
        v: 'shipped in 4 days',
      },
      {
        k: 'selection',
        v: '6 chosen out of ~300 applicants',
      },
    ],
    story: [
      {
        h: 'The challenge',
        p: [
          "I was a Python backend developer. Fidelity handed me Java Spring Boot \u2014 'it's just a different language, the logic is the same.' I underestimated it completely. Industry standards, best coding practices, and the company's own proprietary tools and libraries combined into something very different from everything I had ever used.",
        ],
      },
      {
        h: 'The data wall',
        p: [
          "I worked in Fixed Income Technologies under Asset Management Technology \u2014 Fidelity's top business unit \u2014 with the bond portfolio India team. My project: a dashboard for portfolio managers demonstrating ETF constituent changes.",
          'It was a niche area compared to what my teammates did \u2014 purchases, deliveries, authorized partners. Basket composition was largely undocumented, with undocumented APIs and undiscovered areas. I raised over sixty access requests; the intern average was ten. It took almost an entire month to get the data. Once I had it, I understood it, I learned Spring Boot and Angular properly \u2014 and I was smooth.',
        ],
      },
      {
        h: 'The rhythm',
        p: [
          "The whole internship ran on agile \u2014 specifically extreme programming. After my first project, my mentor Monica Patkh put me through continuous, active code reviews over two days while other mentors told their interns 'don't break the working project.' I wrote JUnit test cases, did API testing, sharpened my version control, and deployed through the pipeline on AWS.",
          "My first project took a month and a half. My second \u2014 of comparable difficulty, unlocked because I already knew the data \u2014 took four days. That's what the data wall was worth.",
        ],
      },
      {
        h: 'The lesson',
        p: [
          "I used to believe: if I wrote the code and I'm sure it works, it works. Monica broke that. Even if you've written print(\"hello world\"), it does not mean it will always print hello world. If `if x > 10` doesn't check the right thing at production scale, the failure is on you. Test vigorously, log everything, put tests on everything \u2014 humility towards assumptions.",
          "I demoed my project to the portfolio managers \u2014 the real clients. No PPO at the end: better performers, limited business requirements. No complaints. The learnings of those two months were immense, and I'm grateful.",
        ],
      },
    ],
    code: '@RestController\nclass EtfConstituentDashboard {\n    // Spring Boot service \xb7 Angular UI \xb7 JUnit tests \xb7 AWS pipeline deploy\n}',
    people: [
      {
        name: 'Monica Patkh',
        role: 'mentor \u2014 code reviews, humility towards assumptions',
        status: 'link coming soon',
      },
    ],
    repo: false,
  },
  {
    slug: 'orbital-engine',
    title: 'Orbital',
    fullTitle: 'Orbital \u2014 Learning Recommendation Engine',
    badge: 'hackverse winner \xb7 \u20b925,000',
    period: '2nd year \xb7 24-hour hackathon, MIT Mysuru',
    role: 'recommendation engine',
    summary:
      'Built in 24 hours at HackVerse: a learning recommendation system that reads user feedback and rates unrated resources with SVD matrix factorisation. We won.',
    stack: ['Python', 'SVD (matrix factorisation)', 'Serp API', 'scikit-learn'],
    facts: [
      {
        k: 'result',
        v: '1st place, HackVerse @ MIT Mysuru',
      },
      {
        k: 'duration',
        v: '24 hours, team of 3',
      },
      {
        k: 'my layer',
        v: 'feedback \u2192 personalised recommendations',
      },
      {
        k: 'fallback',
        v: 'SVD-generated ratings for unrated links',
      },
    ],
    story: [
      {
        h: 'The call',
        p: [
          "Pragyanshu had watched me work like crazy on Unischedule. He found a hackathon at Maharaja Institute of Technology, Mysuru \u2014 \u20b925,000 cash prize \u2014 and asked, 'should we go?' I was desperate to build my r\xe9sum\xe9 after a slow first year. I said yes instantly. With Harsh Patel, we took the full-stack track \u2014 not knowing they'd blend AI/ML into it.",
        ],
      },
      {
        h: 'The problem',
        p: [
          "We chose the learning recommendation system. It demanded gathering every kind of learning resource \u2014 articles, posters, posts, videos, images, blogs, Coursera courses. We could pull video via YouTube's API, but nothing could show everything. Only Google could. So I researched how to bring Google searches in programmatically \u2014 and integrated Serp API to fetch the results.",
        ],
      },
      {
        h: 'My layer',
        p: [
          "The full-stack app collected user feedback and ratings for each resource. My job: turn that feedback into personalised recommendations based on the user's ratings and other users' ratings. Whenever a link had no ratings at all, the model's Singular Value Decomposition \u2014 a matrix factorisation method \u2014 generated its rating. Then everything got sorted in descending order and served.",
        ],
      },
      {
        h: 'Dependency hell',
        p: [
          "Running it was its own battle. I had Python 3.12 but needed 3.10. NumPy had to be the 1.x series, not 2.x. scikit-learn's maths libraries wanted 64-bit integers where the system had 32-bit. I went inside each library and fixed their code to make everything run \u2014 I had never gone that deep.",
          "Hours before the deadline, I hosted the recommendation engine as a server on a MacBook (its dependency system just worked, unlike Windows), feeding ratings and personalised recommendations to the full-stack application running on Harsh's laptop.",
          'Then: 1st place. My first hackathon with real skills \u2014 and my greatest breakthrough moment.',
        ],
      },
    ],
    code: '# unrated link? let the matrix decide\nratings = svd_factor(users_matrix, items_matrix)\npredicted = ratings[item_id]\nrecommendations = sorted(zip(links, predicted), key=lambda x: -x[1])',
    people: [
      {
        name: 'Pragyanshu',
        role: 'ideation & the guy who convinces every judge',
        status: 'link coming soon',
      },
      {
        name: 'Harsh Patel',
        role: 'built the full-stack application through the night',
        status: 'link coming soon',
      },
    ],
    repo: true,
  },
  {
    slug: 'unischedule-erp',
    title: 'Unischedule',
    fullTitle: 'Unischedule \u2014 Campus Timetable ERP',
    badge: 'considered for campus implementation',
    period: '4th semester \u2192 5th semester',
    role: 'the engineer who did the work',
    summary:
      'Started as a DBMS mini project to kill Excel-driven timetable generation. Grew into a full ERP system for any institution \u2014 now being considered for implementation at NIE itself.',
    stack: ['Django', 'Python', 'ChatGPT-assisted workflow'],
    facts: [
      {
        k: 'origin',
        v: "Pragyanshu's idea, DBMS mini project",
      },
      {
        k: 'build',
        v: '~2 weeks of workflow-driven iteration',
      },
      {
        k: 'now',
        v: 'full ERP for any university or institution',
      },
      {
        k: 'recognition',
        v: 'considered for implementation at NIE',
      },
    ],
    story: [
      {
        h: 'The idea',
        p: [
          "In DBMS we had to build a mini project for marks. My teammate Pragyanshu came up with one: colleges generate timetables with Excel sheets, and it's extremely time-consuming for any human. He was the real ideation guy. I was the most skilled one on the team \u2014 the one who does all the work while everyone gets the credit. I got into work.",
        ],
      },
      {
        h: 'The build',
        p: [
          "I used ChatGPT to bring the project up over the next couple of weeks. It was not a one-prompt project \u2014 the logic was complicated, and ChatGPT itself didn't hold the context of the entire system. So I designed the complete workflow by hand and fed it to the model. Code generation still needed my checking over and over, because it was very buggy: fix bug B and bug A \u2014 the one solved earlier \u2014 would come right back.",
          'I kept different versions, picked the best code, integrated part with part, and finally shipped it.',
        ],
      },
      {
        h: 'The growth',
        p: [
          'In the fifth-semester minor project I expanded Unischedule from a timetable generator into an entire ERP system for any university, college or institution \u2014 multiple features on top of automated timetable generation.',
          "The project got great reviews and became a highly trending topic among teachers \u2014 it's being considered for implementation on our own campus. This was my breakthrough: the first year, I felt I had done nothing. This proved I could.",
        ],
      },
    ],
    code: '-- the spreadsheet killer\nSELECT course, room, faculty FROM timetable\nWHERE clash = FALSE AND faculty_available = TRUE;',
    people: [
      {
        name: 'Pragyanshu',
        role: 'ideation partner',
        status: 'link coming soon',
      },
    ],
    repo: true,
  },
  {
    slug: 'ai-planet-rag',
    title: 'AI Planet RAG',
    fullTitle: 'AI Planet \u2014 RAG with Persistent Context',
    badge: 'assignment \xb7 shipped',
    period: 'June 2025 \xb7 Hyderabad startup',
    role: 'applicant \u2014 built & shipped the task',
    summary:
      'An internship assignment: parse a document and answer questions with persistent context. I researched RAG, built the full-stack system, shipped it \u2014 and got two great technical interviews out of it.',
    stack: ['Python', 'RAG pipeline', 'Full-stack'],
    facts: [
      {
        k: 'task',
        v: 'document parsing + Q&A with persistent context',
      },
      {
        k: 'delivered',
        v: 'RAG system + entire full-stack, shipped',
      },
      {
        k: 'rounds',
        v: 'HR + 2 technical interviews',
      },
      {
        k: 'result',
        v: 'not selected \u2014 role aimed at final-year students',
      },
    ],
    story: [
      {
        h: 'The assignment',
        p: [
          'At the start of June 2025 I was applying everywhere \u2014 desperate to work, freelance, or intern. AI Planet, a startup in Hyderabad, showed interest and gave me a task: build a RAG system to parse a document and have question-answering with persistent context.',
          'I researched RAG properly, built the system, built the entire full-stack around it, and shipped it.',
        ],
      },
      {
        h: 'What the interviews gave me',
        p: [
          'Then came an HR round and two technical rounds \u2014 both technicals were really great. They gave me insight into the current industry standards for agents and systems.',
          "I didn't get selected. The stipend was 15,000 a month and the role was for final-year students; I was applying between second and third year. Still a great learning experience \u2014 and my RAG system is something I use myself: before a test, I upload my notes, parse the content, and prepare from the book fast.",
        ],
      },
    ],
    code: 'docs = parse(pdf)\nstore = vector_index(docs)\nanswer = rag.query(question, context_window=persistent)',
    people: [],
    repo: true,
  },
  {
    slug: 'js-tennis-2020',
    title: 'JS Tennis',
    fullTitle: 'JS Tennis \u2014 the 2020 Lockdown Game',
    badge: 'the origin project',
    period: '2020 \xb7 10th standard lockdown',
    role: 'solo \u2014 everything',
    summary:
      'A simple tennis game in vanilla JavaScript, HTML and CSS \u2014 a few hundred lines written during the coronavirus lockdown. My first ever finished build, and the proof I could make the thing I dreamed of.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    facts: [
      {
        k: 'size',
        v: '~400 lines of code',
      },
      {
        k: 'stack',
        v: 'vanilla JS + HTML + CSS',
      },
      {
        k: 'built in',
        v: 'the 2020 coronavirus lockdown',
      },
      {
        k: 'status',
        v: 'a dream come true',
      },
    ],
    story: [
      {
        h: 'The promise',
        p: [
          'In 7th grade a teacher told me everything we see \u2014 apps, games, websites \u2014 is possible with coding. I got a spark to build my own game by coding it myself.',
        ],
      },
      {
        h: 'The lockdown',
        p: [
          '2020. The coronavirus lockdown slowed the world, and I used the time to explore. Somewhere in that exploring I learned how to make a tennis game with JavaScript, HTML and CSS.',
          'I wrote some 400 lines of code for a simple tennis game \u2014 and it was a dream-come-true thing. I wished to make a game, and I did.',
        ],
      },
    ],
    code: '// ~400 lines total\nfunction loop() {\n  ball.x += dx; ball.y += dy;\n  if (ball.y < 0 || ball.y > H) dy = -dy;\n  requestAnimationFrame(loop);\n}',
    people: [],
    repo: true,
    playable: true,
  },
  {
    slug: 'django-backend-pivot',
    title: 'Django Pivot',
    fullTitle: 'Django Backend Pivot',
    badge: 'end of first year',
    period: 'between 1st and 2nd year',
    role: 'self-taught, W3Schools-driven',
    summary:
      'The project that marked my switch from drifting to backend engineering: a Django build following W3Schools, made right after I ruled out data science.',
    stack: ['Python', 'Django'],
    facts: [
      {
        k: 'source',
        v: 'W3Schools Django path',
      },
      {
        k: 'timing',
        v: 'end of 1st year \u2192 start of 2nd',
      },
      {
        k: 'why backend',
        v: 'checked the roadmap; AIML or backend',
      },
      {
        k: 'ruled out',
        v: 'data science \u2014 too much maths, undergrad-level',
      },
    ],
    story: [
      {
        h: 'The decision',
        p: [
          "First year hadn't developed any skill in me, so I started checking roadmaps: either AIML or backend engineering. I gave data science a try and learned it's not for me yet \u2014 too much mathematics, the kind only a master's can account for. It's not a field for an undergraduate, in my view.",
          'So I switched to backend engineering and picked Django as the framework. At the end of first year, before second year began, I built my Django project on W3Schools \u2014 following along, then making it my own.',
        ],
      },
    ],
    code: 'python manage.py startapp backend_pivot\n# django \u2192 my default weapon from here on',
    people: [],
    repo: true,
  },
  {
    slug: 'llm-web-scraping',
    title: 'Scrape + LLM',
    fullTitle: 'Web Scraping & LLM Chatbots',
    badge: 'hackathon prep',
    period: 'start of 2nd year',
    role: 'solo exploration',
    summary:
      'When an AI hackathon notification hit my mail, I went deep on web scraping, LLM integration and chatbots \u2014 the repos that set up everything that came after.',
    stack: ['Python', 'Web scraping', 'LLM integration', 'Chatbots'],
    facts: [
      {
        k: 'trigger',
        v: 'an AI hackathon in my inbox',
      },
      {
        k: 'learned',
        v: 'web scraping, LLM integration, chatbots',
      },
      {
        k: 'outcome',
        v: 'the skill base for Orbital & RAG',
      },
    ],
    story: [
      {
        h: 'The notification',
        p: [
          'A mail notification told me an AI hackathon was happening somewhere. I got into learning: web scraping, integrating LLMs, making chatbots \u2014 and committed the repos as I went.',
          'Those skills quietly became the foundation for the learning recommendation engine (Google results via Serp API) and later the RAG system at AI Planet.',
        ],
      },
    ],
    code: 'soup = BeautifulSoup(fetch(url))\nbot.reply(llm.generate(soup.get_text()))',
    people: [],
    repo: true,
  },
  {
    slug: 'data-viz-suite',
    title: 'Aviation Data Visualisation',
    fullTitle: 'Aviation Data Visualisation with Python',
    badge: '3rd semester mini project',
    period: 'November 2024 \xb7 third semester',
    role: 'solo \u2014 exploration & visualization',
    summary:
      'A mini project for the Data Visualization with Python subject: Kaggle datasets explored and visualized with Matplotlib and Seaborn.',
    stack: ['Python', 'Matplotlib', 'Seaborn', 'Kaggle datasets'],
    facts: [
      {
        k: 'subject',
        v: 'Data Visualization with Python',
      },
      {
        k: 'data',
        v: 'Kaggle datasets',
      },
      {
        k: 'tools',
        v: 'Matplotlib & Seaborn',
      },
    ],
    story: [
      {
        h: 'The semester',
        p: [
          'Third semester was a crazy one \u2014 Operating Systems, OOPs in Java, Data Structures in C, Digital Design and Computer Organization \u2014 and I was really interested in all of it.',
          'Data Visualization with Python required a mini project. I explored, downloaded datasets from Kaggle, and made visualizations from them using Matplotlib and Seaborn.',
        ],
      },
    ],
    code: 'import seaborn as sns\nsns.histplot(df["metric"], kde=True)',
    people: [],
    repo: true,
  },
]);
export const LISTED_PROJECTS = PROJECTS.filter((e) => 'fidelity-internship' !== e.slug);
export const CHAPTER_COPY = [
  {
    title: 'The first spark.',
    short: 'The spark',
    label: '7TH GRADE',
    model: 'computer',
    bg: '#17191c',
    accent: '#efaa81',
    dark: true,
    summary: 'One IT class. One teacher. The realisation that I could build the things I loved.',
    detail: 'A question became a direction.',
  },
  {
    title: '400 lines.\nA world of possibility.',
    short: 'First game',
    label: '2020 \xb7 LOCKDOWN',
    model: 'tennis',
    bg: '#182922',
    accent: '#b9d99b',
    dark: true,
    summary:
      'A ball, two paddles, and a promise to myself. My first game, built from scratch in JavaScript.',
    detail: 'HTML / CSS / JAVASCRIPT',
    project: 'js-tennis-2020',
  },
  {
    title: 'A choice\nof my own.',
    short: 'The choice',
    label: 'AFTER 10TH GRADE',
    model: 'compass',
    bg: '#ebece7',
    accent: '#aa4829',
    dark: false,
    summary:
      'Physics, chemistry, mathematics, and computer science. Not because it was the safe path. Because it was mine.',
    detail: 'Curiosity over convention.',
  },
  {
    title: 'Some teachers\nchange everything.',
    short: 'The mentor',
    label: '11TH & 12TH GRADE',
    model: 'book',
    bg: '#f0eeea',
    accent: '#a5462c',
    dark: false,
    summary:
      'Rajani Trivedi taught me that code is more than a completed task. It is an experience for generations to come.',
    detail: 'A lesson I still build by.',
  },
  {
    title: 'A different route.\nThe same resolve.',
    short: 'NIE, Mysuru',
    label: 'THE COLLEGE SEARCH',
    model: 'graduation',
    bg: '#e6e9e7',
    accent: '#336e5c',
    dark: false,
    summary:
      'The plans abroad fell through. COMEDK brought me to NIE, Mysuru. I chose only one branch: computer science.',
    detail: 'National Institute of Engineering',
  },
  {
    title: 'Finding my\nbuilding blocks.',
    short: 'The backend',
    label: 'FIRST YEAR \xb7 NIE',
    model: 'server',
    bg: '#192923',
    accent: '#b9d99b',
    dark: true,
    summary:
      'From first-year overwhelm to Python, Django, web scraping, and LLMs. Less running in circles. More building.',
    detail: 'PYTHON / DJANGO / A NEW DIRECTION',
    project: 'django-backend-pivot',
  },
  {
    title: 'From chaos\nto a system.',
    short: 'Unischedule',
    label: '4TH \u2192 5TH SEMESTER',
    model: 'schedule',
    bg: '#eceee8',
    accent: '#386d58',
    dark: false,
    summary:
      'Pragyanshu had the idea. I built the system. An automated timetable became a campus ERP.',
    detail: 'UNISCHEDULE / DJANGO / CAMPUS ERP',
  },
  {
    title: '24 hours.\nOne first place.',
    short: 'Orbital',
    label: 'HACKVERSE \xb7 MIT MYSURU',
    model: 'orbital',
    bg: '#191c1b',
    accent: '#eeb884',
    dark: true,
    summary:
      'With Pragyanshu and Harsh Patel, I built a learning recommendation engine. Our first hackathon. A \u20b925,000 win.',
    detail: 'ORBITAL / SVD / SERP API',
  },
  {
    title: 'Beyond the\nlast question.',
    short: 'AI Planet',
    label: 'JUNE 2025',
    model: 'documents',
    bg: '#e9edef',
    accent: '#366a7c',
    dark: false,
    summary:
      'A document parser that could answer with context. A full-stack RAG system, and interviews that pushed my understanding further.',
    detail: 'RETRIEVAL / CONTEXT / LEARNING',
  },
  {
    title: 'Real systems.\nReal humility.',
    short: 'Fidelity',
    label: 'MAY \u2014 JULY 2026',
    model: 'enterprise',
    bg: '#edebe8',
    accent: '#ab482f',
    dark: false,
    summary:
      'Fixed Income Technology at Fidelity Investments. Spring Boot, Angular, and a mentor who taught me to question every assumption.',
    detail: 'FIDELITY / ASSET MANAGEMENT TECH',
  },
  {
    title: 'Every line\nhas a reason.',
    short: 'AegisTrace',
    label: 'PRESENT \xb7 THE NEXT CHAPTER',
    model: 'network',
    bg: '#17191c',
    accent: '#efaa81',
    dark: true,
    summary:
      'Building AegisTrace with Shreyansh Srivastav. Making code traceable to the requirements, dependencies, and intent behind it.',
    detail: 'AGENTIC AI / AST / LINE-LEVEL TRACEABILITY',
  },
];
export const JOURNEY_CHAPTERS = [
  {
    id: 'intro',
    num: '00',
    title: 'Pabitra\nRanjan Jena.',
    short: 'The beginning',
    label: 'A DEVELOPER\u2019S JOURNEY',
    model: 'laptop',
    bg: '#17191c',
    accent: '#efaa81',
    dark: true,
    summary: 'A little curiosity. A lot of building.\nFinal-year Computer Science at NIE, Mysuru.',
    detail: 'BACKEND ENGINEERING & AGENTIC AI',
  },
  ...STORY_ACTS.map((e, t) => ({
    ...normalizeNames(CHAPTER_COPY[t]),
    id: e.id,
    num: e.num,
    project: CHAPTER_COPY[t].project || e.projectSlug,
  })),
];
export const mixColors = (e, t, n) => {
  const r = (e) => e.match(/[a-f\d]{2}/gi).map((e) => parseInt(e, 16)),
    i = r(e),
    a = r(t);
  return `#${i
    .map((e, t) =>
      Math.round(e + (a[t] - e) * n)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}`;
};
export const chapterTheme = (e) => {
  const t = Math.floor(e),
    n = Math.min(t + 1, JOURNEY_CHAPTERS.length - 1),
    r = Math.max(0, Math.min(1, 2 * (e - t - 0.25))),
    i = JOURNEY_CHAPTERS[Math.round(e)];
  return {
    bg: mixColors(JOURNEY_CHAPTERS[t].bg, JOURNEY_CHAPTERS[n].bg, r),
    accent: i.accent,
    fg: i.dark ? '#f4f3ef' : '#242a28',
    muted: i.dark ? '#acb0ad' : '#58615d',
    dark: i.dark,
  };
};
