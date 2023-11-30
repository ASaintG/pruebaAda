function simularSolicitudRed(tiempoDemora, exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Solicitud exitosa");
            } else {
                reject("Error en la solicitud");
            }
        }, tiempoDemora);
    });
}
async function realizarSolicitud() {
    try {
    
        const resultado = await simularSolicitudRed(2000, true);
        console.log("Resultado de la solicitud:", resultado);
    } catch (error) {
       
        console.error("Error durante la solicitud:", error);
    }
}

realizarSolicitud();
