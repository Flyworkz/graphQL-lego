const typeDefs = `
  type Query {
    theme(id: Int): Theme!
    themes: [Theme]
    sets: [Set]
    set(set_num: String): Set!
  }
  type Theme {
    id: Int!
    name: String!
    parent: Theme
    children: [Theme]
    sets: [Set]
  }
  type Set {
    set_num: String!
    name: String!
    year: String!
    num_parts: Int!
    theme: Theme!
  }
`;

module.exports = typeDefs;