const arrayProductos = [];

const producto1 = new Producto(1, 'cerveza rubia', 500);
const producto2 = new Producto(2, 'cerveza negra', 600);
const producto3 = new Producto(3, 'ambas', 950);

arrayProductos.push(producto1, producto2, producto3);

const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
arrayProductos.sort((a, b) => b.precio - a.precio);
mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(`${producto.nombre} \$${producto.precio}`));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};

function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do{
        productoNombre = prompt('Quieres comprar cerveza rubia, cerveza negra o ambas?', 'Ej: ambas')
        productoCantidad = parseInt(prompt('cuantas quieres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else{
            alert('El producto no se encuentra disponible.');
        }
        seguirComprando = confirm('Quieres agregar otro producto?');
        
    } while (seguirComprando)

    aplicarDescuento(total)
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 4000) {
        totalCompra = totalCompra * 0.80;
        alert('Tienes un 20% de descuento!');
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Quieres envio a domicilio?');
    
    if (tieneEnvioADomicilio && totalCompra >= 2000) {
        alert ('Tienes envio gratis. El total de la compra es: '+totalCompra);

    } else if (tiene && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envio cuesta $700. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
};

function comprar() {
    const quieroOrdenar =confirm(' Quieres ordenar la lista de cervezas de la mas barata a la mas cara?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    comprarProductos();
};

comprar();