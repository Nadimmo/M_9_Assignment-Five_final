function hiddenElementByID(elementID){
    let element = document.getElementById(elementID);
    element.classList.add('hidden')
}
function showElementByID(elementID){
    let element = document.getElementById(elementID);
    element.classList.remove('hidden')
}

function setElementTextById(elementID,value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function disableButtons(){
    let buttons = document.querySelectorAll('#btn');
    buttons.forEach(function(button){
        if(!button.classList.contains('disabled')){
            button.classList.add('disabled');
        }
    })
}