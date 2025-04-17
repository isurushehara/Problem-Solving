//CREATE VARIABLES
for(i = 1; i<6; i++) {
    let pattern_i = document.getElementById('pattern_'+i);
    pattern_i.style.listStyle = "none";
}

//FUNCTIONS
function addText(li, text) {
    li.append(text);
}

//------------------------------------------------//
//PATTERN 01
for(i = 1; i<6; i++) {
    let li = document.createElement('li');
    for(j = 0; j<i; j++) {
        addText(li, "X");
    }
    pattern_1.append(li);
}

//PATTERN 02
for (i = 1; i<6; i++) {
    let li = document.createElement('li');
    for(j = 6; j>i; j--) {
        addText(li, "X");
    }
    pattern_2.append(li);
}

