import { CharacterEntity } from "./characterEntity";

export class MonsterEntity extends CharacterEntity {
  constructor(name: string) {
    super(name);
    this.hp = 100;
    this.attack = 20;
  }
}
