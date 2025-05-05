document.getElementById("calculateBtn").addEventListener("click", function () {
  const input = document.getElementById("numberInput");
  const value = parseFloat(input.value);

  if (!isNaN(value)) {
    const result300 = Math.floor(value / 300);
    const result310 = Math.floor(value / 310);
    const result320 = Math.floor(value / 320);

    document.getElementById("result300").textContent = result300;
    document.getElementById("result310").textContent = result310;
    document.getElementById("result320").textContent = result320;

    document.getElementById("result-area").style.display = "flex";
  }
});

// 入力欄をタップしたら中身をクリア＆カーソル点灯
document.getElementById("numberInput").addEventListener("focus", function () {
  this.value = "";
});
