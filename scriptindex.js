function toggleFullScreen() {
    var video = document.getElementById("MICRO_LOGIC_INNOVATIONS");

    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function goToIndex() {
    window.location.href = "index.html";
}

function goToProducts() {
    // Replace with the actual URL for your products page
    window.location.href = "products.html";
}

function goToAboutUs() {
    // Replace with the actual URL for your About Us page
    window.location.href = "aboutus.html";
}

function goToContactUs() {
    // Replace with the actual URL for your Contact Us page
    window.location.href = "contactus.html";
}

function goToCareers() {
    // Replace with the actual URL for your Careers page
    window.location.href = "careers.html";
}
function goToScroll() {
   
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}

window.onload = toggleFullScreen;
