// import './style.css'
import { projects } from './projects.js'
import { blogs } from './blogs.js';
import { links } from './links.js';

document.querySelector('#app').innerHTML = `
      <section class="banner sticky">
        <div class="head">
        </div>
      </section> 
      <div>
      <section class="project-banner banner">
      </section>
      <section class="blog-banner banner">
      </section>
      <section class="resume-banner banner">
        <div class="resume">
          <h1>Need something compact ? </h1>
          <iframe src="resume.pdf" style="width:600px; height:500px;" frameborder="0"></iframe>
        </div>
      </section>
      <section class="link-banner banner">
      </section>
      </div>
`

const head = document.querySelector('.head')
function typeText(element, text, callback) {
  let index = 0;
  let interval = setInterval(() => {
    element.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) {
      clearInterval(interval);
      setTimeout(() => {
        interval = setInterval(() => {
          element.innerHTML = text.substr(0, index);
          index--;
          if (index < 0) {
            clearInterval(interval);
            if (callback) callback();
          }
        }, 50);
      }, 200); // Added a delay of 1000ms before starting the deletion animation
    }
  }, 50);
}

const heads = ['Taha Jamal', 'Web Developer', 'Game Developer', 'Software Developer'];

const finH = `
<div class="finHead">
<div class="left">
<p class="name">Taha Jamal</p>
<div class="sub">
<p>Software Developer</p>
</div>
</div>
<span class="tag-cloud"></span>
</div>
<span class="content"></span>
`;

function animateNext(i) {
  if (i < heads.length) {
    typeText(head, heads[i], () => {
      setTimeout(() => {
        typeText(head, '', () => {
          animateNext(i + 1);
        });
      }, 100); // Added a delay of 1000ms between the end of the typing animation and the start of the deletion animation
    });
  }
  if(i >= heads.length){
    head.innerHTML = finH
    setTimeout(()=>{
      document.querySelector('.finHead').classList.add('active');
      createCloud()
    }, 300)
  }
}
animateNext(0);

const myTags = [
  'JavaScript', 'CSS', 'HTML',
  'Unity 3D', 'C#', 'React',
  'Python', 'Java', 'git',
  'MongoDB', 'Node.js', 'VueJS',
  'GCP', 'MySQL'
];

let tagCloud

function createCloud(){
  tagCloud = TagCloud('.tag-cloud', myTags,{

    // radius in px
    radius: 250,
    
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    
    // interact with cursor move on mouse out
    keep: true
    
    });
}

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.tag-cloud').style.color = random_color;

const projectBanner = document.querySelector('.project-banner')
projects(projectBanner)
const blogBanner = document.querySelector('.blog-banner')
blogs(blogBanner)
const linkBanner = document.querySelector('.link-banner')
links(linkBanner)