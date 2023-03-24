interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player implements Play {
  constructor(private _id: number, private _title: string, private _level: number) {}

  public get id() {
    return this._id;
  }

  public get title() {
    return this._title;
  }

  public get level() {
    return this._level;
  }

  logIn(): void {
    console.log('Logged In');
  }

  logOut(msg: string): void {
    console.log(`Logged Out, ${msg}`);
  }
}

let player1 = new Player(100, 'Elzero', 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut('Good Bye'); // Logged Out, Good Bye
