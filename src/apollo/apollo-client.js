import { ApolloClient, InMemoryCache } from "@apollo/client"; 
import apiConfigs from "../../next.config.js";

const client = new ApolloClient({
    uri: `${apiConfigs.env.API_URL}graphql`,
    cache: new InMemoryCache()
})

export default client;