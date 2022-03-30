
const btns = document.getElementById("btns"); 
const welcome = document.querySelector(".welcome"); 
const watchDiv = document.getElementById("watch"); 
const inp = document.getElementById("urlInp"); 
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const back = document.querySelector(".back");

function create(){
	location.href="/create";
}

function triggerWatch(){
	// btns.style.display="none";	
	welcome.style.display="none";	
	watchDiv.style.display="flex";
	card1.style.display="none";
	card2.style.display="none";
	back.style.display="flex";

}
function goBack(){
	// btns.style.display="flex";	
	welcome.style.display="flex";	
	watchDiv.style.display="none";
	card1.style.display="flex";
	card2.style.display="flex";
	back.style.display="none";
}


function watch (){
		var streamUrl=inp.value;
		sessionStorage.setItem("streamUrl",streamUrl);
		location.href='/watch';

}
