const graphql = require('graphql');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        year: { type: GraphQLInt },
        director: {
            type: DirectorType,
            resolve(parent, args){

            }
        }
    })
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        birth: { type: GraphQLInt },
        movie: {
            type: new GraphQLList(MovieType),
            resolve(parent, args ){

            }
        }

    })
});

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // get data
            }
        },
        director: {
            type: DirectorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // get data
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {

            }
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent, args) {

            }
        }
    }
});

module.exports = new GraphQLSchema({
   query: RootQuery
});