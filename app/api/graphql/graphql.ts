import { UserModel } from "@/app/db/models/users";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

import "@/app/db/db"

const typeDefs = gql`
  input CharacterIn {
    name: String
  }

  input UserIn {
    email: String,
    password: String
  }

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

  type Mutation {
    addCharacter(character: CharacterIn): String,
    addUser(user: UserIn): String
  }
`;

const resolvers = {
  Mutation: {

    async addUser(context:any, args:any) {
        const { user } = args
        const userObj = new UserModel(user);
        await userObj.save();
        return "user added"
    },

    addCharacter(context:any, args:any) {
      console.log(context, args);
      return "User added";
    },
  },
  Query: {
    characters: async () => {
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
    order: (context:any, args:any) => {
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
