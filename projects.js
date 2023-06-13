export function projects(element) {
  element.innerHTML = `
  <div class="projects">
        <div class="project-rows">
        <div class="project-1">
            <a href="https://github.com/shadowasphodel2919/Cryptogrammer">
            <div class="card">
            <h3>Cryptogrammer</h3>
            <p>It is a website containing cipher implementations.</p>
            </div>
            </a>
            <a href="https://techdom.onrender.com/">
            <div class="card">
            <h3>TechDome</h3>
            <p>It is a recommendation system which helps users choose better jobs, internships and courses.</p>
            </div>
            </a>
            <a href="https://github.com/shadowasphodel2919/GameOfBlocks">
            <div class="card">
            <h3>Tetris</h3>
            <p>The classic game of tetris that we all love.</p>
            </div>
            </a>
        </div>
        <div class="project-2">
            <a href="https://github.com/shadowasphodel2919/visualise-sort">
            <div class="card">
                <h3>Sorting Visualizer</h3>
                <p>Created a sorting visualizer using Swing framework.</p>
            </div>
            </a>
            <a href="https://github.com/shadowasphodel2919/ContestMate">
            <div class="card">
                <h3>ContestMate</h3>
                <p>Displays contests from various coding websites</p>
            </div>
            </a>
            <a href="https://github.com/shadowasphodel2919/CodingGuru">
            <div class="card">
                <h3>CodingGuru</h3>
                <p>Mandatory Open AI application created during API hype</p>
            </div>
            </a>
        </div>
        </div>
        <div class="project-title">
        <p>Projects</p>
        </div>
    </div>
  `

  const cards = document.querySelectorAll('.card');

  document.addEventListener("mousemove", (e)=>{
    cards.forEach(card => {
        tiltElements(e,card);        
    });
  });
  function tiltElements(event, element){
    const elementRect = element.getBoundingClientRect();

    // get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // calculate offset from element center to mouse position
    const elementMiddleX = elementRect.left + (elementRect.width / 2);
    const elementMiddleY = elementRect.top + (elementRect.height / 2);
    const distanceX = mouseX - elementMiddleX;
    const distanceY = mouseY - elementMiddleY;

    // calculate rotation based on mouse position relative to element center
    const rotateX = (distanceY / elementRect.height) * 10;
    const rotateY = (distanceX / elementRect.width) * -10;
    element.style.setProperty("--rotateX", rotateX + "deg");
    element.style.setProperty("--rotateY", rotateY + "deg");
  }
//   tiltElements(cards)

//   function rotateElement(event, element){
//     const x = event.clientX;
//     const y = event.clientY;

//     const middleX = element.innerWidth / 2;
//     const middleY = element.innerHeight / 2;

//     const offsetX = ((x-middleX)/middleX)*45;
//     const offsetY = ((x-middleY)/middleY)*45;

//     element.style.setProperty("--rotateX", offsetX+"deg");
//     element.style.setProperty("--rotateY", offsetY+"deg");
//   }
}

