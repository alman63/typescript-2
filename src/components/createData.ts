//  создание записи в календаре
//  данные в календаре:id записи, дата, статус: выполнено, еще в разработке, описание события, теги
import { ref, set } from "firebase/database";
import { database } from "./config";

export function insertData(
  entriesId: number,
  data: string,
  state: string,
  title: string,
  tag: string
) {
  set(ref(database, "entries/" + entriesId), {
    entriesId,
    data,
    state,
    title,
    tag,
  });
}

export function createData() {
  const buttonCreate = document.querySelector("button.create") as HTMLElement;
  buttonCreate.addEventListener("click", () => {
    const divInput = document.querySelector("div.Data__input") as HTMLElement;
    divInput.innerHTML =
      "<label>Номер</label><input id='id' type='number' min='1' class='id'></input><br><label>Дата</label><input id='date' type='date'><br></input> <label>Статус</label><input id='state'><br></input><label>Описание</label><input id='title'><br></input><label>Теги</label><input id='tag'></input><br><button class='save'>Записать</button><button class='close'>Отменить</button>";
    const buttonSave = document.querySelector("button.save") as HTMLElement;
    const buttonClose = document.querySelector("button.close") as HTMLElement;
    buttonClose.addEventListener("click", () => {
      divInput.innerHTML = "";
    });
    buttonSave.addEventListener("click", () => {
      insertData(
        Number((document.getElementById("id") as HTMLInputElement).value),
        `${new Date(
          `${(document.getElementById("date") as HTMLInputElement).value}`
        ).toLocaleDateString()}`,
        `${(document.getElementById("state") as HTMLInputElement).value}`,
        `${(document.getElementById("title") as HTMLInputElement).value}`,
        `${(document.getElementById("tag") as HTMLInputElement).value}`
      );
      alert("запись добавлена в календарь");
      divInput.innerHTML = "";
    });
  });
}
