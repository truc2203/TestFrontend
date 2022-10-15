let temp = 0;
const showAnswer = (number) => {
  let answer = document.getElementById(`answer${number}`);
  if (number !== temp) {
    if (temp === 0) {
      answer.style.height = `${window.innerWidth < 576 ? '200px' : '110px' }`;
      answer.style.transition = "all 0.5s";
      temp = number;
    } else {
      answer.style.height = `${window.innerWidth < 576 ? '200px' : '110px' }`;
      answer.style.transition = "all 0.5s";
      let answerBefore = document.getElementById(`answer${temp}`);
      answerBefore.style.height = "0px";
      answer.style.transition = "all 0.5s";
      temp = number;
    }
  } else {
    answer.style.height = "0px";
    answer.style.transition = "all 0.5s";
    temp = 0
  }

};
