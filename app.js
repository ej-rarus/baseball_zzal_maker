
const lineWidth = document.getElementById("line-width");
const lineWidthText = document.getElementById("line-width-text");
const textSize = document.getElementById("text-size");
const textSizeText = document.getElementById("text-size-text");
const color = document.getElementById("color");
const Drawcolor = document.getElementById("draw-color");
const textColor = document.getElementById("text-color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const canvas = document.getElementById("canvas");
const underCanvas = document.getElementById("under-canvas");
const ctx = canvas.getContext("2d");
const underCtx = underCanvas.getContext("2d");


const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const backgroundTab = document.getElementById("background-tab");
const teamTab = document.getElementById("team-tab");
const uniformTab = document.getElementById("uniform-tab");
const accTab = document.getElementById("acc-tab");
const drawingTab = document.getElementById("drawing-tab");
const textTab = document.getElementById("text-tab");

const backgroundUI = document.querySelector(".background-ui-container");
const teamUI = document.querySelector(".teamchoose-ui-container");
const uniformUI = document.querySelector(".uniform-ui-container");
const accUI = document.querySelector(".acc-ui-container");
const drawingUI = document.querySelector(".drawing-ui-container");
const textUI = document.querySelector(".text-ui-container");

const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");

const TeamSaveBtn = document.getElementById("team-save");
const TeamResetBtn = document.getElementById("team-reset");
const UniformSaveBtn = document.getElementById("uniform-save");
const UniformResetBtn = document.getElementById("uniform-reset");
const BatSaveBtn = document.getElementById("bat-save");
const BatResetBtn = document.getElementById("bat-reset");
const DrawSaveBtn = document.getElementById("draw-save");
const BeforeBtn = document.getElementById("return-before");
const AfterBtn = document.getElementById("return-after");

const fillBtn = document.getElementById("fill-btn");
const drawBtn = document.getElementById("draw-btn");
const eraserBtn = document.getElementById("eraser-btn");
const resetBtn = document.getElementById("reset-btn");


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


canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
underCanvas.width = CANVAS_WIDTH;
underCanvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
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

        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown() {
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
    lineWidthText.innerText = `line-width: ${event.target.value}`;
}

function onDownloadBtnClick(event) {
    const downloadLink = document.createElement("a");

    underCtx.drawImage(canvas,0,0,CANVAS_WIDTH, CANVAS_HEIGHT);

    downloadLink.download = "Your_Drawing.png";
    downloadLink.href = (underCanvas.toDataURL("image/png"));
    downloadLink.click();
}


function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
    underCtx.strokeStyle = event.target.value;
    underCtx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    underCtx.strokeStyle = colorValue;
    underCtx.fillStyle = colorValue;
    color.value = colorValue;
    Drawcolor.value = colorValue;
    textColor.value = colorValue;
}

function onfillClick() {
    underCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onDrawClick(){
    ctx.globalCompositeOperation="source-over"
}

function onEraserClick() {
    ctx.globalCompositeOperation="destination-out";
}

const imgs = new Array();
const teams = ["doosan","hanwha","kia","kiwoom","kt","lg1","lg2","lotte","nc","samsung","ssg" ];

for (let i=0;i<11; i++) {
    imgs[i] = new Image();
    const teamName = document.getElementById(teams[i]);
    imgs[i].src = teamName.src;     
};

function onClickteamCharacter(event){
    event.preventDefault();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i=0;i<11; i++){
        if (event.target.value === teams[i]){
            ctx.drawImage(imgs[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        };  
    };
    }
   
    const imgArray = new Array();
    const uniforms = ["uniform-doosan","uniform-hanwha","uniform-kia","uniform-kiwoom",
    "uniform-kt","uniform-lg", "uniform-lotte","uniform-nc","uniform-samsung","uniform-ssg"];

    for (let i=0;i<10; i++) {
        imgArray[i] = new Image();
        const uniformName = document.getElementById(uniforms[i]);
        imgArray[i].src = uniformName.src;     
    };

    function onClickUniform(event){
        for (let i=0;i<11; i++){
            if (event.target.value === uniforms[i]){
                if (event.target.className == "wear-btn") {
                    ctx.drawImage(imgArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
                    event.target.className= "wear-clicked-btn";
                    }  else { 
                        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                        event.target.className = "wear-btn"; 
                        };
                };  
            };
        }

    function onModeSave(){
        underCtx.drawImage(canvas,0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    }


    function onModeReset(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    function onModeUniformReset(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        for (let i=0;i<11; i++){
            if (document.querySelector(".wear-clicked-btn")){
                document.querySelector(".wear-clicked-btn").className = "wear-btn";
            }
        }
    }

    function onModeBatReset(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        for (let i=0;i<11; i++){
            if (document.querySelector(".bat-clicked-btn")){
                document.querySelector(".bat-clicked-btn").className = "bat-btn";
            }
        }
    }

    const batArray = new Array();
    const bats = ["bat-doosan", "bat-hanwha","bat-kia","bat-kiwoom" ,
    "bat-kt","bat-lg","bat-lotte","bat-nc","bat-samsung","bat-ssg"]

    for (let i=0;i<10; i++) {
        batArray[i] = new Image();
        const batName = document.getElementById(bats[i]);
        batArray[i].src = batName.src;     
    };

    function onClickBat(event){
    for (let i=0;i<11; i++){
        if (event.target.value === bats[i]){
            if (event.target.className == "bat-btn") {
                ctx.drawImage(batArray[i], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                event.target.className= "bat-clicked-btn";
                }  else {   
                    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                    event.target.className = "bat-btn"; 
                };
            };  
        };
    }


function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
}

function onTexting(event){
    const text= textInput.value;
    const fonttype = "serif"
    if(text !== ""){
        ctx.lineWidth = 1;
        ctx.font = `${ctx.textSize}px ${fonttype}`;
        ctx.strokeText(text, event.offsetX, event.offsetY);
    }

}

function onTextSizeChange(event) {
    ctx.textSize = event.target.value;
    textSizeText.innerText = `text-size: ${event.target.value}`;
}

function onModeBefore(){
    ctx.drawImage(img1, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
}

function onclickBackgroundTab(){
    if (backgroundUI.style.display === "" || backgroundUI.style.display === "none") {
        accUI.style.display = "none";
        drawingUI.style.display = "none";
        textUI.style.display = "none";
        uniformUI.style.display = "none";
        teamUI.style.display = "none";
        backgroundUI.style.display="flex";
    }
}
function onClickTeamTab() {
    if (teamUI.style.display === "" || teamUI.style.display === "none") {
        accUI.style.display = "none";
        drawingUI.style.display = "none";
        textUI.style.display = "none";
        uniformUI.style.display = "none";
        backgroundUI.style.display = "none";
        teamUI.style.display = "flex";
    }else {
        teamUI.style.display = "none";
    }
}

function onClickUniformTab() {
    if (uniformUI.style.display === "" || uniformUI.style.display === "none") {
        teamUI.style.display = "none";
        accUI.style.display = "none";
        drawingUI.style.display = "none";
        textUI.style.display = "none";
        backgroundUI.style.display = "none";
        uniformUI.style.display = "flex";
    } else {
        uniformUI.style.display = "none";
    }
}

function onClickAccTab() {
    if (accUI.style.display === "" || accUI.style.display === "none") {
        teamUI.style.display = "none";
        drawingUI.style.display = "none";
        textUI.style.display = "none";
        uniformUI.style.display = "none";
        backgroundUI.style.display = "none";
        accUI.style.display = "flex";
    } else {
        accUI.style.display = "none";
    }
}

function onClickDrawingTab() {
    if (drawingUI.style.display === "" || drawingUI.style.display === "none") {
        teamUI.style.display = "none";
        accUI.style.display = "none";
        textUI.style.display = "none";
        uniformUI.style.display = "none";
        backgroundUI.style.display = "none";
        drawingUI.style.display = "flex";
    } else {
        drawingUI.style.display = "none";
    }
}

function onClickTextTab() {
    if (textUI.style.display === "" || textUI.style.display === "none") {
        teamUI.style.display = "none";
        accUI.style.display = "none";
        drawingUI.style.display = "none";
        uniformUI.style.display = "none";
        backgroundUI.style.display = "none";
        textUI.style.display = "flex";
    } else {
        textUI.style.display = "none";
    }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("dblclick", onTexting);

backgroundTab.addEventListener("click",onclickBackgroundTab)
teamTab.addEventListener("click", onClickTeamTab);
uniformTab.addEventListener("click", onClickUniformTab);
accTab.addEventListener("click", onClickAccTab);
drawingTab.addEventListener("click", onClickDrawingTab);
textTab.addEventListener("click", onClickTextTab);


lineWidth.addEventListener("change", onLineWidthChange);
textSize.addEventListener("change", onTextSizeChange);
color.addEventListener("change", onColorChange);

downloadBtn.addEventListener("click", onDownloadBtnClick);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

fillBtn.addEventListener("click", onfillClick);
drawBtn.addEventListener("click", onDrawClick);
eraserBtn.addEventListener("click", onEraserClick);
resetBtn.addEventListener("click", onModeReset);

TeamResetBtn.addEventListener("click", onModeReset);
TeamSaveBtn.addEventListener("click", onModeSave);
UniformResetBtn.addEventListener("click", onModeUniformReset);
UniformSaveBtn.addEventListener("click", onModeSave);
BatResetBtn.addEventListener("click", onModeBatReset);
BatSaveBtn.addEventListener("click", onModeSave);
DrawSaveBtn.addEventListener("click", onModeSave);
BeforeBtn.addEventListener("click", onModeBefore);

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


fileInput.addEventListener("change", onFileChange);

