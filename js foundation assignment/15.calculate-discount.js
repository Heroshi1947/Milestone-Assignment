const discountPercentage = (orginalPrice, discountedPrice) => {
    var  percent = (orginalPrice-discountedPrice)/orginalPrice * 100 ;
    console.log("The discount on this product is : "+percent+"%");
}

discountPercentage(800,400)