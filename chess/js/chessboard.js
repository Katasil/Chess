"use strict";
$(function () {
    let m = ["s", "c", "r", "h", "e", "a", "g"],
        txt = sessionStorage.getItem("file"),
        parser = new DOMParser(),
        xmlDoc = parser.parseFromString(txt, "text/xml");
    for (let i = 0; i < 7; i++) {
        try {
            let l = xmlDoc.getElementsByTagName("l")[i].childNodes[0].nodeValue.split(" ");
            for (let o = 0; o < l.length; o++) {
                $(".i").after("<img alt='' src='../img/" + m[i] + "l.png' class='" + l[o] + "' id='" + m[i] + "l" + o + 1 + "' />");
            }
        } catch (err) {
            console.log(err);
        }
        try {
            let d = xmlDoc.getElementsByTagName("d")[i].childNodes[0].nodeValue.split(" ");
            for (let o = 0; o < d.length; o++) {
                $(".i").after("<img alt='' src='../img/" + m[i] + "d.png' class='" + d[o] + "' id='" + m[i] + "d" + o + 1 + "' />");
            }
        } catch (err) {
            console.log(err);
        }
    }
    for (let i = 97; i <= 106; i++) {
        for (let o = 1; o <= 9; o++) {
            $("img:last").after("<div class='&#" + i + ";" + o + "'></div>");
        }
    }
});