import Navigation from "./navigation";
import Head from "next/head";
import React from "react";
function Layout({ children }) {
  return (
    <div  class="layout">
      <Head>
        <title>İbrahimuzun's Website</title>
        <meta name="viewport" content="initial-scale=1.0, with=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>designed by ibrahim</footer>
      <style jsx>{`
            .layout {
              padding: 2rem;
              max-width: 720px;
              margin-left: auto;
              margin-right: auto;
            }
      `}</style>
      <style global jsx>
        {`
          body {
            color: wheat;
            background-color: darkslategray;
            font-family: sans-serif;
            font-size: 20px;
          }
          h1 {
            color: navajowhite;
            font-family: serif;
            font-size: 2em;
          }
          a:-webkit-any-link {
            padding-right: 20px;
            color: darksalmon;
            text-decoration: none;
            font-style: oblique;
            font-weight: 800;
            font-size: 1.2em;
          }
          nav {
            display: flex;
            flex-wrap: wrap;
            align-items: center
          }
          footer {
            text-decoration-line: underline;
          }
        `}
      </style>

    </div>
  );
}
export default Layout;
