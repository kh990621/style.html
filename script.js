// 変数宣言して、id="lists" を取得
const listElement = document.getElementById("lists");

// 取得した要素をコンソールに出力
console.log(listElement);

// ボタンのクリックイベントを取得
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log("ボタンがクリックされました");
});
