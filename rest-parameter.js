function calculation(...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    
    console.log(sum);
};
calculation(1,2,3,4,5)

// rest parameter with other parameter 

function calculation1(a,b,...numbers1){
    let sum1=0;
    for(let i of numbers1){
        sum1=sum1+i;
    }
    console.log(sum1);
    
};
calculation1(10,20,1,2,3,4,5)