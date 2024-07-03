setInterval(() => {
  // create date , and set necessary variables
  let date = new Date();
  let h = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let s = date.getUTCSeconds();
  let d = date.getUTCDay();

  //set the innerHTML for time
  let meridian = h > 12 ? "PM" : "AM";
  let m = minute < 10 ? `0${minute}` : `${minute}`;

  function setUTCTime(h) {
    switch (h) {
      case h < 10:
        return `0${h}:${m} ${meridian}`;

      case h > 12:
        return `${h - 12}:${m} ${meridian}`;

      default:
        return `${h}:${m} ${meridian}`;
        break;
    }
  }

  let utcTime = setUTCTime(h);
  document.getElementById("time").innerHTML = utcTime;

  //set the innerHTML for day
  function generatedDay(day) {
    switch (day) {
      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      case 7:
        return "Sunday";

      default:
        break;
    }
  }
  document.getElementById("day").innerHTML = generatedDay(d);

  console.log("updated");
}, 1000);
