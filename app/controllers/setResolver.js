const Set = require('../models/Set');
const Theme = require('../models/Theme');

const setResolver = {
    Query: {
      set: async (_, { set_num }) => Set.findOne(set_num),
      sets: async _ => Set.findAll()
    },
    Set: {
      theme: ({ theme_id }) => Theme.findOne(theme_id)
    }
};

module.exports = setResolver;