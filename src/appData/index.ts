// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
  ReactNativeIcon,
  DjangoIcon,
  FlaskIcon,
  DockerIcon,
  FastApiIcon,
  DjangoRestFrameworkIcon,
  PostgreSQLIcon,
  MongoDBIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Project Alpha',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
    visitors: '8K Visitors',
    earned: '$400 Earned',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
    {
      icon: JavaScriptIcon,
      title: 'JavaScript',
      shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
    },
    {
      icon: TypescriptIcon,
      title: 'TypeScript',
      shortDescription: 'Writing robust, type-safe, and maintainable code with TypeScript.',
    },
    {
      icon: ReactNativeIcon,
      title: 'React / React Native',
      shortDescription: 'Building responsive web interfaces with React and mobile apps with React Native.',
    },
    {
      icon: NextjsIcon,
      title: 'Next.js',
      shortDescription: 'Building modern, high-performance web applications with Next.js for both client and server-side rendering.',
    },
    {
      icon: PythonIcon,
      title: 'Python',
      shortDescription: 'Writing clean, efficient Python code for web and AI applications.',
    },
    {
      icon: DjangoIcon,
      title: 'Django',
      shortDescription: 'Creating scalable and secure web applications using Django.',
    },
    {
      icon: DjangoRestFrameworkIcon,
      title: 'Django REST Framework',
      shortDescription: 'Building robust REST APIs for web and mobile applications.',
    },
    {
      icon: FlaskIcon,
      title: 'Flask',
      shortDescription: 'Developing lightweight and fast web applications using Flask.',
    },
    {
      icon: FastApiIcon,
      title: 'FastAPI',
      shortDescription: 'Designing high-performance APIs with FastAPI for modern applications.',
    },
    {
      icon: DockerIcon,
      title: 'Docker & Containerization',
      shortDescription: 'Streamlining development and deployment using Docker containers.',
    },
    {
      icon: PostgreSQLIcon,
      title: 'PostgreSQL',
      shortDescription: 'Building robust, scalable, and secure relational databases with PostgreSQL.',
    },
    {
      icon: MongoDBIcon,
      title: 'MongoDB',
      shortDescription: 'Designing flexible, high-performance NoSQL databases with MongoDB for modern applications.',
    },
    
  ];
  

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React / ReactNative',
    icon: ReactNativeIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'Django / Django REST framework',
    icon: DjangoIcon,
  },
  {
    name: 'Flask',
    icon: FlaskIcon,
  },
  {
    name: 'FastAPI',
    icon: FastApiIcon,
  },
  {
    name: 'Docker',
    icon: DockerIcon,
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQLIcon,
  },
  {
    name: 'MongoDB',
    icon: MongoDBIcon,
  },

]

const iconMap: Record<string, typeof ReactIcon> = {
  "JavaScript": JavaScriptIcon,
  "TypeScript": TypescriptIcon,
  "React / ReactNative": ReactNativeIcon,
  "React": ReactIcon,
  "Next.js": NextjsIcon,
  "MongoDB": MongoDBIcon,
  "PostgreSQL": PostgreSQLIcon,
  "NodeJS": NodejsIcon,
  "Express.js": ExpressjsIcon,
  "Nest.js": NestjsIcon,
  "Socket.io": SocketIcon,
  "Tailwind CSS": TailwindCSS,
  "Python": PythonIcon,
  "Django": DjangoIcon,
  "DjangoRESTframework": DjangoRestFrameworkIcon,
  "Flask": FlaskIcon,
  "FastAPI": FastApiIcon,
}

export function getSkillIconByName(name: string): string {
  return iconMap[name] || ReactIcon;
}

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  // { title: 'Testimonials', href: '#testimonials' },
  // { title: 'Blogs',
  //  href: '#blogs',
  // },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['En', 'Fr', 'Hu']
