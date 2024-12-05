const hourElement = document.getElementById("hour");
const dateElement = document.getElementById("date");

const hourStickElement = document.getElementById("hour-stick");
const minStickElement = document.getElementById("min-stick");
const segStickElement = document.getElementById("seg-stick");

const rootStyles = document.documentElement.style;

const days = [
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = () => {
  const date = new Date();

  hourElement.textContent = `${date.getHours()} : ${date.getMinutes()}`;

  dateElement.textContent = `${days[date.getDay() - 1]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  const hoursToDeg =
    date.getHours() <= 12
      ? (date.getHours() * 180) / 6
      : ((date.getHours() - 12) * 180) / 6;

  const minToDeg = (date.getMinutes() * 180) / 30;

  const segToDeg = (date.getSeconds() * 180) / 30;

  rootStyles.setProperty("--rotate-hour", `${hoursToDeg}deg`);
  rootStyles.setProperty("--rotate-min", `${minToDeg}deg`);
  rootStyles.setProperty("--rotate-seg", `${segToDeg}deg`);

  //   console.log(date.getHours());
  //   console.log(date.getMinutes());
  //   console.log(date.getSeconds());
};

getDate();

setInterval(getDate, 1000);

{
  /* 

   00 -> 0 deg
   06 -> 180 deg 
   tales -> x
   12 -> 360 deg
    
    
    
    
    */
}
