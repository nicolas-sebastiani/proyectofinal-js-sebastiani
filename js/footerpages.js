const currentYear = new Date().getFullYear();

const footy = document.getElementById('footy');
footy.className = 'container-fluid p-0';
const divlinks = document.createElement('div');
divlinks.id = 'divlinks';
divlinks.className = 'd-flex flex-row-reverse bd-highlight gap-4 align-items-center bgcolordark divheight'

footy.appendChild(divlinks);

const divfcb = document.createElement('div');
divfcb.innerHTML = `<a class="animation me-4" href="https://www.facebook.com"><img class="img-fluid" src="../assets/facebook.png" alt="facebook"></a>`;
divlinks.appendChild(divfcb)

const divinst = document.createElement('div');
divinst.innerHTML = `<a class="animation" href="https://www.instagram.com"><img class="img-fluid" src="../assets/Instagram.png" alt="instragram"></a>`;
divlinks.appendChild(divinst);

const divtik = document.createElement('div');
divtik.innerHTML = `<a class="animation" href="https://www.tiktok.com"><img class="img-fluid" src="../assets/TikTok.png" alt="tiktok"></a>`;
divlinks.appendChild(divtik);

const divyt = document.createElement('div');
divyt.innerHTML = `<a class="animation" href="https://www.youtube.com"><img class="img-fluid" src="../assets/YouTubeLogo.png" alt="youtube"></a>`;
divlinks.appendChild(divyt);

const divx = document.createElement('div');
divx.innerHTML = `<a class="animation" href="https://x.com"><img class="img-fluid" src="../assets/TwitterX.png" alt="twiterre"></a>`;
divlinks.appendChild(divx);

const navlinks = document.createElement('nav');
navlinks.className = 'navbar navbar-light bgcolordark p-0';
footy.appendChild(navlinks);

const divcontainer = document.createElement('div');
divcontainer.className = 'container-fluid bgcolorlight';
divcontainer.innerHTML = `<div class="fs-5 colorstd display320">
                            <a class="d-inline fontcolorfoot" href="https://www.google.com/maps/place/Av.+San+Martín+1668,+S2919+Villa+Constitución,+Santa+Fe/@-33.231144,-60.3293579,17z/data=!4m5!3m4!1s0x95b76c6aa6c67f85:0xc84e4570e41024d6!8m2!3d-33.2311485!4d-60.3267776?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                <i class="bi bi-geo-alt-fill"></i>
                            </a>
                            <span class="fontcolorfoot">San Martin 1668, Villa Constitucion, Argentina.</span>
                            <br>
                            <a class="d-inline fontcolorfoot" href="https://web.whatsapp.com" target="_blank">
                                <i class="bi bi-whatsapp iconcolor"></i>
                            </a>
                            <span class="fontcolorfoot">+54 3400 356-548</span>
                            <br>
                            <p class="fontcolorfoot">© ${currentYear} Green Hoop Company.</p>
                            </div>
                            <a class="navbar-brand nohover" href="#"><img class="img-fluid nohover" src="../assets/greenhoop.jpg" alt="logo"></a>`;
navlinks.appendChild(divcontainer);