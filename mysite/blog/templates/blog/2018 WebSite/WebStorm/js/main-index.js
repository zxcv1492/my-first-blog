// Copyright ⓒ 2018 Softwing All Rights Reserved
// Edited by Highwater Digital Entertainment


let lastWidth;

let language = 'korean';

window.addEventListener('DOMContentLoaded', function(){ init(); });

function init() {

    var navLanguage = navigator.language;
    if(navLanguage === 'ko-KR') {
        language = 'korean';
    }
    else if(navLanguage === 'en-US') {
        language = 'english';
    }
    else {
        language = 'english';
    }

    var link = window.location.href.split('?');
    if(link[1] === 'lang=kor') {
        language = 'korean';
    }
    else if(link[1] === 'lang=eng') {
        language = 'english';
    }

    var agent = navigator.userAgent.toLowerCase();
    if(language === 'korean') {
        if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) {
            var body = document.getElementsByClassName("softwing-body")[0];
            body.style.setProperty("opacity", "" + 1);
            var header = document.getElementById("softwing-header");
            header.innerHTML = "\n" +
                "        <div class=\"softwing-header-block\">\n" +
                "            <div class=\"softwing-header-block-holder\">\n" +
                "                이 브라우저를 지원하지 않습니다.<br>다른 브라우저를 이용해 주세요.\n" +
                "            <div onclick='redirect()'><br><br>OK</div>" +
                "            </div>\n" +
                "        </div>";
            var content = document.getElementsByClassName("softwing-content")[0];
            content.innerHTML = "";
            return;
        }
        else if (navigator.userAgent.indexOf('Edge') >= 0) {
            var body = document.getElementsByClassName("softwing-body")[0];
            body.style.setProperty("opacity", "" + 1);
            var header = document.getElementById("softwing-header");
            header.innerHTML += "\n" +
                "        <div class=\"softwing-header-block\">\n" +
                "            <div class=\"softwing-header-block-holder\">\n" +
                "                이 브라우저를 권장하지 않습니다.<br>되도록 다른 브라우저를 이용해 주세요.\n" +
                "            <div onclick='removeBlock()' style='cursor: pointer'><br><br>OK</div>" +
                "            </div>\n" +
                "        </div>";
        }

        var footer = document.getElementById("softwing-footer");
        var footers = " <div class=\"softwing-footer-holder\">\n" +
            "            <div class='softwing-footer-language-holder'>" +
            "                <div class='softwing-footer-language'>" +
            "                    <ul class='softwing-footer-language-ul'>" +
            "                        <li class='softwing-footer-language-li' onclick='korean()'>한국어</li>" +
            "                        <li class='softwing-footer-language-li' onclick='english()'>English</li>" +
            "                    </ul>" +
            "                </div>" +
            "            </div>" +
            "            <div class=\"softwing-footer-copyright-holder\">\n" +
            "                <div class=\"softwing-footer-copyright\">\n" +
            "                    Designed by 한상우<br>\n" +
            "                    &copy; 2018 Softwing Entertainment Co., All Rights Reserved.\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
        footer.innerHTML = footers;
    }
    else if(language === 'english') {
        if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) {
            var body = document.getElementsByClassName("softwing-body")[0];
            body.style.setProperty("opacity", "" + 1);
            var header = document.getElementById("softwing-header");
            header.innerHTML = "\n" +
                "        <div class=\"softwing-header-block\">\n" +
                "            <div class=\"softwing-header-block-holder\">\n" +
                "                This browser is not supported.<br>Please use another browser.\n" +
                "            <div onclick='redirect()'><br><br>OK</div>" +
                "            </div>\n" +
                "        </div>";
            var content = document.getElementsByClassName("softwing-content")[0];
            content.innerHTML = "";
            return;
        }
        else if (navigator.userAgent.indexOf('Edge') >= 0) {
            var body = document.getElementsByClassName("softwing-body")[0];
            body.style.setProperty("opacity", "" + 1);
            var header = document.getElementById("softwing-header");
            header.innerHTML += "\n" +
                "        <div class=\"softwing-header-block\">\n" +
                "            <div class=\"softwing-header-block-holder\">\n" +
                "                This browser is not recommended.<br>Please use another browser if possible.\n" +
                "            <div onclick='removeBlock()' style='cursor: pointer'><br><br>OK</div>" +
                "            </div>\n" +
                "        </div>";
        }

        var footer = document.getElementById("softwing-footer");
        var footers = " <div class=\"softwing-footer-holder\">\n" +
            "            <div class='softwing-footer-language-holder'>" +
            "                <div class='softwing-footer-language'>" +
            "                    <ul class='softwing-footer-language-ul'>" +
            "                        <li class='softwing-footer-language-li' onclick='korean()'>한국어</li>" +
            "                        <li class='softwing-footer-language-li' onclick='english()'>English</li>" +
            "                    </ul>" +
            "                </div>" +
            "            </div>" +
            "            <div class=\"softwing-footer-copyright-holder\">\n" +
            "                <div class=\"softwing-footer-copyright\">\n" +
            "                    Designed by Sangwoo Han<br>\n" +
            "                    &copy; 2018 Softwing Entertainment Co., All Rights Reserved.\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
        footer.innerHTML = footers;
    }



    var menuIntroduce = document.getElementById("softwing-header-top-submenu-holder-introduce");
    var menuProduct = document.getElementById("softwing-header-top-submenu-holder-product");
    var menuProject = document.getElementById("softwing-header-top-submenu-holder-project");
    var menuMember = document.getElementById("softwing-header-top-submenu-holder-member");
    menuIntroduce.style.height = 0 + 'px';
    menuProduct.style.height = 0 + 'px';
    menuProject.style.height = 0 + 'px';
    menuMember.style.height = 0 + 'px';

    lastWidth = window.innerWidth;

    update();
    activateWeb();
    initpage();
}

function removeBlock() {
    document.getElementsByClassName("softwing-header-block")[0].remove();
    activateWeb();
}

function redirect(){
    window.location.href = 'https://prolite.tistory.com/965';
}

function loadBody() {
    var body = document.getElementsByClassName("softwing-content")[0];
    body.style.setProperty("opacity", "" + 0);
    var interval = setInterval(frame, 2);
    function frame() {
        var opacity = parseFloat(body.style.getPropertyValue('opacity'));
        if(opacity >= 1) {
            clearInterval(interval);
        } else {
            opacity += 0.01;
            body.style.setProperty("opacity", opacity);
        }
    }
}

function korean() {
    language = 'korean';
    history.pushState(null, null, window.location.href.split('?')[0] + '?lang=kor');
    pageLocalize();
    activateWeb();
}

function english() {
    language = 'english';
    history.pushState(null, null, window.location.href.split('?')[0] + '?lang=eng');
    pageLocalize();
    activateWeb();
}

let subMenuIntroduceInterval;
let subMenuProductInterval;
let subMenuProjectInterval;
let subMenuMemberInterval;
let memberOpen = false;
let projectOpen = false;
let productOpen = false;
let introduceOpen = false;

function showSubMenuIntroduce(count){
    var elem = document.getElementById("softwing-header-top-submenu-holder-introduce");
    if(parseInt(elem.style.getPropertyValue('height').split('p')[0]) < count*36+2)
    {
        var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
        clearInterval(subMenuIntroduceInterval);
        introduceOpen = true;
        hideSubMenuProject();
        hideSubMenuMember();
        hideSubMenuProduct();
        subMenuIntroduceInterval = setInterval(frame, 20);
        function frame() {
            if (height >= count*39) {
                clearInterval(subMenuIntroduceInterval);
            } else {
                height+=20;
                elem.setAttribute("style","height:" + height + "px;");
            }
        }
    }
}

function hideSubMenuIntroduce(){
    var elem = document.getElementById("softwing-header-top-submenu-holder-introduce");
    var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
    clearInterval(subMenuIntroduceInterval);
    introduceOpen = false;
    subMenuIntroduceInterval = setInterval(frame, 20);
    function frame() {
        if (height <= 0) {
            clearInterval(subMenuIntroduceInterval);
        } else {
            height -= 20;
            elem.setAttribute("style", "height:" + height + "px;");
        }
    }
}

function showSubMenuProduct(count){
    var elem = document.getElementById("softwing-header-top-submenu-holder-product");
    if(parseInt(elem.style.getPropertyValue('height').split('p')[0]) < count*36+2)
    {
        var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
        clearInterval(subMenuProductInterval);
        productOpen = true;
        hideSubMenuIntroduce();
        hideSubMenuProject();
        hideSubMenuMember();
        subMenuProductInterval = setInterval(frame, 20);
        function frame() {
            if (height >= count*39) {
                clearInterval(subMenuProductInterval);
            } else {
                height+=20;
                elem.setAttribute("style","height:" + height + "px;");
            }
        }
    }
}

function hideSubMenuProduct(){
    var elem = document.getElementById("softwing-header-top-submenu-holder-product");
    var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
    clearInterval(subMenuProductInterval);
    productOpen = false;
    subMenuProductInterval = setInterval(frame, 20);
    function frame() {
        if (height <= 0) {
            clearInterval(subMenuProductInterval);
        } else {
            height -= 20;
            elem.setAttribute("style", "height:" + height + "px;");
        }
    }
}

function showSubMenuProject(count){
    var elem = document.getElementById("softwing-header-top-submenu-holder-project");
    if(parseInt(elem.style.getPropertyValue('height').split('p')[0]) < count*36+ 3)
    {
        var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
        clearInterval(subMenuProjectInterval);
        projectOpen = true;
        hideSubMenuIntroduce();
        hideSubMenuMember();
        hideSubMenuProduct();
        subMenuProjectInterval = setInterval(frame, 20);
        function frame() {
            if (height >= count*39) {
                clearInterval(subMenuProjectInterval);
            } else {
                height+=20;
                elem.setAttribute("style","height:" + height + "px;");
            }
        }
    }
}

function hideSubMenuProject(){
    var elem = document.getElementById("softwing-header-top-submenu-holder-project");
    var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
    clearInterval(subMenuProjectInterval)
    projectOpen = false;
    subMenuProjectInterval = setInterval(frame, 20);
    function frame() {
        if (height <= 0) {
            clearInterval(subMenuProjectInterval);
        } else {
            height -= 20;
            elem.setAttribute("style", "height:" + height + "px;");
        }
    }
}

function showSubMenuMember(count){
    var elem = document.getElementById("softwing-header-top-submenu-holder-member");
    if(parseInt(elem.style.getPropertyValue('height').split('p')[0]) < count*36+2)
    {
        var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
        clearInterval(subMenuMemberInterval);
        memberOpen = true;
        hideSubMenuIntroduce();
        hideSubMenuProject();
        hideSubMenuProduct();
        subMenuMemberInterval = setInterval(frame, 20);
        function frame() {
            if (height >= count*39) {
                clearInterval(subMenuMemberInterval);
            } else {
                height+=20;
                elem.setAttribute("style","height:" + height + "px;");
            }
        }
    }
}

function hideSubMenuMember(){
    var elem = document.getElementById("softwing-header-top-submenu-holder-member");
    var height = parseInt(elem.style.getPropertyValue('height').split('p')[0]);
    clearInterval(subMenuMemberInterval);
    memberOpen = false;
    subMenuMemberInterval = setInterval(frame, 20);
    function frame() {
        if (height <= 0) {
            clearInterval(subMenuMemberInterval);
        } else {
            height -= 20;
            elem.setAttribute("style", "height:" + height + "px;");
        }
    }
}

function update() {
    setInterval(frame, 100);
    function frame() {
        if(lastWidth>960 !== window.innerWidth>960) {
            activateWeb();
        }
    }

}

function activateWeb() {
    lastWidth = window.innerWidth;
    var body = document.getElementsByClassName("softwing-content")[0];
    body.style.setProperty("opacity", "" + 0);
    if(language === 'korean') {
        if (lastWidth > 960) {
            {
                document.getElementById("softwing-header-top-ul").innerHTML = "<li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-logo\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-logo\" href=\"\">\n" +
                    "                                    <img src=\"./images/softwing-logo-line-big.png\" id=\"softwing-header-top-logo-image\">\n" +
                    "                                </a>\n" +
                    "                                <img class=\"softwing-header-top-openmenu\" src=\"./images/menu-button.png\" onclick=\"toggleMenu()\">\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-member\" onmouseover=\"showSubMenuMember(3)\" onmouseleave=\"hideSubMenuMember()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-member\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-member\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-member\">\n" +
                    "                                            활동 멤버\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-member\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2018\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2017\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2016\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-project\" onmouseover=\"showSubMenuProject(5)\" onmouseleave=\"hideSubMenuProject()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-project\" href=\"./project/contents.html?lang=kor\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-project\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-project\">\n" +
                    "                                            프로젝트\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-project\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/contents.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    콘텐츠 영상\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/fiction.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    픽션 영상\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/game.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    게임\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/software.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    소프트웨어\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/web.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    웹\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-product\" onmouseover=\"showSubMenuProduct(1)\" onmouseleave=\"hideSubMenuProduct()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-product\" href=\"./project/contents.html?lang=kor\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-product\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-product\">\n" +
                    "                                            제품 구매\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-product\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" target=\"_blank\" href=\"https://www.youtube.com/watch?v=i-TmEhxttNU&amp;list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    처음 만나는 C언어\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-introduce\" onmouseover=\"showSubMenuIntroduce(5)\" onmouseleave=\"hideSubMenuIntroduce()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-introduce\" href=\"./introduction/greetings.html?lang=kor\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-introduce\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-introduce\">\n" +
                    "                                            소개/알림\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-introduce\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./introduction/greetings.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    인사말\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    연혁\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    상징\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    소식\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    갤러리\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>";
            }
            document.getElementById("softwing-stylesheet-main").setAttribute("href", "./css/main.css");
            document.getElementById("softwing-stylesheet-index").setAttribute("href", "./css/index.css");
        }
        else {
            {
                document.getElementById("softwing-header-top-ul").innerHTML = "<li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-logo\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-logo\" href=\"\">\n" +
                    "                                    <img src=\"./images/softwing-logo-line-big.png\" id=\"softwing-header-top-logo-image\">\n" +
                    "                                </a>\n" +
                    "                                <img class=\"softwing-header-top-openmenu\" src=\"./images/menu-button.png\" onclick=\"toggleMenu()\">\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-introduce\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-introduce\" onclick='toggleSubMenuIntroduce(5)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-introduce\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-introduce\">\n" +
                    "                                            소개/알림\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-introduce\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./introduction/greetings.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    인사말\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    연혁\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    상징\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    소식\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    갤러리\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-product\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-product\" onclick='toggleSubMenuProduct(1)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-product\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-product\">\n" +
                    "                                            제품 구매\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-product\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" target=\"_blank\" href=\"https://www.youtube.com/watch?v=i-TmEhxttNU&amp;list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    처음 만나는 C언어\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-project\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-project\" onclick='toggleSubMenuProject(5)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-project\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-project\">\n" +
                    "                                            프로젝트\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-project\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/contents.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    콘텐츠 영상\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/fiction.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    픽션 영상\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/game.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    게임\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/software.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    소프트웨어\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/web.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    웹\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-member\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-member\" onclick='toggleSubMenuMember(3)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-member\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-member\">\n" +
                    "                                            활동 멤버\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-member\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2018\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2017\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=kor\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2016\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n";
            }
            document.getElementById("softwing-stylesheet-main").setAttribute("href", "./css/main-m.css");
            document.getElementById("softwing-stylesheet-index").setAttribute("href", "./css/index-m.css");
        }
    }
    else if(language === 'english') {
        if (lastWidth > 960) {
            {
                document.getElementById("softwing-header-top-ul").innerHTML = "<li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-logo\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-logo\" href=\"\">\n" +
                    "                                    <img src=\"./images/softwing-logo-line-big.png\" id=\"softwing-header-top-logo-image\">\n" +
                    "                                </a>\n" +
                    "                                <img class=\"softwing-header-top-openmenu\" src=\"./images/menu-button.png\" onclick=\"toggleMenu()\">\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-member\" onmouseover=\"showSubMenuMember(3)\" onmouseleave=\"hideSubMenuMember()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-member\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-member\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-member\">\n" +
                    "                                            Members\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-member\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2018\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2017\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2016\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-project\" onmouseover=\"showSubMenuProject(5)\" onmouseleave=\"hideSubMenuProject()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-project\" href=\"./project/contents.html?lang=eng\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-project\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-project\">\n" +
                    "                                            Projects\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-project\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/contents.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Contents Video\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/fiction.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Fiction Video\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/game.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Game\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/software.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Software\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/web.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                   Web\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-product\" onmouseover=\"showSubMenuProduct(1)\" onmouseleave=\"hideSubMenuProduct()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-product\" href=\"./project/contents.html?lang=eng\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-product\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-product\">\n" +
                    "                                            Purchase\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-product\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" target=\"_blank\" href=\"https://www.youtube.com/watch?v=i-TmEhxttNU&amp;list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    First Meetings for C Language\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-introduce\" onmouseover=\"showSubMenuIntroduce(5)\" onmouseleave=\"hideSubMenuIntroduce()\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-introduce\" href=\"./introduction/greetings.html?lang=eng\">\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-introduce\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-introduce\">\n" +
                    "                                            Introduction\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-introduce\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Greetings\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    History\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Symbols\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    News\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Galary\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>";
            }
            document.getElementById("softwing-stylesheet-main").setAttribute("href", "./css/main.css");
            document.getElementById("softwing-stylesheet-index").setAttribute("href", "./css/index.css");
        }
        else {
            {
                document.getElementById("softwing-header-top-ul").innerHTML = "<li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-logo\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-logo\" href=\"\">\n" +
                    "                                    <img src=\"./images/softwing-logo-line-big.png\" id=\"softwing-header-top-logo-image\">\n" +
                    "                                </a>\n" +
                    "                                <img class=\"softwing-header-top-openmenu\" src=\"./images/menu-button.png\" onclick=\"toggleMenu()\">\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-introduce\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-introduce\" onclick='toggleSubMenuIntroduce(5)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-introduce\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-introduce\">\n" +
                    "                                            Introduction\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-introduce\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./introduction/greetings.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Greetings\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    History\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Symbols\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    News\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/index.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Galary\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-product\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-product\" onclick='toggleSubMenuProduct(1)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-product\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-product\">\n" +
                    "                                            Purchase\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-product\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" target=\"_blank\" href=\"https://www.youtube.com/watch?v=i-TmEhxttNU&amp;list=PLmAydYHcGIa7ey45LQxINUm86npJYdNGg\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    First Meetings for C Language\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-project\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-project\" onclick='toggleSubMenuProject(5)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-project\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-project\">\n" +
                    "                                            Projects\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-project\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/contents.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Contents Video\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/fiction.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Fiction Video\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/game.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Game\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/software.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Software\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./project/web.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    Web\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n" +
                    "                            <li class=\"softwing-header-top-li\" id=\"softwing-header-top-li-member\">\n" +
                    "                                <a class=\"softwing-header-top-a\" id=\"softwing-header-top-a-member\" onclick='toggleSubMenuMember(3)'>\n" +
                    "                                    <div class=\"softwing-header-top-li-div\" id=\"softwing-header-top-li-div-member\">\n" +
                    "                                        <div class=\"softwing-header-top-li-div-div\" id=\"softwing-header-top-li-div-div-member\">\n" +
                    "                                            Members\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"softwing-header-top-submenu-holder\" id=\"softwing-header-top-submenu-holder-member\" style=\"height:0px;\">\n" +
                    "                                    <ul class=\"softwing-header-top-submenu-ul\">\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2018\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2017\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                        <li class=\"softwing-header-top-submenu-li\">\n" +
                    "                                            <a class=\"softwing-header-top-submenu-a\" href=\"./old/team.html?lang=eng\">\n" +
                    "                                                <div class=\"softwing-header-top-submenu-a-div\">\n" +
                    "                                                    2016\n" +
                    "                                                </div>\n" +
                    "                                            </a>\n" +
                    "                                        </li>\n" +
                    "                                    </ul>\n" +
                    "                                </div>\n" +
                    "                            </li>\n";
            }
            document.getElementById("softwing-stylesheet-main").setAttribute("href", "./css/main-m.css");
            document.getElementById("softwing-stylesheet-index").setAttribute("href", "./css/index-m.css");
        }
    }
    loadBody();
}

function toggleSubMenuMember(count) {
    if(memberOpen) {
        hideSubMenuMember();
    }
    else {
        showSubMenuMember(count);
    }
}

function toggleSubMenuProject(count) {
    if(projectOpen) {
        hideSubMenuProject();
    }
    else {
        showSubMenuProject(count);
    }
}

function toggleSubMenuProduct(count) {
    if(productOpen) {
        hideSubMenuProduct();
    }
    else {
        showSubMenuProduct(count);
    }
}

function toggleSubMenuIntroduce(count) {
    if(introduceOpen) {
        hideSubMenuIntroduce();
    }
    else {
        showSubMenuIntroduce(count);
    }
}

let isMenuOpen = false;

function toggleMenu() {
    if(isMenuOpen) {
        isMenuOpen = false;
        var x = document.getElementById("softwing-header-top-grid");
        x.setAttribute("class", "softwing-header-top-grid softwing-header-top-grid-close");
    }
    else {
        isMenuOpen = true;
        var x = document.getElementById("softwing-header-top-grid");
        x.setAttribute("class", "softwing-header-top-grid softwing-header-top-grid-open");
    }
}