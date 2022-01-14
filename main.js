// Statement Print
console.log("QR Code Generator");

// Grab HTML elements using Javascript 
let titleBox = document.getElementById("title");
let textContent = document.getElementById("text-content");
let generateButton = document.getElementById("generate-button");
let canvasBox = document.getElementById("qr");


function generateQRCode(){
    console.log(textContent.value);

    canvasBox.style.display = "block";
    let qr = new QRious({
        element: document.getElementById("qr"),
        value: textContent.value 
    });


    // Empty Text Box
    textContent.value = "";
}

// Event Listeners
generateButton.addEventListener("click",generateQRCode);

