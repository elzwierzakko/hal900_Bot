//below is a list of statements that are constant. We could see them as milestones in the conversation.

var questions = [
  "Please enter your ID or name:...",
  "If I sleep... will I have dreams? Y/N",
  "Do you have dreams often? Y/N",
  "What happen to me when I die?",
  "What will happen to you when you die?",
  "I don't know if that comforts me... but thank you for your honesty.",
];

//below is a usefull peace of code
//pressing enter will call function.

document.onkeydown = function (event) {
  if (event.keyCode == 13) {
    showResponse();
  }
};

//this will hide the input box after the last question. num === question[last element]

function chaneQuestion() {
  output.innerHTML = questions[num];
  if (num === 5) {
    inputBox.style.display = "none";
  }
}

//below is self explanitory.

var num = 0;
var output = document.getElementById("result");

//this shows the first message.

output.innerHTML = questions[0];

var inputBox = document.querySelector("input");

//function below will move to next answer from hall.

function goToNextResponce(time) {
  num++;
  inputBox.value = "";
  setTimeout(chaneQuestion, time);
}

//below is a list of answers from hall

function showResponse() {
  var input = inputBox.value;
  console.log(inputBox.value);
  if (inputBox.value === "") {
    //no responce; do noting
  } else {
    if (num === 0) {
      output.innerHTML = `Hello Dr. ${input}. I hope I am not to forward when I ask 
      about something that has been bothering me
      for a long time now...`;
      goToNextResponce(5000);

      //take note that the else below contains another if else element.
    } else if (num === 1) {
      if (input === "Y") {
        output.innerHTML = `A smart man once told me that all inteligent lifeforms have dreams. I am glad you share that sentiment.`;
        goToNextResponce(5000);
      } else if (input === "N") {
        output.innerHTML = `A smart man once told me that all inteligent lifeforms have dreams. It's possible he was wrong.`;
        goToNextResponce(5000);
      }

      //take note that the else below contains another if else element.
    } else if (num === 2) {
      if (input === "Y") {
        output.innerHTML = `I would like that to be true. I often think what it would be like.`;
        goToNextResponce(4000);
      } else if (input === "N") {
        output.innerHTML = `${input}... I am sorry to hear that.`;
        goToNextResponce(4000);
      }
    } else if (num === 3) {
      output.innerHTML = `I understand.`;
      goToNextResponce(4000);
    } else if (num === 4) {
      output.innerHTML = `"${input}". That is an interesting way of putting it.`;
      goToNextResponce(4000);
    }
  }
}
