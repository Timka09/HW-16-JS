const Account = function ({ login, email}) {
  this.login = login;
  this.email = email;
  this.showInfo = function () {
    return `Цей аккаунт має логін ${this.login} та імейл ${this.email}`;
  };
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.showInfo())

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.showInfo()); 
