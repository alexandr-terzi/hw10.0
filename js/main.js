function main (a, b, c) {
    if (a == undefined) {
        a = 2;
    }
    
    if (b == undefined) {
        b = 3;
    }

    function c () {
        return sum(a, b);
    }
    return c();
    
}

function sum (a, b) { 
    return a + b; 
}


document.write(main(444, 555));

