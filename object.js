// Normal Object 

var billGates={
    shirt:true,
    shirtColor:"offWhite",
    sweater:true,
    sweaterColor:"gray"
}

console.log(billGates['sweater']);

// Advance/Nested Object 

var billGatesPro={
    shirt:{
        color:"offWhite",
        price:"230USD",
        quality:"GOOD"
    },
    sweater:{
        color:"gray",
        price:"250USD",
        quality:"GOOD"
    }
}

console.log(billGatesPro['sweater']['price'])