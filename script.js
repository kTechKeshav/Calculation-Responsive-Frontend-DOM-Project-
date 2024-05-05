const text1 = document.getElementById("input1");
const text2 = document.getElementById("input2");

const scr = document.getElementById("screen");

const addbtn = document.getElementById("a");
const subbtn = document.getElementById("s");
const mulbtn = document.getElementById("m");
const divbtn = document.getElementById("d");
const clrbtn = document.getElementById("clear");

addbtn.addEventListener("click", () => {
  let inp1 = parseInt(text1.value);
  let inp2 = parseInt(text2.value);
  if (isNaN(inp1) || isNaN(inp2) || (inp1 === 0 && inp2 === 0)) {
    scr.innerHTML = "❌";
  } else {
    let result = inp1 + inp2;
    scr.innerHTML = result + "";
  }
});
subbtn.addEventListener("click", () => {
  let inp1 = parseInt(text1.value);
  let inp2 = parseInt(text2.value);
  if (isNaN(inp1) || isNaN(inp2) || (inp1 === 0 && inp2 === 0)) {
    scr.innerHTML = "❌";
  } else {
    let result = inp1 - inp2;
    scr.innerHTML = result + "";
  }
});
mulbtn.addEventListener("click", () => {
  let inp1 = parseInt(text1.value);
  let inp2 = parseInt(text2.value);
  if (isNaN(inp1) || isNaN(inp2) || (inp1 === 0 && inp2 === 0)) {
    scr.innerHTML = "❌";
  } else {
    let result = inp1 * inp2;
    scr.innerHTML = result + "";
  }
});
divbtn.addEventListener("click", () => {
  let inp1 = parseInt(text1.value);
  let inp2 = parseInt(text2.value);
  if (isNaN(inp1) || isNaN(inp2) || (inp1 === 0 && inp2 === 0)) {
    scr.innerHTML = "❌";
  } else {
      if(inp2 == 0){
            scr.innerHTML = "❌";
      }else{
            let result = inp1 / inp2;
            result = result.toFixed(3)
            scr.innerHTML = result + "";
      }
  }
});

clrbtn.addEventListener("click",()=>{
      text1.value = '';
      text2.value = '';
      scr.innerHTML = "❣️"
})
