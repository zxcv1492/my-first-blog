function initpage() {
    pageLocalize();
}

function pageLocalize() {
    var toptext = document.getElementsByClassName('softwing-content-top-text')[0];
    var projects = document.getElementsByClassName('softwing-content-second-projects-project-in');
    var button = document.getElementsByClassName('softwing-content-second-button-holder')[0];

    if(language === 'korean') {
        toptext.innerHTML = "당신의 꿈을 위한 날개";
        projects[0].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/dream-titleimg.png\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-two-one\">\n" +
            "                                        당신의 꿈은<br>무엇인가요\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-two-one\">\n" +
            "                                        꿈을 찾아 더 멀리\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href='https://www.youtube.com/playlist?list=PLmAydYHcGIa7f6LAiR11zAFrhO-GGH5eM' target='_blank'>\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                자세히 보기\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>"
        projects[1].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/clecture-titleimg.jpg\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-one-one\">\n" +
            "                                        처음 만나는 C언어\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-one-one\">\n" +
            "                                        C언어가 처음인 당신을 위해\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href=\"https://www.youtube.com/playlist?list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\" target=\"_blank\">\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                자세히 보기\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>";
        projects[2].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/marshmelody-titleimg.jpg\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-one-one\">\n" +
            "                                        Marshmelody\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-one-one\">\n" +
            "                                        음악 공유 및 스트리밍 플랫폼<br>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href='http://marshmelody.softwing.co.kr' target='_blank'>\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                자세히 보기\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>";
        button.innerHTML = "<a href=\"./project/contents.html\">\n" +
            "                                <div class=\"softwing-content-second-button\">\n" +
            "                                    모든 프로젝트 보기\n" +
            "                                </div>\n" +
            "                            </a>";
    }
    else if(language === 'english') {
        toptext.innerHTML = "A Wing for All Your Dreams";
        projects[0].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/dream-titleimg.png\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-two-one\">\n" +
            "                                        WHAT'S YOUR<br>DREAM?\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-two-one\">\n" +
            "                                        To Find a Dream\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href='https://www.youtube.com/playlist?list=PLmAydYHcGIa7f6LAiR11zAFrhO-GGH5eM' target='_blank'>\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                See More\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>"
        projects[1].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/clecture-titleimg.jpg\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-two-one\">\n" +
            "                                        FIRST MEETINGS<br>FOR C LANGUAGE\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-two-one\">\n" +
            "                                        For You, First for C Language\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href=\"https://www.youtube.com/playlist?list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\" target=\"_blank\">\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                See More\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>";
        projects[2].innerHTML = "<div class=\"softwing-content-second-project-image-holder\">\n" +
            "                                        <img src=\"./images/marshmelody-titleimg.jpg\" class=\"softwing-content-second-project-image\"/>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-up-one-one\">\n" +
            "                                        MARSHMELODY\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-text-down-one-one\">\n" +
            "                                        Music Sharing and Streaming Platform<br>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"softwing-content-second-project-button-holder\">\n" +
            "                                        <a href='http://marshmelody.softwing.co.kr' target='_blank'>\n" +
            "                                            <div class=\"softwing-content-second-project-button\">\n" +
            "                                                See More\n" +
            "                                            </div>\n" +
            "                                        </a>\n" +
            "                                    </div>\n" +
            "                                    <div><br><br></div>";
        button.innerHTML = "<a href=\"./project/contents.html?lang=eng\">\n" +
            "                                <div class=\"softwing-content-second-button\">\n" +
            "                                    See All Projects\n" +
            "                                </div>\n" +
            "                            </a>";
    }
}