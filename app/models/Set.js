const { sets: db } = require('../../data/csvtojson');

class Set {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const sets = await db();
        return sets.map(s => new Set(s));
    }

    static async findOne(set_num) {
        const sets = await db();
        return new Set(sets.find(s => s.set_num == set_num));
    }

    static async findByTheme(tid) {
        const sets = await db();
        return sets
            .filter(s => s.theme_id == tid)
            .map(s => new Set(s));
    }
}

module.exports = Set;