/* ==========================================================
   위비프렌즈 투자 성향 테스트
   script.js
========================================================== */


/* ==========================================================
   DOM
========================================================== */

const guideCharacter =
document.getElementById("guideCharacter");

const guideMessage =
document.getElementById("guideMessage");

const partnerCharacter =
document.getElementById("partnerCharacter");

const partnerName =
document.getElementById("partnerName");

const partnerReason =
document.getElementById("partnerReason");

const landingPage = document.getElementById("landingPage");
const questionPage = document.getElementById("questionPage");
const loadingPage = document.getElementById("loadingPage");
const resultPage = document.getElementById("resultPage");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const shareBtn = document.getElementById("shareBtn");

const questionNumber = document.getElementById("questionNumber");
const questionPercent = document.getElementById("questionPercent");
const progressFill = document.getElementById("progressFill");

const questionText = document.getElementById("questionText");
const answerContainer = document.getElementById("answerContainer");

const loadingFill = document.getElementById("loadingFill");
const loadingPercent = document.getElementById("loadingPercent");
const loadingMessage = document.getElementById("loadingMessage");


/* ==========================================================
   결과 영역
========================================================== */

const resultTitle = document.getElementById("resultTitle");
const resultSubTitle = document.getElementById("resultSubTitle");

const resultCharacter = document.getElementById("resultCharacter");

const characterQuote = document.getElementById("characterQuote");

const characterDescription =
document.getElementById("characterDescription");

const financeDescription =
document.getElementById("financeDescription");

const strengthList =
document.getElementById("strengthList");

const weaknessList =
document.getElementById("weaknessList");

const interestFill =
document.getElementById("interestFill");

const interestScore =
document.getElementById("interestScore");

const interestLevel =
document.getElementById("interestLevel");

const interestDescription =
document.getElementById("interestDescription");

const recommendContainer =
document.getElementById("recommendContainer");
/* ==========================================================
   전역 변수
========================================================== */

let currentQuestion = 0;

let score = {

    safety:0,

    planning:0,

    profit:0,

    interest:50

};
/* ==========================================================
   페이지 전환
========================================================== */

function showPage(page){

    landingPage.classList.remove("active");
    questionPage.classList.remove("active");
    loadingPage.classList.remove("active");
    resultPage.classList.remove("active");

    page.classList.add("active");

}
/* ==========================================================
   시작
========================================================== */

startBtn.addEventListener("click",()=>{

    currentQuestion=0;

    score={

        safety:0,

        planning:0,

        profit:0,

        interest:50

    };

    showPage(questionPage);

    renderQuestion();

});
/* ==========================================================
   질문 데이터
========================================================== */

const questions = [

/* =======================================================
Q1
======================================================= */

{
    id: 1,

    character: "webee",

    message: "첫 번째 질문이에요!",

    question: "대망의 월급날! 통장에 피 같은 월급이 찍혔을 때 내가 가장 먼저 하는 행동은?",

    answers: [

        {
            text: "묻지도 따지지도 않고 저축 통장으로 바로 이체한다.",
            score:{
                safety:20
            }
        },

        {
            text: "이번 달 예산과 투자 계획표를 먼저 작성한다.",
            score:{
                planning:20
            }
        },

        {
            text: "눈여겨보던 주식이나 ETF 시세를 먼저 확인한다.",
            score:{
                planning:10,
                profit:10
            }
        },

        {
            text: "고생한 나를 위해 사고 싶었던 걸 바로 산다.",
            score:{
                interest:-10
            }
        }

    ]

},

/* =======================================================
Q2
======================================================= */

{

    id:2,

    character:"dalbo",

    message:"시장이 크게 흔들리고 있어요!",

    question:"보유 중인 투자 상품이 하루 만에 -15% 하락했다면?",

    answers:[

        {

            text:"불안해서 매도할지 계속 고민한다.",

            score:{

                safety:20

            }

        },

        {

            text:"공시와 뉴스, 리포트를 찾아 원인을 분석한다.",

            score:{

                planning:20

            }

        },

        {

            text:"위기는 기회! 추가 매수를 한다.",

            score:{

                profit:20

            }

        },

        {

            text:"잠시 앱을 끄고 며칠 더 지켜본다.",

            score:{

                profit:10

            }

        }

    ]

},

/* =======================================================
Q3
======================================================= */

{

    id:3,

    character:"koo",

    message:"친구가 대박 정보를 알려줬대요!",

    question:"친구가 '무조건 오른다!'며 종목을 추천한다면?",

    answers:[

        {

            text:"출처가 불분명하니 정중히 거절한다.",

            score:{

                safety:20

            }

        },

        {

            text:"기업과 재무제표를 직접 조사한다.",

            score:{

                planning:20

            }

        },

        {

            text:"소액으로 한번 투자해본다.",

            score:{

                planning:-10,

                profit:10

            }

        },

        {

            text:"이미 알고 있던 산업이라 관련 정보를 이야기한다.",

            score:{

                planning:10,

                interest:10

            }

        }

    ]

},

/* =======================================================
Q4
======================================================= */

{

    id:4,

    character:"pudding",

    message:"투자에서 가장 중요한 것은 무엇일까요?",

    question:"내가 가장 중요하게 생각하는 투자 가치는?",

    answers:[

        {

            text:"원금을 지키는 것이 가장 중요하다.",

            score:{

                safety:40

            }

        },

        {

            text:"미래 성장 가능성에 투자한다.",

            score:{

                planning:40

            }

        },

        {

            text:"높은 수익이 가장 중요하다.",

            score:{

                profit:40

            }

        },

        {

            text:"매달 꾸준히 투자하는 습관이 중요하다.",

            score:{

                safety:20,

                planning:20

            }

        }

    ]

},

/* =======================================================
Q5
======================================================= */

{

    id:5,

    character:"bombom",

    message:"경제 뉴스는 얼마나 자주 보시나요?",

    question:"평소 경제 뉴스나 금융 콘텐츠를 소비하는 습관은?",

    answers:[

        {

            text:"거의 보지 않는다.",

            score:{

                interest:-10

            }

        },

        {

            text:"금리와 경제 흐름 정도는 확인한다.",

            score:{

                interest:10

            }

        },

        {

            text:"매일 투자 뉴스와 공시를 확인한다.",

            score:{

                interest:20

            }

        },

        {

            text:"트렌드 속 투자 아이디어를 찾는다.",

            score:{

                interest:20

            }

        }

    ]

},

/* =======================================================
Q6
======================================================= */

{

    id:6,

    character:"duji",

    message:"뜻밖의 여유 자금이 생겼어요!",

    question:"여행 후 예상보다 돈이 남았다면?",

    answers:[

        {

            text:"그대로 저축한다.",

            score:{

                safety:20

            }

        },

        {

            text:"바로 투자에 활용한다.",

            score:{

                profit:10

            }

        },

        {

            text:"다음 여행을 위한 적금에 넣는다.",

            score:{

                planning:10

            }

        },

        {

            text:"사고 싶었던 물건을 산다.",

            score:{

                interest:-10

            }

        }

    ]

},
/* =======================================================
Q7
======================================================= */

{

    id:7,

    character:"dalbo",

    message:"예상치 못한 지출도 대비할 수 있을까요?",

    question:"갑자기 약속이 생겨 계획에 없던 지출이 발생했다면?",

    answers:[

        {

            text:"비상금을 사용한다.",

            score:{

                planning:20

            }

        },

        {

            text:"생활비 계획을 다시 수정한다.",

            score:{

                planning:10

            }

        },

        {

            text:"즐거운 만남이니까 일단 즐긴다.",

            score:{

                planning:-10

            }

        },

        {

            text:"좋은 인맥을 위한 투자라고 생각한다.",

            score:{

                planning:-20

            }

        }

    ]

},

/* =======================================================
Q8
======================================================= */

{

    id:8,

    character:"webee",

    message:"사람들이 나를 어떻게 기억하면 좋을까요?",

    question:"가장 듣고 싶은 칭찬은?",

    answers:[

        {

            text:"믿음직스럽다.",

            score:{

                safety:10

            }

        },

        {

            text:"판단력이 뛰어나다.",

            score:{

                planning:10

            }

        },

        {

            text:"도전적이다.",

            score:{

                profit:10

            }

        },

        {

            text:"트렌드를 잘 안다.",

            score:{}

        }

    ]

},

/* =======================================================
Q9
======================================================= */

{

    id:9,

    character:"koo",

    message:"실패도 경험이 될 수 있어요.",

    question:"투자가 실패했다면 나는?",

    answers:[

        {

            text:"다시는 투자하지 않겠다고 생각한다.",

            score:{

                safety:20

            }

        },

        {

            text:"실패 원인을 분석한다.",

            score:{

                planning:20

            }

        },

        {

            text:"좋은 경험이었다고 생각한다.",

            score:{

                profit:20

            }

        },

        {

            text:"전략을 새롭게 수정한다.",

            score:{

                planning:20,

                profit:20

            }

        }

    ]

},

/* =======================================================
Q10
======================================================= */

{

    id:10,

    character:"bombom",

    message:"10년 후의 나는 어떤 모습일까요?",

    question:"가장 이상적인 경제적 미래는?",

    answers:[

        {

            text:"안정적인 자산을 가진 삶.",

            score:{

                safety:20

            }

        },

        {

            text:"경제적 자유를 이룬 삶.",

            score:{

                profit:20

            }

        },

        {

            text:"돈보다 다양한 경험을 하는 삶.",

            score:{}

        },

        {

            text:"확고한 투자 철학을 가진 삶.",

            score:{

                interest:10

            }

        }

    ]

},

/* =======================================================
Q11
======================================================= */

{

    id:11,

    character:"duji",

    message:"친구들과 투자 이야기를 한다면?",

    question:"재테크 이야기가 나오면 나는?",

    answers:[

        {

            text:"조용히 듣는다.",

            score:{

                safety:10

            }

        },

        {

            text:"시장 분석을 설명한다.",

            score:{

                planning:10,

                interest:10

            }

        },

        {

            text:"내 투자 경험을 이야기한다.",

            score:{

                profit:20,

                interest:10

            }

        },

        {

            text:"새로운 투자 트렌드를 소개한다.",

            score:{

                interest:10

            }

        }

    ]

},

/* =======================================================
Q12
======================================================= */

{

    id:12,

    character:"pudding",

    message:"마지막 질문이에요!",

    question:"1,000만원이 생긴다면 어떻게 사용할까요?",

    answers:[

        {

            text:"전액 예·적금.",

            score:{

                safety:30

            }

        },

        {

            text:"절반은 예금, 절반은 투자.",

            score:{

                safety:10,

                profit:10

            }

        },

        {

            text:"대부분을 성장주에 투자.",

            score:{

                profit:20

            }

        },

        {

            text:"투자와 소비를 적절히 나눈다.",

            score:{

                profit:20,

                interest:-10

            }

        }

    ]

}

];
/* ==========================================================
   질문 출력
========================================================== */

function renderQuestion(){

    const q = questions[currentQuestion];

    /* -------------------------
       진행률
    -------------------------- */

    questionNumber.textContent =
        `Q${currentQuestion+1} / ${questions.length}`;

    const percent =
        Math.round(((currentQuestion+1)/questions.length)*100);

    questionPercent.textContent =
        `${percent}%`;

    progressFill.style.width =
        `${percent}%`;



    /* -------------------------
       캐릭터
    -------------------------- */

    guideCharacter.src =
        `./assets/${q.character}.png`;

    guideMessage.textContent =
        q.message;



    /* -------------------------
       질문
    -------------------------- */

    questionText.textContent =
        q.question;



    /* -------------------------
       기존 버튼 삭제
    -------------------------- */

    answerContainer.innerHTML="";



    /* -------------------------
       보기 생성
    -------------------------- */

    q.answers.forEach(answer=>{

        const button =
            document.createElement("button");

        button.className="answer-btn";

        button.textContent=answer.text;



        button.addEventListener("click",()=>{

            selectAnswer(answer);

        });



        answerContainer.appendChild(button);

    });

}
/* ==========================================================
   답변 선택
========================================================== */

function selectAnswer(answer){

    /* -------------------------
       점수 누적
    -------------------------- */

    score.safety +=
        answer.score.safety || 0;

    score.planning +=
        answer.score.planning || 0;

    score.profit +=
        answer.score.profit || 0;

    score.interest +=
        answer.score.interest || 0;



    /* -------------------------
       관심도 제한
    -------------------------- */

    if(score.interest<10){

        score.interest=10;

    }

    if(score.interest>100){

        score.interest=100;

    }



    /* -------------------------
       다음 질문
    -------------------------- */

    currentQuestion++;



    if(currentQuestion<questions.length){

        renderQuestion();

    }

    else{

        showLoading();

    }

}
/* ==========================================================
   Loading
========================================================== */

function showLoading(){

    showPage(loadingPage);

    const messages=[

        "투자 성향을 분석하는 중입니다.",

        "위비프렌즈가 결과를 정리하고 있어요.",

        "나와 꼭 맞는 캐릭터를 찾고 있어요.",

        "잠시만 기다려주세요."

    ];



    let progress=0;

    loadingFill.style.width="0%";



    const timer=setInterval(()=>{

        progress++;

        loadingFill.style.width=
            progress+"%";

        loadingPercent.textContent=
            progress+"%";



        if(progress%25===0){

            loadingMessage.textContent=

                messages[Math.floor(progress/25)-1];

        }



        if(progress>=100){

            clearInterval(timer);

            calculateResult();

        }

    },18);

}
/* ==========================================================
   결과 데이터
========================================================== */

const resultData = {

    dalbo:{
        name:"달보",
        type:"안정지킴이",
        image:"./assets/dalbo.png",

        quote:"안정이 최고의 투자입니다.",

        description:
        "신중하고 안정적인 선택을 선호하는 투자자입니다. 리스크를 최소화하며 꾸준히 자산을 모아가는 스타일입니다.",

        finance:
        "예·적금, 채권형 상품, 안정형 펀드와 잘 어울립니다.",

        strengths:[
            "계획 없이 투자하지 않는다.",
            "손실 위험을 잘 관리한다.",
            "장기적으로 꾸준한 자산 형성이 가능하다."
        ],

        weaknesses:[
            "높은 수익 기회를 놓칠 수 있다.",
            "변화에 다소 소극적이다."
        ],

        recommend:[
            "우리 WON 적금",
            "우리 SUPER 정기예금",
            "채권형 펀드"
        ],

        partner:"쿠",

        partnerImage:"./assets/cu.png",

        partnerReason:
        "계획적인 쿠와 함께라면 더욱 체계적인 자산관리가 가능합니다."
    },



    webee:{

        name:"위비",

        type:"분석전략가",

        image:"./assets/wibee.png",

        quote:"근거 있는 투자가 가장 강한 투자입니다.",

        description:
        "데이터와 분석을 바탕으로 투자하는 전략가입니다.",

        finance:
        "ETF, 분산투자, 장기투자에 적합합니다.",

        strengths:[
            "논리적인 투자 판단",
            "시장 분석 능력",
            "정보 활용 능력"
        ],

        weaknesses:[
            "결정을 오래 고민하는 편",
            "기회를 놓칠 수도 있음"
        ],

        recommend:[
            "ETF",
            "ISA",
            "우리 WON뱅킹 투자"
        ],

        partner:"푸딩",

        partnerImage:"./assets/puding.png",

        partnerReason:
        "균형 감각이 뛰어난 푸딩이 좋은 파트너입니다."

    },



    koo:{

        name:"쿠",

        type:"계획설계자",

        image:"./assets/cu.png",

        quote:"계획은 최고의 무기입니다.",

        description:
        "목표를 세우고 꾸준히 실천하는 계획형 투자자입니다.",

        finance:
        "장기 적립식 투자와 잘 맞습니다.",

        strengths:[
            "철저한 계획",
            "꾸준한 실행",
            "안정적인 투자 습관"
        ],

        weaknesses:[
            "융통성이 부족할 수 있음",
            "변화 대응이 느릴 수 있음"
        ],

        recommend:[
            "적립식 펀드",
            "연금저축",
            "우리 청년 상품"
        ],

        partner:"달보",

        partnerImage:"./assets/dalbo.png",

        partnerReason:
        "안정성을 더해줄 수 있는 최고의 조합입니다."

    },



    pudding:{

        name:"푸딩",

        type:"균형투자자",

        image:"./assets/puding.png",

        quote:"균형이 최고의 전략입니다.",

        description:
        "안정성과 수익성을 균형 있게 추구하는 투자자입니다.",

        finance:
        "분산투자와 혼합형 펀드가 적합합니다.",

        strengths:[
            "균형 잡힌 판단",
            "유연한 사고",
            "안정과 수익을 함께 추구"
        ],

        weaknesses:[
            "결단력이 부족할 수 있음"
        ],

        recommend:[
            "혼합형 펀드",
            "ETF",
            "우리 WON뱅킹"
        ],

        partner:"위비",

        partnerImage:"./assets/wibee.png",

        partnerReason:
        "분석력이 뛰어난 위비와 좋은 시너지를 냅니다."

    },



    duji:{

        name:"두지",

        type:"모험도전자",

        image:"./assets/dugi.png",

        quote:"도전이 있어야 성장도 있습니다.",

        description:
        "높은 수익을 위해 적극적으로 투자하는 스타일입니다.",

        finance:
        "성장주와 해외투자에 적합합니다.",

        strengths:[
            "높은 도전 정신",
            "빠른 실행력",
            "새로운 기회를 잘 찾는다."
        ],

        weaknesses:[
            "손실 가능성도 높다."
        ],

        recommend:[
            "해외 ETF",
            "성장주",
            "테마형 펀드"
        ],

        partner:"달보",

        partnerImage:"./assets/dalbo.png",

        partnerReason:
        "안정적인 달보가 위험을 보완해 줍니다."

    },



    bombom:{

        name:"봄봄",

        type:"트렌드캐쳐",

        image:"./assets/bombom.png",

        quote:"트렌드가 곧 기회입니다.",

        description:
        "새로운 산업과 트렌드에 민감한 투자자입니다.",

        finance:
        "테마 ETF, AI, 반도체 관련 상품과 잘 맞습니다.",

        strengths:[
            "유행을 빨리 파악",
            "새로운 시장에 강함"
        ],

        weaknesses:[
            "유행을 너무 따라갈 수 있음"
        ],

        recommend:[
            "AI ETF",
            "반도체 ETF",
            "테마형 펀드"
        ],

        partner:"푸딩",

        partnerImage:"./assets/puding.png",

        partnerReason:
        "균형감 있는 푸딩이 좋은 파트너입니다."

    }

};
/* ==========================================================
   결과 계산
========================================================== */

function calculateResult() {

    // 1. 점수를 배열로 변환
    const ranking = [
        { name: "safety", score: score.safety, priority: 1 },
        { name: "planning", score: score.planning, priority: 2 },
        { name: "profit", score: score.profit, priority: 3 }
    ];

    // 2. 점수순으로 정렬
    // 동점이면 priority(안정성 → 계획성 → 수익성) 순으로 정렬
    ranking.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return a.priority - b.priority;

    });

    // 3. 문자열 생성
    const type =
        `${ranking[0].name}-${ranking[1].name}-${ranking[2].name}`;

    // 4. 유형 매핑
    const typeMap = {

        "safety-planning-profit": "dalbo",

        "safety-profit-planning": "webee",

        "planning-safety-profit": "koo",

        "planning-profit-safety": "pudding",

        "profit-planning-safety": "duji",

        "profit-safety-planning": "bombom"

    };

    // 5. 결과 캐릭터 결정
    const resultKey = typeMap[type] || "dalbo";

    // 6. 결과 화면 출력
    renderResult(resultData[resultKey]);

}
/* ==========================================================
   결과 화면 출력
========================================================== */

function renderResult(result){

    showPage(resultPage);

    /* -------------------------
       제목
    -------------------------- */

    resultTitle.textContent =
        result.name;

    resultSubTitle.textContent =
        result.type;



    /* -------------------------
       캐릭터
    -------------------------- */

    resultCharacter.src =
        result.image;

    resultCharacter.alt =
        result.name;



    /* -------------------------
       한마디
    -------------------------- */

    characterQuote.textContent =
        result.quote;



    /* -------------------------
       설명
    -------------------------- */

    characterDescription.textContent =
        result.description;

    financeDescription.textContent =
        result.finance;



    /* -------------------------
       장점
    -------------------------- */

    strengthList.innerHTML="";

    result.strengths.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        strengthList.appendChild(li);

    });



    /* -------------------------
       단점
    -------------------------- */

    weaknessList.innerHTML="";

    result.weaknesses.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        weaknessList.appendChild(li);

    });



    /* -------------------------
       관심도
    -------------------------- */

    renderInterest();



    /* -------------------------
       추천상품
    -------------------------- */

    renderRecommend(result);



    /* -------------------------
       투자 파트너
    -------------------------- */

    partnerCharacter.src =
        result.partnerImage;

    partnerName.textContent =
        result.partner;

    partnerReason.textContent =
        result.partnerReason;

}
/* ==========================================================
   관심도
========================================================== */

function renderInterest(){

    interestFill.style.width =
        score.interest+"%";

    interestScore.textContent =
        score.interest+"점";



    if(score.interest<=30){

        interestLevel.textContent=
            "투자가 뭐에요?";

        interestDescription.textContent=

            "금융투자를 처음 시작하는 단계입니다.";

    }

    else if(score.interest<=60){

        interestLevel.textContent=
            "아기 투자자";

        interestDescription.textContent=

            "기본적인 금융상품부터 경험해보세요.";

    }

    else if(score.interest<=90){

        interestLevel.textContent=
            "투자 사춘기";

        interestDescription.textContent=

            "다양한 상품에 관심이 많아지는 단계입니다.";

    }

    else{

        interestLevel.textContent=
            "투자 만렙";

        interestDescription.textContent=

            "충분한 관심과 경험을 가진 투자자입니다.";

    }

}
/* ==========================================================
   추천 금융상품
========================================================== */

function renderRecommend(result){

    recommendContainer.innerHTML="";

    result.recommend.forEach(product=>{

        const card =
            document.createElement("div");

        card.className =
            "recommend-card";

        card.innerHTML=

        `
            <h4>${product}</h4>

            <p>

            ${result.type}에게 추천하는
            우리은행 금융 서비스입니다.

            </p>

            <button class="secondary-button">

            자세히 보기

            </button>

        `;

        recommendContainer.appendChild(card);

    });

}
/* ==========================================================
   결과 공유
========================================================== */

shareBtn.addEventListener("click", shareResult);

function shareResult(){

    const title =
        `${resultTitle.textContent} (${resultSubTitle.textContent})`;

    const text =
`💙 나의 투자 유형은 "${title}"!

위비프렌즈 투자 성향 테스트에서
나만의 투자 DNA를 확인해보세요!`;

    // 모바일 Web Share API 지원
    if(navigator.share){

        navigator.share({

            title:"위비프렌즈 투자 성향 테스트",

            text:text,

            url:window.location.href

        });

    }

    // 미지원 브라우저
    else{

        navigator.clipboard.writeText(text);

        alert("결과 문구가 클립보드에 복사되었습니다.");

    }

}
/* ==========================================================
   다시하기
========================================================== */

restartBtn.addEventListener("click", restartTest);

function restartTest(){

    currentQuestion = 0;

    score = {

        safety:0,

        planning:0,

        profit:0,

        interest:50

    };

    progressFill.style.width="0%";

    loadingFill.style.width="0%";

    showPage(landingPage);

}
/* ==========================================================
   최초 실행
========================================================== */

showPage(landingPage);
