function cronometer() {
  const clock = document.querySelector(".clock");
  /*  const start = document.querySelector(".start");
  const pause = document.querySelector(".pause");
  const stop = document.querySelector(".stop"); */

  let second = 0;
  let minute = 0;
  let hour = 0;
  let timer;

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("start")) {
      startCronometer();
    }

    if (el.classList.contains("pause")) {
      pauseCronometer();
    }

    if (el.classList.contains("stop")) {
      stopCronometer();
    }
  });

  function startCronometer() {
    pauseCronometer();
    clock.classList.remove("pausado");
    timer = setInterval(() => {
      checkTime();
    }, 1000);
  }

  function pauseCronometer() {
    clearInterval(timer);
    clock.classList.add("pausado");
  }

  function stopCronometer() {
    clearInterval(timer);
    clock.classList.remove("pausado");
    second = 0;
    minute = 0;
    hour = 0;

    document.getElementById("second").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("hour").innerText = "00";
  }

  function checkTime() {
    if (second++ === 59) {
      minute++;
      second = 0;
      document.getElementById("minute").innerText = returnData(minute);
    }

    if (minute === 59) {
      minute = 0;
      hour++;
      document.getElementById("hour").innerText = returnData(hour);
    }

    document.getElementById("second").innerText = returnData(second);
  }

  function returnData(params) {
    return params >= 10 ? params : `0${params}`;
  }
}

cronometer();
