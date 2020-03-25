function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var texts = document.getElementsByClassName('softwing-greetings-text');

    if(language === 'korean') {
        texts[0].innerHTML = "<div style=\"font-size: 24px\">인사말</div><br><br>\n" +
            "                        안녕하십니까? 소프트윙 엔터테인먼트 홈페이지를 방문해 주신 여러분을 진심으로 환영합니다.<br>\n" +
            "                        2016년 첫 프로젝트를 진행하며 시작된 소프트윙 엔터테인먼트는 모두의 꿈을 위한 기회를 제공하는 '날개'의 역할을 다하기 위해 노력하는 엔터테인먼트 회사입니다.\n" +
            "                        현재 콘텐츠 및 픽션 영상, 그리고 게임 및 네이티브/웹 소프트웨어 등 다양한 엔터테인먼트 제품 및 서비스를 제작하고 있으며, 언제나 새로운 즐거움을 찾아 나아가는 중입니다.\n" +
            "                        그리고 앞으로도 계속해서 꿈을 찾고 이루는 데 기여할 것이라고 약속드립니다.<br><br>\n" +
            "                        2018년, 어떤 갈림길에서<br>\n" +
            "                        당신의 꿈을 위한 날개, 소프트윙 엔터테인먼트<br>";
    }
    else if(language === 'english') {
        texts[0].innerHTML = "<div style=\"font-size: 24px\">Greetings</div><br><br>\n" +
            "                        Hello? We sincerely welcome you to visit Softwing Entertainment Homepage. <br>\n" +
            "                        Softwing Entertainment, which was launched in 2016, is an entertainment company that strives to fulfill its role as a 'wing' that provides opportunities for everyone to dream.\n" +
            "                        We are currently producing a variety of entertainment products and services, including content and fiction footage, games and native/web software, and we are always looking for new pleasure.\n" +
            "                        And, We promise that we will continue to contribute to finding and achieving dreams. <br> <br>\n" +
            "                        At some crossroads in 2018 <br>\n" +
            "                        A Wing for all your dreams, Softwing Entertainment <br>";
    }
}