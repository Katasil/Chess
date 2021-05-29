"use strict";
$(function () {
    let mark = true,
        mark1 = "",
        mark2 = ["九", "八", "七", "六", "五", "四", "三", "二", "一"],
        mark3 = 0,
        mark4 = "",
        coor = "";
    $("img").click(function () {
        if (!mark) {
            flag();
        } else if ($(this).attr("class") !== "i") {
            let i = $(this).attr("class").toString();
            coor = i;
            let i_1 = i.charCodeAt(0),
                i_2 = Number(i.charAt(1)),
                o = $(this).attr("id").substring(0, 1),
                p = $(this).attr("id").substring(1, 2);
            if ($("h1").attr("class") === p) {
                switch (o) {
                    case "s":
                        s(i_1, i_2, p);
                        break;
                    case "c":
                        c(i_1, i_2, p);
                        break;
                    case "r":
                        r(i_1, i_2, p);
                        break;
                    case "h":
                        h(i_1, i_2, p);
                        break;
                    case "e":
                        e(i_1, i_2, p);
                        break;
                    case "a":
                        a(i_1, i_2, p);
                        break;
                    case "g":
                        g(i_1, i_2, p);
                }
                mark = false;
            }
        }
    });

    //兵
    function s(coor1, coor2, camp) {
        let $camp = camp === "l",
            $coorx1_1 = coorx(coor1 - 1, coor2),
            $coorx1_2 = coorx(coor1 + 1, coor2),
            $coorx2_1 = coorx(coor1, coor2 - 1),
            $coorx2_2 = coorx(coor1, coor2 + 1),
            $div1_1 = $("div[class='" + String.fromCharCode(coor1 - 1) + coor2 + "']"),
            $div1_2 = $("div[class='" + String.fromCharCode(coor1 + 1) + coor2 + "']"),
            $div2_1 = $("div[class='" + String.fromCharCode(coor1) + (coor2 - 1) + "']"),
            $div2_2 = $("div[class='" + String.fromCharCode(coor1) + (coor2 + 1) + "']");
        if ($camp && (coor1 - 1 >= 97 && ($coorx1_1.val() == null || $coorx1_1.attr("id").substring(1, 2) !== camp))) {
            $div1_1.css("display", "inline");
        }
        if (!$camp && (coor1 + 1 <= 106 && ($coorx1_2.val() == null || $coorx1_2.attr("id").substring(1, 2) !== camp))) {
            $div1_2.css("display", "inline");
        }
        if ($camp && coor1 <= 101 || !$camp && coor1 >= 102) {
            if (coor2 - 1 >= 1 && ($coorx2_1.val() == null || $coorx2_1.attr("id").substring(1, 2) !== camp)) {
                $div2_1.css("display", "inline");
            }
            if (coor2 + 1 <= 9 && ($coorx2_2.val() == null || $coorx2_2.attr("id").substring(1, 2) !== camp)) {
                $div2_2.css("display", "inline");
            }
        }
        marka(($camp) ? "兵" : "卒", coor1, coor2, camp);
    }

    //炮
    function c(coor1, coor2, camp) {
        let q1 = true,
            q2 = true,
            q3 = true,
            q4 = true;
        for (let i = coor1 - 1; i >= 97; i--) {
            let $coorx = coorx(i, coor2),
                $div = $("div[class='" + String.fromCharCode(i) + coor2 + "']");
            if ($coorx.val() != null && q1) {
                q1 = false;
            } else if ($coorx.val() != null && !q1) {
                if ($coorx.attr("id").substring(1, 2) !== camp) {
                    $div.css("display", "inline");
                }
                break;
            }
            if (q1) {
                $div.css("display", "inline");
            }
        }
        for (let i = coor1 + 1; i <= 106; i++) {
            let $coorx = coorx(i, coor2),
                $div = $("div[class='" + String.fromCharCode(i) + coor2 + "']");
            if ($coorx.val() != null && q2) {
                q2 = false;
            } else if ($coorx.val() != null && !q2) {
                if ($coorx.attr("id").substring(1, 2) !== camp) {
                    $div.css("display", "inline");
                }
                break;
            }
            if (q2) {
                $div.css("display", "inline");
            }
        }
        for (let i = coor2 - 1; i >= 1; i--) {
            let $coorx = coorx(coor1, i),
                $div = $("div[class='" + String.fromCharCode(coor1) + i + "']");
            if ($coorx.val() != null && q3) {
                q3 = false;
            } else if ($coorx.val() != null && !q3) {
                if ($coorx.attr("id").substring(1, 2) !== camp) {
                    $div.css("display", "inline");
                }
                break;
            }
            if (q3) {
                $div.css("display", "inline");
            }
        }
        for (let i = coor2 + 1; i <= 9; i++) {
            if (coorx(coor1, i).val() != null && q4) {
                q4 = false;
            } else if (coorx(coor1, i).val() != null && !q4) {
                if (coorx(coor1, i).attr("id").substring(1, 2) !== camp) {
                    $("div[class='" + String.fromCharCode(coor1) + i + "']").css("display", "inline");
                }
                break;
            }
            if (q4) {
                $("div[class='" + String.fromCharCode(coor1) + i + "']").css("display", "inline");
            }
        }
        marka((camp === "l") ? "炮" : "砲", coor1, coor2, camp);
    }

    //俥
    function r(coor1, coor2, camp) {
        for (let i = coor1 - 1; i >= 97; i--) {
            if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id").substring(1, 2) === camp) {
                break;
            }
            $("div[class='" + String.fromCharCode(i) + coor2 + "']").css("display", "inline");
            if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id").substring(1, 2) !== camp) {
                break;
            }
        }
        for (let i = coor1 + 1; i <= 106; i++) {
            if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id").substring(1, 2) === camp) {
                break;
            }
            $("div[class='" + String.fromCharCode(i) + coor2 + "']").css("display", "inline");
            if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id").substring(1, 2) !== camp) {
                break;
            }
        }
        for (let i = coor2.valueOf() - 1; i >= 1; i--) {
            if (coorx(coor1, i).val() != null && coorx(coor1, i).attr("id").substring(1, 2) === camp) {
                break;
            }
            $("div[class='" + String.fromCharCode(coor1) + i + "']").css("display", "inline");
            if (coorx(coor1, i).val() != null && coorx(coor1, i).attr("id").substring(1, 2) !== camp) {
                break;
            }
        }
        for (let i = coor2 + 1; i <= 9; i++) {
            if (coorx(coor1, i).val() != null && coorx(coor1, i).attr("id").substring(1, 2) === camp) {
                break;
            }
            $("div[class='" + String.fromCharCode(coor1) + i + "']").css("display", "inline");
            if (coorx(coor1, i).val() != null && coorx(coor1, i).attr("id").substring(1, 2) !== camp) {
                break;
            }
        }
        marka((camp === "l") ? "俥" : "車", coor1, coor2, camp);
    }

    //傌
    function h(coor1, coor2, camp) {
        if (coor1 - 2 >= 97 && coor2 - 1 >= 1) {
            if (coorp(coor1, coor2, -1, 0).val() == null && (coorp(coor1, coor2, -2, -1).val() == null || coorp(coor1, coor2, -2, -1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 - 1) + "']").css("display", "inline");
            }
        }
        if (coor1 - 2 >= 97 && coor2 + 1 <= 9) {
            if (coorp(coor1, coor2, -1, 0).val() == null && (coorp(coor1, coor2, -2, 1).val() == null || coorp(coor1, coor2, -2, 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 + 1) + "']").css("display", "inline");
            }
        }
        if (coor1 - 1 >= 97 && coor2 - 2 >= 1) {
            if (coorp(coor1, coor2, 0, -1).val() == null && (coorp(coor1, coor2, -1, -2).val() == null || coorp(coor1, coor2, -1, -2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 - 2) + "']").css("display", "inline");
            }
        }
        if (coor1 + 1 <= 106 && coor2 - 2 >= 1) {
            if (coorp(coor1, coor2, 0, -1).val() == null && (coorp(coor1, coor2, 1, -2).val() == null || coorp(coor1, coor2, 1, -2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 - 2) + "']").css("display", "inline");
            }
        }
        if (coor1 - 1 >= 97 && coor2 + 2 <= 9) {
            if (coorp(coor1, coor2, 0, 1).val() == null && (coorp(coor1, coor2, -1, 2).val() == null || coorp(coor1, coor2, -1, 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 + 2) + "']").css("display", "inline");
            }
        }
        if (coor1 + 1 <= 106 && coor2 + 2 <= 9) {
            if (coorp(coor1, coor2, 0, 1).val() == null && (coorp(coor1, coor2, 1, 2).val() == null || coorp(coor1, coor2, 1, 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 + 2) + "']").css("display", "inline");
            }
        }
        if (coor1 + 2 <= 106 && coor2 - 1 >= 1) {
            if (coorp(coor1, coor2, 1, 0).val() == null && (coorp(coor1, coor2, 2, -1).val() == null || coorp(coor1, coor2, 2, -1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 - 1) + "']").css("display", "inline");
            }
        }
        if (coor1 + 2 <= 106 && coor2 + 1 <= 9) {
            if (coorp(coor1, coor2, 1, 0).val() == null && (coorp(coor1, coor2, 2, 1).val() == null || coorp(coor1, coor2, 2, 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 + 1) + "']").css("display", "inline");
            }
        }
        marka((camp === "l") ? "傌" : "馬", coor1, coor2, camp);
    }

    //相
    function e(coor1, coor2, camp) {
        if (camp === "l") {
            if (coor1 - 2 >= 102 && coor2 - 2 >= 1 && coorx(coor1 - 1, coor2 - 1).val() == null && (coorx(coor1 - 2, coor2 - 2).val() == null || coorx(coor1 - 2, coor2 - 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 - 2) + "']").css("display", "inline");
            }
            if (coor1 - 2 >= 102 && coor2 + 2 <= 9 && coorx(coor1 - 1, coor2 + 1).val() == null && (coorx(coor1 - 2, coor2 + 2).val() == null || coorx(coor1 - 2, coor2 + 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 + 2) + "']").css("display", "inline");
            }
            if (coor1 + 2 <= 106 && coor2 - 2 >= 1 && coorx(coor1 + 1, coor2 - 1).val() == null && (coorx(coor1 + 2, coor2 - 2).val() == null || coorx(coor1 + 2, coor2 - 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 - 2) + "']").css("display", "inline");
            }
            if (coor1 + 2 <= 106 && coor2 + 2 <= 9 && coorx(coor1 + 1, coor2 + 1).val() == null && (coorx(coor1 + 2, coor2 + 2).val() == null || coorx(coor1 + 2, coor2 + 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 + 2) + "']").css("display", "inline");
            }
            marka("相", coor1, coor2, camp);
        } else if (camp === "d") {
            if (coor1 - 2 >= 97 && coor2 - 2 >= 1 && coorx(coor1 - 1, coor2 - 1).val() == null && (coorx(coor1 - 2, coor2 - 2).val() == null || coorx(coor1 - 2, coor2 - 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 - 2) + "']").css("display", "inline");
            }
            if (coor1 - 2 >= 97 && coor2 + 2 <= 9 && coorx(coor1 - 1, coor2 + 1).val() == null && (coorx(coor1 - 2, coor2 + 2).val() == null || coorx(coor1 - 2, coor2 + 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 2) + (coor2 + 2) + "']").css("display", "inline");
            }
            if (coor1 + 2 <= 101 && coor2 - 2 >= 1 && coorx(coor1 + 1, coor2 - 1).val() == null && (coorx(coor1 + 2, coor2 - 2).val() == null || coorx(coor1 + 2, coor2 - 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 - 2) + "']").css("display", "inline");
            }
            if (coor1 + 2 <= 101 && coor2 + 2 <= 9 && coorx(coor1 + 1, coor2 + 1).val() == null && (coorx(coor1 + 2, coor2 + 2).val() == null || coorx(coor1 + 2, coor2 + 2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 2) + (coor2 + 2) + "']").css("display", "inline");
            }
            marka("象", coor1, coor2, camp);
        }
    }

    //仕
    function a(coor1, coor2, camp) {
        if (camp === "l") {
            if (coor1 - 1 >= 104 && coor2 - 1 >= 4 && (coorx(coor1 - 1, coor2 - 1).val() == null || coorx(coor1 - 1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor1 - 1 >= 104 && coor2 + 1 <= 6 && (coorx(coor1 - 1, coor2 + 1).val() == null || coorx(coor1 - 1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 + 1) + "']").css("display", "inline");
            }
            if (coor1 + 1 <= 106 && coor2 - 1 >= 4 && (coorx(coor1 + 1, coor2 - 1).val() == null || coorx(coor1 + 1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor1 + 1 <= 106 && coor2 + 1 <= 6 && (coorx(coor1 + 1, coor2 + 1).val() == null || coorx(coor1 + 1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 + 1) + "']").css("display", "inline");
            }
            marka("仕", coor1, coor2, camp);
        } else if (camp === "d") {
            if (coor1 - 1 >= 97 && coor2 - 1 >= 4 && (coorx(coor1 - 1, coor2 - 1).val() == null || coorx(coor1 - 1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor1 - 1 >= 97 && coor2 + 1 <= 6 && (coorx(coor1 - 1, coor2 + 1).val() == null || coorx(coor1 - 1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + (coor2 + 1) + "']").css("display", "inline");
            }
            if (coor2 + 1 <= 99 && coor2 - 1 >= 4 && (coorx(coor1 + 1, coor2 - 1).val() == null || coorx(coor1 + 1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor2 + 1 <= 99 && coor2 + 1 <= 6 && (coorx(coor1 + 1, coor2 + 1).val() == null || coorx(coor1 + 1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + (coor2 + 1) + "']").css("display", "inline");
            }
            marka("士", coor1, coor2, camp);
        }
    }

    //帥
    function g(coor1, coor2, camp) {
        if (camp === "l") {
            if (coor1 - 1 >= 104 && (coorx(coor1 - 1, coor2).val() == null || coorx(coor1 - 1, coor2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + coor2 + "']").css("display", "inline");
            }
            if (coor1 + 1 <= 106 && (coorx(coor1 + 1, coor2).val() == null || coorx(coor1 + 1, coor2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + coor2 + "']").css("display", "inline");
            }
            if (coor2 - 1 >= 4 && (coorx(coor1, coor2 - 1).val() == null || coorx(coor1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor2 + 1 <= 6 && (coorx(coor1, coor2 + 1).val() == null || coorx(coor1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1) + (coor2 + 1) + "']").css("display", "inline");
            }
            for (var i = coor1 - 1; i >= 97; i--) {
                if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id") === "gd") {
                    $("div[class='" + String.fromCharCode(i) + coor2 + "']").css("display", "inline");
                }
                if (coorx(i, coor2).val() != null) {
                    break;
                }
            }
            marka("帥", coor1, coor2, camp);
        } else if (camp === "d") {
            if (coor1 - 1 >= 97 && (coorx(coor1 - 1, coor2).val() == null || coorx(coor1 - 1, coor2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 - 1) + coor2 + "']").css("display", "inline");
            }
            if (coor1 + 1 <= 99 && (coorx(coor1 + 1, coor2).val() == null || coorx(coor1 + 1, coor2).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1 + 1) + coor2 + "']").css("display", "inline");
            }
            if (coor2 - 1 >= 4 && (coorx(coor1, coor2 - 1).val() == null || coorx(coor1, coor2 - 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1) + (coor2 - 1) + "']").css("display", "inline");
            }
            if (coor2 + 1 <= 6 && (coorx(coor1, coor2 + 1).val() == null || coorx(coor1, coor2 + 1).attr("id").substring(1, 2) !== camp)) {
                $("div[class='" + String.fromCharCode(coor1) + (coor2 + 1) + "']").css("display", "inline");
            }
            for (var i = coor1 + 1; i <= 106; i++) {
                if (coorx(i, coor2).val() != null && coorx(i, coor2).attr("id") === "gl") {
                    $("div[class='" + String.fromCharCode(i) + coor2 + "']").css("display", "inline");
                }
                if (coorx(i, coor2).val() != null) {
                    break;
                }
            }
            marka("將", coor1, coor2, camp);
        }
    }

    $("div").click(function () {
        if ($(this).attr("class") !== "i" && $(this).attr("class") !== "o") {
            if ($("img[class='" + $(this).attr("class") + "']").val() != null && $("img[class='" + $(this).attr("class") + "']").attr("id").substring(0, 1) === "g") {
                alert($("h1").text() + "胜利");
                $("#di").css("display", "none");
                $("img").unbind("click");
            }
            let i = $(this).attr("class").toString(),
                i_1 = i.charCodeAt(0),
                i_2 = Number(i.charAt(1));
            marks(i_1, i_2);
            $("img[class='" + $(this).attr("class") + "']").attr("class", "o");
            $("img[class='" + coor + "']").animate({
                top: $(this).position().top,
                left: $(this).position().left
            });
            $("img[class='" + coor + "']").attr("class", $(this).attr("class"));
            flag();
            $("h1").attr("class", ($("h1").attr("class") === "l") ? "d" : "l");
            $("h1").text(($("h1").attr("class") === "l") ? "红" : "黑");
        }
    });

    function flag() {
        for (let i = 97; i <= 106; i++) {
            for (let o = 1; o <= 9; o++) {
                $("div[class='" + String.fromCharCode(i) + o + "']").css("display", "none");
            }
        }
        mark = true;
    }

    function coorx(coor1, coor2) {
        return $("img[class='" + String.fromCharCode(coor1) + coor2 + "']");
    }

    function coorp(coor1, coor2, coor1_1, coor2_1) {
        return $("img[class='" + String.fromCharCode(coor1 + coor1_1) + (coor2 + coor2_1) + "']");
    }

    function marka(species, coor1, coor2, camp) {
        mark1 = species + " " + ((camp === "l") ? mark2[coor2 - 1] : coor2) + " ";
        mark3 = coor1;
        mark4 = camp;
    }

    function marks(coor1, coor2) {
        if (coor1 === mark3) {
            mark1 += "平";
        } else if (mark4 === "l" && coor1 < mark3 || mark4 === "d" && coor1 > mark3) {
            mark1 += "进";
        } else {
            mark1 += "退";
        }
        $("#ta").val($("#ta").val() + mark1 + " " + ((mark4 === "l") ? mark2[coor2 - 1] : coor2) + "\x0a");
    }
});