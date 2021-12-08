const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const gamescreen = document.querySelector("#screen");
const startbutton = document.querySelector("#setbutton");

const endPoint = 11;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var qIdx = 0;

function calResult() {
    console.log(select);
    var result = 0;
    for (let i = 0; i < endPoint; i++) {
        for (let j = 0; j < select[i]; j++)
            result++;
    }
    return result;
}

function setResult() {
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    var strTest = `안녕하세요?\n\n반가워요. 만나게 되어 기뻐요...\n음.\n\n\n실은, 제가 찾고있는 사람이 당신은 아닐까 하는 생각이 들어서 앞의 질문들을 여쭤봤어요.\n\n... 음. 그렇군요\n\n\n당신은 아실지 모르겠지만, ` + point + `명의 사람들이 슬퍼하고 있어요.\n왜냐면,\n\n안타깝게도 당신이 그들을 그렇게 만들었거든요.\n\n\n많이 갑작스러웠나요?\n의아하신 눈치네요.\n그러니까, 제말은..
    \n당신은 나쁜 사람이 아니에요. 
    \n하지만 앞선 질문들로 저는 당신에 대한 정보를 받아볼 수 있었어요.
    \n당신이 그들을 어떻게 슬프게, 아프게 했는지 말이에요.   
    \n\n\n당신이 그 ` + point + `명의 사람들에 대해 알기는 힘들거에요.
    \n마치 제가 누구인지 당신은 모르시는 것 처럼요.
    \n\n\n이상한 이야기 인 것 같나요?
    \n제가 거짓말을 하고 있는 것 처럼 느껴지시나요?
    \n당신이 믿고싶은대로 믿어도 좋아요.
    \n\n하지만 당신이 정말로 제게 솔직했다면, 글쎄요..
    \n아마도 짚이는 구석이 분명 있을거에요.
    \n\n솔직하게 생각해봐요. 
    \n당신은 오늘 저와 마주하는 동안 정말, 당신이었나요?
    \n저 말이에요. 
    \n\n그래요, 당신이 마주하고 있는 이 화면이요.`;
    var result = strTest.replace(/\n/g, '<br/>');
    resultName.innerHTML = result;
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        }, 450)
    })
    setResult();
}

function addAnswer(answerText, idx) {
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
    if (qIdx == 0) {
        //b.innerHTML =
        //`
        //  <img src='./img/designsources/background/age/age0.png' value="1"/>
        //`
    } else if (qIdx <= 4 || qIdx > 10) {
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
        if (qIdx == 5) {
            //b.innerHTML =
            //`
            //<img src='./img/designsources/question/gogo5.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
            //`
            $('#picture').attr('src', "./img/designsources/question/gogo5.png");
            $('#picture').attr('style', "margin-top:5em");
            $('#picture').attr('style', "margin-bottom:3.5em");
            $('#picture').attr('value', "1");
        } else if (qIdx == 6) {
            //b.innerHTML =
            //`
            //<img src='./img/designsources/question/gogo6.png'style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
            //`
            $('#picture').attr('src', "./img/designsources/question/gogo6.png");
            $('#picture').attr('style', "margin-top:5em");
            $('#picture').attr('style', "margin-bottom:3.5em");
            $('#picture').attr('value', "1");
        } else if (qIdx == 7) {
            //b.innerHTML =
            //`
            //<img src='./img/designsources/question/gogo7.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
            //`
            $('#picture').attr('src', "./img/designsources/question/gogo7.png");
            $('#picture').attr('style', "margin-top:5em");
            $('#picture').attr('style', "margin-bottom:3.5em");
            $('#picture').attr('value', "1");
        } else if (qIdx == 8) {
            //b.innerHTML =
            //`
            //<img src='./img/designsources/question/gogo8.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
            //`
            $('#picture').attr('src', "./img/designsources/question/gogo8.png");
            $('#picture').attr('style', "margin-top:5em");
            $('#picture').attr('style', "margin-bottom:3.5em");
            $('#picture').attr('value', "1");
        } else if (qIdx == 9) {
            //b.innerHTML =
            //`
            //<img src='./img/designsources/question/gogo9.png' style="margin-top:5em" style="margin-bottom:3.5em" value="1"/>
            //`
            $('#picture').attr('src', "./img/designsources/question/gogo9.png");
            $('#picture').attr('style', "margin-top:5em");
            $('#picture').attr('style', "margin-bottom:3.5em");
            $('#picture').attr('value', "1");
        } else {
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
    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {

            if (qIdx >= 0 && qIdx <= 4 || qna > 10) {
                select[qIdx] = $("#picture").attr("value");
            } else {
                //var target = qnaList[qIdx].a[idx].type;

                //for(let i = 0; i < target.length; i++){
                //   select[target[i]] += 1;
                //}
                select[qIdx] = qnaList[qIdx].a[idx].type[0];
            }

            $('#start').css("display", "none");
            // $("#picture img").addClass("clear");
            // if(qIdx > 10) $("#picture img").removeClass("clear");
            console.log(qIdx);
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext() {
    if (qIdx === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, i);
    }
    // var status = document.querySelector('.statusBar');
    // status.style.width = (100/endPoint) * (qIdx+1) + '%';
}


function begin() {

    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s"
        setTimeout(() => {
                document.body.style.backgroundImage = "url('./img/background.jpg')";
                startbutton.style.display = "none";
                gamescreen.style.display = "grid";
                main.style.display = "none";
                qna.style.display = "grid";
            }, 450)
            // let qIdx = 0;
        goNext(qIdx);
    }, 450);
}

function lchangeimg() {
    var img_num = $('#picture').attr('value');

    if (qIdx == 0) {
        if (img_num <= 0) img_num = 6;
        else img_num--;
        $('#picture').attr('value', img_num);
        $('#picture').attr('src', "./img/designsources/age/age" + img_num + ".png");
        //    $("#picture").html(
        //      `
        //      <img src='../img/designsources/age/age` + img_num + `.png' value="` + img_num + `"/>
        //      `);
    } else if (qIdx >= 1 && qIdx <= 4 || qIdx > 10) {
        if (img_num <= 0) img_num = 10;
        else img_num--;
        //$("#picture").html(
        //  `
        //  <img src='../img/designsources/progress/progress` + img_num + `.png' value="` + img_num + `"/>
        //  `);
        $('#picture').attr('value', img_num);
        $('#picture').attr('src', "./img/designsources/progress/progress" + img_num + ".png");
    }

}

function rchangeimg() {

    var img_num = $('#picture').attr('value');


    if (qIdx == 0) {
        if (img_num >= 6) img_num = 0;
        else img_num++;
        $('#picture').attr('value', img_num);
        $('#picture').attr('src', "./img/designsources/age/age" + img_num + ".png");
        //      $("#picture").html(
        //        `
        //        <img src='../img/designsources/age/age` + img_num + `.png' value="` + img_num + `"/>
        //        `);
    } else if (qIdx >= 1 && qIdx <= 4 || qIdx > 10) {
        if (img_num >= 10) img_num = 0;
        else img_num++;
        //$("#picture").html(
        //  `
        //  <img src='../img/designsources/progress/progress` + img_num + `.png' value="` + img_num + `"/>
        //  `);
        $('#picture').attr('value', img_num);
        $('#picture').attr('src', "./img/designsources/progress/progress" + img_num + ".png");
    }

}