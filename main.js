

var app = document.getElementById ('app');

var typewriter = new Typewriter(app, {
loop: true,
delay: 75 
});

typewriter
.pauseFor(2500)
.typeString('La Capital del Sol.')
.pauseFor(400)
.deleteChars(10)
.start(); 



/*======================

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('A powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();

=================================*/
/* ------------------contacto maps----------------------- */
function iniciarMap(){
    var coord = {lat:9.3652397,lng:-70.4376429};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}