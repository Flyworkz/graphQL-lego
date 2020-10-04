const { themes: db } = require('../../data/csvtojson');

class Theme {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const themes = await db();
        return themes.map(t => new Theme(t));
    }

    static async findOne(id) {
        const themes = await db();
        return new Theme(themes.find(t => t.id == id));   
    }

    static async findByParentTheme(pid) {
        const themes = await db();
        return themes
            .filter(t => t.parent_id == pid)
            .map(t => new Theme(t));
    }
}

module.exports = Theme;