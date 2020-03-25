function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var texts = document.getElementsByClassName('softwing-project-content-text-holder');

    if(language === 'korean') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                YuKai 2D\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                설치 없이 편리하게\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                게임 제작부터 유통까지 웹에서 한 번에<br>웹 RPG게임엔진 및 플랫폼\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        준비중\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                MarshMelody\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2017-2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                음악 공유와 스트리밍\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                커버송 문화 정착 및 크리에이터 지원을 위한<br>음악 업로딩 및 스트리밍 사이트\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://marshmelody.net/\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        자세히 보기\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
    else if(language === 'english') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                YuKai 2D\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Conveniently without Installation\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                To publishing from game making at once<br>Web RPG Game Engine and Platform\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        Coming Soon\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                MarshMelody\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2017-2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Music Sharing and Streaming\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Music uploading and streaming website to establish cover song culture and support creators\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://marshmelody.net/\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        See More\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
}