const maincontact = document.getElementById('main');

const formcontact = document.createElement('form');
formcontact.className = 'contactform'
formcontact.innerHTML = `<div class="mb-3 mt-3 w-25 ms-3">
                                <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                            </div>
                            <div class="mb-3 w-25 ms-3">
                                <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                            </div>
                            <div class="mb-3 w-25 ms-3">
                                <input type="email" class="form-control" id="email" placeholder="name@email.com">
                            </div>
                            <select class="form-select form-select-sm w-25 mb-3 ms-3" id="pais" aria-label="pais">
                                <option selected>País</option>
                                <option value="1">Argentina</option>
                                <option value="2">Chile</option>
                                <option value="3">Uruguay</option>
                                <option value="4">Brasil</option>
                                <option value="5">Mexico</option>
                            </select>
                            <div class="mb-3 w-25 ms-3">
                                <textarea class="form-control" id="mensajecontacto" rows="5" placeholder="Dejenos su mensaje..."></textarea>
                            </div>
                            <div class="d-grid gap-2 d-md-block ms-3 mb-3 ms-3">
                                <button class="btn btn-success" type="button">Enviar</button>
                            </div>
                        <iframe class="frame1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.0992022369395!2d-60.32689234137906!3d-33.23128165693679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76c6aa6c67f85%3A0xc84e4570e41024d6!2sAv.%20San%20Mart%C3%ADn%201668%2C%20S2919%20Villa%20Constituci%C3%B3n%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1725576505056!5m2!1ses!2sar" width="600" height="450" style="border: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

maincontact.appendChild(formcontact);