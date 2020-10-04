const themesPath= __dirname + '/themes.csv';
const setsPath= __dirname + '/sets.csv';

const csv = require('csvtojson');

const themes = async () => {
    const themesJson = await csv().fromFile(themesPath);
    return themesJson;
}

const sets = async () => {
    const setsJson = await csv().fromFile(setsPath);
    return setsJson;
}

module.exports = { sets, themes }