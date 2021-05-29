"use strict";
$(function () {
    for (let i = 97; i <= 106; i++) {
        for (let o = 1; o <= 9; o++) {
            $("img.i").after("<div ondrop='drop(event)' ondragover='allowDrop(event)' class='&#" + i + ";" + o + " i' id='&#" + i + ";" + o + "'></div>");
        }
    }
    $("img").contextmenu(function () {
        if ($(this).attr("class") !== "i" && $(this).attr("class") !== "o") {
            $(this).attr("class", "o");
        }
    });
    $("img, div").contextmenu(function () {
        return false;
    });
    $("button").click(function () {
        let img = $("img[class]"),
            s = ["", ""],
            c = ["", ""],
            r = ["", ""],
            h = ["", ""],
            e = ["", ""],
            a = ["", ""],
            g = ["", ""];
        for (let i = 1; i < $(img).length; i++) {
            let o = $(img[i]).attr("id").substring(0, 1),
                ld = ($(img[i]).attr("id").substring(1, 2) === "l") ? 0 : 1;
            switch (o) {
                case "s":
                    s[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "c":
                    c[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "r":
                    r[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "h":
                    h[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "e":
                    e[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "a":
                    a[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
                    break;
                case "g":
                    g[ld] += $(img[i]).attr("class").substring(2, 4) + " ";
            }
        }
        let xml = "<xml-body>\n<s>\n<l>" + s[0].trim() + "</l>\n<d>" + s[1].trim() + "</d>\n</s>\n<c>\n<l>" + c[0].trim() + "</l>\n<d>" + c[1].trim() + "</d>\n</c>\n<r>\n<l>" + r[0].trim() + "</l>\n<d>" + r[1].trim() + "</d>\n</r>\n<h>\n<l>" + h[0].trim() + "</l>\n<d>" + h[1].trim() + "</d>\n</h>\n<e>\n<l>" + e[0].trim() + "</l>\n<d>" + e[1].trim() + "</d>\n</e>\n<a>\n<l>" + a[0].trim() + "</l>\n<d>" + a[1].trim() + "</d>\n</a>\n<g>\n<l>" + g[0].trim() + "</l>\n<d>" + g[1].trim() + "</d>\n</g>\n</xml-body>";
        $("#tc").html("将以下XML内容复制进XML文件内（未包括XML声明）：<br><xmp>" + xml + "</xmp>");
        $("#tc").dialog("open");
        $(".ui-widget-content").addClass("l");
    });
    $("#tc").dialog({
        autoOpen: false
    });
});

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    let data = ev.dataTransfer.getData("Text");
    $("#" + data).attr("class", "o " + ev.target.className.substring(0, 2));
}

function allowDrop(ev) {
    ev.preventDefault();
}