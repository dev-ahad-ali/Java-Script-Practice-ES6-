var billGates={
    shirt:true,
    shirtColor:"offWhite",
    sweater:true,
    sweaterColor:"gray"
}

for(let props in billGates){
    console.log(props) // Only properties will show
    console.log(billGates[props]) // Only value will show
    console.log(props+":"+billGates[props]) // Both properties and values will show
}