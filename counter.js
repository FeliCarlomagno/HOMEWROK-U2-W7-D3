const timeReference = document.getElementById("counter");

counterValue = parseInt(sessionStorage.getItem("counter")) || 0;

const applyToDom = function () {
  timeReference.innerText = counterValue;
};
applyToDom();

function increaseCounter() {
  counterValue = counterValue + 1;
  applyToDom();
  sessionStorage.setItem("counter", counterValue);
}

setInterval(increaseCounter, 1000);
