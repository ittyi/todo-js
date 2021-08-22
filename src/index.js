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

  // buttonタグ（完了）作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // そして削除
    deleteFromWorkingTodo(div.parentNode);

    // 押された削除ボタンの親タグを作業中TODOから完了TODOへ移動して削除
    // まず各要素作成
    const addTarget = div.parentNode;
    const addDiv = p.parentNode;
    // TODO内容テキストを取得
    const text = addDiv.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // divを生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list_row";

    // pタグを作成
    const completeP = document.createElement("p");
    completeP.className = "text_content";
    completeP.innerText = text;

    // buttonタグを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(completeDiv);
    completeDiv.appendChild(completeP);
    completeDiv.appendChild(backButton);

    // 完了リストに追加 complate_todo
    document.getElementById("complate_todo").appendChild(addTarget);
  });

  // buttonタグ（削除）作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグをTODOから削除
    deleteFromWorkingTodo(div.parentNode);
  });

  // liの子要素に各要素を設定
  li.appendChild(div);

  // divの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 作業中TODOに追加
  document.getElementById("working_todo").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromWorkingTodo = (target) => {
  document.getElementById("working_todo").removeChild(target);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
