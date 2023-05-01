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

const button = document.getElementsByClassName('frame_deleter')[0];
let isClicked = false;
button.addEventListener("click", function() {
    if (!isClicked) {
        button.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
            //При нажатии
        var sq = document.getElementsByClassName('sq')
        for (var i = 0; i < sq.length; i++) {
            sq[i].style.border = 'none';
        }
    } else {
        button.style.backgroundColor = "white"
            //При повторном нажатии
        var sq = document.getElementsByClassName('sq')
        for (var i = 0; i < sq.length; i++) {
            sq[i].style.border = '2px solid rgba(255, 255, 255, 0.08)';
        }
    }
    isClicked = !isClicked;
});



var border_selected = (element) => {
    element.target.style.borderColor = 'white'
}

var border_selected_out = (elemen) => {
    elemen.target.style.borderColor = ''

}

frame.addEventListener('mouseover', () => {
    var elementss = document.getElementsByClassName('sq')
    for (var i = 0; i < elementss.length; i++) {
        elementss[i].addEventListener('mouseover', border_selected)
    };
})





frame.addEventListener('mouseout', () => {
    var elementsss = document.getElementsByClassName('sq')
    for (var i = 0; i < elementsss.length; i++) {
        elementsss[i].addEventListener('mouseout', border_selected_out)
    };
})
