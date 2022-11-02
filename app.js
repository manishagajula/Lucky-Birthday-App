let dateInput = document.querySelector("#dateInput");
let numberInput = document.querySelector("#numberInput");
let submitBtn = document.querySelector("#submitBtn");
let resultText = document.querySelector("#result");
let privacyMsg = document.querySelector("#privacyMsg");
let btnClose = document.querySelector("#close-button");
let footer = document.querySelector(".footer");
let resultCard = document.querySelector(".result-card");
const privacy = document.querySelector(".privacy");
const resetBtn = document.querySelector("#resetBtn");

window.addEventListener("load", hidePrivacyMsg);
// privacyMsg.style.display = "none";
resultCard.style.display = "none";

function hidePrivacyMsg() {
  setTimeout(function () {
    privacyMsg.style.display = "none";
  }, 10000);
}

function displayPrivacyMsg() {
  privacyMsg.style.display = "block";
  hidePrivacyMsg();
}

function btnClickHandler() {
  const dateValue = dateInput.value;
  const luckyNumber = numberInput.value;
  console.log(dateValue);
  console.log(luckyNumber);

  let birthDate = parseInt(dateValue.split("-").join(""));
  console.log(birthDate);
  console.log(typeof birthDate);
  // let year = birthDate[0];
  // let month = birthDate[1];
  // let date = birthDate[2];
  // console.log(year);
  // console.log(month);
  // console.log(date);
  if (dateValue !== "" && luckyNumber !== "") {
    let sum = 0;
    while (birthDate > 0) {
      let remainder;
      remainder = birthDate % 10;
      sum = sum + remainder;
      // console.log(remainder);
      birthDate = Math.floor(birthDate / 10);
    }
    console.log("Sum is ", sum);

    const result = sum % luckyNumber === 0 ? true : false;

    if (result) {
      resultText.innerHTML = `
    <p>Congratulations! your birthday is lucky. </p>
    <img src="lucky-giphy.gif" width="300px" height="250px" alt="celebration gif">
    `;
    } else {
      resultText.innerHTML = `
    <p>Sorry, your birthday is not lucky.</p
    <p>You missed by ${sum % luckyNumber} days</p>
    <img src="unlucky-giphy.gif" width="300px" height="250px" alt="sad gif">
    `;
    }

    footer.style.position = "static";
    resultCard.style.display = "block";
  } else if (dateValue === "" && luckyNumber === "") {
    alert("Please enter both the input values");
  } else if (dateValue === "" && luckyNumber !== "") {
    alert("Please enter your date of birth");
  } else if (dateValue !== "" && luckyNumber === "") {
    alert("Please enter your lucky number");
  }
}

function hidePrivacy() {
  privacyMsg.style.display = "none";
}

function resetAll() {
  dateInput.value = "";
  numberInput.value = "";
  resultCard.style.display = "none";
  footer.style.position = "fixed";
}

submitBtn.addEventListener("click", btnClickHandler);
btnClose.addEventListener("click", hidePrivacy);
privacy.addEventListener("click", displayPrivacyMsg);
resetBtn.addEventListener("click", resetAll);
