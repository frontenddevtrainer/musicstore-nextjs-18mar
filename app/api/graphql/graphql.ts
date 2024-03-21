import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";



const typeDefs = gql`

    type Order {
        id : String
    }

    type Query {
        orders : [Order],
        order : Order
    }

`;


const resolvers = {
    Query : {

    }
}

export const server = new ApolloServer({ typeDefs, resolvers });