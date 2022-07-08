
const contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"structIERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"structIERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipOverflowSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freelistMax","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"freelistMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFreelistWalletLimit","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxLostTigerz","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublicWalletLimit","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxReserveWalletLimit","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"overflowMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"publicMintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveMax","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"reserveMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"teamMintAmount","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamMintComplete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contract_addr = '0xf4B2a56f2BEB48157Adbd7daCF9EB3Bf7F89A3c2';
const base_url = "https://tiger-worlds-mint-signer.herokuapp.com/minter-public/" //"https://mint-signer.tigerworlds.io/minter-public/"

//Web3.js
let Web3Modal;
let provider;
let web3, web3Modal, userAddress, accounts;
let providerOptions;
let wallet;
let contract;

//State variables
let isConnected = false;
let mintCount = 0;
let chosenMints = 3;
let maxAllowed = 5;
let isReserved = false;
let mintType = 0; //0 = reserved, 1 = freelist, 2 = public

//Countdown variables
let startDate = new Date("Jul 8, 2022 23:00:00 GMT-07:00")
let countDownDate = startDate.getTime();

function print(text) { 
    //modify this to display errors, one possible tool is to use Sweet Alerts
    console.log(text)
};

function tickTime() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 72)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((distance % (1000)));

    document.getElementById("timer").innerHTML = hours + ":"
    + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0') + "." + String(milliseconds).padStart(3, '0');
  
    if (distance < 0) {
      clearInterval(x);
      document.querySelector('#timer').style.visibility  = "hidden";
    }
  }
var x = setInterval(tickTime, 50);


async function buttonTasks() {
    if(isConnected == false) {
        connectWallet();
    } else {
        getSignature();
    }
}

async function updateMintButton() {
    if (mintType == 0) {
        mintEnabled = await contract.methods.mintEnabled().call();
    } else if (mintType == 1) {
        mintEnabled = await contract.methods.overflowMintEnabled().call();
    } else {
        mintEnabled = await contract.methods.publicMintEnabled().call();
    }
    if (mintEnabled) {
        const button = document.querySelector('#connectButton');
        button.innerText = "Mint Now";
        button.disabled = false;
        clearInterval(x);
        document.querySelector('#timer').style.visibility  = "hidden";
    }
}

function disableMintButton() {
    const button = document.querySelector('#connectButton');
    button.disabled = true;
    button.innerText = 'Sold Out!'
}

function updateChosenAmount(amount) {
    document.querySelector('#sliderCounter').innerText = amount + "/" + (isConnected ? maxAllowed:"?");
    updateImage();
}

function increment() {
    if (chosenMints < maxAllowed) {
        chosenMints += 1;
        updateChosenAmount(chosenMints)
    }
}

function decrement() {
    if (chosenMints > 1) {
        chosenMints -= 1;
        updateChosenAmount(chosenMints)
    }
}

function updateImage() {
    if(isConnected) {
		if(chosenMints==1){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b1179b3c9b4b3c7b1645_1.png";
		}
		else if(chosenMints==2){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b117bf7adc371f0f2cf2_2.png";
		}
		else if(chosenMints==4){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b1178425f92cc5f75974_4.png";
		}
		else if(chosenMints==5){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b11714a2ac6cb11cdc3f_5.png";
		}
		else{
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b117c504967766a489ab_3.png";
		}
    } else {
        if(chosenMints==1){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b117e45b2d8748911311_1g.png";
		}
		else if(chosenMints==2){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b1174df59bf54a3f4433_2g.png";
		}
		else if(chosenMints==4){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b1174df59b11a73f4434_4g.png";
		}
		else if(chosenMints==5){
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b117d36ebcb1c5dcf967_5g.png";
		}
		else{
			
			document.querySelector('#tigerImage').src = "https://uploads-ssl.webflow.com/628e692751b1fda18a4d24d5/62c8b11709e7a2fdf8d9beae_3g.png";
		}
    }
}

async function connectWallet() {
    if (window.ethereum) {
        if(isConnected == false){
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            Web3Modal = window.Web3Modal.default;

            providerOptions = {
            /* See Provider Options Section */
            };
        
            web3Modal = new Web3Modal({
                network: "mainnet", // optional
                cacheProvider: true, // optional
                providerOptions // required
            });
        
            provider = await web3Modal.connect();

            if (accounts.length > 0) {
                wallet = accounts[0];

                document.querySelector('#walletID').innerText = "Connected to " + wallet.substring(0, 5) + "..." + wallet.substring(39);
                document.querySelector('#walletID').style.visibility  = "visible";

                isConnected = true;
                web3 = new Web3(provider);
                contract = new web3.eth.Contract(contract_abi, contract_addr);

                getMaxMints()

                setInterval('updateMintCounter()', 1000);

                const button = document.querySelector('#connectButton');
                button.innerText = "Mint Now";
                button.disabled = true;
                
            }
        }
    }
}

async function updateMintCounter(){
    if(isConnected){
        var counterElem = document.getElementById('mintCounter');
        mintCount = await contract.methods.totalSupply().call();
        maxCount = 10000

        counterElem.innerText = mintCount + "/" +maxCount;
        
        if (mintCount == 10000) {
            disableMintButton();
        } else {
            updateMintButton();
        }

    };
};


function addDays(days) {
    var date = new Date(startDate.valueOf());
    startDate.setDate(date.getDate() + days);
    countDownDate = startDate.getTime();
    clearInterval(x);
    x = setInterval(tickTime, 50);
}


// "wallet_addr"	"max_amount"	"is_reserved"
// "0xDB06e744BD693Db1F30b8C47Ee8D734fBd3346A8"	2	false
// "0x3619D5869895B5401D071b89cB2F9aa04dac097b"	2	true
// "0xD5485599E38Ba17426F2291d5B3F80A7bA8f89Da"	5	true


async function getMaxMints() {
    var url = "https://tiger-worlds-mint-signer.herokuapp.com/minter-public/get-mint-allowed";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status == 200){ 
            resp = JSON.parse(xhr.responseText);
            print(resp)
            maxAllowed = resp.maxAmount
            isReserved = resp.isReserved
            if (isReserved) {
                mintType = 0;
                document.querySelector('#timerLabel').innerText = "Reserve Mint"
            } else {
                if (maxAllowed > 0) {
                    mintType = 1;
                    document.querySelector('#timerLabel').innerText = "Freelist Mint"
                    addDays(1);
                } else {
                    mintType = 2;
                    document.querySelector('#timerLabel').innerText = "Public Mint"
                    maxAllowed = 2;
                    addDays(2);
                }
            }
            chosenMints = maxAllowed;
            updateChosenAmount(chosenMints)
        }
    }};
    var data = `{
        "walletAddr":  "${wallet}"
    }`;
    xhr.send(data);
}

async function getSignature() {
    var url = "https://tiger-worlds-mint-signer.herokuapp.com/minter-public/get-sign";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status == 200){
            resp = JSON.parse(xhr.responseText);
            print(resp)
            if (resp.mintType == 0) {
                reserveMint(resp.maxAllowed, resp.mintType, resp.signature);
            } else if (resp.mintType == 1) {
                freelistMint(resp.maxAllowed, resp.mintType, resp.signature);
            } else {
                publicMint();
            }
        }
    }};
    var data = `{
        "walletAddr": "${wallet}",
        "amount": ${chosenMints}
    }`;
    xhr.send(data);
}

async function reserveMint(maxAllowed, mintType, signature) {
    if(isConnected == true && chosenMints > 0 && chosenMints <= maxAllowed && mintType==0){
        web3 = new Web3(provider);
        const contract = new web3.eth.Contract(contract_abi, contract_addr);
        contract.methods.reserveMint(chosenMints, maxAllowed, signature).estimateGas({from: wallet})
        .then(function(gasAmount){
            contract.options.gas = gasAmount;
            contract.methods.reserveMint(chosenMints, maxAllowed, signature).send(
                {
                    from: wallet,
                    maxPriorityFeePerGas: null,
                    maxFeePerGas: null,
                }
            ).on('transactionHash', function(hash){
                url = "https://etherscan.io/tx/" + hash
                print('success: ' + url);
            })
        })
        .catch(function(error, result){
            print('fail: ' + ((error.message).split('{')[0]).split(':')[1])
        });
    }
	if(chosenMints <= 0){
        print('fail: ' + 'Attempted amount of mints should be greater than 0!');
	}
};

async function freelistMint(maxAllowed, mintType, signature) {
    if(isConnected == true && chosenMints > 0 && chosenMints <= maxAllowed && mintType==1){
        web3 = new Web3(provider);
        const contract = new web3.eth.Contract(contract_abi, contract_addr);
        contract.methods.freelistMint(chosenMints, maxAllowed, signature).estimateGas({from: wallet})
        .then(function(gasAmount){
            contract.options.gas = gasAmount;
            contract.methods.freelistMint(chosenMints, maxAllowed, signature).send(
                {
                    from: wallet,
                    maxPriorityFeePerGas: null,
                    maxFeePerGas: null,
                }
            ).on('transactionHash', function(hash){
                url = "https://etherscan.io/tx/" + hash
                print('success: ' + url);
            })
        })
        .catch(function(error, result){
            print('fail: ' + ((error.message).split('{')[0]).split(':')[1])
        });
    }
	if(chosenMints <= 0){
        print('fail: ' + 'Attempted amount of mints should be greater than 0!');
	}
};

async function publicMint() {
    if(isConnected == true && chosenMints > 0 && chosenMints <= 2){
        web3 = new Web3(provider);
        const contract = new web3.eth.Contract(contract_abi, contract_addr);
        contract.methods.publicMint(chosenMints).estimateGas({from: wallet})
        .then(function(gasAmount){
            contract.options.gas = gasAmount;
            contract.methods.publicMint(chosenMints).send(
                {
                    from: wallet,
                    maxPriorityFeePerGas: null,
                    maxFeePerGas: null,
                }
            ).on('transactionHash', function(hash){
                url = "https://etherscan.io/tx/" + hash
                print('success: ' + url);
            })
        })
        .catch(function(error, result){
            print('fail: ' + ((error.message).split('{')[0]).split(':')[1])
        });
    }
	if(chosenMints <= 0){
        print('fail: ' + 'Attempted amount of mints should be greater than 0!');
	}
};