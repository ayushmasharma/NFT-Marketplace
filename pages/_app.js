/* pages/_app.js */
import '../styles/globals.css'
import React, {useState, useEffect} from "react";
import Link from 'next/link'
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  position: absolute;
  top: 40%;
  left: 45%;
  border-color: black;
`;

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <div>
      {loading && (
          <DotLoader css={override} size={150} />
      )}
      {!loading && (
        <>
        <nav className="border-b p-6">
        <p className="text-6xl font-bold" 
           style={{
             textAlign:"center", 
             fontFamily:"DancingScript", 
          }}>NFTgram</p>
        <div className="flex mt-4" style={{justifyContent:"center"}}>
          <Link href="/">
            <a className="mr-6 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav> 
      <Component {...pageProps} />
      </>
      )}
    </div>
  )
}

export default MyApp
