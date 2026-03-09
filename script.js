// Dashboard Data

let pnl = 36433.16
let winRate = 58.55
let profitFactor = 2.11
let rr = 1.49

// Show values on dashboard

document.getElementById("pnl").innerText = "$" + pnl
document.getElementById("winrate").innerText = winRate + "%"
document.getElementById("profitfactor").innerText = profitFactor
document.getElementById("rr").innerText = rr


// Weekly Trade Distribution Chart

const ctx = document.getElementById('tradeChart')

new Chart(ctx, {
type: 'bar',
data: {
labels: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
datasets: [
{
label: "Winning Trades",
data: [25,13,28,16,31],
backgroundColor: "green"
},
{
label: "Losing Trades",
data: [14,18,16,13,19],
backgroundColor: "red"
}
]
}
})
