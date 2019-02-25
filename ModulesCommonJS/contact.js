class Contact {
  constructor(firstName) {
    this.firstName = firstName;
  }
  hello() {
    return `Hello my name is ${this.firstName}`;
  }
}

module.exports = Contact;
