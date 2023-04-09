typeWriterEffect()

function typeWriterEffect(){
    const words = ['Técnico informático.', 'Programador.', 'Desarrollador web.', 'Estudiante.', 'Autodidacta.'];
    let wordCount = 0;
    let letterCount = 0;
    let currentText = '';
    let currentWord = '';
    let timeOut = 400;
    let isDeleting = false;

    type()

    function type(){
        if(wordCount === words.length){
            wordCount = 0;
        }
        currentWord = words[wordCount];
        if(isDeleting){
            currentText = currentWord.slice(0, --letterCount)
        } else {
            currentText = currentWord.slice(0, ++letterCount)
        }
        document.querySelector('.typewrite').textContent = currentText;
        timeOut = isDeleting? 50:100;
        if (!isDeleting && currentText.length === currentWord.length){
            timeOut = 1500;
            isDeleting = true
        } else if (isDeleting && currentText.length === 0){
            timeOut = 100;
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeOut)
    }
}
