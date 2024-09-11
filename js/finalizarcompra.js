document.addEventListener('DOMContentLoaded', () => {
    const botonFin = document.getElementById('botonFinalizar');
    botonFin.addEventListener('click', async () => {
        const { value: metodoEnvio } = await Swal.fire({
            title: "Finalizar Compra?",
            text: "Selecciona el método de envío:",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Seguir comprando...",
            confirmButtonText: "Si, finalizar",
            input: 'radio',
            inputOptions: {
                'opcion1': 'Envío a tu domicilio.',
                'opcion2': 'Retira en nuestro local.'
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes seleccionar un método de envío';
                }
            }
        });
        if (metodoEnvio) {
            Swal.fire({
                icon: "success",
                title: "Compra Finalizada",
                text: `Método de envío seleccionado: ${metodoEnvio}`,
                confirmButtonColor: "#198754",
            });
            localStorage.clear();
            location.reload();
        }
    });
});



    // botonFin.addEventListener('click', () => {
    //     Swal.fire({
    //         title: "Finalizar Compra?",
    //         text: "Veamos las formas de pago",
    //         icon: "success",
    //         showCancelButton: true,
    //         confirmButtonColor: "#198754",
    //         cancelButtonColor: "#3085d6",
    //         cancelButtonText: "Seguir comprando...",
    //         confirmButtonText: "Si, finalizar"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 icon: "sucess",
    //                 title: "Compra Finalizada",
    //                 confirmButtonColor: "#198754",
                    
    //             });
    //             localStorage.clear();
    //             location.reload();
    //         }
    //     });
    // })