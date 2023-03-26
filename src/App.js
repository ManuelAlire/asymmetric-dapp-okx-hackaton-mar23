import {useEffect, useState} from 'react';
import './App.css';
import Nftcontainer from './Nftcontainer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Nav } from 'react-bootstrap';
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import FearGreedIndex from './FearGreedIndex';


function App() {
  
  let asmTokenClaimable = 0.00;
  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setnfts] = useState([])
  const [user, setUser] = useState();

  const responseMessage = (response) => {
    console.log(response);
  }
  const errorMessage = (error) => {
    console.log(error);
  }
  const connectWallet = async () => {
  
  if(typeof window.ethereum !== 'undefined'){
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setWalletAddress(accounts[0])
  
  }
  
  }

const getNFTdata = async ()=> {   
  if(!walletAddress) return; 
  const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:' + walletAddress)
  const data = await response.json()
  setnfts(data.items)
}

useEffect(() => {
  getNFTdata()
}, [walletAddress])

  return (
    <div className="App">
      <nav>
        <div className='text'>
        <h1>Asymmetric </h1>
        </div>
        <div className="nav-buttons">
          <button>Claim: {asmTokenClaimable} ASM</button>
          <button className="connect-button" onClick={connectWallet}>Connect</button>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
        </div>
      </nav>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      <Card.Header>Web 3 Wallet</Card.Header>
      <Card.Body>
        <Card.Title>Connected Wallet Address: {walletAddress}</Card.Title>
        <Card.Text>

          OKX: 0.00
          ASM: {asmTokenClaimable}
          ETH: 0.00
          ATOM: 0.00
          WBTC: 0.00

        </Card.Text>
        <Button variant="primary"     onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.okx.com/explorer/middle/multi-search?key=0xd3e6e8eeb082d85af948da940233a45c7abf1876';
      }}>View On OKX Explorer</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>NFTs</Card.Header>
      <Card.Body>
        <Card.Title>Unfortunately You Dont Have any NFTs</Card.Title>
        <Card.Text>
         This is where the nfts would go if you had some on this chain, maybe you should change that
        </Card.Text>
        <Button variant="primary" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.okx.com/web3/nft/featured';
      }}>Shop the OKX NFT Marketplace</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Header>Digital Identity</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <div><Card className="bg-dark text-white">
    <Card.Header>News 1</Card.Header>
      <Card.Img src="https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text>
          <br></br>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      <Card.Footer><Button>+1</Button><Button>-1</Button></Card.Footer>
    </Card></div>

    <div><Card className="bg-dark text-white">
    <Card.Header>News 2</Card.Header>
      <Card.Img src="https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
      <Card.Footer><Button>+1</Button><Button>-1</Button></Card.Footer>
    </Card></div>

    <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>News 4</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

      <Nftcontainer nfts={nfts} />

    </div>
  );
}
export default App;
