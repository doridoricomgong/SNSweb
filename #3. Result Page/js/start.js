const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 14;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var qIdx = 0;

function calResult(){
  console.log(select);
  var result = 0;
  for(let i=0; i<select.length ; i++){
    for(let j=0; j<select[i]; j++)
      result ++;
  }
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = "당신은 " + point + "명의 사람에게 상처를 입혔어요...";

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = './img/newman.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function addAnswer(answerText, idx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  // answer.classList.add('my-2');
  answer.classList.add('py-2');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  answer.classList.add('transparent');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  var b = document.getElementById("picture");
  if(qIdx==0){
    //b.innerHTML =
    //`
    //  <img src='./img/designsources/background/age/age0.png' value="1"/>
    //`
  } else if(qIdx <= 4 || qIdx >10){
    $(".jojak").removeClass("clear");
    //b.innerHTML =
    //`
    //  <img src='./img/designsources/progress/progress0.png' style="margin-top:6em" value="1"/>
    //`
    $('#picture').attr('src', "./img/designsources/progress/progress0.png");
    $('#picture').attr('style', "margin-top:6em");
    $('#picture').attr('value', "1");
  } else {
    $(".jojak").addClass("clear");
    if(qIdx==5){
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo5.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo5.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }else if(qIdx==6){
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo6.png'style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo6.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }else if(qIdx==7){
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo7.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo7.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }else if(qIdx==8){
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo8.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo8.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }else if(qIdx==9){
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo9.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo9.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }else{
      //b.innerHTML =
      //`
      //<img src='./img/designsources/question/gogo10.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
      //`
      $('#picture').attr('src', "./img/designsources/question/gogo10.png");
      $('#picture').attr('style', "margin-top:5em");
      $('#picture').attr('style', "margin-bottom:3.5em");
      $('#picture').attr('value', "1");
    }
  }

    // b.style.backgroundImage = "url('../img/designsources/age/age10.png')";
    // b.style.backgroundSize="contain";
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {

      if(qIdx >= 0 && qIdx <= 4  || qna >10) {
        select[qIdx] = $("#picture").attr("value");
      }
       else {
         //var target = qnaList[qIdx].a[idx].type;

        //for(let i = 0; i < target.length; i++){
        //   select[target[i]] += 1;
        //}
        select[qIdx] = qnaList[qIdx].a[idx].type[0];
       }

      $('#start').css("display","none");
      // $("#picture img").addClass("clear");
      // if(qIdx > 10) $("#picture img").removeClass("clear");
      console.log(qIdx);
      for(let i = 0; i < children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },450)
  }, false);
}

function goNext(){
  if(qIdx === endPoint){
    goResult();
    return;
  }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, i);
  }
  // var status = document.querySelector('.statusBar');
  // status.style.width = (100/endPoint) * (qIdx+1) + '%';
}


function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "grid";
    }, 450)
    // let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function changehead_l() {
  var head_num = $('#head_img').attr('value');

  if(head_num <= 1) head_num = 8;
  else head_num--;
  $('#head_img').attr('value', head_num);
  $('#head_img').attr('src', "./img/designsources/character/head/head" + head_num + ".png");

}
function changehead_r() {
  var head_num = $('#head_img').attr('value');

  if(head_num >= 8) head_num = 1;
  else head_num++;
  $('#head_img').attr('value', head_num);
  $('#head_img').attr('src', "./img/designsources/character/head/head" + head_num + ".png");
}

function changeeye_l() {
  var eye_num = $('#eye_img').attr('value');

  if(eye_num <= 1) eye_num = 6;
  else eye_num--;
  $('#eye_img').attr('value', eye_num);
  $('#eye_img').attr('src', "./img/designsources/character/eye/eye" + eye_num + ".png");

}
function changeeye_r() {
  var eye_num = $('#eye_img').attr('value');

  if(eye_num >= 6) eye_num = 1;
  else eye_num++;
  $('#eye_img').attr('value', eye_num);
  $('#eye_img').attr('src', "./img/designsources/character/eye/eye" + eye_num + ".png");

}

function changeclothes_l() {
  var clothes_num = $('#clothes_img').attr('value');

  if(clothes_num <= 1) clothes_num = 3;
  else clothes_num--;
  $('#clothes_img').attr('value', clothes_num);
  $('#clothes_img').attr('src', "./img/designsources/character/clothes/clothes" + clothes_num + ".png");

}
function changeclothes_r() {
  var clothes_num = $('#clothes_img').attr('value');

  if(clothes_num >= 3) clothes_num = 1;
  else clothes_num++;
  $('#clothes_img').attr('value', clothes_num);
  $('#clothes_img').attr('src', "./img/designsources/character/clothes/clothes" + clothes_num + ".png");

}

function lchangeimg()  {
  var img_num = $('#picture').attr('value');

  if(qIdx==0) {
    if(img_num <= 0) img_num = 6;
    else img_num--;
    $('#picture').attr('value', img_num);
    $('#picture').attr('src', "./img/designsources/age/age" + img_num + ".png");
//    $("#picture").html(
//      `
//      <img src='../img/designsources/age/age` + img_num + `.png' value="` + img_num + `"/>
//      `);
  } else if(qIdx >= 1 && qIdx <= 4 || qIdx >10){
    if(img_num <= 0) img_num = 10;
    else img_num--;
    //$("#picture").html(
    //  `
    //  <img src='../img/designsources/progress/progress` + img_num + `.png' value="` + img_num + `"/>
    //  `);
    $('#picture').attr('value', img_num);
    $('#picture').attr('src', "./img/designsources/progress/progress" + img_num + ".png");
  }

}

function rchangeimg()  {

  var img_num = $('#picture').attr('value');


    if(qIdx==0) {
      if(img_num >= 6) img_num = 0;
      else img_num++;
      $('#picture').attr('value', img_num);
      $('#picture').attr('src', "./img/designsources/age/age" + img_num + ".png");
//      $("#picture").html(
//        `
//        <img src='../img/designsources/age/age` + img_num + `.png' value="` + img_num + `"/>
//        `);
    } else if(qIdx >= 1 && qIdx <= 4  || qIdx >10){
      if(img_num >= 10) img_num = 0;
      else img_num++;
      //$("#picture").html(
      //  `
      //  <img src='../img/designsources/progress/progress` + img_num + `.png' value="` + img_num + `"/>
      //  `);
      $('#picture').attr('value', img_num);
      $('#picture').attr('src', "./img/designsources/progress/progress" + img_num + ".png");
    }

}
