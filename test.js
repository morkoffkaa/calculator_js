function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;

}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}

function times() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}

function divide() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 / num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}

function percent() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 /100* num2;
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}

function extract_the_root() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = Math.sqrt(num1);
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}

function raising_to_power() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = Math.pow(num1,num2);
    //innerHTML
    document.getElementById('out').innerHTML = result;
    
}