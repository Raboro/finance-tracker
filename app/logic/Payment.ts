export default class Payment {
  private id: string;
  value: number;

  constructor(value: number, id: string) {
    this.id = id;
    this.value = value;
  }

  getKey(): string {
    return this.id;
  }

  toStorage(): string {
    return JSON.stringify(this);
  }
}
