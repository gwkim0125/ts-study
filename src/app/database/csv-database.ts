import fs from "node:fs";
import { IDatabase } from "../repository/interfaces";
import { Database } from "./database";

export class CsvDatabase extends Database implements IDatabase {
  read(fileName: string): string[][] {
    throw new Error("Method not implemented.");
  }
  write(fileName: string, data: string): void {
    throw new Error("Method not implemented.");
  }
}
