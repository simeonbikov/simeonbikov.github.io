import ImgPic1 from "../assets/images/p1.png";
import ImgPic2 from "../assets/images/p2.png";
import ImgPic2_2 from "../assets/images/p2-2.png";
import ImgTempl3 from "../assets/images/t3.png";
import ImgTempl3_2 from "../assets/images/t3-2.png";
import ImgPic3 from "../assets/images/p3.png";
import ImgPic3_2 from "../assets/images/p3-2.png";
import ImgPic4_2 from "../assets/images/p4-2.png";
import ImgPic5 from "../assets/images/p5.png";
import ImgPic6 from "../assets/images/p6.png";
import ImgPic6_2 from "../assets/images/p6-2.png";
import ImgTempl6 from "../assets/images/t6.png";
import ImgTempl6_2 from "../assets/images/t6-2.png";
import ImgPic7 from "../assets/images/p7.png";

export const data = [
  {
    id: 1,
    date: "06/2022",
    technologies: "Design, HTML, CSS",
    type: "CodeYourFuture homework/coursework",
    name: "The Daily Prophet",
    images: [ImgPic1],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week1",
    live: "https://cyf-thedailyprophet.netlify.app/",
    summary:
      "Created a webpage with three articles, each including a title, picture and summary.",
  },
  {
    id: 2,
    date: "07/2022",
    technologies: "Design, HTML, CSS",
    type: "CodeYourFuture homework/coursework",
    name: "Cakes Co",
    images: [ImgPic2, ImgPic2_2],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week3",
    live: "https://cyf-simeonbikov-cake.netlify.app/",
    templatesImg: [ImgTempl3, ImgTempl3_2],
    summary:
      "Created responsive webpage showcasing cake business from a templates. Followed Mobile First principles.",
  },
  {
    id: 3,
    date: "07/2022",
    technologies: "Copy Design, HTML, CSS",
    type: "CodeYourFuture homework/coursework",
    name: "Karma Clone",
    images: [ImgPic3, ImgPic3_2],
    github: "https://github.com/simeonbikov/HTML-CSS-Coursework-Week3",
    live: "https://cyf-simeonbikov-karma.netlify.app/",
    summary: "Created the page from a sketch.",
  },
  {
    id: 4,
    date: "07/2022",
    technologies: "Copy Design, HTML, CSS",
    type: "CodeYourFuture homework/coursework",
    name: "Juice Bar - wix.com Clone",
    images: [ImgPic4_2],
    github: "https://github.com/simeonbikov/responsive-grid-project.git",
    live: "https://cyf-simeonbikov-juicebar.netlify.app/",
    templatesUrl: "https://www.wix.com/website-template/view/html/2962",
    summary:
      "Created a mobile-first, responsive website. Used CSS Grid and Flexbox for layouts and alignment.",
  },
  {
    id: 5,
    date: "10/2022",
    technologies: "JavaScript, Canvas",
    type: "CodeYourFuture homework/coursework",
    name: "Lettersfall Game",
    images: [ImgPic5],
    github: " https://github.com/simeonbikov/lettersfall-game",
    live: "https://lettersfall-game.netlify.app/",
    summary:
      "This game is my coursework in JavaScript. The rules of the game are simple. When you start the game a random word appears that you need to remember, then random letters move from top to bottom of the playing field and you need to collect the correct letters from the word.",
  },
  {
    id: 6,
    date: "11/2022",
    technologies: "Design, JavaScript, DOM, HTML, CSS",
    type: "CodeYourFuture homework/coursework",
    name: "TV Show Project",
    images: [ImgPic6, ImgPic6_2],
    github: "https://github.com/simeonbikov/tv-show-dom-project",
    live: "https://cyf-simeonbikov-tv.netlify.app/",
    templatesImg: [ImgTempl6, ImgTempl6_2],
    summary:
      "Created web page from a templates.  Page loads shows and episodes from TVMaze API using fetch. Added a select inputs to choose episode or show. Implemented 'Live' search input with highlighting the search result.",
  },
  {
    id: 7,
    date: "01/2023",
    technologies: "Design, React JS, Rest API, Node, PostgreSQL, Material UI",
    type: "CodeYourFuture homework/coursework",
    name: "Video Recommendation",
    images: [ImgPic7],
    github: "https://github.com/simeonbikov/Full-Stack-Project-Assessment",
    live: "https://cyf-video-recommendation.netlify.app/",
    summary:
      "Created a Full Stack app for viewing a list of recommended videos. Implemented the ability to post and delete your youtube videos, “vote up” and “vote down” for the video, sort videos in ascending and descending order by rating. API built on Express., all data stored in the created database in PostgreSQL.",
  },
];
