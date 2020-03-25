function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var texts = document.getElementsByClassName('softwing-project-content-text-holder');

    if(language === 'korean') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                Myth Take\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                플레이어가 만들어가는 새로운 신화\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                로우폴리 3D 오픈월드 RPG<br>메타픽션의 즐거움\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        준비중\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                리비도를 사랑하는 방법\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                비주얼노벨\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                욕망을 혐오했던 소년이 있었습니다.<br>그리고 욕망이 보이지 않는 소녀가 있었습니다.<br>그들이 엮어 나가는 이야기.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        준비중\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[2].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                태풍키우기\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                태풍을 키워 피해액을 늘려라\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                모바일 방치형 클릭커 게임\n" +
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
            "                                Myth Take\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                New Myth You Create\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Low-poly 3D open world RPG<br>Enjoy the world of metafiction\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        Coming Soon\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                How to Love Ribido\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Visual Novel\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                There was a boy who hated ribido.<br>And there was a girl who didn't have ribido.<br>A Story they weave.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        Coming Soon\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[2].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                Typhoon Maker\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Raise the typhoon to increase the damage\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Mobile Clicker Game\n" +
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