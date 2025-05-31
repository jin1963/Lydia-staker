
document.getElementById("connectButton").addEventListener("click", async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            document.getElementById("walletAddress").textContent = accounts[0];
            document.getElementById("walletInfo").style.display = "block";
        } catch (error) {
            console.error("User rejected request:", error);
        }
    } else {
        alert("Please install MetaMask to connect your wallet.");
    }
});
