import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  //CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import EmailIcon from '../components/Icon/QuoteIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Giulio Gentile',
  description: "Built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Giulio Gentile`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              <strong className="text-stone-100">Gameplay Programmer</strong>, with 1+ years contributing 
              <strong className="text-stone-100"> AAA titles</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              Specializing in <strong className="text-stone-100">Gameplay Systems</strong>, 
              <strong className="text-stone-100"> Player Interaction mechanics</strong> and <strong className="text-stone-100">Quality Assurance</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I like to create  <strong className="text-stone-100"> Mods or Tools</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1IskQiUj7Ji0DX7HXr4ZfGtxIk_jfCndX/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Passionate about creating and optimizing gameplay experiences and debugging. Currently exploring opportunities in indie, AA, and AAA studios as a Junior Game Programmer, aiming to contribute to gameplay systems and technical development. Always excited to talk about how to optimize games, new mechanics, or find bugs over lunch or coffee breaks.`,
  aboutItems: [
    //{label: 'jj', text: '23', Icon: CalendarIcon},
    {label: 'Location', text: 'Benevento', Icon: MapIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'VideoGames, Electronics, Preservation', Icon: SparklesIcon},
    {label: 'Accademy', text: 'AIV - Game Developer', Icon: AcademicCapIcon},
    {label: 'Graduate', text: 'IT Technology', Icon: AcademicCapIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
      name: 'Languages',
    skills: [
      {
        name: 'C++',
        level: 10,
      },
      {
        name: 'C#',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
        },
        {
            name: 'GLSL',
            level: 10,
        },
        {
            name: 'Lua',
            level: 10,
        },
        {
          name: 'Blueprint Visual Scripting',
          level: 10,
      },
    ],
  },
  {
      name: 'Game Engine',
    skills: [
      {
        name: 'Unreal Engine 5',
        level: 10,
      },
      {
        name: 'Unreal Engine 4',
        level: 10,
        },
        {
            name: 'Unity',
            level: 10,
        },
        {
            name: 'Godot',
            level: 10,
        },
    ],
    },
    {
        name: 'Tools',
        skills: [
            {
                name: 'Git',
                level: 10,
            },
            {
                name: 'Visual Studio',
                level: 10,
            },
            {
                name: 'Perforce',
                level: 10,
            },
            {
              name: 'Rider',
              level: 10,
            },
            {
                name: 'Wwise',
                level: 10,
            },
            {
                name: 'FMOD',
                level: 10,
            },
            {
                name: 'Ghidra',
                level: 10,
            },
        ],
    },
    {
        name: 'Platforms',
        skills: [
            {
                name: 'PC',
                level: 10,
            },
        ],
    },
    {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Italian',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
   {
    title: 'FBC: Firebreak Remedy',
        description: 'Quality Assurance, testing the game and reporting bugs.',
        url: 'https://store.steampowered.com/app/2272540/FBC_Firebreak/',
    image: porfolioImage10,
  },
    {
    title: 'Silent Hill 3 - Decompilation',
    description: 'Contributor to the Silent Hill 3 Decompilation project.',
    url: 'https://github.com/dreamingmoths/memory-of-alessa',
    image: porfolioImage11,
  },
     {
      title: 'XMB PS3 To PC',
      description: 'C++ and DirectX 11 recreation of the PS3 interface for PC.',
      url: 'https://thefoxy1978.github.io/XMB/',
    image: porfolioImage12,
    },
    {
      title: 'MediEvil Decompilation',
      description: 'Contributor to the MediEvil Decompilation project.',
      url: 'https://github.com/MediEvilDecompilation/medievil-decomp',
    image: porfolioImage4,
    },
    {
      title: 'Corpse Party Localization',
      description: 'Custom Python tools for game translation and asset injection.',
      url: 'https://thefoxy1978.github.io/patch-ita-update/',
      image: porfolioImage9,
    },
  {
    title: 'Alive',
      description: 'Modular C++ engine architecture and rendering systems.',
      url: 'https://github.com/Thefoxy1978/EngineGame',
    image: porfolioImage2,
  },
  {
    title: 'Super Orange',
      description: 'Android game development focusing on player controller and gameplay interactions.',
      url: 'https://github.com/Thefoxy1978/Super-Orange',
    image: porfolioImage3,
  },
    {
        title: 'Operation Force',
        description: '3D game,developed on UE5 with another programmer in just 2 weeks.',
        url: 'https://youtu.be/PH-Xci30Ci0',
        image: porfolioImage6,
    },
    {
      title: 'Nexum ',
      description: '3D game,developed on Unity with another 2 programmer in just 3 weeks.',
      url: 'https://github.com/Thefoxy1978/Nexum-CODE',
      image: porfolioImage7,
  },
  {
    title: 'TagPlay',
    description: 'NPC behavior and gameplay logic development in Unreal Engine 5 using c++.',
    url: 'https://github.com/Thefoxy1978/TagGameCode',
    image: porfolioImage8,
},
   {
    title: 'Shy Miner',
        description: '2D platform game, developed with 2 other people.',
        url: 'https://github.com/Thefoxy1978/Shy-Miner',
    image: porfolioImage1,
  },
      {
        title: 'Emily IA',
        description: 'Project used to test OpenAI Unity Package.',
        url: 'https://thefoxy1978.itch.io/emily-ia',
        image: porfolioImage5,
    },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Graduated July 2021',
    title: 'IT & Telecommunications Studies',
    location: 'Istituto di Istruzione Superiore "S. Rampone" | Benevento, BN',
        content: <p>
            Relevant Coursework: Object Oriented Programming, Operating Systems, Data Structures and Algorithms.</p>,
  },
  {
    date: 'Graduated August 2024',
    title: 'Game Programming & Software Development',
    location: 'AIV Academy Italian Videogame | Milan, MI',
      content: <p>Relevant Coursework: Object Oriented Programming, Graphics Programming, Game Engine Architecture.</p>,
  },
];

export const experience: TimelineItem[] = [
    {
    date: 'March 2025 - April 2025',
    location: 'Remedy Entertainment',
    title: 'PlayTest - FBC: Firebreak',
    content: (
        <p>
            Executed gameplay testing across multiple builds,
            Performer functional and regression testing on game features,
            Identified and reported bugs during gameplay sessions,
            Re-tested fixes to ensure Issues were resolved correctly.
        </p>
        
    ),
},
  {
    date: 'July 2021 - Present',
    location: 'Progaming Italia',
    title: 'ESL Referee Admin Volunteer',
    content: (
      <p>
           Management of international/national online/offline tournaments.
      </p>
    ),
  },
    {
        date: 'March 2019 - April 2019',
        location: 'Tree Hamester House',
        title: 'Game Developer, Tester',
        content: (
            <p>
                Indie Team, the only title published was "shy miner".
            </p>
        ),
    },
];



/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Thefoxy1978'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/giulio-gentile-a37152215/'},
    {label: 'Email', Icon: EmailIcon, href: 'mailto:thefoxy19780@gmail.com'},
];
