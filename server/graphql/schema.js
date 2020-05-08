const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
    code: ID!
    name: String!
    emoji: String
    currency: String
    capital: String
    continent: String
    languages: [String]
    map: String
    area: Float
    population: Float
    gini: Float
    svgUrl: String
  }
  type Query {
    countries: [Country]!
    country(code: ID!): Country
    countryOfTheDay: Country
  }
`;

module.exports = typeDefs;