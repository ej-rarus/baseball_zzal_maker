const lineWidth = document.getElementById("line-width");
const lineWidthText = document.getElementById("line-width-text");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const canvas = document.querySelector("#canvas");
const underCanvas = document.querySelector("#under-canvas");
const ctx = canvas.getContext("2d");
const underCtx = underCanvas.getContext("2d");

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

const selectedTeam = document.getElementById("selected-team");

const fileInput = document.getElementById("file");


const modeBtn = document.getElementById("mode-btn");
const eraserBtn = document.getElementById("eraser-btn");
const resetBtn = document.getElementById("reset-btn");
const downloadBtn = document.getElementById("export-btn");

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
let isFilling = false;

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

    downloadLink.download = "Your_Drawing.png";
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.click();
}


function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";

    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

function onResetClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
    isFilling = false;
    modeBtn.innerText = "Fill";
    ctx.strokeStyle = "white";
}

function onTeamSubmit(event) {
    event.preventDefault();
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const teamName = document.getElementById("team-select");
    let image = document.getElementById(teamName.value);
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log(url);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

downloadBtn.addEventListener("click", onDownloadBtnClick);

colorOptions.forEach(color => color.addEventListener("click", onColorClick));

selectedTeam.addEventListener("submit", onTeamSubmit);

modeBtn.addEventListener("click", onModeClick);
eraserBtn.addEventListener("click", onEraserClick);
resetBtn.addEventListener("click", onResetClick);


fileInput.addEventListener("change", onFileChange);