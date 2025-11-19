function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  const result: Item[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      result.push(items[i]);
    }
  }

  return result;
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const activeList: User[] = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === true) {
      activeList.push(users[i]);
    }
  }

  return activeList;
}
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availableText = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`
  );
}
function getUniqueValues(
  a: (string | number)[],
  b: (string | number)[]
): (string | number)[] {
  const combined = [...a, ...b];
  const unique: (string | number)[] = [];

  for (let i = 0; i < combined.length; i++) {
    let exists = false;

    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === combined[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      unique.push(combined[i]);
    }
  }

  return unique;
}
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    let itemTotal = item.price * item.quantity;

    if (item.discount && item.discount > 0) {
      const discountAmount = (itemTotal * item.discount) / 100;
      itemTotal = itemTotal - discountAmount;
    }

    total += itemTotal;
  }

  return total;
}
