//  For Add Item to cart

export const addCart = (product)=>{
    return {
        type:"ADDITEM",
        payload:product
    }
}
//  For Delete Item Fron cart

export const delCart = (product)=>{
    return {
        type:"DELITEM",
        payload:product
    }
}