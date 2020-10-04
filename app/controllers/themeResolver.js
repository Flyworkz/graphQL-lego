const Theme = require('../models/Theme');

const themeResolver = {
    Query: {
      theme: async (_, { id }) => Theme.findOne(id),
      themes: async _ => Theme.findAll(),
    },
    Theme: {
      children: async ({ id }) => Theme.findByParentTheme(id),
      parent: async ({ id }) => Theme.findOne(id)
    }
};

module.exports = themeResolver;