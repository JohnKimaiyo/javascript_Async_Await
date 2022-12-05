async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("react developer john");
    }, 2000);
  });
  console.log(await myPromise);
}

myDisplay();
