const clock = document.getElementById("clock");

const clockInterval = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
};

const clockInit = () => {
  clockInterval();
  setInterval(clockInterval, 60000);
};

clockInit();
