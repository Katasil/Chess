"use strict";
let flag = true,
    $body = document.getElementsByTagName("body"),
    $canvas = document.getElementsByTagName("canvas"),
    ctx = $canvas[0].getContext("2d");
for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, i * 40);
    ctx.lineTo(560, i * 40);
    ctx.stroke();
    if (i === 5 || i === 9) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(200, i * 40);
        ctx.lineTo(360, i * 40);
        ctx.stroke();
    }
}
for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(i * 40, 0);
    ctx.lineTo(i * 40, 560);
    ctx.stroke();
    if (i === 5 || i === 9) {
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(i * 40, 200);
        ctx.lineTo(i * 40, 360);
        ctx.stroke();
    }
}
for (let i = 97; i <= 111; i++) {
    for (let o = 1; o <= 15; o++) {
        let $div = document.createElement("div");
        $div.className = String.fromCharCode(i) + o;
        $div.addEventListener("click", function () {
            addImg($div.className);
        });
        $body[0].insertBefore($div, $canvas[0].nextSibling);
    }
}

function addImg(className) {
    let $div = document.getElementsByTagName("div"),
        $img = document.createElement("img"),
        bw = ((flag) ? "black" : "white"),
        i_1 = className.charCodeAt(0),
        i_2 = Number(className.substr(1)),
        continuous = 0;
    $img.src = "img/" + bw + ".png";
    $img.className = className + " " + bw;
    $body[0].insertBefore($img, $div[$div.length - 1].nextSibling);
    for (let i = i_1 - 1; i >= 97; i--) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + i_2);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    for (let i = i_1 + 1; i <= 111; i++) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + i_2);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    end(continuous, flag);
    continuous = 0;
    for (let i = i_2 - 1; i >= 1; i--) {
        let $img = document.querySelector("img." + String.fromCharCode(i_1) + i);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    for (let i = i_2 + 1; i <= 15; i++) {
        let $img = document.querySelector("img." + String.fromCharCode(i_1) + i);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    end(continuous, flag);
    continuous = 0;
    for (let i = i_1 - 1, o = i_2 - 1; i >= 97 && o >= 1; i--, o--) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + o);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    for (let i = i_1 + 1, o = i_2 + 1; i <= 111 && o <= 15; i++, o++) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + o);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    end(continuous, flag);
    continuous = 0;
    for (let i = i_1 - 1, o = i_2 + 1; i >= 97 && o <= 15; i--, o++) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + o);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    for (let i = i_1 + 1, o = i_2 - 1; i <= 111 && o >= 1; i++, o--) {
        let $img = document.querySelector("img." + String.fromCharCode(i) + o);
        if ($img !== null && $img.classList.contains(bw)) {
            continuous++;
        } else {
            break;
        }
    }
    end(continuous, flag);
    flag = !flag;
}

function end(continuous, flag) {
    if (continuous >= 4) {
        if (continuous === 4) {
            console.log(((flag) ? "黑" : "白") + "方胜利");
        } else {
            console.log("平局");
        }
        let $div = document.createElement("div"),
            $img = document.getElementsByTagName("img");
        $div.className = "end";
        $body[0].insertBefore($div, $img[$img.length - 1].nextSibling);
    }
}