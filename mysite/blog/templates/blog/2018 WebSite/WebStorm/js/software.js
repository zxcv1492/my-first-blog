function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var texts = document.getElementsByClassName('softwing-project-content-text-holder');

    if(language === 'korean') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                Ctrl S 매크로\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                블루스크린으로부터 안전하게\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                지정된 프로그램이 활성화되어 있을 때<br>일정 시간마다 Ctrl+S를 눌러드립니다\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        준비중\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
    else if(language === 'english') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                Ctrl S Macro\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Safe from Bluescreens\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                This press Ctrl+S regularly<br>when some specified program is active.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        Coming Soon\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
}