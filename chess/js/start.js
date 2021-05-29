"use strict";
$(function () {
    $("#my_file").change(function () {
        let reader = new FileReader(),
            file = document.getElementById("my_file").files[0];
        reader.readAsText(file, "UTF-8");
        reader.onload = function (e) {
            sessionStorage.setItem("file", e.target.result.toString());
            $(location).attr("href", "html/chessboard.html");
        }
    });
    $("#edit").click(function () {
        $(location).attr("href", "html/editor.html");
    });
});