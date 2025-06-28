import fs from "node:fs";
import {IDatabase} from "../repository/interfaces";

export class TextDatabase implements IDatabase {
  read = (fileName: string) => {
    const textData = fs.readFileSync(fileName).toString();
    const dataRows = textData.split("\n");
    let dataArray = [];
    for (let i = 0; i < dataRows.length; i++) {
      const dataSplit = dataRows[i].split(", ");
      dataArray.push(dataSplit);
    }
    return dataArray;
  };
  write = (fileName: string, fileData: string) => {
    fs.appendFileSync(fileName, `${fileData}\n`);
  };
}
