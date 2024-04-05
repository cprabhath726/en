function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = document.getElementById("key").value;
  
  if (!inputText || !key) {
    alert("Please enter both text and key.");
    return;
  }
  
  try {
    var encryptedBytes = CryptoJS.AES.encrypt(inputText, key).ciphertext; // Get the encrypted bytes
    var encryptedText = CryptoJS.enc.Base64.stringify(encryptedBytes); // Encode the encrypted bytes using Base64
    document.getElementById("output").innerText = "Encrypted Text: " + encryptedText;
  } catch (error) {
    alert("Encryption failed. Please try again.");
  }
}

function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = document.getElementById("key").value;
  
  if (!inputText || !key) {
    alert("Please enter both text and key.");
    return;
  }
  
  try {
    var decryptedBytes = CryptoJS.AES.decrypt(inputText, key); // Decrypt the input text
    var decryptedText = CryptoJS.enc.Base64.stringify(encryptedBytes); 
    
    document.getElementById("output").innerText = "Decrypted Text: " + decryptedText;
  } catch (error) {
    alert("Decryption failed. Please make sure the key is correct.");
  }
}

