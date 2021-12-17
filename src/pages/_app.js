import MainLayout from '../components/layouts/MainLayout';
import '../styles/globals.css';
import {ApolloProvider} from "@apollo/client";
import client from "../apollo/apollo-client";

function MyApp({ Component, pageProps }) {
  return  (
    <ApolloProvider client={client}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

export default MyApp