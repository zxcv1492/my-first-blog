function initpage() {
    pageLocalize();
}

function pageLocalize() {

    var texts = document.getElementsByClassName('softwing-project-content-text-holder');

    if(language === 'korean') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                당신의 꿈은 무엇인가요\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                꿈을 찾아 더 멀리\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                나의 꿈을 찾기 위해 타인의 꿈을 알아보세요.<br>꿈을 찾아가는 학생들의 인터뷰 영상입니다.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href='https://www.youtube.com/playlist?list=PLmAydYHcGIa7f6LAiR11zAFrhO-GGH5eM' target='_blank'>\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        자세히 보기\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                처음 만나는 C언어\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2017-2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                블록강의로 더 쉽게\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                C언어가 처음이라구요?<br>당신을 위해 준비한 C언어 강의입니다.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/playlist?list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        자세히 보기\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[2].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                PlayX4 2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                PlayX4에서\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                2018년 5월 13일<br>플레이엑스포 2018 참가\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        준비중\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[3].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                네이버 데뷰 2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Naver Deview에서\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                2016년 10월 24일<br>네이버 데뷰 2016 참가\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/watch?v=mqM3OZ4I9W0\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        자세히 보기\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[4].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                2016 디미고 플래시몹\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                한여름 디미고의 플래시몹\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                7월, 무더운 한국디지털미디어고등학교에서<br>In association with 여우사이\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/watch?v=mZbWdeU7ldg\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        자세히 보기\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
    else if(language === 'english') {
        texts[0].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                What's Your Dream?\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                To Find a Dream\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Learn about others' dreams to find mine.<br>These are interview videos of some students.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href='https://www.youtube.com/playlist?list=PLmAydYHcGIa7f6LAiR11zAFrhO-GGH5eM' target='_blank'>\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        See More\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[1].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                First Meetings for C Language\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2017-2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                More easily by block lecture\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                Is this your first time for C language?<br>This is a C language course just for you.\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/playlist?list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        See More\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[2].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                PlayX4 2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                At PlayX4\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                13rd May 2018<br>Attending PlayX4 2018\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        Coming Soon\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[3].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                Naver Deview 2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                At Naver Deview\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                24th October 2016<br>Attending Naver Deview 2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/watch?v=mqM3OZ4I9W0\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        See More\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
        texts[4].innerHTML = "<div class=\"softwing-project-content-text-top\">\n" +
            "                                2016 KDMHS Flashmob\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-year\">\n" +
            "                                2016\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-middle\">\n" +
            "                                Mid-summer Flashmob in KDMHS\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-text-down\">\n" +
            "                                In July, at hot Korea Digital Media Highschool<br>In association with KDMHS Cast\n" +
            "                            </div>\n" +
            "                            <div class=\"softwing-project-content-button-holder\">\n" +
            "                                <a class=\"softwing-project-content-button-a\" href=\"https://www.youtube.com/watch?v=mZbWdeU7ldg\" target=\"_blank\">\n" +
            "                                    <div class=\"softwing-project-content-button-button\">\n" +
            "                                        See More\n" +
            "                                    </div>\n" +
            "                                </a>\n" +
            "                            </div>";
    }
}
