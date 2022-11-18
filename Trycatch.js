const a=2;
const b=6;
try{
    if(a>b){
        console.log("A");
    }else{
        throw new Error("B is greater");
    }
    
} catch(err){
    console.log(err)
}