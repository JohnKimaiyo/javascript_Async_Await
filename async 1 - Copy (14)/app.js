async function myDisplay(){
    let myPromise = new Promise((function(resolve){
        setTimeout(function(){resolve("react developer")})
    }));
    console.log(await myPromise);
}

myDisplay();