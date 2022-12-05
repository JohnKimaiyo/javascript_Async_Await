async function myDisplay(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function() {resolve("react developer")},3000);
    })
    console.log(await myPromise);
}

myDisplay();