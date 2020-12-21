'use strict';
let count = 0;  // クイズの正解数

// 質問と答えを配列で格納
let quiz = [
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

// クイズを繰り返し表示
for (let i = 0; i < quiz.length; i++) {
  let your_answer = prompt(quiz[i].question);
  if (your_answer == quiz[i].answer) {
    console.log("正解！");
    count++;
  } else {
    console.log("はずれ！");
  }
}

// ゲームの結果を表示する
console.log(quiz.length + "問中、" + count + "問正解でした！");