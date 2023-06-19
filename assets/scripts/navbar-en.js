const navbarLocation = document.querySelector("#navbar-location");
navbarLocation.innerHTML = `<div class="container-fluid">
<button class="navbar-toggler toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand mx-auto" href="en-usa.html">
  <img src="./assets/img/LogoNavbar.svg" alt="">
</a>
<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="en-usa.html">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./products.html">PRODUCTS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./history.html">HISTORY</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./process.html">PROCESS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./sustainability.html">SUSTAINABILITY</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./where-to-buy.html">WHERE TO BUY</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./index.html" id="spanish-version-nav">ESPAÑOL</a>
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
<a href="en-usa.html" class="d-flex justify-content-center">
  <img id="footerLogo" src="./assets/img/LogoBatuq.svg" alt="">
</a>
</div>
<div class="col-md-12 col-lg-8">
<div class="row">
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./products.html">PRODUCTS</a>
    <a href="./where-to-buy.html">WHERE TO BUY</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./history.html">HISTORY</a>
    <a href="./process.html">PROCESS</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./sustainability.html">SUSTAINABILITY</a>
  </div>
  <div class="col-md-12 col-lg-3 footer-column">
    <a href="./en-usa.html" id="spanish-version-footer">ESPAÑOL</a>
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