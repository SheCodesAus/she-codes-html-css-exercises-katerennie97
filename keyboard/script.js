window.onload = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // start
    let keyboard = document.getElementById('keyboard');
    // end
}

// Cannot get the keyboard to work vvvvv

    alphabet.forEach(letter=> {
    // start
        let keybutton = document.createElement('input');
        keybutton.type = 'button';
        keybutton.value = letter;
        keybutton.classList.add('key');
        keybutton.id = letter;
        keybutton.addEventListener('click', event => {
            highlightLetter(event.target.id)
        })    
        keyboard.appendChild(keybutton);
    });
    
    

    // let keyButton = document.createElement('input');    
    // keyButton.type = 'button';    
    // keyButton.value = letter;    
    // keyButton.addEventListener('click', event => {        
    //     highlightLetter(event.target.id)    })    
    //     keyboard.appendChild(keyButton);
    // });


// start
    document.addEventListener('keydown', event=> {
        highlightLetter(event.key)
    });
// end


function highlightLetter(letter){
    // start
    console.log(letter)
    let output = document.getElementById('output-text');
    output.innerText = output.innerText + letter;
    let key = document.getElementById(letter);
    key.classList.toggle('selected');
    setTimeout(function() {
        key.classList.toggle('selected');
    }, 150);
    // end
}
    
