

const carRent =(days , carType) => {
    if(carType == 'Economy'){
        var cost = days*4000
        console.log("The total rent of your car is :", cost);
    } else if ( carType == 'Midsize'){
        var cost = days*10000
        console.log("The total rent of your car is :", cost);
    } else if(carType == 'Luxury') {
        var cost = days*20000 
        console.log("The total rent of your car is :", cost);
    }
}

// example function 
carRent(6,'Midsize')