const searchBar = document.querySelector("#search-bar");
const videos = document.querySelectorAll(".wallpapers-div .wallpapers-container")

searchBar.addEventListener("keyup", function() {
    const query = this.value.toLowerCase();
    console.log(query);
    console.log(videos.length);
    videos.forEach(video => {
        const title = video.querySelector("p").textContent.toLowerCase();
        console.log("title: " + title);
        video.style.display = title.includes(query) ? "flex" : "none";
    })
    
})