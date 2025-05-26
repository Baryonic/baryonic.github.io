console.log("Script Loaded Successfully");
function f1(){
    console.log("Function f1 executed");
}

/*Video-stop detection */
document.addEventListener("DOMContentLoaded", function () {
    const bgVideo = document.querySelector('.bg-video');
    if (bgVideo) {
        // Try to keep the video playing if it stops unexpectedly
        setInterval(() => {
            if (bgVideo.paused || bgVideo.ended) {
                bgVideo.play().catch(() => {});
            }
        }, 2000); // Check every 2 seconds
    }
});