export interface IDatabase {
  read(fileName: string): string[][];
  write(fileName: string, data: string): void;
  find(fileName: string): boolean;
}

export interface IOldDatabase {
  convertToCSV(fileName: string): void;
}
