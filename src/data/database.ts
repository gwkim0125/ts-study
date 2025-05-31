import fs from "node:fs";

export class Database {
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
  }
}
