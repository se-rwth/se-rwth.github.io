let mapPrivacy = document.getElementById("mapPrivacy");

mapPrivacy.addEventListener("click", mapOverlay);

function mapOverlay(){
    var $this = $(this);
    $this.html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5045.686851555094!2d6.059939!3d50.778476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0998f62a61a93%3A0xfef0866872763b5c!2sInformatik%20der%20RWTH%20Aachen%2C%20Ahornstra%C3%9Fe%2055%2C%2052074%20Aachen!5e0!3m2!1sde!2sde!4v1683904795544!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
};

