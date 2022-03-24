async function create(){
	//	sessionStorage.setItem("streamUrl","https://google.com")
	//	web3.eth.getBlockNumber(function (error, result) {
	//console.log(result)
	//})
//	alert(ethEnabled())
//	await ethEnabled();
//	await createstream.pay();
	
	location.href="/create";
}

function triggerWatch(){
	btns.style.display="none";	
	watchDiv.style.display="flex";
}
function watch (){
	var streamUrl=inp.value;
	sessionStorage.setItem("streamUrl",streamUrl);
	location.href='/watch';
}

function login(){
	
}
