const cardHolder = document.querySelector("#name"),
  btn = document.querySelector("#btn"),
  cardNumber = document.querySelector("#card-num"),
  month = document.querySelector("#month"),
  year = document.querySelector("#year"),
  cvc = document.querySelector("#cvcnum"),
  message = document.querySelectorAll(".message"),
  confirm = document.querySelector("#again");

const cardHolderElement = document.querySelector(".cardHolder"),
  cardNumberElement = document.querySelector(".cardNum"),
  cardDateElement = document.querySelector(".cardDate"),
  cvcElement = document.querySelector(".cvc");

cardHolder.addEventListener("input", updateCardHolder);
cardNumber.addEventListener("input", updateCardNumber);
month.addEventListener("input", updateCardDate);
year.addEventListener("input", updateCardDate);
cvc.addEventListener("input", updateCVC);

function updateCardHolder() {
  cardHolderElement.textContent = cardHolder.value;
}

function updateCardNumber() {
  const cardNum = cardNumber.value;
  cardNumberElement.textContent = formatCardNumber(cardNum);
}

function updateCardDate() {
  const monthInput = month.value.padStart(2, "0");
  const yearInput = year.value.padStart(2, "0");
  cardDateElement.textContent = `${monthInput}/${yearInput}`;
}

function updateCVC() {
  cvcElement.textContent = cvc.value;
}

function formatCardNumber(cardNum) {
  const chunkSize = 4;
  const chunks = [];

  for (let i = 0; i < cardNum.length; i += chunkSize) {
    chunks.push(cardNum.slice(i, i + chunkSize));
  }
  return chunks.join(" ");
}

btn.addEventListener("click", function () {
  let letters = /^[A-Za-z]+$/;
  let numbers = /^[0-9]+$/;

  if (
    cardHolder.value == "" ||
    cardHolder.value == null ||
    cardNumber.value == "" ||
    cardNumber.value == null ||
    month.value == "" ||
    month.value == null ||
    year.value == "" ||
    year.value == null ||
    cvc.value == "" ||
    cvc.value == null
  ) {
    for (let i = 0; i < message.length; i++) {
      message[i].innerText = "Can't be empty";
    }
    return false;
  } else {
    if (cardHolder.value.match(letters)) {
      document.querySelector("#page1").classList.add("display");
      document.querySelector("#page2").classList.remove("display");
    } else {
      document.querySelector("#alpha").innerText =
        "Wrong format, Alphabets only!";
      return false;
    }

    if (cardNumber.value.match(numbers)) {
      document.querySelector("#page1").classList.add("display");
      document.querySelector("#page2").classList.remove("display");
    } else {
      document.querySelector("#onlynum").innerText =
        "Wrong format, Numbers only!";
      return false;
    }
  }
});

confirm.addEventListener("click", function () {
  location.reload();
  document.querySelector("#page2").classList.add("display");
  document.querySelector("#page1").classList.remove("display");
});
