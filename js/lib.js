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
	var encrypted = CryptoJS.AES.encrypt(msg, key);
	return {
		obj: encrypted,
		str: encrypted.formatter.stringify(encrypted),
	};
}

function decryptData(data, key) {
	return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
}

function isName(str) {
	return /^[a-zA-Z\s]+$/.test(str);
}

function downloadURI(uri, name) {
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

function copyText(copyText) {
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);
}
