import { CharacterDTO } from "./characterDTO";

export class MonsterDTO extends CharacterDTO {
  constructor(name: string) {
    super(name);
    this.hp = 100;
    this.attack = 20;
  }
}
