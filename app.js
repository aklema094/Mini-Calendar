const monthel = document.querySelector(".month-name");
const dayel = document.querySelector(".day-name");
const dayNumel = document.querySelector(".day-number");
const yearel = document.querySelector(".year");

const currentDate = new Date();
console.log("Today date is : ",currentDate);
monthel.innerText =  currentDate.toLocaleDateString("en",{
   month:"long"
});
dayel.innerText = currentDate.toLocaleDateString("en",{
    weekday:"long"
 });
dayNumel.innerText = currentDate.getDate();
yearel.innerText = currentDate.getFullYear();



