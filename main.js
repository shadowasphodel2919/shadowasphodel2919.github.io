import './style.css'
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
          <h1>Need something compact</h1>
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
        }, 100);
      }, 300); // Added a delay of 1000ms before starting the deletion animation
    }
  }, 100);
}

const heads = ['Taha Jamal', 'Web Developer', 'Game Developer', 'Software Developer'];

const finH = `
<div class="finHead">
<p class="name">Taha Jamal</p>
<div class="sub">
<p>Software Developer</p>
</div>
</div>
`;

function animateNext(i) {
  if (i < heads.length) {
    typeText(head, heads[i], () => {
      setTimeout(() => {
        typeText(head, '', () => {
          animateNext(i + 1);
        });
      }, 300); // Added a delay of 1000ms between the end of the typing animation and the start of the deletion animation
    });
  }
  if(i >= heads.length){
    head.innerHTML = finH
    setTimeout(()=>{
      document.querySelector('.finHead').classList.add('active');
    }, 500)
  }
}
animateNext(0);

const projectBanner = document.querySelector('.project-banner')
projects(projectBanner)
const blogBanner = document.querySelector('.blog-banner')
blogs(blogBanner)
const linkBanner = document.querySelector('.link-banner')
links(linkBanner)