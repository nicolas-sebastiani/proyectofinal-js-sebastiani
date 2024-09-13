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
                'Envio a tu domicilio.': 'Envío a tu domicilio.',
                'Retira en nuestro local.': 'Retira en nuestro local.'
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
            setTimeout(() => {
                location.reload();
                window.location.href = '../index.html';
            },3000)
        }
    });
});