import fs from "node:fs";
import { IDatabase, IOldDatabase } from "../repository/interfaces";
import { Database } from "./database";

export class TextDatabase extends Database implements IDatabase, IOldDatabase {
  private readonly path: string;

  constructor() {
    super();
    this.path = "./data";
  }

  read = (fileName: string) => {
    const textData = fs.readFileSync(`${this.path}/${fileName}`).toString();
    const dataRows = textData.split("\n");
    let dataArray = [];
    for (let i = 0; i < dataRows.length; i++) {
      const dataSplit = dataRows[i].split(", ");
      dataArray.push(dataSplit);
    }
    return dataArray;
  };
  write = (fileName: string, fileData: string) => {
    fs.appendFileSync(`${this.path}/${fileName}`, `${fileData}\n`);
  };
  convertToCSV = (fileName: string) => {
    return;
  };
}
