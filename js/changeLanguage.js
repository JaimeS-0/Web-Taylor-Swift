
document.addEventListener('DOMContentLoaded', () => {

    // Cambio de Idioma
    const check = document.querySelector(".form-check-input")

    check.addEventListener("click", () => {

        const idioma = check.checked ? "es" : "en"
        console.log("Idioma seleccionado:", idioma)

        actualizarIdioma(idioma)
    })


    const actualizarIdioma = (idioma) => {
        const elementos = [

            // Home
            { id: "title", value: `${textos[idioma].title} <span class="colorSpan">Taylor Swift</span>` },
            { id: "subtitle", value: textos[idioma].subtitle },
            { id: "english", value: textos[idioma].english },
            { id: "spanish", value: textos[idioma].spanish },
            { id: "buttonVideo", value: textos[idioma].buttonVideo },
            { id: "navHome", value: textos[idioma].navHome },
            { id: "navDiscography", value: textos[idioma].navDiscography },
            { id: "navBiography", value: textos[idioma].navBiography },
            { id: "navPhotos", value: textos[idioma].navPhotos },

            // Footer
            { id: "policy", value: textos[idioma].policy },
            { id: "legal", value: textos[idioma].legal },

            // Discografia
            { id: "discografy", value: `${textos[idioma].discografy} <span class="colorSpan">Taylor Swift</span>` },
            { id: "discografySubtitle", value: textos[idioma].discografySubtitle },
            { id: "TTD", value: textos[idioma].TTD },
            { id: "MIDNIGHTS", value: textos[idioma].MIDNIGHTS},
            { id: "EVERMORE", value: textos[idioma].EVERMORE},
            { id: "FOLKLORE", value: textos[idioma].FOLKLORE},
            { id: "LOVER", value: textos[idioma].LOVER},
            { id: "REPUTATION", value: textos[idioma].REPUTATION},
            { id: "1989", value: textos[idioma].A1989},
            { id: "RED", value: textos[idioma].RED},
            { id: "SPEAK NOW", value: textos[idioma].SPEAKNOW},
            { id: "FEARLESS", value: textos[idioma].FEARLESS},
            { id: "TAYLOR SWIFT", value: textos[idioma].TAYLORSWIFT},

            // Biografia
            { id: "titleBiography", value: textos[idioma].titleBiography},
        ];

        // Recorremos los elementos del array de arriba y los ponemos en el HTML
        elementos.forEach(element => {
            const el = document.getElementById(element.id)
            if (el) {
                el.innerHTML = element.value;
            }
        });

        // Actualiza las fechas de lanzamiento (múltiples elementos)
        const fechas = document.querySelectorAll(".release-date");
        fechas.forEach(fecha => {
            fecha.innerHTML = textos[idioma].date;
        });

        // Actualiza los botones de escuchar el album en discografia(múltiples elementos)
        const listen = document.querySelectorAll(".btnAlbum");
        listen.forEach(escucha => {
            escucha.innerHTML = textos[idioma].escucha;
        });

        // Actualiza los botones de informacion de  el album en discografia(múltiples elementos)
        const information = document.querySelectorAll("#album-information");
        information.forEach(informacionAlbum => {
            informacionAlbum.innerHTML = textos[idioma].informacionAlbum;
        });
    };

    // Mensajes en ingles y español
    const textos = {
        en: {
            // Home
            title: "Welcome to the page about",
            subtitle: "Explore the life and career of the world's most influential artist",
            buttonVideo: "Watch the Concert again",
            english: "English",
            spanish: "Spanish",
            navHome: "Home",
            navDiscography: "Discography",
            navBiography: "Biography",
            navPhotos: "Pictures",

            // Footer
            policy: "Privacy Policies",
            legal: "Legal notice",

            // Discografia
            discografy: "Discography of",
            discografySubtitle: "an American singer of country and pop genres, consists of 11 albums",
            escucha: "Listen to Album",
            informacionAlbum: "album information",
            date: "Release date",
            TTD: "Her most recent album, where Taylor adopts a more mature and experimental approach. It explores themes of pain and loss with a poetic and confessional style, blending synth-pop and folk elements.",
            MIDNIGHTS: "A conceptual album exploring themes of insomnia and nighttime reflection. The songs delve into thoughts and emotions that arise in the stillness of the night, featuring a more electronic and atmospheric sound.",
            EVERMORE: "Considered the sister album to “Folklore“, it continues with an indie folk style. Songs like “Willow” and “Champagne Problems” dive into themes of love and loss, with a minimalist and evocative production.",
            FOLKLORE: "A surprise album with an indie folk style, created during the pandemic. “Cardigan” and “Exile” showcase a more introspective and narrative side of Taylor, with stories exploring nostalgia and melancholy.",
            LOVER: "A vibrant and romantic album filled with upbeat and dreamy tracks. Songs like “Lover” and “You Need to Calm Down” celebrate love and individuality with a pop sound.",
            REPUTATION: "Marking a bold reinvention, this album explores themes of public image and personal identity. “Look What You Made Me Do” and “Delicate” highlight darker tones and electronic beats.",
            A1989: "Her first fully pop album, inspired by the sounds of the '80s. “Shake It Off” and “Blank Space” are iconic tracks that showcase her ability to reinvent herself and dominate the charts.",
            RED: "This album marks a transition to a more pop-oriented sound while keeping her country roots. “We Are Never Ever Getting Back Together” and “I Knew You Were Trouble” exemplify her talent for crafting catchy and emotionally resonant hits.",
            SPEAKNOW: "Taylor wrote all the songs on this album herself, showcasing her growth as a songwriter. Tracks like “Mine” and “Back to December” explore past relationships and moments of personal introspection.",
            FEARLESS: "With this album, Taylor became a global superstar. “Love Story” and “You Belong with Me” are anthems that capture the essence of youthful love and heartache. The album earned multiple awards, including the Grammy for Album of the Year.",
            TAYLORSWIFT: "This debut album introduces Taylor as a young country singer with a natural talent for songwriting. Songs like “Tim McGraw” and “Teardrops on My Guitar” reflect her teenage experiences and her ability to tell heartfelt stories.",

            // Biografia
            titleBiography: "The biography of <span class=\"colorSpan\">Taylor Swift</span>, Discover her story."

        },

        es: {
            // Home
            title: "Bienvenido a la página sobre",
            subtitle: "Explora la vida y carrera de la artista más influyente del mundo",
            buttonVideo: "Mira el concierto otra vez",
            english: "Ingles",
            spanish: "Español",
            navHome: "Inicio",
            navDiscography: "Discografía",
            navBiography: "Biografía",
            navPhotos: "Fotos",

            // Footer
            policy: "politicas de privacidad",
            legal: "Aviso Legal",

            // Discografia
            discografy: "Discografia de ",
            discografySubtitle: "Cantante estadounidense de géneros country y pop, consta de 11 álbumes.",
            escucha: "Escuchar Album",
            informacionAlbum: "Informacion del album",
            date: "Fecha de lanzamiento",
            TTD: "Su último álbum, en el que Taylor adopta un enfoque más maduro y experimental, explora temas de duelo y pérdida en un estilo poético y confesional, mezclando elementos de synth-pop y folk.",
            MIDNIGHTS: "Un álbum conceptual que explora temas como el insomnio y la reflexión nocturna. Las canciones ahondan en los pensamientos y emociones que surgen en la quietud de la noche, con un sonido más electrónico y atmosférico.",
            EVERMORE: "Considerado el álbum hermano de “Folklore”, continúa con un estilo indie folk. Canciones como “Willow” y “Champagne Problems” se adentran en temas de amor y pérdida, con una producción minimalista y evocativa.",
            FOLKLORE: "Un álbum sorpresa de estilo indie folk, creado durante la pandemia. “Cardigan” y “Exile” muestran un lado más introspectivo y narrativo de Taylor, con historias que exploran la nostalgia y la melancolía.",
            LOVER: "Un álbum vibrante y romántico lleno de temas alegres y oníricos. Canciones como “Lover” y “You Need to Calm Down” celebran el amor y la individualidad con un sonido pop.",
            REPUTATION: "Este álbum, que marca una reinvención audaz, explora temas de imagen pública e identidad personal. “Look What You Made Me Do” y “Delicate” resaltan tonos más oscuros y ritmos electrónicos.",
            A1989: "Su primer álbum totalmente pop, inspirado en los sonidos de los años 80. “Shake It Off” y “Blank Space” son temas icónicos que muestran su capacidad para reinventarse y dominar las listas de éxitos.",
            RED: "Este álbum marca una transición hacia un sonido más orientado al pop, pero conservando sus raíces country. “We Are Never Ever Getting Back Together” y “I Knew You Were Trouble” ejemplifican su talento para crear éxitos pegadizos y con gran resonancia emocional.",
            SPEAKNOW: "Taylor escribió todas las canciones de este álbum, lo que demuestra su crecimiento como compositora. Temas como “Mine” y “Back to December” exploran relaciones pasadas y momentos de introspección personal.",
            FEARLESS: "Con este álbum, Taylor se convirtió en una superestrella mundial. “Love Story” y “You Belong with Me” son himnos que capturan la esencia del amor y el desamor juvenil. El álbum ganó múltiples premios, incluido el Grammy al Álbum del Año.",
            TAYLORSWIFT: "Este álbum debut presenta a Taylor como una joven cantante country con un talento natural para la composición. Canciones como “Tim McGraw” y “Teardrops on My Guitar” reflejan sus experiencias de adolescencia y su capacidad para contar historias conmovedoras.",

            // Biografia
            titleBiography: "La biografía de <span class=\"colorSpan\">Taylor Swift</span> , descubre su historia.",
            
        }
    }

})