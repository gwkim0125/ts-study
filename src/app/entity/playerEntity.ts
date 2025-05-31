import { CharacterEntity } from "./characterEntity";

export class PlayerEntity extends CharacterEntity {
  constructor(name: string) {
    super(name);
    this.hp = 200;
    this.attack = 5;
  }
}
