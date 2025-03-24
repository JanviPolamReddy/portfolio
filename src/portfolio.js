const header = {
  homepage: 'https://janvipolamreddy.github.io/portfolio/',
  title: 'JP',
}

const about = {
  name: 'Janvi',
  role: 'MS CS at FSU | Graduate Teaching Assistant | Ex-Phenom',
  description:
    'Software Developer with 2+ years of expertise in full-stack development, database systems, and microservices. Proficient in Java, C++, Python, and cloud platforms (Azure, AWS). Skilled in designing fault-tolerant architectures, optimizing parallel computing workflows, and developing high-performance APIs.',
  resume:
    'https://drive.google.com/file/d/1rnxiFRoQMFb-0C8h7KuUfURO7GZbFtoE/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/janvi-polamreddy/',
    github: 'https://github.com/JanviPolamReddy/',
  },
}

const education = [
  {
    name: 'Florida State University, Tallahassee',
    description: 'Masters in Computer Science',
    stack: ['Aug 2023 - May 2025', 'GPA: 3.97/4.0'],
  },
  {
    name: 'Andhra University, Visakhapatnam',
    description: 'B.Tech in Information Technology',
    stack: ['Aug 2018 - May 2022', 'GPA: 3.9/4.0'],
  },
]

const projects = [
  {
    name: 'Global Distributed HashTable',
    description:
      'Implemented a scalable distributed hash table for parallel word counting across multiple nodes',
    stack: ['C++', 'MPI', 'RDMA'],
    sourceCode: 'https://github.com/JanviPolamReddy/DistributedHashTable'
  },
  {
    name: 'Polygon Range Search',
    description:
      'Built a distributed indexing and query system for spatial search',
    stack: ['C++','ANN','kd-trees','Data Structures','Advanced Algorithms'],
    sourceCode: 'https://github.com/JanviPolamReddy/PolygonRangeSearch'
  },
  {
    name: 'Cache Simulator',
    description:
      'Developed a versatile cache simulator supporting different caching strategies',
    stack: ['Java', 'Computer Architecture', 'Data Structures', 'System Design'],
    sourceCode: 'https://github.com/JanviPolamReddy/CacheSimulator'
  },
  {
    name: 'Hyperparameter Tuning Pipeline',
    description:
      'Developed a neural network classifier with a Bayesian optimization approach to identify optimal hyperparameters',
    stack: ['PyTorch', 'Python', 'Deep Learning','Machine Learning'],
    sourceCode: 'https://github.com/JanviPolamReddy/AutomatedHyperparameterTuningPipeline'
  },
  {
    name: 'Aspect Based Sentiment Analysis',
    description:
      'Implemented an ABSA system using a fine-tuned BERT model focusing on the laptops domain',
    stack: ['PyTorch','Python','Transformers','BERT','Deep Learning'],
    sourceCode: 'https://github.com/JanviPolamReddy/AspectBasedSentimentAnalysis',
  },
  {
    name: 'Digits Classifier',
    description:
      'Developed an ensemble of neural network models, including various classifiers, for digit classification.',
    stack: ['PyTorch', 'Python', 'Deep Learning','Machine Learning'],
    sourceCode: 'https://github.com/JanviPolamReddy/DigitClassification',
  },
]

const skills = [
  'C++',
  'Java',
  'Python',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'React',
  'Git',
  'MySQL',
  'AWS Cloud',
  'MongoDB',
  'Redis',
  'Postman',
  'Microservices',
  'REST APIs',
  'Web Services',
  'TDD',
  'JUnit',
  'Mockito',
  'Cypress',
  'Unit Testing',
  'Kubernetes',
  'Docker',
  'CI/CD',
  'Agile SDLC',
  'Linux'
]

const experience = [
  {
    name: 'Graduate Researcher (Distributed Systems)',
    description:
      'Engineered parallel computing optimizations, boosting execution efficiency by 25%. Designed benchmarking tools to analyze multiprocessor systems, reducing processing overhead by 30%. Researched fault tolerance models and load balancing techniques to enhance system resilience & reduce latency by 20%.',
    stack: ['Florida State University - Tallahassee, FL', 'Jan 2025 - Present'],
  },
  {
    name: 'Graduate Teaching Assistant',
    description:
      'Mentored 50+ students per semester in Secured Systems, Parallel Computing, Unix tools, and Software Engineering. Diagnosed multi-threaded and multi-node systems, improving student code efficiency by 30%. Programmed grading workflows using Python, cutting manual grading time by 40% and accelerating feedback cycles. Assisted Courses: COP4342 - Unix Tools (Shell Scripting & Perl Programming) & COP4521 - Programming Secure, Parallel and Distributed Applications.',
    stack: ['Florida State University - Tallahassee, FL', 'Jan 2024 - Present'],
  },
  {
    name: 'Software Development Engineer (CMS Team)',
    description:
      'Designed and maintained scalable microservices for the Career Site CMS, enabling real-time content updates and personalized job recommendations using Java, Python, and Spring Boot. I optimized SQL queries and caching strategies (Redis, MySQL, MongoDB), reducing API response times by 40%. I also developed RESTful APIs, UI components (React.js, Vue.js), and automated testing suites (JUnit, Jest, Cypress) to enhance site performance and reliability.',
    stack: ['Phenom - Hyderabad, India', 'Jun 2022 - Jul 2023'],
  },
  {
    name: 'Software Development Intern (CMS Team)',
    description:
      'Enhanced the Career Site CMS by developing dynamic UI components, improving site responsiveness. Built and optimized back-end services in Java and Python, enabling faster content rendering and smoother API interactions. Wrote SQL queries and optimized database indexing for efficient job search and filtering within Career Sites. Developed automated job posting workflows using Python and Shell scripting, reducing manual content updates by 30%.',
    stack: ['Phenom - Hyderabad, India', 'Feb 2022 - May 2022'],
  }
]

const contact = {
  email: 'polamreddyjanvi2001@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
