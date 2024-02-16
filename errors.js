describe("removeProduct",()=>{
    it("should return true if putting a Id the function remove the product identified by the productID")
    });
    it("should throw an error if ID doesn't exist",()=>{
        expect(() => removeProduct(products.includes(id)? `El id es valido `: ${.toThrow("You must insert a valid id")}));//el array producto contiene el id?
    });
    
    describe("getProduct",()=>{
        it("should return true if putting a ID the function print the product identified by the productID ")
    });
    it("should throw an error if Id doesn't exist",()=>{
        expect(()=> getProduct(id)).toThrow("You must insert a valid id");//
    })
    
    describe("updateProduct",()=>{
        it("should return true if putting a value related to a specific ID the function uptade the price or the name of the product")
    });
    it("should throw an error if the product doesn't exist",()=>{
        expect(()=>updateProduct(productName)).toThrow("The product doesn't exist")
    })