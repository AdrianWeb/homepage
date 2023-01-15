import dasmoto from '../resources/images/dasmoto.png';
import styleguide from '../resources/images/styleguide.png';
import teacozy from '../resources/images/teacozy.png';
import harmony from '../resources/images/harmony.png';
import splash from '../resources/images/splash.png';
import fotomatic from '../resources/images/fotomatic.png';
import guldan from '../resources/images/guldan.png';
import thenumbersmason from '../resources/images/thenumbersmason.png';

export const projects = [
  {
    id: 1,
    title: "Off-Platform Project: Dasmoto's Arts & Crafts",
    type: 'HTML/CSS',
    description:
      'In this project, you’ll build a simple website for a fictional arts and crafts store using the tools on your own computer. This project will provide you with less guidance than previous projects. You should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.',
    comment: 'This was one of my first projects I made on my',
    gitUrl: 'https://github.com/AdrianWeb/cc-dasmoto-htmlcss',
    liveUrl: 'https://adrianweb.github.io/cc-dasmoto-htmlcss/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-developing-websites-locally/modules/wdcp-22-developing-with-css/projects/dasmoto',
    thumbnail: dasmoto
  },
  {
    id: 2,
    title: 'Challenge Project: Build a Website Design System',
    type: 'HTML/CSS',
    description:
      'In this project, you’ll be building your own basic design system for a website. In essence, you’ll be building a website to help you build MORE websites in the future! On your site, you’ll collect all the colors, fonts, and some of the repeating styles.',
    gitUrl: 'https://github.com/AdrianWeb/cc-styleguide-css/tree/main',
    liveUrl: 'https://adrianweb.github.io/cc-styleguide-css/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-improved-styling-with-css/modules/wdcp-22-build-a-website-design-system/projects/independent-project-web-design-system',
    thumbnail: styleguide
  },
  {
    id: 3,
    title: 'Off-Platform Project: Tea Cozy',
    type: 'Flexbox',
    description:
      'In this project, you will create a fictional tea shop website on your own computer. We will provide a design spec and image assets to help you along the way. A design spec is an image of a web page outlined with all of its CSS properties and values. These are usually created by a designer as a source of instructions for a web developer. This project assumes that you will be able to reproduce the basic HTML and CSS with little guidance.',
    gitUrl: 'https://github.com/AdrianWeb/cc-teacozy-flexbox',
    liveUrl: 'https://adrianweb.github.io/cc-teacozy-flexbox/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-making-a-website-responsive/modules/wdcp-22-layout-with-flexbox/projects/tea-cozy',
    thumbnail: teacozy
  },
  {
    id: 4,
    title: 'Challenge Project: Company Home Page with Flexbox',
    type: 'Flexbox',
    description:
      'In this project, you’ll be using flexbox to design and build the layout for a company’s homepage. You can choose to build a new homepage for an existing company or imagine your own dream company!​',
    gitUrl: 'https://github.com/AdrianWeb/harmony-flexbox/tree/main',
    liveUrl: 'https://adrianweb.github.io/harmony-flexbox/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-making-a-website-responsive/modules/wdcp-22-company-home-page/projects/company-page-with-flexbox',
    thumbnail: harmony
  },
  {
    id: 5,
    title: 'Challenge Project: Responsive Club Website',
    type: 'Responsive Design',
    description:
      'In this project, you’ll be building your own club group page that will dynamically respond as you adjust the size of your screen!​',
    gitUrl: 'https://github.com/AdrianWeb/cc-responsiveclubwebsite/tree/main',
    liveUrl: 'https://adrianweb.github.io/cc-responsiveclubwebsite/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-making-a-website-responsive/modules/wdcp-22-responsive-club-website/projects/responsive-club-website',
    thumbnail: splash
  },
  {
    id: 6,
    title: 'Off-Platform Project: Fotomatic',
    type: 'CSS Debugging',
    description:
      'In this project you will fix a broken version of a responsive website called Fotomatic. You will be provided specs to help guide you in making adjustments to the broken code.',
    gitUrl: 'https://github.com/AdrianWeb/cc-fotomatic-css/tree/main',
    liveUrl: 'https://adrianweb.github.io/cc-fotomatic-css/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-making-a-website-responsive/modules/wdcp-22-learn-css-documentation-and-debugging/informationals/f1-2-c1p1-fotomatic',
    thumbnail: fotomatic
  },
  {
    id: 7,
    title: 'Portfolio Website',
    type: 'HTML/CSS',
    description:
      "For this project, you will build a personal portfolio site, a static website where you can share the projects that you build in this Path. Typically, a portfolio website will have a main page that features different projects that you’ve built and another page that contains contact information, in case someone wants to reach out to you. Occasionally, there are additional pages for each project, detailing the technology used. - I guess I didn't read the instructions. LOL",
    gitUrl: 'https://github.com/AdrianWeb/cc-portfolio/tree/main',
    liveUrl: 'https://adrianweb.github.io/cc-portfolio/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-portfolio-project-personal-portfolio-website/modules/wdcp-22-personal-portfolio-project/kanban_projects/portfolio-website',
    thumbnail: guldan
  },
  {
    id: 8,
    title: 'Challenge Project: Number Guesser',
    type: 'JavaScript',
    description:
      'In this project, you’ll write JavaScript functions to power a small guessing game. Your code will run in the browser instead of the terminal, and you can use your browser’s console to help you test your functions and view any syntax errors.',
    gitUrl: 'https://github.com/AdrianWeb/cc-numberguesser-js',
    liveUrl: 'https://adrianweb.github.io/cc-numberguesser-js/',
    ccUrl:
      'https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-javascript-syntax-part-i/modules/wdcp-22-number-guesser/projects/number-guesser-independent-practice',
    thumbnail: thenumbersmason
  }
];
