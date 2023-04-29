var myClassElements = document.querySelectorAll('.sq');
for (var i = 0; i < myClassElements.length; i++) {
    myClassElements[i].addEventListener('mousedown', function() {
        this.style.backgroundColor = document.getElementById('color_picker_input').value
    });
};


// var el = document.querySelectorAll('.sq');
// for (var i = 0; i < el.length; i++) {
//     el[i].addEventListener('mouseover', function() {
//         this.style.backgroundColor = document.getElementById('color_picker_input').value
//         console.log('add')
//     });
// };


var color_draw = (element) => {
    element.target.style.backgroundColor = document.getElementById('color_picker_input').value
}

var frame = document
frame.addEventListener('mousedown', () => {
    var elementss = document.getElementsByClassName('sq')
    for (var i = 0; i < elementss.length; i++) {
        elementss[i].addEventListener('mouseover', color_draw)
    };
})


frame.addEventListener('mouseup', () => {
    var elementss = document.getElementsByClassName('sq')
    for (var i = 0; i < elementss.length; i++) {
        elementss[i].removeEventListener('mouseover', color_draw)
    };
})