import ListItem from "./listItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clear(): void;
  add(itemObj: ListItem): void;
  remove(id: string | number): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();

  constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("dataList");

    if (storedList !== "string") return;

    const parsedList: {
      _id: string | number;
      _name: string;
      _time: number;
      _checked: boolean;
    }[] = JSON.parse(storedList);

    parsedList.forEach((itemObj) => {
      const newItemObj = new ListItem(
        itemObj._id,
        itemObj._name,
        itemObj._time,
        itemObj._checked
      );

      FullList.instance.add(newItemObj);
    });
  }

  save(): void {
    localStorage.setItem("dataList", JSON.stringify(this._list));
  }

  clear(): void {
    this._list = [];
    this.save();
  }

  add(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  remove(id: string | number): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
