import "./styles.css";

const onClickAdd = () => {
  // text boxの値を取得したのち、初期化
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // li作成
  const li = document.createElement("li");

  // div作成
  const div = document.createElement("div");
  div.className = "list_row";

  // p作成
  const p = document.createElement("p");
  p.className = "text_content";
  p.innerText = inputText;

  // liの子要素に各要素を設定
  li.appendChild(div);

  // divの子要素に各要素を設定
  div.appendChild(p);
  console.log(li);

  // 作業中TODOに追加
  document.getElementById("working_todo").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
