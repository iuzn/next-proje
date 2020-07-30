import Layout from "../components/layout";
import Head from "next/head";
function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Deneme Sayfası</title>
      </Head>
      <h1 class="baslik">Bu bir denemedir.</h1>
      <style jsx>{`
        .baslik{
        font-size: 34px;
        }
`}</style>
    </Layout>
  );
}

export default HomePage;
