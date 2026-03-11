/* --- CREACIÓN DE PÉTALOS --- */
function crearPetalo() {
    // Si el usuario no está viendo la pestaña, no creamos pétalos
    if (document.hidden) return;

    // Crear un nuevo div para el pétalo
    const p = document.createElement('div');
    p.classList.add('petalo');

    // Tamaño aleatorio para dar variedad (entre 10px y 16px de ancho)
    const size = Math.random() * 6 + 10;
    p.style.width = size + 'px'; 
    p.style.height = (size * 1.4) + 'px';

    // Posición inicial aleatoria (nacen en la parte superior)
    let left = Math.random() * (window.innerWidth * 3 - 100);
    let top = -30;
    let angulo = 0;

    // Aplicar la posición inicial
    p.style.left = left + 'px';
    p.style.top = top + 'px';

    // Añadir el pétalo al cuerpo del documento
    document.body.appendChild(p);

    // Función para animar la caída del pétalo
    function caer() {
        top += 1.5;         // Velocidad de bajada
        left -= 1.2;        // Empuje del viento hacia la izquierda
        angulo += 0.05;     // Balanceo

        // Actualizar la posición del pétalo
        p.style.top = top + 'px';
        // Combinar la posición diagonal con el balanceo del seno
        p.style.left = (left + Math.sin(angulo) * 20) + 'px';

        // Rotación elegante mientras cae
        p.style.transform = `rotate(${top * 0.5}deg)`;
        
        // Si el pétalo se sale de la pantalla, se borra
        if (top < window.innerHeight + 50 && left > -100) {
            requestAnimationFrame(caer);
        } else {
            p.remove();
        }
    }
    // Iniciar la animación de caída
    caer();
}

/* --- ANIMACIÓN DE ESTRELLAS EN EL FONDO --- */
const canvas = document.getElementById('bg-canvas');
// Configuración inicial del canvas y creación de estrellas
const ctx = canvas.getContext('2d');
// Ajustamos el tamaño del canvas al tamaño inicial de la ventana
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
// Creamos un array de estrellas con posiciones, tamaños y velocidades aleatorias
let stars = Array(80).fill().map(() => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    size: Math.random() * 2, speed: Math.random() * 0.3
}));

// Función para animar las estrellas
function animateStars() {
    // Limpiar el dibujo anterior para pintar el nuevo (para crear el movimiento)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // El color de las estrellas
    ctx.fillStyle = '#b100e8';
    stars.forEach(s => {
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI*2); ctx.fill();

        // Las estrellas suben un poquito en cada paso (según su velocidad)
        s.y -= s.speed; 
        
        // Si una estrella se sale por arriba, la mandamos abajo para que vuelva a empezar
        if(s.y < 0) s.y = canvas.height;
    });
    // El navegador que vuelve a ejecutar esta función lo más rápido posible
    requestAnimationFrame(animateStars);
}

// Inicio de la animación de estrellas y creación de pétalos cada 400ms
animateStars();
setInterval(crearPetalo, 400);

// Ajustar canvas si se cambia el tamaño de ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* --- DICCIONARIO DE TRADUCCIONES --- */
const translations = {
    es: {
        // Header
        job_title: "> Fullstack Dev & Artist _",
        
        // Sobre mí
        sobre_mi_titulo: "Sobre mí",
        sobre_mi_desc: "<p>¡Hola! Mi nombre es <strong>Silvia</strong>.</p>" +
                        "<p>Mi camino hacia el desarrollo de software no fue el típico. " +
                        "Aunque mi primera vocación fue la veterinaria, porque me apasionan los <strong>animales</strong>, " +
                        "la influencia de mi padre informático y la búsqueda de una <strong>proyección profesional sólida</strong> " +
                        "me hicieron dar el salto a la tecnología. Y fue la decisión correcta.</p>" +
                        "<p>Soy una desarrolladora que cree que el código no solo debe ser funcional, sino también una <strong>obra de arte</strong>. " +
                        "Gracias a mis aficiones creativas como <strong>dibujar y editar vídeo</strong>, tengo una sensibilidad especial para unir la " +
                        "<strong>lógica robusta del backend</strong> con <strong>interfaces cautivadoras</strong>.</p>" +
                        "<p>Cuando no estoy programando, me encontrarás disfrutando de <strong>videojuegos</strong>, escuchando música o creando contenido visual. " +
                        "Esa mezcla de técnica y creatividad es lo que defino como <strong>mi sello personal</strong>.</p>",

        // Proyectos
        proyectos_titulo: "Proyectos destacados",
        proyecto1_nombre: "PetBuddy - Encuentra cuidadores confiables",
        proyecto1_desc: "Prototipado funcional animado en Figma de una aplicación para móviles sobre mascotas. " +
                        "Esta aplicación esta pensada para poder ofrecer servicios de todo tipo a los dueños de mascotas. " +
                        "Cuenta con apartados para:",
        petbuddy_lista: "<li>Búsqueda de cuidadores</li>" +
                        "<li>Reservas y servicios</li>" +
                        "<li>Perfil de mascota</li>" +
                        "<li>Sistema de valoraciones</li>" +
                        "<li>Chat en tiempo real</li>" +
                        "<li>Gestión de reservas</li>" +
                        "<li>Tienda integrada</li>" +
                        "<li>Panel de usuario</li>",

        // Trayectoria
        trayectoria_titulo: "Trayectoria",
        time_line1: "2024 - Presente",
        exp1_titulo: "Estudiante de DAM",
        exp1_lugar: "Colegio Salesiano Nuestra Señora del Pilar de Zaragoza",
        exp1_desc: "Estudiando el ciclo superior de desarrollo de aplicaciones multiplataforma, Java, Bases de datos..." +
                    " Participación en proyectos de desarrollo de aplicaciones, tanto individuales como en equipo, aplicando metodologías "+ 
                    "ágiles y buenas prácticas de programación.",
        time_line2: "Mayo 2025 - Junio 2025",
        exp2_titulo: "Desarrolladora web (Prácticas)",
        exp2_lugar: "Ayuntamiento de Veguillas de La Sierra",
        exp2_desc: "Desarrollo de una página web institucional para el Ayuntamiento de Veguillas de La Sierra, utilizando HTML, Next.js y Wix. " +
                    "La web incluye información sobre el municipio, servicios, eventos y contacto, con un diseño moderno y responsive.",
        time_line3: "2022 - 2024",
        exp3_titulo: "Estudiante de bachillerato de ciencias de la salud",
        exp3_lugar: "I.E.S. Pilar Lorengar",
        exp3_desc: "Estudiante de bachillerato con enfoque en ciencias de la salud, desarrollando habilidades analíticas y de investigación, "+ 
                    "además de una base sólida en biología, química y matemáticas. Participación en proyectos científicos y " + 
                    "actividades extracurriculares relacionadas con la salud.",

        // Conocimientos
        conocimientos_titulo: "Conocimientos técnicos",
        leyenda_fluido: "Fluido",
        leyenda_intermedio: "Intermedio",
        leyenda_basic: "En aprendizaje",
        
        // Cards (Títulos)
        card_lenguajes: "> Lenguajes y backend",
        card_front: "> Frontend y web",
        card_design: "> Diseño y prototipado",
        card_tools: "> Herramientas y entornos",
        card_systems: "> Sistemas y redes",
        card_agile: "> Metodologías ágiles",

        // Habilidades
        skills_title: "Habilidades",
        skill_logic: "Pensamiento lógico",
        skill_team: "Trabajo en equipo",
        skill_creative: "Creatividad",
        skill_problem: "Resolución de problemas",
        skill_learn: "Capacidad de aprendizaje",
        skill_time: "Gestión del tiempo",

        // Idiomas
        idiomas_titulo: "Idiomas",
        lang_es: "Español",
        lang_en: "Inglés",
        lang_es_desc: "Nativo",
        lang_en_desc: "Nivel B1",

        // Contacto
        contact_title: "Contacto",
        contact_desc: "🖤 ¿Tienes un proyecto en mente o quieres colaborar? Puedes comunicarte conmigo a través de:",
        contact_linkedin_desc: "Conectemos profesionalmente",

        // Footer
        footer_text: "© Hecho con 🖤 por Ssylley | 2026"
    },
    en: {
        // Header
        job_title: "> Fullstack Dev & Artist _",
        
        // About Me
        sobre_mi_titulo: "About me",
        sobre_mi_desc: "<p>Hello! My name is <strong>Silvia</strong></p>" +
                        "<p>My path to software development wasn't typical. " +
                        "Although my first vocation was veterinary medicine, because I am passionate about <strong>animals</strong>, " +
                        "the influence of my programming father and the search for a <strong>solid career path</strong> " +
                        "made me take the leap into technology. And it was the right decision.</p>" +
                        "<p>I am a developer who believes code shouldn't just be functional, but also a <strong>work of art</strong>. " +
                        "Thanks to my creative hobbies like <strong>drawing and video editing</strong>, I have a special sensitivity for uniting " +
                        "<strong>robust backend logic</strong> with <strong>captivating interfaces</strong>.</p>" +
                        "<p>When I'm not programming, you'll find me enjoying <strong>video games</strong>, listening to music, or creating visual content. " +
                        "That mix of technique and creativity is what I define as <strong>my personal signature</strong>.</p>",
        
        // Projects
        proyectos_titulo: "Featured projects",
        proyecto1_nombre: "PetBuddy - Find Trusted Pet Sitters",
        proyecto1_desc: "Functional animated prototype in Figma of a mobile application about pets. " +
                        "This application is designed to offer all kinds of services to pet owners. " +
                        "It includes sections for:",
        petbuddy_lista: "<li>Find sitters</li>" +
                        "<li>Bookings and services</li>" +
                        "<li>Pet profile</li>" +
                        "<li>Rating system</li>" +
                        "<li>Real-time chat</li>" +
                        "<li>Booking management</li>" +
                        "<li>Integrated store</li>" +
                        "<li>User panel</li>",
        
        // Trayectory
        trayectoria_titulo: "Trayectory",
        time_line1: "2024 - Present",
        exp1_titulo: "DAM student",
        exp1_lugar: "Salesian School Our Lady of the Pillar of Zaragoza",
        exp1_desc: "Studying the higher cycle of multiplatform application development, Java, Databases... " +
                    "Participation in application development projects, both individual and team-based, applying agile " + 
                    "methodologies and good programming practices.",
        time_line2: "May 2025 - June 2025",
        exp2_titulo: "Web developer (Practices)",
        exp2_lugar: "Veguillas de La Sierra City Council",
        exp2_desc: "Development of an institutional website for the Veguillas de La Sierra City Council, using HTML, Next.js, and Wix. " +
                    "The website includes information about the municipality, services, events, and contact, with a modern and responsive design.",
        time_line3: "2022 - 2024",
        exp3_titulo: "Health science bachelor's degree student",
        exp3_lugar: "I.E.S. Pilar Lorengar",
        exp3_desc: "Health science-focused bachelor's degree student developing analytical and research skills, " + 
                    "as well as a solid foundation in biology, chemistry, and mathematics. Participation in scientific projects and " + 
                    "extracurricular activities related to health.",
        
        // Technical
        conocimientos_titulo: "Hard skills",
        leyenda_fluido: "Fluent",
        leyenda_intermedio: "Intermediate",
        leyenda_basic: "Learning",
        
        // Cards (Titles)
        card_lenguajes: "> Languages & backend",
        card_front: "> Frontend & web",
        card_design: "> Design & prototyping",
        card_tools: "> Tools & environments",
        card_systems: "> Systems & networks",
        card_agile: "> Agile methodologies",

        // Skills
        skills_title: "Soft skills",
        skill_logic: "Logical thinking",
        skill_team: "Teamwork",
        skill_creative: "Creativity",
        skill_problem: "Problem solving",
        skill_learn: "Learning ability",
        skill_time: "Time management",

        // Languages
        idiomas_titulo: "Languages",
        lang_es: "Spanish",
        lang_en: "English",
        lang_es_desc: "Native",
        lang_en_desc: "Level B1",

        // Contact
        contact_title: "Contact",
        contact_desc: "🖤 Do you have a project in mind or want to collaborate? You can reach out to me through:",
        contact_linkedin_desc: "Let's connect professionally",

        // Footer
        footer_text: "© Made with 🖤 by Ssylley | 2026"
    }
};

/* --- LÓGICA DEL CAMBIO DE IDIOMA --- */
const toggle = document.getElementById('toggle-lang');

function updateLanguage(lang) {
    // Selecciona todos los elementos que tengan el atributo data-translate
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Usamos innerHTML para mantener las negritas (<strong>)
            el.innerHTML = translations[lang][key];
        }
    });
}

// Escuchar el click en el botón
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        updateLanguage('en'); // Si está marcado -> Inglés
    } else {
        updateLanguage('es'); // Si no -> Español
    }
});

/* --- LÓGICA DEL GATO DEL HEADER --- */
function despertar() {
    // Seleccionamos el gato y el bocadillo
    const gato = document.getElementById('gato-pixel');
    const bocadillo = document.getElementById('bocadillo-header');

    // Si el gato ya está despierto, no hacemos nada más
    if (gato.classList.contains('despierto')) return;

    // Marcamos que ya se despertó para que no repita la animación si se le dan muchos clicks
    gato.classList.add('despierto');

    // Aquí están las fotos del gato en orden: de ojos cerrados a ojos abiertos
    const frames = [
        'images/gatoSleeping1.png',
        'images/gatoSleeping2.png',
        'images/gatoSleeping3.png',
        'images/gatoSleeping4.png'
    ];

    let i = 0;
    // Cambiamos la foto cada 150 milisegundos para que simule el movimiento natural
    const abrirOjos = setInterval(() => {
        i++;
        if (i < frames.length) {
            gato.style.backgroundImage = `url('${frames[i]}')`;
        } else {
            // Cuando termina de abrir los ojos, espera 2 segundos y se vuelve a dormir
            clearInterval(abrirOjos);
            mostrarBocadillo(bocadillo, ["!!!", "....", "Zzz..."]);
            
            setTimeout(() => {
                // Ocultamos el bocadillo antes de cerrar los ojos
                bocadillo.style.display = 'none';
                cerrarOjos(gato, frames);
            }, 2000);
        }
    }, 150);
}

// Función para cerrar los ojos del gato (animación inversa)
function cerrarOjos(gato, frames) {
    let i = frames.length - 1;
    const animarCierre = setInterval(() => {
        i--;
        if (i >= 0) {
            gato.style.backgroundImage = `url('${frames[i]}')`;
        } else {
            clearInterval(animarCierre);
            gato.classList.remove('despierto');
        }
    }, 150);
}

/* --- LÓGICA DEL BOCADILLO DEL GATO DEL HEADER --- */
function mostrarBocadillo(elemento, frases) {
    // Elegimos una frase aleatoria del array de frases
    elemento.innerText = frases[Math.floor(Math.random() * frases.length)];

    // Mostramos el bocadillo)
    elemento.style.display = 'block';
}

/* --- LÓGICA DE LA FLECHA DE SCROLL DEL HEADER --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar la flecha por su clase
    const flecha = document.querySelector('.scroll-indicator');

    // 2. Verificar que la flecha exista para evitar errores
    if (flecha) {
        flecha.addEventListener('click', () => {
            // 3. Buscar la sección destino
            const seccionDestino = document.getElementById('sobre-mi');

            // 4. Si la sección existe, hacer el scroll suave
            if (seccionDestino) {
                seccionDestino.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }
});

/* --- LÓGICA DE LAS SECCIONES --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si la sección entra en el visor, le añade la clase 'visible'
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, 
// Se activa cuando se ve el 15% de la sección
{ threshold: 0.15 });

// Observamos cada sección del documento para aplicar la animación cuando entren en el visor
document.querySelectorAll('section').forEach(section => observer.observe(section));

/* --- LÓGICA DEL AVATAR DINÁMICO --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar el elemento de la imagen del avatar
    const imagenElemento = document.getElementById('avatar-dinamico');
    
    // 2. Definir las rutas de las imágenes para el avatar dinámico
    const misImagenes = [
        "images/pixelssylley1.png",
        "images/pixelssylley2.png" 
    ];
    
    let indiceActual = 0;
    const tiempoCambio = 300;

    // Solo ejecutar si la imagen existe en el HTML
    if (imagenElemento) {
        setInterval(() => {
            // Avanzar al siguiente índice
            indiceActual = (indiceActual + 1) % misImagenes.length;
            
            // Cambiar la fuente de la imagen
            imagenElemento.src = misImagenes[indiceActual];
            
        }, tiempoCambio);
    }
});

/* --- LÓGICA DE LOS ENLACES DE EMAIL --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuración
    const miCorreo = "arnasledesmasilvia@gmail.com";
    
    // 2. Seleccionr TODOS los enlaces que tengan la clase 'email-link'
    const botonesEmail = document.querySelectorAll('.email-link');

    // 3. Detectar si es móvil
    const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // 4. Recorrer cada botón para aplicarle la lógica
    botonesEmail.forEach(boton => {
        if (esMovil) {
            // EN MÓVIL: Usa la app de correo por defecto
            boton.href = `mailto:${miCorreo}`;
            // Quitamos el target="_blank" para que no abra pestañas vacías en el móvil
            boton.removeAttribute('target');
        } else {
            // EN PC: Abre Gmail en una pestaña nueva para redactar
            boton.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${miCorreo}`;
            boton.target = "_blank";
        }
    });
});
