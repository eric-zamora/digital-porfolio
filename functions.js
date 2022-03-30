const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function wordSpin() {
    words = ['Student', 'Freelancer', 'Programmer', 'Nerd', 'Geek', 'Coder', 'Computer Engineer', 'Software Engineer', 'Web Developer'];

    const typeWordsDiv = document.getElementById('type-word-div');
    typeWordsDiv.innerHTML = '';      
    
    
    for( var i = 0; i < words.length; i++) { 
        typeWordsDiv.innerHTML = '';
        for(var j = 0; j < words[i].length; j++) {
            typeWordsDiv.innerHTML = typeWordsDiv.innerHTML + words[i][j];
            await sleep(150);
        }
        await sleep(200);
    }
    // if(typeWordsDiv.innerHTML == '') {
    //     typeWordsDiv.style.margin = "0 0.75ch";
    // } else {
    //     typeWordsDiv.style.margin = "0";
    // }
}

window.onload = wordSpin;