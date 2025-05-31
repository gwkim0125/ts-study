export class CharacterDTO {
  protected name: string;
  protected hp: number | undefined;
  protected attack: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
}
