function applyDiscount(price, discountPercentage = 10) {
    
    const discountAmount = (price * discountPercentage) / 100
    
    
    const discountedPrice = price - discountAmount
    
    
    return discountedPrice
}


console.log(applyDiscount(100)); 
console.log(applyDiscount(100, 20)); 