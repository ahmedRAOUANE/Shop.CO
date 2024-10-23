export const getSingleProduct = async (productId: string) => {
    // dummy product from fakestore API
    const productRes = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return await productRes.json();
}

export const getProducts = async (limit: number) => {
    // dummy data from fakestore API
    const productsRes = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    return await productsRes.json();
}

export const getComments = async () => {
    // dummy comments from jsonplaceholder api
    const commentsRes = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
    return await commentsRes.json();
}