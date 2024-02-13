const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');


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











//describe("removeProduct",()=>{
//it("should return true if putting a Id the function remove the product identified by the productID")
//});
//it("should throw an error if ID doesn't exist",()=>{
//    expect(() => removeProduct(products.includes(id)?"El id es valido": .toThrow("You must insert a valid id")));//el array producto contiene el id?
//});
//
//describe("getProduct",()=>{
//    it("should return true if putting a ID the function print the product identified by the productID ")
//});
//it("should throw an error if Id doesn't exist",()=>{
//    expect(()=> getProduct(id)).toThrow("You must insert a valid id");//
//})
//
//describe("updateProduct",()=>{
//    it("should return true if putting a value related to a specific ID the function uptade the price or the name of the product")
//});
//it("should throw an error if the product doesn't exist",()=>{
//    expect(()=>updateProduct(productName)).toThrow("The product doesn't exist")
//})
  