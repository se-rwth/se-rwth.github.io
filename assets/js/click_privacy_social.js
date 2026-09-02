let overlayPrivacySocials = document.getElementById("social-pages");

overlayPrivacySocials.addEventListener("click", closeOverlaySocials);

function closeOverlaySocials(){
    var $this = $(this);
    $this.html('<div class="container"><div class="row"><div class="col-lg-4" style="display: inherit; margin: 0 auto 14px auto;"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSoftwareEngineering.RWTH%2F&tabs=timeline&width=293&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="293" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div><div class="col-lg-4" style="margin: 0 auto 14px auto;"><a class="twitter-timeline" data-height="400" href="https://twitter.com/SE_RWTH?ref_src=twsrc%5Etfw">Tweets by SE_RWTH</a> <script async src="/assets/js/widgets.js" charset="utf-8"></script></div></div></div>');
    // heightVideo.style.height = "350px";
};

