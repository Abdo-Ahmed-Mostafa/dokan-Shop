let myInput = document.querySelector(".input");
let myBtt = document.querySelector(".btn");
let myMems = document.querySelector(".mems");
let myH1 = document.querySelector(".textH1  ");
fetch(`https://api.imgflip.com/get_memes`)
  .then((x) => {
    return x.json();
  })
  .then((finel) => {
    let data = finel.data.memes.map((y) => {
      return y;
    });
    myBtt.addEventListener("click", () => {
      if (myInput.value !== "" && myInput.value < 100 && myInput.value >= 0) {
        let rusult = data[`${myInput.value}`];

        let myIneer = `
            <h1 class = "text-danger text-center">${rusult?.name}</h1>
            <img  class = "rounded" src="${rusult?.url}">
            `;

        myMems.innerHTML = myIneer;
      } else if (myInput.value === "" || isNaN(myInput.value)) {
        let myIneer = `
            <h1 class = "text-danger text-center">Not A Number</h1>  
            `;
        myMems.innerHTML = myIneer;
      } else if (myInput.value > 99 || myInput.value < 0) {
        let myIneer = `
            <h1 class = "text-danger text-center">Please Enter Numper From 0 To 99</h1>  
            `;
        myMems.innerHTML = myIneer;
      }
    });
  });
