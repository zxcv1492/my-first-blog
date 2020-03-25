function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var texts = document.getElementsByClassName('softwing-project-content-text-holder');

    if(language === 'korean') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                디치전 (가제)\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                웹영화\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                전국기숙학생조합 치킬 전달 서비스<br>범죄 스릴러\n" +
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
            "                                KDSU (Working Title)\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Web Movie\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Korea Dormitory Students Union chicken delivery service<br>Crime thriller\n" +
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