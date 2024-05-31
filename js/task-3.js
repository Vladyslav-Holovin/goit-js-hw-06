class StringBuilder {
  #string;

  constructor(string) {
    this.#string = string;
  }

  getValue() {
    return this.#string;
  }

  padStart(value) {
    this.#string = `${value}${this.#string}`;
  }
  padEnd(value) {
    this.#string = `${this.#string}${value}`;
  }
  padBoth(value) {
    this.#string = `${value}${this.#string}${value}`;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
