let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let yourWeightInKilograms = parseFloat(
    document.getElementById("yourWeightInKilograms").value
  );
  let yourHeightInMeters = parseFloat(
    document.getElementById("yourHeightInMeters").value
  );
  let yourBMI = yourWeightInKilograms / yourHeightInMeters ** 2;

  let youAre;
  switch (true) {
    case yourBMI < 18.5:
      youAre = "you are underweight";
      break;
    case yourBMI <= 24.9:
      youAre = "you are normal";
      break;
    case yourBMI <= 29.9:
      youAre = "you are Pre-Obesity";
      break;
    case yourBMI <= 34.9:
      youAre = "you are Obesity I";
      break;
    case yourBMI <= 39.9:
      youAre = "you are Obesity II";
      break;
    case yourBMI > 39.9:
      youAre = "you are Obesity III";
      break;
    default:
      alert("Something went wrong, do it again");
      location.reload();
  }
  if (!isNaN(yourBMI)) {
    document.getElementById(
      "showBMI"
    ).innerHTML = `Your BMI is ${yourBMI} and  ${youAre}`;
  }
});
