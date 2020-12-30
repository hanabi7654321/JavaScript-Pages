const quiz = [
  {
    question : '次の人物のうち、スペイン出身の画家はだれ？',
    answers : [
      'ゴッホ',
      'ダリ',  
      'モネ',
      'ゴーギャン'
    ],
    correct : 'ダリ'
  }, {
    question : '2020年の流行語大賞は？',
    answers : [
      '鬼滅の刃',
      'あつ森',  
      '３蜜',
      'テレワーク'
    ],
    correct : '３蜜'
  }, {
    question : 'ランサムウェア「WannaCry」で有名になったエクスプロイトといえば？',
    answers : [
      'ブルートゥース',
      'ブルーノマーズ',  
      'ブルーハーツ',
      'エターナルブルー'
    ],
    correct : 'エターナルブルー'
  }
];


const $question = document.getElementById('js-quiz');
const $buttons = document.querySelectorAll('.btn');
const $count = document.getElementById('quiz-count')

const quizLen = quiz.length;　// クイズの数
let quizCount = 0;　//　何番目のクイズか
let score = 0;
let isAnswered;


// 初期化
const init = () => {
  
  isAnswered = false;
  $count.textContent = '第' + (quizCount + 1) + '問目';
  // 問題文をHTMLに反映させる
  $question.textContent = quiz[quizCount].question;
  
  // 選択肢をHTMLに反映させる
  const btnLen = $buttons.length; // 選択肢の数
  let btnIndex = 0; // 何番目の問題の選択肢か
  while (btnIndex < btnLen) {
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};



  
 // ボタンをクリックしたら正誤判定
const judge = (elm) => {
  if (isAnswered) {
    return;
  } 
  isAnswered = true;
  if ( elm.textContent === quiz[quizCount].correct) {
    elm.classList.add('correct'); // 正解クラスadd
    setTimeout(() => {
      elm.classList.remove('correct');// 正解クラスremove
    }, 2500);
    score++;    
  } else {
    elm.classList.add('wrong');　// 不正解クラスadd
    setTimeout(() => {
      elm.classList.remove('wrong'); // 不正解クラスremove
    }, 2500);
  }
  setTimeout(goToNext,2500);  
};  





// 次の問題へ
const goToNext = () => {
  quizCount++;
  
  if (quizCount < quizLen) {
    init(quizCount);
  } else {
    showEnd();
  }
};

// 最後の問題が終わったら
const showEnd = () => {
  const result = Math.round((score/quizLen)*100); // 正解率
  $count.textContent = 'お疲れさまでした！'
  $question.textContent = `あなたの正解率は${result}%です`;

  const $items = document.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

//クイズ毎にクリックイベントを設定
let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while (answersIndex < answersLen) {
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);　// judge関数へ
  });
  answersIndex++;
}

