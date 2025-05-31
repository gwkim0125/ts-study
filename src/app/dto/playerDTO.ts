import { CharacterDTO } from "./characterDTO";

export class PlayerDTO extends CharacterDTO {
  constructor(name: string) {
    super(name);
    this.hp = 200;
    this.attack = 5;
  }
}
