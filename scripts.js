function scrollToProjects() {
  document.getElementById("portfo").scrollIntoView({ behavior: "smooth" });
}

function scrollToStart(){
  document.querySelector("#start").scrollIntoView({behavior:"smooth"});
}
function scrollToContact() {
  document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    form.reset()});


const logo = new rive.Rive({
    src: 'logo.riv',
    canvas: document.querySelector('canvas'),
    autoplay: true,
    animations: "circle",
      onLoad:()=>{
            logo.resizeDrawingSurfaceToCanvas();
    }

})
