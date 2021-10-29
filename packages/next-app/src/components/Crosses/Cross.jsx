import { getDefaultProvider, Contract, ethers } from 'ethers';
import { NftProvider, useNft } from 'use-nft';


const Cross = (props) => {
    const { loading, error, nft } = useNft(
      "0xcbdf4e0141684addc7b9b6d2ad1a65dddd243ee4",
      "11"
    )

    console.log("Props: ", props)
  
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

  export default Cross;