function status() {
    let balance = Number(document.getElementById("balance").value);
    let withdrawAmount = Number(document.getElementById("withdrawAmount").value);

     document.getElementById("status").textContent = (balance <0)? "Your account has been blocked":
     document.getElementById("status").textContent = (balance >0 && withdrawAmount <balance)? "Your withdrawal has been approved" : "Your transaction has been denied"
}
