let overlayPrivacy = document.getElementById("ytvideo");
let heightVideo = document.getElementById("youtube-video");

overlayPrivacy.addEventListener("click", closeOverlay);

function closeOverlay(){
    var $this = $(this);
    $this.html('<iframe src="' + $this.data("video") + '" width="560" height="315" allow="autoplay"></iframe>');
};

