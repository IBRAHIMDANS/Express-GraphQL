import {ApolloServer} from "apollo-server-express";
import Astronaute from "./typedefs/astronaute";
import AstronauteInput from "./typedefs/astronauteInput";
import Planet from "./typedefs/planet";
import Grade from "./typedefs/grade";
import {resolvers} from "./resolver";

const RootQuery = `
  type RootQuery {
    astronaute(id: Int!): Astronaute,
    astronautes: [Astronaute]
    planet(id: Int!): Planet
  }
`;
const RootMutation = `
  type RootMutation {
    saveAstronaute(input: AstronauteInput!): Astronaute
  }
`;
const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;


const SERVER = new ApolloServer({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    AstronauteInput,
    Astronaute,
    Planet,
    Grade
  ],
  resolvers: resolvers,
  playground: {
    endpoint: `/graphql`,
    settings: {
      "editor.theme": "light"
    }
  }
});
export default SERVER; 
