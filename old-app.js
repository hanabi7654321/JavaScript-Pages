'use strict';


// 質問と答えを配列で格納
const quiz = [
  {
    question: "連想配列を英語で何といいますか？",
    answer: "associative array"
  },
  {
    question: "進捗を英語で何といいますか？",
    answer: "progress"
  },
  {
    question: "使用を英語で何といいますか？",
    answer: "specification"
  },
];


document.getElementById("quiz-1").onclick = function() {
  // クイズを繰り返し表示
  let count = 0;  // クイズの正解数
  for (let i = 0; i < quiz.length; i++) {
    let your_answer = prompt(quiz[i].question);
    if (your_answer == quiz[i].answer) {
      console.log("正解！");
      count++;
    } else {
      console.log("はずれ！");
    }
  }
  document.write(quiz.length + "問中、" + count + "問正解でした！");
  document.write("<a href='http://localhost:8000/index.html'>もどる</a>");
}


// ゲームの結果を表示する