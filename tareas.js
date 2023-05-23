// Definir la tasa de IVA para calcular los productos de la tienda
let importe = prompt("ingrese Presupuesto")

while(importe ==""){
    alert("Importe Invalido");
    importe = prompt("ingrese presupuesto")
    }
    alert("Importe valido" +importe);

    let mensaje = prompt("deseas invertir? (s-si)");
    let total = 0;

    while(mensaje.toLowerCase() == "s"){
        let invertir = prompt("1 - Invertir fondos $10000\n2 - Invertir fondos $25000\n3 - Invertir fondos $50000\n4");
        //condicional para evaluar inversion
    switch(invertir){
        case "1" :
            alert("Agregaste una Inversion de $10000");
            incrementarTotal(10000);
            break;
        case "2" :
            alert("Agregaste una Inversion de $25000");
            incrementarTotal(25000);
            break
        case "3" :
                alert("Agregaste una Inversion de $50000");
            incrementarTotal(50000);
            break  

        }
        mensaje = prompt("deseas seguir invirtiendo (s-si)");
    }

    function incrementarTotal(precio){
        total = total + precio;
        alert("invertido hasta el momento $"+total);
    }
