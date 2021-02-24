const body = document.querySelector("body");
const nav = document.querySelector("nav");
const navBut = document.getElementById("menuBut");
const navItems = document.querySelectorAll(".navItem");
const navLine = document.querySelectorAll(".line");
const sections = document.querySelectorAll("section");

let activeSection = document.querySelector(".active");

function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
}

// NAV OPEN/CLOSE
navBut.addEventListener("click", function name() {
    for (let line of navLine) {
        line.classList.toggle("xopen");
    }
    body.classList.toggle("bodyDark");
    nav.classList.toggle("navOpen");
    for (let section of sections) {
        section.classList.toggle("blur");
    }
})

// NAV SECTION CHANGE
function section_change(active_section) {
    const index = parseInt(this.attributes.navitemindex.value);
    const lastSection = document.querySelector("section:nth-child(" + (index+2) + ")");
    const itemHeight = lastSection.offsetHeight;

    // Remove current active classes
    for (let item of navItems) {
        item.classList.remove("active1", "active2", "active3");
    }
    this.classList.add('active' + (index+1));

    // Switch active sections
    setTimeout(function () {
        if (!lastSection.classList.contains("active")){
            current_section = activeSection;
            current_section.classList.remove('active');
            setTimeout(fun => current_section.style.display = "none", 600)
            lastSection.style.display = "block";
            setTimeout(function name() {
                lastSection.classList.add("active");
                body.style.height = itemHeight;
                activeSection = lastSection;
            }, 100)
            
        }
    },100);
        
}
for (let item of navItems) {
    item.addEventListener("click", section_change);
}

// Add Videos
function video_string(url,title,img_name,index) {
    return '<div class="vid">\
        <div class="vidBox video lightBox" index='+index+'>\
            <div class="vidHolder" style="background-image: url(img/vids/small/'+img_name+'.jpg);"></div>\
            <a href="'+url+'"></a>\
            <div class="triHolder">\
                <div class="tri">\
                    <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">\
                        <path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>\
                    </svg>\
                </div>\
                <div class="vidTitle">'+title+'</div>\
            </div>\
        </div>\
    </div>';
}
const vidGrid = document.getElementById("vidGrid");
thmnails_vid = [
    ["demoReel","https://www.youtube.com/embed/xPy3sxANlnU","Demo Reel","xPy3sxANlnU"],
    ["1984","https://player.vimeo.com/video/120224592","1984","120224592"],
    ["feathersNflowers","https://www.youtube.com/embed/HatbXlfNC2g?rel=0","Feathers 'N Flowers","HatbXlfNC2g"],
    ["littleThings","https://www.youtube.com/embed/-kfeno5kcEE?rel=0","Little Things","-kfeno5kcEE"],
    ["WMUH","https://www.youtube.com/embed/5cB9ndewvrk","What Makes Us Human","5cB9ndewvrk"],
    ["vfxReel","https://www.youtube.com/embed/-SEdbHP8L6U","VFX Reel","-SEdbHP8L6U"],
];
video_html = "";
let i = 0;
for (const thmnail of thmnails_vid) {
    video_html += video_string(thmnail[1],thmnail[2],thmnail[0],i);
    i++;
}
const vid_index_max = i;
vidGrid.innerHTML = video_html;

// Add Images
function img_string(title,img_name,index) {
    return '\
    <div class="imgBox pic lightBox" index='+index+'>\
        <div class="titleHolder">'+title+'</div>\
        <div class="img" style="background-image: url(img/images/portfolio/small/'+img_name+'.jpg);" href="img/images/portfolio/bigPic/'+img_name+'.jpg"></div>\
    </div>';
}
const imgGrid = document.getElementById("imgGrid");
thmnails = [
    ["ankleFX","ankle"],
    ["lumbar","lumbar"],
    ["cervicalBack","cervical back"],
    ["cervicalFront","cervical front"],
    ["DiscsNerves","lumbar boneless"],
    ["DiscsNervesCloseUp","lumbar close up"],
    ["HNPBetter","intimate herniation"],
    ["kneeReplacement","knee replacement"],
    ["porcupine","porcupine"],
    ["SkullAngle","skull seperated"],
    ["SkullAngleFront","headache"],
    ["SkullAngleSide","profile"],
    ["Update3WBTears","herniation"],
    ["wristSSS","wrist"],
    ["model","special"],
    ["snowman","unusual gift"],
    ["robot","curiosity"],
    ["dinnerware","dinner"],
    ["pumpkin","happy halloween"],
    ["ornament","home"],
    ["oldMan","sir"],
    ["cellphone","desperation"],
    ["MiniCoop","mini cooper"],
    ["elf","fantasy"],
    ["bike","childhood"],
    ["balloons","surprise"],
];
img_html = "";
i=0;
for (const thmnail of thmnails) {
    img_html += img_string(thmnail[1],thmnail[0],i);
    i++;
}
const img_index_max = i;
imgGrid.innerHTML = img_html;

// CONTACT INTERACTIVITY
for (const liholder of document.querySelectorAll(".liholder")) {
    liholder.style.top = -liholder.offsetHeight;
}
function h2_click() {
    const ol = this.nextElementSibling;
    const holder = ol.firstElementChild;
    const height = holder.offsetHeight;

    if (this.classList.contains("h2active")) {
        this.classList.remove("h2active");
        ol.style.maxHeight = 0;
        holder.style.top = -height;
    } else {
        this.classList.add("h2active");
        ol.style.maxHeight = height;
        holder.style.top = 0;
    }
}
for (const h2 of document.querySelectorAll("#contact h2")) {
    h2.addEventListener("click",h2_click);
}

// LIGHT BOX
let imgSrc = [], vidSrc = [], index, isPic, img, spinner, iframe, touchstart, touchend;
const xBtn = document.getElementById("xBtn"),
    rArrow = document.getElementById("rArrow"),
    lArrow = document.getElementById("lArrow"),
    lightBoxContainer = document.getElementById("lightBoxContainer"),
    imgContainer = document.getElementById("imgContainer");

// Gather img and vid hrefs
for (const a_element of document.querySelectorAll(".lightBox.pic .img")) {
    imgSrc.push(a_element.attributes.href.value);
}
for (const vid of document.querySelectorAll(".lightBox.video a")) {
    vidSrc.push(vid.attributes.href.value);
}

// Display Light Box
let player, tag;
const firstScriptTag = document.getElementById('main_script');
function handleKeyDown(e) {
    if (e.key === "Escape"){
        hide_lightbox();
    } else if (e.key === "ArrowRight"){
        next_item();
    } else if (e.key === "ArrowLeft"){
        previous_item();
    }
}
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: height, //'390',
        width: width, //'640',
        videoId: thmnails_vid[index][3],
        events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
    spinner.remove()
}
function display_light_box() {
    isPic = this.classList.contains("pic");
    index = this.attributes.index.value;
    lightBoxContainer.classList.add("displayFlex");
    setTimeout(function () {
        lightBoxContainer.classList.add("opacity1");
    },10);
    if (isPic) {
        xBtn.classList.remove('xOut');
        img = createElementFromHTML("<img src= "+imgSrc[index]+">");
        imgContainer.append(img);
        imgContainer.style.width = "auto";
        imgContainer.style.height = "auto";
    } else {
        spinner = createElementFromHTML('\
        <div id="spinner">\
            <div class="rect1"></div>\
            <div class="rect2"></div>\
            <div class="rect3"></div>\
            <div class="rect4"></div>\
            <div class="rect5"></div>\
        </div>');
        xBtn.classList.add('xOut');
        imgContainer.classList.add("vidSize");
        imgContainer.append(spinner);
        height = window.innerHeight/3;
        width = height*1.778;
        // imgContainer.append(createElementFromHTML("<div id='player'></div>"));
        iframe = createElementFromHTML("\<iframe id='i_frame' width='100%' height='100%' src='"+vidSrc[index]+"' frameborder='0' mozallowfullscreen webkiteallowfullscreen allowfullscreen></iframe>");
        imgContainer.append(iframe);
        imgContainer.style.width = width;
        imgContainer.style.height = height;

        // checkIframeLoaded();
    }

    // Event Listeners
    document.addEventListener('keydown',handleKeyDown);
    lightBoxContainer.addEventListener("click",(e) => {
        if (e.target.id === "lightBoxContainer") {
            hide_lightbox();
        }
    });
    rArrow.addEventListener("click",next_item);
    lArrow.addEventListener("click",previous_item);
    // Swipes
    lightBoxContainer.addEventListener("touchstart",(e) => {
        touchstart = e.changedTouches[0].screenX;
    });
    lightBoxContainer.addEventListener("touchend",(e) => {
        touchend = e.changedTouches[0].screenX;
        swipeHandler();
    });
}
for (const div of document.querySelectorAll(".lightBox")) {
    div.addEventListener("click",display_light_box);
}

// Hide Light Box
function hide_lightbox(e) {
    lightBoxContainer.classList.remove("opacity1");
    setTimeout(function () {
        lightBoxContainer.classList.remove("displayFlex");
    },100);
    let remove_children = [];
    for (const child of imgContainer.children) {
        if (child.id === "spinner" || child.nodeName == "IFRAME" || child.nodeName == "IMG") {
            remove_children.push(child);
        }
    }
    for (const child of remove_children) {
        console.log(child.nodeName,child.classList);
        child.remove();
    }
    imgContainer.classList.remove('vidSize');
    document.removeEventListener('keydown',handleKeyDown,e);
}
xBtn.addEventListener("click", hide_lightbox);


// Right Arrow
function next_item() {
    if (isPic) {
        if (index === img_index_max-1) {
            index = 0;
        } else {
            index++;
        }
        img.attributes.src.value = imgSrc[index];
    } else {
        if (index === vid_index_max-1) {
            index = 0;
        } else {
            index++;
        }
        iframe.attributes.src.value = vidSrc[index];
    }
}

// Left Arrow
function previous_item() {
    if (isPic) {
        if (index === 0) {
            index = img_index_max-1;
        } else {
            index--;
        }
        img.attributes.src.value = imgSrc[index];
    } else {
        if (index === 0) {
            index = vid_index_max-1;
        } else {
            index--;
        }
        iframe.attributes.src.value = vidSrc[index];
    }
}


// SWIPING
function swipeHandler() {
    if (touchstart > touchend) {
        next_item();
    } else if (touchstart < touchend) {
        previous_item();
    }
}