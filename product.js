let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

function addProduct(nameOfProduct, price){
    return products.push({NombreProducto: nameOfProduct,
         Precio: price,
         ID:id++})
}

addProduct("Papel",2.25); addProduct("Espinacas",3.25); addProduct("Pollo",4.25); 
addProduct("Rebanadas",5.25); addProduct("Sal",5.25); addProduct("verduras",5.25);
//console.log(products); //con este console.log veo el array entero después de añadir estos productos

//Creo una función para remover un producto por su id, creo una constante que sea igual al id, imprimo en consola su index para encontrarlo y 
//luego eliminarlo con slice()
function removeProduct(id){
products.splice(id,1)
//console.log( products)//"Array después de haber quitado un elemento:"
}

removeProduct(5);//inicializo función


function getProducts(ID){
    return console.log( products.find((product) => product.ID === ID))}//"Función que busca un producto por su id:",
    
getProducts(3);//inicializo función


function updateProduct(id,nameOfProduct, price){//debería actualizar un producto por su id.
    removeProduct(id)
    addProduct(nameOfProduct, price)
    console.log(products)
}

updateProduct(3,"Banana",7.20);//inicializo función










module.exports= {addProduct}

//{addProduct,removeProduct,getProduct,updateProduct}