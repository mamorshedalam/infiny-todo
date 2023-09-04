export interface Item {
  id: string;
  text: string;
  time: number;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _text: string = "",
    private _time: number = 0,
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }

  get text(): string {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
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
