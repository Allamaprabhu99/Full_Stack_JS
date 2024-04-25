let counter = 1;

const intervalId = (delay) =>
  setInterval(() => {
    console.log("Hello World." + delay);

    if (counter === 5) {
      counter = 1;
      intervalId(delay + 1);
    }
  },delay* 1);
intervalId(100);