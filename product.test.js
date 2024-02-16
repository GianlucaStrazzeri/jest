const { addProduct, removeProduct, getProducts,  updateProduct} = require('./product.js');


//Esta función se utiliza porqué de esta forma antes de cada test se resetean los productos es una función especifica de JEST
beforeEach(() => {
    resetProducts();
});

//Esta función se utiliza porqué de esta forma después de cada test se resetean los productos es una función especifica de JEST
afterEach(() => {
    resetProducts();
});



describe("addProduct",()=>{
    it("should return true if the function add product and price in a array",()=>{
        expect(addProduct(nameOfProduct,price)).toBe({nameOfProduct:price});
    });
    it("should throw an error if nameOfProduct is null",()=>{
        expect(() => addProduct(" ",price)).toThrow("You must insert both name of Product and price");
    });
    it("should throw an error if price is null",()=>{
        expect(() => addProduct(nameOfProduct," ")).toThrow("You must insert both name of Product and price");
    });
    it("should throw an error if nameOfProduct already exist",()=>{
        expect(() => addProduct(nameOfProduct=>{
            if (products.find(nameOfProduct = true)) Throw("You cannot create two products with the same name")
        }))
    })
});












