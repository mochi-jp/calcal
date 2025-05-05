function calculate() {
  const input = document.getElementById('input-number').value;
  const resultArea = document.getElementById('result-area');

  if (input.trim() === "") {
    resultArea.innerHTML = "";
    return;
  }

  const values = [300, 310, 320];
  let resultHTML = "<table><tr><th>割る数</th><th>結果</th></tr>";

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const result = (parseFloat(input) / value).toFixed(2);
    resultHTML += `<tr><td>${value}</td><td>${result}</td></tr>`;
  }

  resultHTML += "</table>";
  resultArea.innerHTML = resultHTML;
}
