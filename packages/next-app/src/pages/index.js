import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { getDefaultProvider, Contract, ethers } from 'ethers';
import { NftProvider, useNft } from 'use-nft';

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Crosses from '../components/Crosses/Crosses'
//import Cross from '../components/Crosses/Cross'

import YourCollectible from '../utils/YourCollectible.json';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.CONTRACT_ADDRESS = "0xcbdf4e0141684addc7b9b6d2ad1a65dddd243ee4";

    this.state = {
      user: {
        connected: false,
        currentAccount: ''  
      },
      tokensByAddr: [],
    };

  }

  componentDidMount() {
    //this.checkIfWalletIsConnected();
  }

  setCurrentAccount = (account) => {
    //set the new state
    this.setState({
      user: {      
        connected: true,
        account: account 
      }  
    });

  }

  connectWallet = async () => {

    console.log("Connect wallet")
    
    //do something here
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      this.setCurrentAccount(accounts[0]); 

      /*
      *  Connect to OnChain Cross contract 
      */
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(this.CONTRACT_ADDRESS, YourCollectible.abi, signer);

        this.setState({contract: connectedContract, signer: signer, provider: provider})

        const ethersConfig = {
          ethers: { Contract },
          provider: provider,
        };

        this.setState({ethersConfig: ethersConfig})

        console.log(this.state)


        // Get tokens for current address 
        // TODO: Remove this hard code addr and use logged in value
        const ownerAddr = '0xe45FC8a689e708F27D16299C81f7FDDB23Fc5097'

        const ownerTokenCount = parseInt(
          await connectedContract.functions.balanceOf(ownerAddr),
        );

        const indexes = Array.from({ length: ownerTokenCount }, (_, k) => k);
        const tokens = await Promise.all(
          indexes.map(async (i) =>
              parseInt(await connectedContract.functions.tokenOfOwnerByIndex(ownerAddr, i)),
          ),
        );

        //This is sorting by alpha not numeric so sorts 1 and 11 bbefore 2
        // TODO: Fix this sort
        tokens.sort();


        console.log("Count " + ownerTokenCount)
        console.log("Tokens  " + tokens)

      }

     

    } catch (error) {
      console.log(error)
    }

  }

  getWallet = async () => {

    return;
  }
  
  logoffWallet = async () => {

    return;
  }

  checkIfWalletIsConnected = async () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

  }

  askContractToMintNft = async () => {

    console.log("Start minting...")
    try {
      const { ethereum } = window;

      if (ethereum) {
//        const provider = new ethers.providers.Web3Provider(ethereum);
//        const signer = provider.getSigner();
//        const connectedContract = new ethers.Contract(this.CONTRACT_ADDRESS, YourCollectible.abi, signer);

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await this.state.contract.mintItem();

        console.log("Mining...please wait.")
        await nftTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  getTokensbyAddr = async () => {

  }

  render() {


    return (
      <div className="relative min-h-screen w-screen flex flex-col items-center justify-top bg-brown-light"> 
        <Router>
          <Header user={this.state.user} connectWallet={this.connectWallet}  />
          <Switch>
            <Route path="/about"><About/></Route>
            <Route path="/">

          {typeof window !== 'undefined' ? (
            <NftProvider fetcher={['ethers', this.state.ethersConfig]}>
              <Cross />
            </NftProvider>
) : (
            <Text>{t('loading')}</Text>
          )}
               <Crosses crosses={this.state.tokensByAddr} mint={this.askContractToMintNft} connectWallet={this.connectWallet}  user={this.state.user}/>
            </Route>
          </Switch>
        </Router>
        {/*<SectionTwo/>*/}
      </div>
    )
  }
}

function Cross() {
  const { loading, error, nft } = useNft(
    "0xcbdf4e0141684addc7b9b6d2ad1a65dddd243ee4",
    "11"
  )

  // nft.loading is true during load.
  if (loading) return <>Loading…</>

  // nft.error is an Error instance in case of error.
  if (error || !nft) {
      console.log("E: ", error)
      return <div>Error.</div>}

  // You can now display the NFT metadata.
  return (
    <section>
        Foo
      <h1>{nft.name}</h1>
      <img src={nft.image} alt="" />
      <p>{nft.description}</p>
      <p>Owner: {nft.owner}</p>
      <p>Metadata URL: {nft.metadataUrl}</p>
    </section>
  )
};

export default Home;

//https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react

//https://colinhacks.com/essays/building-a-spa-with-nextjs

