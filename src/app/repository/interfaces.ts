export interface IDatabase {
    read(fileName: string): string[] [];
    write(fileName: string, data: string): void;
}