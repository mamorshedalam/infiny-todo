export interface Item {
  id: string | number;
  name: string;
  time: number;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string | number = "",
    private _name: string = "",
    private _time: number = 0,
    private _checked: boolean = false
  ) {}

  get id(): string | number {
    return this._id;
  }
  set id(id: string | number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get time(): number {
    return this._time;
  }
  set time(time: number) {
    this._time = time;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}
