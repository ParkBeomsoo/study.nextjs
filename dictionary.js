import fs from "fs";

const dictionaries = {
    en: async () => {
        await inspectionFindFile("./dictionaries/en")
        const JsonData = jsonParsing(fileList);
        fileList = [];
        return JsonData;
    },
    // ko: () => import("./dictionaries/ko").then(r => r.default)
    ko: async () => {
        await inspectionFindFile("./dictionaries/ko")
        const JsonData = jsonParsing(fileList);
        fileList = [];
        return JsonData;
    }
}

let fileList = [];
const inspectionFindFile = (destPath, json='') => {
    try {
        fs.readdirSync(destPath, { withFileTypes: true })
            .forEach((file) => {
                const path = `${destPath}/${file.name}`;

                if (file.isDirectory()) {
                    // inspectionFindFile("path");
                    inspectionFindFile(path,json);
                } else {
                    fileList.push(path);
                }
            });
    } catch(err) {
        return console.error('Read Error', err);
    }
}

const jsonParsing = (fileList) => {
    let json = {};
    for (const file of fileList) {
        json = {...json, ...JSON.parse(fs.readFileSync(file, 'utf8'))}
    }
    return json;
}
export const getDictionary = (lang) => {
    return dictionaries[lang]();
}