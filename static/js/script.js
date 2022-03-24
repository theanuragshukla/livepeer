//const web3 = new Web3("https://cloudflare-eth.com")
const btns = document.getElementById("btns"); 
const watchDiv = document.getElementById("watch"); 
const inp = document.getElementById("urlInp"); 

var createstreamContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"pay","outputs":[],"stateMutability":"payable","type":"function"}]);
var createstream = createstreamContract.deploy({
     data: '0x608060405234801561001057600080fd5b50735b38da6a701c568545dcfcb03fcb875f56beddc46000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610219806100746000396000f3fe60806040526004361061001e5760003560e01c80631b9265b814610023575b600080fd5b61002b61002d565b005b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000610bb8905060003490508181101561008757600080fd5b600082826100959190610176565b9050600081111561010a57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610108573d6000803e3d6000fd5b505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610170573d6000803e3d6000fd5b50505050565b6000610181826101aa565b915061018c836101aa565b92508282101561019f5761019e6101b4565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220538f90dbf08c0c71f0ef6437439d99f0584ab3c6eb74eb987b35d31bc2eb33c464736f6c63430008070033', 
     arguments: [
     ]
}).send({
     from: web3.eth.accounts[0], 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })



async function ethEnabled(){
  if (window.ethereum) {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
}


async function create(){
	//	sessionStorage.setItem("streamUrl","https://google.com")
	//	web3.eth.getBlockNumber(function (error, result) {
	//console.log(result)
	//})
//	alert(ethEnabled())
	await ethEnabled();
	await createstream.pay();
	
//	location.href="/create";
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
