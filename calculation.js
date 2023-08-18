function input(inputid){
    const input = document.getElementById(inputid);
    const inputvalstr = input.value;
    const inputval = parseFloat(inputvalstr);
    input.value = ' ';
    return inputval;
}


function triangle(){
    const inputb = input('tri-b');
    const inputh = input('tri-h');
    const result = .5* inputb * inputh;
    document.getElementById('area-field').innerText = "The area of Triangle is : "+result + " cm";
}


function rectangle(){
    const w = input('rec-w');
    const l = input('rec-l');
    const result = w*l;
    document.getElementById('area-field').innerText = "The area of rectangle is : "+result + " cm";
}


function Parallelogram(){
    const b = input('par-b');
    const h = input('par-h');
    const result = b*h;
    document.getElementById('area-field').innerText = "The area of Parallelogram is : "+result + " cm";
}


function Rhombus(){
    const b = input('ram-d1');
    const h = input('ram-d2');
    const result = .5*b*h;
    document.getElementById('area-field').innerText = "The area of Rhombus is : "+result + " cm";
}


function Pentagon(){
    const b = input('pen-p');
    const h = input('pen-b');
    const result = .5*b*h;
    document.getElementById('area-field').innerText = "The area of Pentagon is : "+result + " cm";
}


function Ellipse(){
    const b = input('ell-a');
    const h = input('ell-b');
    const result = 3.1416*b*h;
    document.getElementById('area-field').innerText = "The area of Ellipse is : "+result + " cm";
}