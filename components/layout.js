import Navigation from "./navigation";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div>
        <Head>
            <title>İbrahimuzun's Website</title>
            <meta name="viewport" content="initial-scale=1.0, with=device-width"/>
        </Head>
      <Navigation />
      <main>{children}</main>
      <footer>designed by ibrahim</footer>
      <style global jsx>{`
      
      body{
      color: wheat;
      background-color: black;
      font-family: sans-serif;
      }
      h1 {
      color: darkred;
      text-decoration-line: underline;
      text-decoration-color: fuchsia;
      }
      a:-webkit-any-link{
      color:red;
      text-decoration-color: aquamarine;
      }
      `}
      </style>
    </div>

  );
}
export default Layout;
