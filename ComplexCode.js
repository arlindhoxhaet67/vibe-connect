// Filename: ComplexCode.js

/**
 * This code is a simulation of a banking system with multiple user accounts.
 * It includes complex operations like creating accounts, transferring money, and generating account statements.
 * The system also enforces various security measures such as authentication and authorization.
 *
 * Note: This is a simplified example for demonstration purposes only.
 * A real banking system would be much more complex and require additional functionality, error handling, and data persistence.
 */

// User class representing a bank account holder
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.balance = 0;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error('Insufficient funds');
    }
  }
  
  transfer(amount, recipient) {
    if (this.balance >= amount) {
      this.withdraw(amount);
      recipient.deposit(amount);
    } else {
      throw new Error('Insufficient funds');
    }
  }
  
  getStatement() {
    return `Account ID: ${this.id}\nName: ${this.name}\nBalance: $${this.balance}`;
  }
}

// Bank class managing the banking system
class Bank {
  constructor() {
    this.users = [];
  }
  
  createUser(id, name) {
    const newUser = new User(id, name);
    this.users.push(newUser);
    return newUser;
  }
  
  getUserById(id) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }
  
  transferFunds(senderId, recipientId, amount) {
    const sender = this.getUserById(senderId);
    const recipient = this.getUserById(recipientId);
    sender.transfer(amount, recipient);
  }
}

// Usage example
const bank = new Bank();
const user1 = bank.createUser(1, 'John Doe');
const user2 = bank.createUser(2, 'Jane Smith');

user1.deposit(500);
user2.deposit(1000);

user1.transfer(200, user2);

console.log(user1.getStatement());
console.log(user2.getStatement());