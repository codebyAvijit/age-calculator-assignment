//fetching the elements by respective id's
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let result = document.getElementById("result");

//fn call onclick event
function handleSubmit() {
  //retrieveing the values
  let dateVal = date.value;
  let monthVal = month.value;
  let yearVal = year.value;
  let currDate = new Date();
  // console.log(dateVal, monthVal, yearVal, currDate);
  if (
    isNaN(dateVal) ||
    isNaN(monthVal) ||
    isNaN(yearVal) ||
    dateVal.length === 0 ||
    monthVal.length === 0 ||
    yearVal.length !== 4 ||
    dateVal > 31 ||
    monthVal > 12 ||
    yearVal > currDate.getFullYear() ||
    dateVal <= 0 ||
    monthVal <= 0 ||
    yearVal <= 0
  ) {
    let displayError = "";
    if (
      isNaN(dateVal) ||
      dateVal <= 0 ||
      dateVal > 31 ||
      dateVal.length === 0
    ) {
      displayError += `<p> Please Enter a Valid Date </p>`;
      // console.log("inside dateVal");
    }
    if (
      isNaN(monthVal) ||
      monthVal <= 0 ||
      monthVal > 12 ||
      monthVal.length === 0
    ) {
      displayError += `<p> Please Enter a Valid Month </p>`;
      // console.log("inside monthVal");
    }
    if (
      isNaN(yearVal) ||
      yearVal.length !== 4 ||
      yearVal >= currDate.getFullYear()
    ) {
      displayError += `<p> Please Enter a Valid Year </p>`;
      // console.log("inside yearVal");
    }
    result.innerHTML = displayError;
    return;
  }
  let resultDate = 0;
  let resultMonth = 0;
  let resultYear = 0;
  if (currDate.getMonth() >= monthVal) {
    resultMonth = currDate.getMonth() + 1 - monthVal; //value starts from 0 so a +1
    resultYear = currDate.getFullYear() - yearVal;
    if (currDate.getDate() < dateVal) {
      resultDate = 30 - dateVal + currDate.getDate();
      resultMonth -= resultMonth;
    } else {
      resultDate = dateVal - currDate.getDate();
    }
  } else {
    resultYear = currDate.getFullYear() - yearVal - 1;
    resultMonth = 12 - monthVal + currDate.getMonth() + 1;
    if (currDate.getDate() < dateVal) {
      resultDate = 30 - dateVal + currDate.getDate();
      resultMonth -= resultMonth;
    } else {
      resultDate = -dateVal + currDate.getDate();
    }
  }
  result.innerHTML = ` <p> Your age is ${resultYear} years ${resultMonth} months and ${resultDate} days`;
}
