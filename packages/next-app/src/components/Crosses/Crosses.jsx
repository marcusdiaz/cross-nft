import React from 'react'

export default function Crosses(props) {

  //Get all crosses for this wallet
  // and put it into item


  console.log("Crosses ")
  console.log(props)

  return (
    <React.Fragment>
      <div className="grid grid-flow-row">
        <div>
        <p>OnChain Cross.</p>
        <p>A cross on the Ethereum block chain.</p>
        {props.user.connected == false ? (
          <button onClick={props.connectWallet} className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700" >
            Connect to Wallet
          </button>
        ) : (
          <button onClick={props.mint} className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
            Mint NFT
          </button>
        )}
        </div>
        <div>
          These are your On Chain Crosses. 
          <ul>
            {props.crosses.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
