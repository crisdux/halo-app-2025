const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (event) => {
    event.preventDefault();
    moreMenu.classList.toggle("show")
});


const videos = [
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "rFh2i4AlPD4",
    },
    {
        id: "18-_9E0HNY4",
    },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (event) => {
    let changed = current;
    current = current + 1 < videos.length ? current +1: current;
    if(current !== changed){
        renderCurrentVideo(videos[current].id);
    }
       

});

bPrev.addEventListener("click", (event) => {
    let changed = current;
    current = current - 1 >= 0 ? current - 1 :current;
    if(current !== changed)
        renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current.id]);
renderVideos();

function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="80%" height="480" src="https://www.youtube.com/embed/${id}" title="Halo : Reach | Remember Reach trailer - long version XBox 360" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
}


function renderVideos(){
    const html = videos.map(video => {
        return `
            <div class="item">
                <a href="#">
                    <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" />;
                </a>
            </div>`
    })

    videosContainer.innerHTML = html.join("")
}





