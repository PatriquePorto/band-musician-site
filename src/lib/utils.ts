// BUG FIX PRICE PRODUCTS
export const formatPrice = (price: number | null) => {
    if (!price) return 'R$0.00'

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price / 100)

}

export const formatPriceUS = (price: number | null) => {
    if (!price) return '$0.00'

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100)
}

