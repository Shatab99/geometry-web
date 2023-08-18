function input(inputid) {
    const input = document.getElementById(inputid);
    const inputvalstr = input.value;
    const inputval = parseFloat(inputvalstr);
    input.value = ' ';
    return inputval;
}
// validate number 


function triangle() {
    const inputb = input('tri-b');
    const inputh = input('tri-h');
    // validate
    if (isNaN(inputb) || isNaN(inputh)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = .5 * inputb * inputh;
    document.getElementById('tri-res').innerText = result;
    entry('triangle', result);
}


function rectangle() {
    const w = input('rec-w');
    const l = input('rec-l');
    // validate
    if (isNaN(w) || isNaN(l)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = w * l;
    
    document.getElementById('rec-res').innerText = result;
    entry('rectangle', result);
}


function Parallelogram() {
    const b = input('par-b');
    const h = input('par-h');
    // validate
    if (isNaN(b) || isNaN(h)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = b * h;
    
    document.getElementById('pal-res').innerText = result;
    entry('Parallelogram', result);
}


function Rhombus() {
    const b = input('ram-d1');
    const h = input('ram-d2');
    // validate
    if (isNaN(b) || isNaN(h)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = .5 * b * h;

    document.getElementById('ram-res').innerText = result;
    entry('Rhombus', result);
}


function Pentagon() {
    const b = input('pen-p');
    const h = input('pen-b');
    // validate
    if (isNaN(b) || isNaN(h)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = .5 * b * h;
   
    document.getElementById('pen-res').innerText = result;
    entry('Pentagon', result);
}


function Ellipse() {
    const b = input('ell-a');
    const h = input('ell-b');
    // validate
    if (isNaN(b) || isNaN(h)) {
        alert('Please Enter a Number !!!');
        return;
    }
    const result = 3.1416 * b * h;
   
    document.getElementById('ell-res').innerText = result;
    entry('Ellipse', result);
}

// function entry
function entry(areatype , result){
    const entry = document.getElementById('entry');
    const p = document.createElement('p');
    const count = entry.childElementCount;
    p.innerHTML = `${count+1}.The area of ${areatype} is ${result} cm<sup>2</sup> `;
    entry.appendChild(p);
}