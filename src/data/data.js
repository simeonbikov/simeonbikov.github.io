import ImgProj1 from "../assets/images/p1.png";
import ImgTempl1 from "../assets/images/t1.png";
import ImgProj2 from "../assets/images/p2.png";
import ImgProj2_2 from "../assets/images/p2-2.png";
import ImgTempl3 from "../assets/images/t3.png";
import ImgTempl3_2 from "../assets/images/t3-2.png";
import ImgProj3 from "../assets/images/p3.png";
import ImgProj3_2 from "../assets/images/p3-2.png";
import ImgProj4_2 from "../assets/images/p4-2.png";
import ImgProj5 from "../assets/images/p5.png";
import ImgProj6 from "../assets/images/p6.png";
import ImgProj6_2 from "../assets/images/p6-2.png";
import ImgTempl6 from "../assets/images/t6.png";
import ImgTempl6_2 from "../assets/images/t6-2.png";
import ImgProj7 from "../assets/images/p7.png";
import ImgProj8 from "../assets/images/p8.png";
import ImgProj8_2 from "../assets/images/p8-2.png";
import ImgProj9 from "../assets/images/p9.png";
import ImgProj9_2 from "../assets/images/p9-2.png";

export const data = [
  {
    id: 1,
    date: "06/2022",
    technologies: "Design, HTML, CSS",
    type: "CodeYourFuture - homework/coursework",
    name: "The Daily Prophet",
    images: [ImgProj1],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week1",
    // live: "https://cyf-thedailyprophet.netlify.app/",
    templatesImg: [ImgTempl1],
    summary:
      "For one of my first homework assignments I created a webpage featuring three articles, each article includes a title, picture, and summary, using templates as a starting point for the design. Although it's a simple page, I decided to showcase it in my portfolio because of the effort I put into the UI.",
  },
  {
    id: 2,
    date: "07/2022",
    technologies: "Copy Design, HTML, CSS",
    type: "CodeYourFuture - homework/coursework",
    name: "Karma Clone",
    images: [ImgProj3, ImgProj3_2],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week3",
    // live: "https://cyf-simeonbikov-karma.netlify.app/",
    summary:
      "I successfully created my first web page based on a provided sketch.",
  },
  {
    id: 3,
    date: "07/2022",
    technologies: "Design, HTML, CSS",
    type: "CodeYourFuture - homework/coursework",
    name: "Cakes Co",
    images: [ImgProj2, ImgProj2_2],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week3",
    // live: "https://cyf-simeonbikov-cake.netlify.app/",
    templatesImg: [ImgTempl3, ImgTempl3_2],
    summary:
      "Created a responsive website to showcase a cake business, using templates as a starting point for the design. Followed Mobile First principles. Although this page is simple, I decided to include it in my portfolio to demonstrate my progress.",
  },
  {
    id: 4,
    date: "07/2022",
    technologies: "Copy Design, HTML, CSS",
    type: "CodeYourFuture - homework/coursework",
    name: "Juice Bar - wix.com Clone",
    images: [ImgProj4_2],
    github: "https://github.com/simeonbikov/responsive-grid-project.git",
    live: "https://cyf-simeonbikov-juicebar.netlify.app/",
    templatesUrl: "https://www.wix.com/website-template/view/html/2962",
    summary:
      "Created a mobile-first, responsive clone of website. Used CSS Grid and Flexbox for layouts and alignment.",
  },
  {
    id: 5,
    date: "10/2022",
    technologies: "JavaScript, Canvas",
    type: "CodeYourFuture - homework/coursework",
    name: "LettersFall Game",
    images: [ImgProj5],
    github: " https://github.com/simeonbikov/lettersfall-game",
    live: "https://lettersfall-game.netlify.app/",
    summary:
      "Created a memory game as part of my JavaScript coursework. The objective of the game is to collect the correct letters from a randomly generated word as they move across the screen. The game starts by displaying a word that the player needs to remember. As the game progresses, letters move from left to right across the screen, and the player must collect the correct letters before they reach the bottom of the screen. The game ends when the player collects all the letters in the word.",
  },
  {
    id: 6,
    date: "11/2022",
    technologies: "Design, JavaScript, DOM, HTML, CSS",
    type: "CodeYourFuture - homework/coursework",
    isDesktop: true,
    name: "TV Show Project",
    images: [ImgProj6, ImgProj6_2],
    github: "https://github.com/simeonbikov/tv-show-dom-project",
    live: "https://cyf-simeonbikov-tv.netlify.app/",
    templatesImg: [ImgTempl6, ImgTempl6_2],
    summary:
      "Created a web page using a template that fetches information about TV shows and episodes from the TVMaze API. The page features select inputs that allow users to choose between different episodes or shows. Additionally, a real-time search input is implemented that highlights the search result as it is typed. ",
  },
  {
    id: 7,
    date: "01/2023",
    technologies: "Design, React JS, Material UI, Rest API, Node, PostgreSQL",
    type: "CodeYourFuture - homework/coursework",
    name: "Video Recommendation",
    images: [ImgProj7],
    github: "https://github.com/simeonbikov/Full-Stack-Project-Assessment",
    // live: "https://cyf-video-recommendation.netlify.app/",
    summary:
      "Developed a Full Stack web application for viewing recommended videos. The app allows users to post and delete their favourite YouTube videos, upvote or downvote videos and sort videos in ascending or descending order by rating. The app's API was built using Express, and all data is stored in a PostgreSQL database that was created.",
  },
  {
    id: 8,
    date: "03/2023",
    technologies:
      "Agile methodology, React JS, Bootstrap, Rest API/Express, Node, PostgreSQL",
    type: "CodeYourFuture - Team Project",
    name: "Future Hire - Team Project",
    images: [ImgProj8, ImgProj8_2],
    github: "https://github.com/simeonbikov/future-hire",
    // live: "https://cyf-future-hire.onrender.com/",
    summary:
      "Using the Agile methodology, a team consisting of 4 developers, 1 Product Manager, 1 Product Owner, and 1 Tech Lead created an Overview Page for CodeYourFuture graduates who are currently looking for a job. This was a Minimum Viable Product (MVP) project and it lasted 4 weeks, including weekly sprints with the whole team and daily meetings with the team of developers. As a Full Stack Developer, my role involved writing part of both the Back End and the Front End.",
  },
  {
    id: 9,
    date: "04/2023",
    technologies: "React JS, Tailwind CSS",
    name: "Portfolio/Home Page",
    images: [ImgProj9, ImgProj9_2],
    github: "https://github.com/simeonbikov/simeonbikov.github.io",
    // live: "https://simeonbikov.github.io/",
    summary:
      "Developed a personal website to showcase my work during my coding bootcamp training at CodeYourFuture. By structuring my work in one place, so I can share it and demonstrate my progress over time.",
  },
];
