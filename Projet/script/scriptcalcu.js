function addition() {
    let nb1 = document.getElementById('n1');
    let nb2 = document.getElementById('n2');
    let res = document.getElementById('result');
    if(!isNaN(nb1.value) && !isNaN(nb2.value)){
        n1 = parseInt(nb1.value);
        n2 = parseInt(nb2.value);
        res.value = n1 + n2;
    }else{
        alert("Not a number");
    }
}

function subtraction() {
    let nb1 = document.getElementById('n1');
    let nb2 = document.getElementById('n2');
    let res = document.getElementById('result');
    if(!isNaN(nb1.value) && !isNaN(nb2.value)){
        n1 = parseInt(nb1.value);
        n2 = parseInt(nb2.value);
        res.value = n1 - n2;
    }else{
        alert("Not a number");
    }
}

function multiplication() {
    let nb1 = document.getElementById('n1');
    let nb2 = document.getElementById('n2');
    let res = document.getElementById('result');
    if(!isNaN(nb1.value) && !isNaN(nb2.value)){
        n1 = parseInt(nb1.value);
        n2 = parseInt(nb2.value);
        res.value = n1 * n2;
    }else{
        alert("Not a number");
    }
}

function division() {
    let nb1 = document.getElementById('n1');
    let nb2 = document.getElementById('n2');
    let res = document.getElementById('result');
    if(!isNaN(nb1.value) && !isNaN(nb2.value)){
        n1 = parseInt(nb1.value);
        n2 = parseInt(nb2.value);
        if(n2==0){
            alert("division par 0");
        }else{
            res.value = n1 / n2;
        }
    }else{
        alert("Not a number");
    }
}