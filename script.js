async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('wallet').innerText = accounts[0];
        } catch (error) {
            alert('Wallet connection failed.');
        }
    } else {
        alert('MetaMask not detected');
    }
}

function stake() {
    alert('Stake called');
}
function claimReward() {
    alert('Claim reward called');
}
function withdraw() {
    alert('Withdraw called');
}

function updateAPY() {
    const period = document.getElementById("staking-period").value;
    let apy = "-";
    if (period == "240") apy = "18%";
    else if (period == "365") apy = "32%";
    document.getElementById("apy").innerText = apy;
}
