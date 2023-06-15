const root = document.documentElement;
const rootStyle = getComputedStyle(root);

const lineWidth = document.getElementById("line-width");
const lineWidthText = document.getElementById("line-width-text");
const textSize = document.getElementById("text-size");
const textSizeText = document.getElementById("text-size-text");
const color = document.getElementById("color");
const colorOption = document.querySelector(".color-option");
const Drawcolor = document.getElementById("draw-color");
const textColor = document.getElementById("text-color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const colorDrawOptions = Array.from(document.getElementsByClassName("color-draw-option"));
const colorTextOptions = Array.from(document.getElementsByClassName("color-text-option"));

const textCanvas = document.getElementById("text-canvas");
const drawCanvas = document.getElementById("draw-canvas");
const accCanvas = document.getElementById("acc-canvas");
const batCanvas = document.getElementById("bat-canvas");
const uniformCanvas = document.getElementById("uniform-canvas");
const teamCanvas = document.getElementById("team-canvas");
const underCanvas = document.getElementById("under-canvas");

const textCtx = textCanvas.getContext("2d");
const drawCtx = drawCanvas.getContext("2d");
const accCtx = accCanvas.getContext("2d");
const batCtx = batCanvas.getContext("2d");
const uniformCtx = uniformCanvas.getContext("2d");
const teamCtx = teamCanvas.getContext("2d");
const underCtx = underCanvas.getContext("2d");


const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const backgroundTab = document.getElementById("background-tab");
const teamTab = document.getElementById("team-tab");
const uniformTab = document.getElementById("uniform-tab");
const accTab = document.getElementById("acc-tab");
const drawingTab = document.getElementById("drawing-tab");
const textTab = document.getElementById("text-tab");

const tabInTabBat = document.getElementById("tab-in-tab-bat-btn");
const tabInTabCap = document.getElementById("tab-in-tab-cap-btn");
const tabInTabEtc = document.getElementById("tab-in-tab-etc-btn");

const tabInTabBatUI = document.getElementById("tab-in-tab-bat");
const tabInTabCapUI = document.getElementById("tab-in-tab-cap");
const tabInTabEtcUI = document.getElementById("tab-in-tab-etc");


const backgroundUI = document.querySelector(".background-ui-container");
const teamUI = document.querySelector(".teamchoose-ui-container");
const uniformUI = document.querySelector(".uniform-ui-container");
const accUI = document.querySelector(".acc-ui-container");
const drawingUI = document.querySelector(".drawing-ui-container");
const textUI = document.querySelector(".text-ui-container");

const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");

const fillBtn = document.getElementById("fill-btn");
const drawBtn = document.getElementById("draw-btn");
const eraserBtn = document.getElementById("eraser-btn");
const resetBtn = document.getElementById("reset-btn");
const textReset = document.getElementById("text-reset-btn");

const gotoTopBtn = document.getElementById("gotoTop");

const downloadBtn = document.getElementById("export-btn");
const teamDB = document.getElementById("team_DB");
const teamLG = document.getElementById("team_LG");
const teamSL = document.getElementById("team_SL");
const teamKH = document.getElementById("team_KH");
const teamHE = document.getElementById("team_HE");
const teamKT = document.getElementById("team_KT");
const teamKW = document.getElementById("team_KW");
const teamLT1 = document.getElementById("team_LT1");
const teamLT2 = document.getElementById("team_LT2");
const teamND = document.getElementById("team_ND");
const teamSD = document.getElementById("team_SD");

const uniformDB = document.getElementById("wear-DB");
const uniformLG = document.getElementById("wear-LG");
const uniformSL = document.getElementById("wear-SL");
const uniformKH = document.getElementById("wear-KH");
const uniformHE = document.getElementById("wear-HE");
const uniformKT = document.getElementById("wear-KT");
const uniformKW = document.getElementById("wear-KW");
const uniformLT = document.getElementById("wear-LT");
const uniformND = document.getElementById("wear-ND");
const uniformSD = document.getElementById("wear-SD");

const batDB = document.getElementById("bat-DB");
const batLG = document.getElementById("bat-LG");
const batSL = document.getElementById("bat-SL");
const batKH = document.getElementById("bat-KH");
const batHE = document.getElementById("bat-HE");
const batKT = document.getElementById("bat-KT");
const batKW = document.getElementById("bat-KW");
const batLT = document.getElementById("bat-LT");
const batND = document.getElementById("bat-ND");
const batSD = document.getElementById("bat-SD");

const capDB = document.getElementById("cap-DB")
const capLG = document.getElementById("cap-LG")
const capSL = document.getElementById("cap-SL")
const capHE = document.getElementById("cap-HE")
const capKT = document.getElementById("cap-KT")
const capKW = document.getElementById("cap-KW")
const capND = document.getElementById("cap-ND")
const capSD = document.getElementById("cap-SD")

const accDB = document.getElementById("acc-DB");
const accLG = document.getElementById("acc-LG");
const accSL = document.getElementById("acc-SL");
const accKH = document.getElementById("acc-KH");
const accHE = document.getElementById("acc-HE");
const accKT = document.getElementById("acc-KT");
const accKW = document.getElementById("acc-KW");
const accLT = document.getElementById("acc-LT");
const accND = document.getElementById("acc-ND");
const accSD = document.getElementById("acc-SD");



textCanvas.width = CANVAS_WIDTH;
textCanvas.height = CANVAS_HEIGHT;
drawCanvas.width = CANVAS_WIDTH;
drawCanvas.height = CANVAS_HEIGHT;
accCanvas.width = CANVAS_WIDTH;
accCanvas.height = CANVAS_HEIGHT;
batCanvas.width = CANVAS_WIDTH;
batCanvas.height = CANVAS_HEIGHT;
uniformCanvas.width = CANVAS_WIDTH;
uniformCanvas.height = CANVAS_HEIGHT;
teamCanvas.width = CANVAS_WIDTH;
teamCanvas.height = CANVAS_HEIGHT;
underCanvas.width = CANVAS_WIDTH;
underCanvas.height = CANVAS_HEIGHT;

textCtx.lineWidth = lineWidth.value;
drawCtx.lineWidth = lineWidth.value;
accCtx.lineWidth = lineWidth.value;
batCtx.lineWidth = lineWidth.value;
uniformCtx.lineWidth = lineWidth.value;
teamCtx.lineWidth = lineWidth.value;
underCtx.lineWidth = lineWidth.value;


const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];


let isPainting = false;

function onMove(event) {
    //ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];

    if (isPainting) {

        drawCtx.lineTo(event.offsetX, event.offsetY);
        drawCtx.stroke();
        return;
    }
    drawCtx.beginPath();
    drawCtx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
}

function onLineWidthChange(event) {
    drawCtx.lineWidth = event.target.value;
    lineWidthText.innerText = `line-width: ${event.target.value}`;
}

function onDownloadBtnClick(event) {
    const downloadLink = document.createElement("a");

    underCtx.drawImage(teamCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    underCtx.drawImage(uniformCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    underCtx.drawImage(batCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    underCtx.drawImage(accCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    underCtx.drawImage(drawCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    underCtx.drawImage(textCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    downloadLink.download = "Your_Drawing.png";
    downloadLink.href = (underCanvas.toDataURL("image/png"));
    downloadLink.click();
}

function onGotoTopBtnclick(event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function onColorChange(event) {
    textCtx.strokeStyle = event.target.value;
    textCtx.fillStyle = event.target.value;
    drawCtx.strokeStyle = event.target.value;
    drawCtx.fillStyle = event.target.value;
    underCtx.strokeStyle = event.target.value;
    underCtx.fillStyle = event.target.value;
    console.log(event.target.value);
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    underCtx.strokeStyle = colorValue;
    underCtx.fillStyle = colorValue;
    textCtx.strokeStyle = colorValue;
    textCtx.fillStyle = colorValue;
    textColor.value = colorValue;
    color.value = colorValue;
    underCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}


function onColorDrawClick(event) {
    const colorValue = event.target.dataset.color;
    textCtx.strokeStyle = colorValue;
    textCtx.fillStyle = colorValue;
    drawCtx.strokeStyle = colorValue;
    drawCtx.fillStyle = colorValue;
    underCtx.strokeStyle = colorValue;
    underCtx.fillStyle = colorValue;
    color.value = colorValue;
    Drawcolor.value = colorValue;
    textColor.value = colorValue;
}

function onDrawClick() {
    drawCtx.globalCompositeOperation = "source-over"
}

function onEraserClick() {
    drawCtx.globalCompositeOperation = "destination-out";
}

const imgs = new Array();
const teams = ["doosan", "hanwha", "kia", "kiwoom", "kt", "lg1", "lg2", "lotte", "nc", "samsung", "ssg"];

for (let i = 0; i < 11; i++) {
    imgs[i] = new Image();
    const teamName = document.getElementById(teams[i]);
    imgs[i].src = teamName.src;
};

function onClickteamCharacter(event) {
    event.preventDefault();
    teamCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i = 0; i < 11; i++) {
        if (event.target.value === teams[i]) {
            teamCtx.drawImage(imgs[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        };
    };
}

const imgArray = new Array();
const uniforms = ["uniform-doosan", "uniform-hanwha", "uniform-kia", "uniform-kiwoom",
    "uniform-kt", "uniform-lg", "uniform-lotte", "uniform-nc", "uniform-samsung", "uniform-ssg"];

for (let i = 0; i < 10; i++) {
    imgArray[i] = new Image();
    const uniformName = document.getElementById(uniforms[i]);
    imgArray[i].src = uniformName.src;
};

function onClickUniform(event) {
    event.preventDefault();
    uniformCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i = 0; i < 10; i++) {
        if (event.target.value === uniforms[i]) {
            if (event.target.className == "wear-btn") {
                event.target.className += " active";
                uniformCtx.drawImage(imgArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            } else {
                event.target.className = "wear-btn";
            }
        }
    };
}


const capArray = new Array();
const caps = ["cap-doosan", "cap-hanwha", "cap-kia", "cap-kt", "cap-lotte", "cap-nc", "cap-samsung", "cap-ssg"]

for (let i = 0; i < 8; i++) {
    capArray[i] = new Image();
    const capName = document.getElementById(caps[i]);
    capArray[i].src = capName.src;
};

function onClickCap(event) {
    event.preventDefault();
    accCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i = 0; i < 8; i++) {
        if (event.target.value === caps[i]) {
            if (event.target.className == "cap-btn") {
                accCtx.drawImage(capArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "cap-clicked-btn";
            } else {
                accCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "cap-btn";
            };
        };
    };
}

const batArray = new Array();
const bats = ["bat-doosan", "bat-hanwha", "bat-kia", "bat-kiwoom",
    "bat-kt", "bat-lg", "bat-lotte", "bat-nc", "bat-samsung", "bat-ssg"]

for (let i = 0; i < 10; i++) {
    batArray[i] = new Image();
    const batName = document.getElementById(bats[i]);
    batArray[i].src = batName.src;
};

function onClickBat(event) {
    event.preventDefault();
    batCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i = 0; i < 10; i++) {
        if (event.target.value === bats[i]) {
            if (event.target.className == "bat-btn") {
                batCtx.drawImage(batArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "bat-clicked-btn";
            } else {
                batCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "bat-btn";
            };
        };
    };
}

const accArray = new Array();
const accs = ["acc-doosan", "acc-hanwha", "acc-kia", "acc-kiwoom",
    "acc-kt", "acc-lg", "acc-lotte", "acc-nc", "acc-samsung", "acc-ssg"]

for (let i = 0; i < 10; i++) {
    accArray[i] = new Image();
    const accName = document.getElementById(accs[i]);
    accArray[i].src = accName.src;
};

function onClickAcc(event) {
    for (let i = 0; i < 10; i++) {
        if (event.target.value === accs[i]) {
            if (event.target.className == "acc-btn") {
                accCtx.drawImage(accArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "acc-clicked-btn";
            } else {
                accCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className = "acc-btn";
            };
        };
    };
}


function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
    newFile = new Image();
    newFile.src = url;
    underCtx.drawImage(newFile, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onTexting(event) {
    const text = textInput.value;
    const fonttype = "serif"
    if (text !== "") {
        textCtx.lineWidth = 1;
        textCtx.font = `${textSize.value}px ${fonttype}`;
        textCtx.fillText(text, event.offsetX, event.offsetY);
    }

}

function onModeReset() {
    drawCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onModeTextReset() {
    textCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onTextSizeChange(event) {
    textCtx.textSize = event.target.value;
    textSizeText.innerText = `text-size: ${event.target.value}`;
}


function onclickBackgroundTab() {
    if (backgroundUI.style.display === "" || backgroundUI.style.display === "none") {
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";

        backgroundUI.style.display = "flex";
        backgroundTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-a"));
    } else {
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";
    }
}
function onClickTeamTab() {
    if (teamUI.style.display === "" || teamUI.style.display === "none") {
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";

        teamUI.style.display = "flex";
        teamTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-b"));

    } else {
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";
    }
}

function onClickUniformTab() {
    if (uniformUI.style.display === "" || uniformUI.style.display === "none") {
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";

        uniformUI.style.display = "flex";
        uniformTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-c"));
    } else {
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
    }
}

function onClickAccTab() {
    if (accUI.style.display === "" || accUI.style.display === "none") {
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";

        accUI.style.display = "flex";
        accTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-d"));
    } else {
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
    }
}

function onClickDrawingTab() {
    if (drawingUI.style.display === "" || drawingUI.style.display === "none") {
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";

        drawingUI.style.display = "flex";
        drawingTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-e"));
    } else {
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
    }
}

function onClickTextTab() {
    if (textUI.style.display === "" || textUI.style.display === "none") {
        teamUI.style.display = "none";
        teamTab.style.backgroundColor = "white";
        accUI.style.display = "none";
        accTab.style.backgroundColor = "white";
        drawingUI.style.display = "none";
        drawingTab.style.backgroundColor = "white";
        uniformUI.style.display = "none";
        uniformTab.style.backgroundColor = "white";
        backgroundUI.style.display = "none";
        backgroundTab.style.backgroundColor = "white";

        textUI.style.display = "flex";
        textTab.style.setProperty("background-color", rootStyle.getPropertyValue("--theme-color-f"));
    } else {
        textUI.style.display = "none";
        textTab.style.backgroundColor = "white";
    }
}

function onClickTabInTabBat() {
    if (tabInTabBatUI.style.display === "" || tabInTabBatUI.style.display === "none") {
        tabInTabEtcUI.style.display = "none";
        tabInTabCapUI.style.display = "none";
        tabInTabBatUI.style.display = "flex";
    } else {
        tabInTabBatUI.style.display = "none";
    }
}

function onClickTabInTabCap() {
    if (tabInTabCapUI.style.display === "" || tabInTabCapUI.style.display === "none") {
        tabInTabEtcUI.style.display = "none";
        tabInTabBatUI.style.display = "none";
        tabInTabCapUI.style.display = "flex";
    } else {
        tabInTabCapUI.style.display = "none";
    }
}

function onClickTabInTabEtc() {
    if (tabInTabEtcUI.style.display === "" || tabInTabEtcUI.style.display === "none") {
        tabInTabBatUI.style.display = "none";
        tabInTabCapUI.style.display = "none";
        tabInTabEtcUI.style.display = "flex";
    } else {
        tabInTabEtcUI.style.display = "none";
    }
}




textCanvas.addEventListener("mousemove", onMove);
textCanvas.addEventListener("mousedown", onMouseDown);
textCanvas.addEventListener("mouseup", cancelPainting);
textCanvas.addEventListener("mouseleave", cancelPainting);
textCanvas.addEventListener("dblclick", onTexting);

backgroundTab.addEventListener("click", onclickBackgroundTab)
teamTab.addEventListener("click", onClickTeamTab);
uniformTab.addEventListener("click", onClickUniformTab);
accTab.addEventListener("click", onClickAccTab);
drawingTab.addEventListener("click", onClickDrawingTab);
textTab.addEventListener("click", onClickTextTab);

tabInTabBat.addEventListener("click", onClickTabInTabBat);
tabInTabCap.addEventListener("click", onClickTabInTabCap);
tabInTabEtc.addEventListener("click", onClickTabInTabEtc);

lineWidth.addEventListener("change", onLineWidthChange);
textSize.addEventListener("change", onTextSizeChange);
color.addEventListener("change", onColorChange);

downloadBtn.addEventListener("click", onDownloadBtnClick);

gotoTopBtn.addEventListener("click", onGotoTopBtnclick);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));
colorDrawOptions.forEach(color => color.addEventListener("click", onColorDrawClick));
colorTextOptions.forEach(color => color.addEventListener("click", onColorDrawClick));

drawBtn.addEventListener("click", onDrawClick);
eraserBtn.addEventListener("click", onEraserClick);
resetBtn.addEventListener("click", onModeReset);
textReset.addEventListener("click", onModeTextReset);

teamDB.addEventListener("click", onClickteamCharacter);
teamLG.addEventListener("click", onClickteamCharacter);
teamSL.addEventListener("click", onClickteamCharacter);
teamKH.addEventListener("click", onClickteamCharacter);
teamHE.addEventListener("click", onClickteamCharacter);
teamKT.addEventListener("click", onClickteamCharacter);
teamKW.addEventListener("click", onClickteamCharacter);
teamLT1.addEventListener("click", onClickteamCharacter);
teamLT2.addEventListener("click", onClickteamCharacter);
teamND.addEventListener("click", onClickteamCharacter);
teamSD.addEventListener("click", onClickteamCharacter);

uniformDB.addEventListener("click", onClickUniform);
uniformLG.addEventListener("click", onClickUniform);
uniformSL.addEventListener("click", onClickUniform);
uniformKH.addEventListener("click", onClickUniform);
uniformHE.addEventListener("click", onClickUniform);
uniformKT.addEventListener("click", onClickUniform);
uniformKW.addEventListener("click", onClickUniform);
uniformLT.addEventListener("click", onClickUniform);
uniformND.addEventListener("click", onClickUniform);
uniformSD.addEventListener("click", onClickUniform);

batDB.addEventListener("click", onClickBat);
batLG.addEventListener("click", onClickBat);
batSL.addEventListener("click", onClickBat);
batKH.addEventListener("click", onClickBat);
batHE.addEventListener("click", onClickBat);
batKT.addEventListener("click", onClickBat);
batKW.addEventListener("click", onClickBat);
batLT.addEventListener("click", onClickBat);
batND.addEventListener("click", onClickBat);
batSD.addEventListener("click", onClickBat);

capDB.addEventListener("click", onClickCap);
capLG.addEventListener("click", onClickCap);
capSL.addEventListener("click", onClickCap);
capHE.addEventListener("click", onClickCap);
capKT.addEventListener("click", onClickCap);
capKW.addEventListener("click", onClickCap);
capND.addEventListener("click", onClickCap);
capSD.addEventListener("click", onClickCap);

accDB.addEventListener("click", onClickAcc);
accLG.addEventListener("click", onClickAcc);
accSL.addEventListener("click", onClickAcc);
accKH.addEventListener("click", onClickAcc);
accHE.addEventListener("click", onClickAcc);
accKT.addEventListener("click", onClickAcc);
accKW.addEventListener("click", onClickAcc);
accLT.addEventListener("click", onClickAcc);
accND.addEventListener("click", onClickAcc);
accSD.addEventListener("click", onClickAcc);
fileInput.addEventListener("change", onFileChange);

