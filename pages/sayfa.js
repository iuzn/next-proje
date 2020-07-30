import Layout from "../components/layout";
import Head from "next/head";
function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Deneme Sayfası</title>
      </Head>
      <h1>Bu bir denemedir.</h1>
      <style global jsx>{`
        h1{
        font-size: 34px;
        }
        body{
        color: blueviolet;
        background-color: darkslategray;
        
        }
`}</style>
    </Layout>
  );
}

export default HomePage;
