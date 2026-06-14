function showOnly (id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}