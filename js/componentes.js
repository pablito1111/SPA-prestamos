const componente1 = {
    // Nosotros
    template: /*HTML*/
    `<main>
    <div class="row">
        <div class="col-4 col-s-4 menu">
            <br><br><br>
            <img src="./imagenes/logo2.png" >
        </div>
        <div class="col-8 col-s-12">
            <div class="texto">
                <br><br><br><br>
                <h3>Conocenos</h3>
                <p>Ponemos a tu alcance la posibilidad de obtener un préstamo en tu cuenta de manera online en
                    simples
                    pasos.
                    <br>
                    Nuestro interes es ayudarte a llegar a a tus metas de manera rápida y sin tramites.
                    <br>
                    No dudes, en PrestaMito...siempre GANAS!
                </p>
                <br>
                <h3>¿Que es un préstamo? Mirá este video...</h3>
                <iframe width="95%" height="500" src="https://www.youtube.com/embed/9LHWdTZjlmw"
                    title="¿QUÉ es un PRÉSTAMO?" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                    <br><br><br><br>
            </div>
        </div>
    </div>
</main>
    `
}
const componente2 = {
    // REQUISITOS
    template: /*HTML*/
    `<main>
    <div class="row">
        <div class="col-3 col-s-4 menu">
            <br><br><br><br>
            <img src="./imagenes/logo2.png">
        </div>
        <div class="col-9 col-s-12">
            <div class="col-requisitos">
            <br><br><br>    
            <h4>Requisitos</h4>
                <h5>Para sacar un Préstamo con nosotros tenés que tener más de 18 años y ser:</h5>
                <ul>
                    <li>Empleado en Relación de Dependencia</li>
                    <li>Empleado Público Nacional</li>
                    <li>Fuerzas Armadas y de Seguridad Nacional</li>
                    <li>Jubilado ANSES</li>
                    <li>Pensionado ANSES</li>
                    <li>Beneficio 40 ANSES</li>
                    <li>Empleado Público Provincial (Santa Fe, Entre Ríos, Neuquén, Mendoza)</li>
                    <li>Fuerza de Seguridad Provincial (Santa Fe, Entre Ríos, Neuquén, Mendoza)</li>
                    <li>Jubilado Provincial (Santa Fe, Entre Ríos, Neuquén, Mendoza)</li>
                </ul>
                <h5>... y cobrar por los siguientes bancos:</h5>
                <ul>
                    <li>Banco de la Nación Argentina</li>
                    <li>Banco de la Provincia de Santa Fe</li>
                    <li>Banco de la Provincia de Entre Ríos</li>
                    <li>Banco de la Provincia de Neuquén</li>
                    <li>Banco Santander</li>
                    <li>Banco Itaú</li>
                    <li>Banco Patagonia</li>
                </ul>
            </div>
        </div>
    </div>
</main>
    `
}
const componente3 = {
    // SOLICITUD
    template: /*HTML*/
    `<main>
    <div class="row">
        <div class="col-3 col-s-4 menu">
            <br><br><br>
            <img src="./imagenes/logo2.png">
        </div>
        <div class="col-9 col-s-12">
            <div class="containerFormulario">
                <br><br><br><br>
                <h3>Formulario de solicitud:</h3>
                    <label for="nombre" class="form-label">Nombre/s</label>
                    <input type="text" class="form-control" name="nombre" id="nombre" aria-describedby="helpId"
                        placeholder="Ingrese su Nombre">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" name="apellido" id="apellido" aria-describedby="helpId"
                        placeholder="Ingrese su Apellido">
                    <label for="fechan" class="form-label">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" name="fechan" id="fechan" aria-describedby="helpId"
                        placeholder="">
                    <label for="documento" class="form-label">Documento</label>
                    <input type="number" class="form-control" name="documento" id="documento"
                        aria-describedby="helpId" placeholder="DNI/LC/LE Solo Números">
                    <label for="ingresos" class="form-label">Ingresos</label>
                    <input type="number" class="form-control" name="ingresos" id="ingresos"
                        aria-describedby="helpId" placeholder="Sueldo Neto del Último Mes">

                    <label for="" class="form-label">Provincia</label>
                    <select class="form-select form-select-lg" name="" id="provincia">
                        <option selected>Selecciona una</option>
                        <option value="1">CABA</option>
                        <option value="2">Buenos Aires</option>
                        <option value="3">Catamarca</option>
                        <option value="4">Chaco</option>
                        <option value="5">Chubut</option>
                        <option value="6">Córdoba</option>
                        <option value="7">Corrientes</option>
                        <option value="8">Entre Ríos</option>
                        <option value="9">Formosa</option>
                        <option value="10">Jujuy</option>
                        <option value="11">La Pampa</option>
                        <option value="12">La Rioja</option>
                        <option value="13">Mendoza</option>
                        <option value="14">Misiones</option>
                        <option value="15">Neuquén</option>
                        <option value="16">Río Negro</option>
                        <option value="17">Salta</option>
                        <option value="18">San Juan</option>
                        <option value="19">San Luis</option>
                        <option value="20">Santa Cruz</option>
                        <option value="21">Santa Fe</option>
                        <option value="22">Santiago del Estero</option>
                        <option value="23">Tierra del Fuego</option>
                        <option value="24">Tucuman</option>
                    </select>

                    <label for="" class="form-label">Email</label>
                    <input type="email" class="form-control" name="" id="email" aria-describedby="emailHelpId"
                        placeholder="abc@mail.com">
                    <label for="" class="form-label">Ingrese nuevamente su email</label>
                    <input type="email" class="form-control" name="" id="email2" aria-describedby="emailHelpId"
                        placeholder="abc@mail.com">
                    <br>

                    <label for="recibosueldo" class="form-label">Envianos tu último recibo de sueldo</label>
                    <input type="file" class="form-control" name="recibosueldo" id="recibossueldo" placeholder=""
                        aria-describedby="fileHelpId">
                    <br>
                
                    <input type="submit" value="Enviar" onclick="validar()" id="enviar">
                    <input type="reset" value="Borrar" onclick="limpiar()" id="borrar">
                    <br><br>
            </div>
            <div id="PlaInt"></div>
            <br><br>
        </div>
    </div>
</main>
    `
}
const componente4 = {
    // SUCURSALES
    template: /*HTML*/
    `<main>
        <div class="row">
            <div class="col-4 col-s-4 menu">
                <br><br><br>
                <img src="./imagenes/logo2.png">
            </div>
            <div class="col-8 col-s-12">
                <div class="texto">
                    <br><br><br>
                    <h3>Nuestras sucursales</h3>
                </div>
                <div class="sucursales">
                    <div>
                        <h6>Av Córdoba 1333 - Ciudad de Buenos Aires</h6>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.202979356005!2d-58.38813678480693!3d-34.599028464757104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac779a83d6b%3A0x44d45ebc00521936!2sAv.%20C%C3%B3rdoba%201333%2C%20C1055AAD%20CABA!5e0!3m2!1ses!2sar!4v1663019056308!5m2!1ses!2sar"
                            width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <h6>San Luis 2788 - Santa Fe</h6>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.6201762766814!2d-60.704533584896865!3d-31.644248414476813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9bcc8fa48f1%3A0x50e376075ce44ce5!2sSan%20Luis%202788%2C%20S3000%20GBE%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1665748105727!5m2!1ses!2sar"
                            width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <h6>San Martin 2666 - Neuquen</h6>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.643368085604!2d-68.0983098846635!3d-38.95497500797026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33081833d0db%3A0x49323f697b59b539!2sSan%20Mart%C3%ADn%202666%2C%20Q8300NPK%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1665748500030!5m2!1ses!2sar"
                            width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <h6>Obispo Oro 155 - Cordoba</h6>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6113466609654!2d-64.1877753849033!3d-31.42483250380489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28fa3ba09af%3A0x1229f8b8e178efbc!2sObispo%20Oro%20155%2C%20X5000BFC%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1665748745705!5m2!1ses!2sar"
                            width="100%" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                 </div>
                <br><br>
            </div>
        </div>
    </main>
    `
}
const componente5 = {
    // EXPERIENCIAS
    template: /*HTML*/`
    <main>
        <div class="row">
            <div class="col-4 col-s-4 menu">
            <br><br><br>
                <img src="./imagenes/logo2.png">
            </div>
            <div class="col-8 col-s-12">
                <div id="tarjetas"></div>
            </div>
        </div>
        
    </main>
    `
}
const componente9 = {
    // Footer
    template: /*HTML*/`<div class="footer">
    <a target="_blank" href="https://facebook.com">
        <img class='zoomIt' src="./imagenes/facebook.png" alt="Facebook">
    </a>
    <a target="_blank" href="https://www.instagram.com">
        <img class='zoomIt' src="./imagenes/instagram.png" alt="Instagram">
    </a>
    <a target="-blank" href="https://twitter.com/">
        <img class='zoomIt' src="./imagenes/gorjeo.png" alt="Twitter">
    </a>
    <a target="-blank" href="https://api.whatsapp.com/send?phone=0123456789">
        <img class='zoomIt' src="./imagenes/whatsapp.png" alt="WhatsApp">
    </a>
    <p>&copy Copyright 2022 by Pablo Chini</p>
    </div>
    `
}