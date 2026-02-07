function answer(type) {
  let text = "";

  if (type === "dry") {
    text = "Your skin is DRY. Focus on hydration 💧";
  } else if (type === "oily") {
    text = "Your skin is OILY. Use gel-based products ✨";
  } else {
    text = "Your skin is COMBINATION. Balance is key 🌿";
  }

  document.getElementById("result").innerText = text;
}
