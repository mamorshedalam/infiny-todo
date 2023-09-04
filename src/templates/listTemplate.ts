import FullList from "../models/fullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();

  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item, index) => {
      const li = document.createElement("li") as HTMLLIElement;

      const span = document.createElement("span") as HTMLSpanElement;
      span.innerText = index + "";

      const input = document.createElement("input") as HTMLInputElement;
      input.type = "checkbox";
      input.id = item.id;
      input.checked = item.checked;
      input.tabIndex = 0;
      li.appendChild(input);

      input.addEventListener("change", (): void => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.innerText = item.text;
      li.appendChild(label);

      const p = document.createElement("p") as HTMLParagraphElement;
      p.innerText = `@ ${item.time}`;
      li.appendChild(p);

      const button = document.createElement("button") as HTMLButtonElement;
      button.innerText = "x";
      li.appendChild(button);

      button.addEventListener("click", (): void => {
        fullList.remove(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
