const { GraphQLServer } = require('graphql-yoga');
const themeResolver = require('./controllers/themeResolver');
const setResolver = require('./controllers/setResolver');
const typeDefs = require('./schemas/typeDefs');

const port = process.env.PORT || 8080;

const server = new GraphQLServer({ 
    typeDefs, 
    resolvers: [themeResolver, setResolver]
});

server.start({
    port
}, () => console.log(`Running on http://localhost:${port}`));