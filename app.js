let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let orginalImageWidth = 200;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = orginalImageWidth + "px";
imageWidthElement.textContent = orginalImageWidth + "px";

function onDecrement() {
    if (orginalImageWidth >= imageMaxWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;

    } else {
        orginalImageWidth = orginalImageWidth + 5;
        let updateImageWidth = orginalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updateImageWidth;
        imageWidthElement.textContent = updateImageWidth;
    }
}

function onIncrement() {
    if (orginalImageWidth <= imageMinWidth) {
        warningMessageElement.textContent = minWidthWarningMessage;

    } else {
        orginalImageWidth = orginalImageWidth - 5;
        let updateImageWidth = orginalImageWidth + "px";

        warningMessageElement.textContent = "";
        imageElement.style.width = updateImageWidth;
        imageWidthElement.textContent = updateImageWidth;
    }
}
