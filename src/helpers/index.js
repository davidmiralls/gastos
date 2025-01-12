export const formatearCantidad = cantidad => {
    return Number(cantidad).toLocaleString('es-ES', {
        sytle: 'currency',
        currency: 'EUR'

    })
}