

document.addEventListener("DOMContentLoaded", () => {



    // jQuery para el titulo del index.html

    const title = "Welcome to the page about Taylor Swift"
    const taylorPart = "Taylor Swift"
    let index = 0
    
    function escribirTexto() {

        const subtitle = title.slice(0, index + 1) // extrae los primeros index + 1 caracteres del texto

        const beforeTaylor = subtitle.split(taylorPart)[0] // [0] -> Nos devuelve antes de Taylor Swift

        
        // Construir el HTML con la parte resaltada
        $('#title').html(beforeTaylor + (subtitle.includes(taylorPart) ? `<span class="colorSpan">${taylorPart}</span>` : ''))
        
        if (index < title.length) {
            index++
            setTimeout(escribirTexto, 105) // Cambia la velocidad
        }
    }

    escribirTexto();

    
    
    // Footer

    // Cambiar  Copyright al pasar el año automatico
    let date = new Date().getFullYear()
    document.getElementById("year").innerHTML = date;

})