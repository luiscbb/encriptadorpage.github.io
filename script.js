function encrypt() {
    var text = document.getElementById("text").value;
    var encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    
    document.getElementById("result").innerText = encryptedText;
  }
  
  function decrypt() {
    let encryptedText = document.getElementById("text").value;
    let decryptedText = encryptedText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    document.getElementById("result").innerText = decryptedText;
  }
  
  function copyText() {
    let result = document.getElementById("result");
    let textarea = document.createElement("textarea");
    textarea.value = result.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("¡Texto copiado al portapapeles!");
    
    document.getElementById("text").value = "";
    document.getElementById("result").innerText = "";
  }
  
  