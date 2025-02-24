const header = {
  homepage: 'https://janvipolamreddy.github.io/portfolio/',
  title: 'JP',
}

const about = {
  name: 'Janvi',
  role: 'MS CS at FSU | Graduate Teaching Assistant | Ex-Phenom',
  description:
    'Software engineer with experience in full-stack development, cloud computing, and distributed systems. Proven track record at Phenom, optimizing career site CMS performance and automating content workflows. Proficient in C++, Java, Python, and a robust tech stack. Passionate about building scalable, high-performance applications.',
  resume:
    'https://drive.google.com/file/d/1lsRJwUsiBj0jatBh5AoZ359x7WqSW4f_/view?usp=sharing',
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
    stack: ['Aug 2018 - May 2022', 'GPA: 8.97/10.0'],
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
    name: 'Phenom',
    description:
      'Software Development Engineer, CMS Team \n Designed and maintained scalable microservices for the Career Site CMS, enabling real-time content updates and personalized job recommendations using Java, Python, and Spring Boot. I optimized SQL queries and caching strategies (Redis, MySQL, MongoDB), reducing API response times by 40%. I also developed RESTful APIs, UI components (React.js, Vue.js), and automated testing suites (JUnit, Jest, Cypress) to enhance site performance and reliability.',
    stack: ['Hyderabad, India', 'Jun 2022 - Jul 2023'],
  },
  {
    name: 'Phenom',
    description:
      'Software Development Intern, CMS Team \n Enhanced the Career Site CMS by developing dynamic UI components, improving site responsiveness. Built and optimized back-end services in Java and Python, enabling faster content rendering and smoother API interactions. Wrote SQL queries and optimized database indexing for efficient job search and filtering within Career Sites. Developed automated job posting workflows using Python and Shell scripting, reducing manual content updates by 30%.',
    stack: ['Hyderabad, India', 'Feb 2022 - May 2022'],
  },
  {
    name: 'Florida State University',
    description:
      'Graduate Teaching Assistant \n Led Programming Secure, Parallel, and Distributed Applications & Unix Tools(Shell Scripting) courses. Assisted students in debugging, testing and data optimization, reinforcing knowledge of distributed computing.',
    stack: ['Tallahassee, FL', 'Jan 2024 - May 2025'],
  }
]

const contact = {
  email: 'polamreddyjanvi2001@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
