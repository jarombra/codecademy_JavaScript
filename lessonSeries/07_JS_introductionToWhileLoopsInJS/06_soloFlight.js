//Remember to make your condition true outside the loop!

var bool = true;

var soloLoop = function () {
  while (bool) {
      console.log ("Looped once!");
      bool = false;
  }
};

soloLoop();