const changeSlide = (number) => {
  if (number === 1) {
    document.getElementById("slider").style.marginLeft = "0";
  } else if (number !== 1) {
    document.getElementById("slider").style.marginLeft =`-${number-1}00%`;
  } 
};
