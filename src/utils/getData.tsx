export const getSingleProduct = async (productId: string) => {
    // dummy product from fakestore API
    const productRes = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await productRes.json();
}

export const getProducts = async () => {
    // dummy data from fakestore API
    const productsRes = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
    return await productsRes.json();
}

export const getComments = async () => {
    // dummy comments from jsonplaceholder api
    const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
    return await commentsRes.json();
}