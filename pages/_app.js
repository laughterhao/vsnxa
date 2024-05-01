import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/Component/layout";

export default function App({ Component, pageProps }) {
 
  const getLayout =  Component.getLayout || ((page) => page);
  return (  
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}

 
