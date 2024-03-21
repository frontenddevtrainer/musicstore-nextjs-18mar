import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Item {
    name: String
    price: Float
  }

  type Order {
    id: String
    price: Float
    items: [Item]
  }

  type Location {
    name: String
    url: String
  }

  type Origin {
    name: String
    url: String
  }

  type Results {
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    url: String
    created: String
    episode: [String]
    location: Location
    origin: Origin
  }

  type Info {
    count: Int
    pages: Int
    next: String
    prev: String
  }

  type Characters {
    results: [Results]
    info: Info
  }

  type Query {
    characters: Characters
    orders: [Order]
    order(id: String): Order
  }
`;

const resolvers = {
  Query: {
    characters : async ()=>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const json = await response.json();
        return json;
    },
    orders: () => {
      return [
        {
          id: "4234325435jlk423kl5",
          price: 434.44,
          items: [{ name: "Laptop", price: 424.43 }],
        },
      ];
    },
    order: (context, args) => {
      console.log(args);
      return {
        id: "4234325435jlk423kl5",
        price: 434.44,
        items: [{ name: "Laptop", price: 424.43 }],
      };
    },
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
