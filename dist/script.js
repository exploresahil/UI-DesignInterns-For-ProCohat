const one=document.getElementById("one"),two=document.getElementById("two"),three=document.getElementById("three"),four=document.getElementById("four"),five=document.getElementById("five"),nextOne=document.getElementById("nextOne"),nextTwo=document.getElementById("nextTwo"),nextThree=document.getElementById("nextThree"),nextFour=document.getElementById("nextFour"),nextFive=document.getElementById("nextFive"),backOne=document.getElementById("backOne"),backTwo=document.getElementById("backTwo"),backThree=document.getElementById("backThree"),backFour=document.getElementById("backFour");nextOne.addEventListener("click",(function(){one.classList.remove("active"),two.classList.add("active")})),backOne.addEventListener("click",(function(){two.classList.remove("active"),one.classList.add("active")})),nextTwo.addEventListener("click",(function(){two.classList.remove("active"),three.classList.add("active")})),backTwo.addEventListener("click",(function(){three.classList.remove("active"),two.classList.add("active")})),nextThree.addEventListener("click",(function(){three.classList.remove("active"),four.classList.add("active")})),backThree.addEventListener("click",(function(){four.classList.remove("active"),three.classList.add("active")})),nextFour.addEventListener("click",(function(){four.classList.remove("active"),five.classList.add("active")})),backFour.addEventListener("click",(function(){five.classList.remove("active"),four.classList.add("active")})),nextFive.addEventListener("click",(function(){window.location.href="./form.html"}));
//# sourceMappingURL=script.js.map