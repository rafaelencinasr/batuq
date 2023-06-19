const navbarLocation = document.querySelector("#navbar-location");
navbarLocation.innerHTML = `<div class="container-fluid">
<button class="navbar-toggler toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand mx-auto" href="index.html">
  <img src="./assets/img/LogoNavbar.svg" alt="">
</a>
<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="./index.html">INICIO</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./productos.html">PRODUCTOS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./historia.html">HISTORIA</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./proceso.html">PROCESO</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./sustentabilidad.html">SUSTENTABILIDAD</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./donde-comprar.html">DÓNDE COMPRAR</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./en-usa.html" id="change-lang-nav">ENGLISH</a>
    </li>
  </ul>
</div>
</div>`;

const footerLocation = document.querySelector("#footer");
footerLocation.innerHTML=`<div class="col-12 d-none d-lg-block">
<div class="row">
  <div class="col-1"></div>
  <div class="col-4 mx-auto d-flex justify-content-center footerAgaveLine">
  </div>
  <div class="col-2 mx-auto d-flex justify-content-center">
    <img id="footerAgave" src="./assets/img/Agave.svg" alt="">
  </div>
  <div class="col-4 mx-auto d-flex justify-content-center footerAgaveLine">
  </div>
  <div class="col-1"></div>
</div>
</div>
<div class="col-md-12 col-lg-2">
<a href="index.html" class="d-flex justify-content-center">
  <img id="footerLogo" src="./assets/img/LogoBatuq.svg" alt="">
</a>
</div>
<div class="col-md-12 col-lg-8">
<div class="row">
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./productos.html">PRODUCTOS</a>
    <a href="./donde-comprar.html">DÓNDE COMPRAR</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./historia.html">HISTORIA</a>
    <a href="./proceso.html">PROCESO</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./sustentabilidad.html">SUSTENTABILIDAD</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./en-usa.html" id="change-lang-footer">ENGLISH</a>
  </div>
</div>
</div>
<div class="col-md-12 col-lg-2 d-flex justify-content-center">
<a href="https://www.facebook.com/BacanoraBatuq" target="_blank"><img src="./assets/img/Facebook.svg" alt=""></a>
<a href="https://www.instagram.com/bacanorabatuq/" target="_blank"><img src="./assets/img/IG.svg" alt=""></a>
</div>
<div id="image-atr">
<a href="https://www.freepik.com/free-vector/social-media-icons-vector-set-with-facebook-instagram-twitter-tiktok-youtube-logos_17221200.htm#" target="_blank">Image by rawpixel.com</a> on Freepik
</div>
`;