function calculate() {
  let n = 12;
  let p = Number(document.getElementById('initial-investment').value)
  let pmt = Number(document.getElementById('monthly-investment').value)
  let t = Number(document.getElementById('period').value)
  let r = Number(document.getElementById('interest-rate').value)

  let fv = p * (((1 + r/n)**(n*t) - 1) / (r/n)) + pmt * (((1 + r/n)**(n*t) - 1) / (r/n));
  let totalInvestment = p + pmt * 12 * t;
  let totalProfit = fv - totalInvestment;

  document.getElementById('total-investment').textContent = `Total Investment: $${totalInvestment}`;
  document.getElementById('total-profit').textContent = `Total Profit: $${totalProfit.toFixed(0)}`;
  document.getElementById('total').textContent = `Total: $${(totalInvestment + totalProfit).toFixed(0)}`

}

const defaultInitialInvestment = 0;
const defaultPeriod = "10";
const defaultInterestRate = '0.15';
const defaultMonthlyInvestment = "200"

function setDefaultvalues() {
  document.getElementById("initial-investment").value = defaultInitialInvestment;
  document.getElementById("period").value = defaultPeriod;
  document.getElementById("interest-rate").value = defaultInterestRate;
  document.getElementById('monthly-investment').value = defaultMonthlyInvestment
}

function reset() {
  setDefaultvalues()

  location.reload()
}

