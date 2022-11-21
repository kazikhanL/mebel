function priceToPretty(price: number): string {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default priceToPretty;
