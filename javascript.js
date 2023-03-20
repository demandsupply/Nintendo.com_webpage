
// document.addEventListener("click", function handleClickOutsideBox(event) {
//     const box = document.getElementById("content1");
//     if (!box.contains(event.target)) {
//         box.style.display = "none";
//     }
// })

// function myFunction() {
//     var x = document.getElementById("content4");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// window.onclick = function(event) {
//     const box = document.getElementById("content1");
//     if (box.target == content1) {
//         box.style.display = "none";
//     }
// }

var x = ["content1", "content2", "content3", "content4", "content5", "content6"];
    var visibleContent = null;
    function show(contentId) {
        if(visibleContent === contentId) {
            visibleContent = null;
        } else {
            visibleContent = contentId;
        }
        hideNonVisibleContents();
    }
    function hideNonVisibleContents() {
        var i, contentId, content;
        for (i = 0; i < x.length; i++) {
            contentId = x[i];
            content = document.getElementById(contentId);
            if (visibleContent === contentId) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }
    }



