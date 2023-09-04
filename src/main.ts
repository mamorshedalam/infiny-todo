import FullList from "./models/fullList";
import ListItem from "./models/listItem";
import "./style.css";
import ListTemplate from "./templates/listTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemForm = document.getElementById("itemForm") as HTMLFormElement;
  itemForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const itemText = document.getElementById("itemText") as HTMLInputElement;
    const newItemText = itemText.value;

    const itemTime = document.getElementById("itemTime") as HTMLInputElement;
    const newItemTime = itemTime.value;

    const newItemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(
      newItemId.toString(),
      newItemText,
      newItemTime
    );

    fullList.add(newItem);
    template.render(fullList);
  });

  const clearButton = document.getElementById(
    "clearButton"
  ) as HTMLButtonElement;
  clearButton?.addEventListener("click", (): void => {
    fullList.clear();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
