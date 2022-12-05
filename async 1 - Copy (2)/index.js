async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){resolve("React Developer John");},3000);
    });
    console.log(await myPromise);
}

myDisplay();