function handleKitkat() {
  const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
  setInnerText("chocolate", kitkatCost);
  document.getElementById("kitkat-quantity").value = "";
  total();
}

document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const roseCost = multiplePriceWithQuantity("rose-quantity", 400);
  setInnerText("rose", roseCost);
  document.getElementById("rose-quantity").value = "";
  total();
});
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const diaryCost = multiplePriceWithQuantity("diary-quantity", 100);
  setInnerText("diary", diaryCost);
  document.getElementById("diary-quantity").value = "";
  total();
});
function total(params) {
  const chocolate = stringToNumberConverter("chocolate");
  const rose = stringToNumberConverter("rose");
  const diary = stringToNumberConverter("diary");
  const total = chocolate + rose + diary;
  setInnerText("total", total);
}

function stringToNumberConverter(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function multiplePriceWithQuantity(id, price) {
  const quantity = document.getElementById(id).value;
  const totalPrice = parseInt(quantity) * parseInt(price);
  return totalPrice;
}

function handlePromoCode(params) {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode == "101") {
    const total = stringToNumberConverter("total");
    setInnerText("all-total", total - total * 0.1);
  } else {
    alert("promo code is not correct");
  }
}
