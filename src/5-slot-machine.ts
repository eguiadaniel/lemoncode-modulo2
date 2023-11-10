export class SlotMachine {
  private coins: number;
  constructor() {
    this.coins = 0;
  }
  play() {
    this.coins++;

    if (this.checkThreeRandomBooleans()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    }
    console.log('Good luck next time!!');
  }

  private checkThreeRandomBooleans(): boolean {
    const bool1 = this.randomBoolean();
    const bool2 = this.randomBoolean();
    const bool3 = this.randomBoolean();

    return bool1 && bool2 && bool3;
  }

  private randomBoolean(): boolean {
    return Math.random() >= 0.5;
  }
}
