const button = document.querySelector("#zar");
const speech = document.getElementById("paragraph");
const adviceNo = document.getElementById("advice-no");

function renderAdviceContent(content, id) {
  speech.textContent = content;
  adviceNo.textContent = id;
}

async function getDataFromApi() {
  const url = "https://api.adviceslip.com/advice";
  let advice = "";
  let id;

  try {
    const response = await fetch(url);
    const data = await response.json();
    advice = data.slip.advice;
    id = `Advice #${data.slip.id}`;
    renderAdviceContent(advice, id);
    // console.log(advice);
    // console.log(id);
    console.log(data);
    return advice;
  } catch (eroare) {
    console.log(eroare);
  }
}

getDataFromApi();

button.addEventListener("click", getDataFromApi);
