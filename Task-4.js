class StringBuilder {

    constructor(string) {
        this.string = string
        this._value = 0
    }

    get value() {
        return this.string
    }

    set value(newValue) {
        return this.string += newValue
    }

    prepend(str) {
        return this.string = str + this.string;
    }
    pad(str) {
        return this.string = str + this.string + str
    }
}

const builder = new StringBuilder(".");

console.log(builder._value); // _value щоб не путати виклик ключа з викликом гетеру чи сетеру
builder.value = "^";
console.log(builder.string); // '.^'

builder.prepend('^');
console.log(builder.string); // '^.^'

builder.pad('=');
console.log(builder.string); // '=^.^='

