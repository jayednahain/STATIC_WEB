const panels = document.querySelectorAll('.panel')
// select all the class name panel


panels.forEach(element => {
    element.addEventListener('click',()=>{
        removeActiveClass();
        onPressSingleElement(element)
    })
});

function onPressSingleElement(currentPanel){
    currentPanel.classList.add('active');
}

function removeActiveClass(){
    panels.forEach(element => {
        element.classList.remove('active')
    });
}