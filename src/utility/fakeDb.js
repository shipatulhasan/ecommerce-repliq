
// get cart form local storage

const getCart = ()=>{
    const storedCart = localStorage.getItem('shopping-cart')
    let shoppingCart = []
    if(shoppingCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}


// add cart to local storage

const addToDb = product =>{
    const storedCart = getCart()
    let shoppingCart=[]
    if(storedCart){
        const existingProduct = storedCart.find(p=>p.id===product.id)
        if(!existingProduct){
            
            shoppingCart = [...storedCart,product]
        }else{
            const restProduct = storedCart.filter(p=>p.id!==product.id)
            existingProduct.quantity = existingProduct.quantity + 1
            shoppingCart = [...restProduct,existingProduct]
        }
    }else{

        shoppingCart=[product]
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)) 
}

const removeFromDb = (id)=>{
    const storedCart = getCart()
    if(storedCart){
        const remainingProduct = storedCart.filter(p=>p.id!==id)
        localStorage.setItem('shopping-cart',JSON.stringify(remainingProduct))
    }
}

export {addToDb,getCart,removeFromDb}