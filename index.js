const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }
    
    

    const velocidad1 = calcularVelocidad(10,2);
    console.log("La velocidad de Juana es " + velocidad1);
    const velocidad2 = calcularVelocidad(100,2);
    console.log("La velocidad de Mateo es " + velocidad2);
    const velocidad3 = calcularVelocidad(75,3);
    console.log("La velocidad de Ana es " + velocidad3);
    