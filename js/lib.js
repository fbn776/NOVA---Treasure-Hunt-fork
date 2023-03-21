function s(e) {
	return document.querySelector(e);
}

function createElement(name, className, IdTag) {
	const elm = document.createElement(name);
	if (className) {
		elm.setAttribute("class", className);
	}
	if (IdTag) {
		elm.setAttribute("id", IdTag);
	}

	return elm;
}

function encryptData(msg, key) {
    var encrypted = CryptoJS.AES.encrypt(msg,key);
    return {
        obj: encrypted,
        str: encrypted.formatter.stringify(encrypted)
    }
}

function decryptData(encrypted, key) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
	
    return  decrypted.toString(
		CryptoJS.enc.Utf8
	)
}
