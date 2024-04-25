const func = (delay) =>
  setTimeout(() => {
    console.log("Hello World. " + delay);
    func((delay += 1));
  }, delay * 1000);

func(1);
