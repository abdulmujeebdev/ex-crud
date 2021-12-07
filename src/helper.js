const fs = require("fs");

export const replaceFromString = (text, replacementObject) => {
  const replacementReg = new RegExp(
    Object.keys(replacementObject).join("|"),
    "g"
  );
  return text.replace(replacementReg, (e) => replacementObject[e]);
};

export const readFile = (filePath) => {
  fs.readFile(filePath, (error, data) => {
    if (data) {
      return data.toString();
    } else if (error) {
      throw error;
    }
  });
};

export const writeFile = (filePath, content) => {
  fs.mkdir(directory, { recursive: true }, (error) => {
    if (error) throw error;
    fs.writeFile(path, content, function (error) {
      if (error) {
        return null;
      }
    });
  });
};
