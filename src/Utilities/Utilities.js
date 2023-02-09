const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('shopping_cart'));
}

const addToLocalStorage = (id) => {

    const storedCart = getFromLocalStorage();
    let shoppingCart = {};

    if (!storedCart) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = storedCart;
        if (shoppingCart[id]) {
            const quantity = shoppingCart[id] + 1;
            shoppingCart[id] = quantity;
        }
        else {
            shoppingCart[id] = 1;
        }
    }




    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));

}

export { addToLocalStorage, getFromLocalStorage };