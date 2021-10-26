
import React from 'react'
import Link from 'next/link'

import Nav from './Nav'

export default class Header extends React.Component {

//export default function Header() {
    render() {

      return (
        <div className="w-screen bg-brown-light">
          <h1 className="text-center text-gold text-4xl pt-6 pb-6 drop-shadow-xl">Cross NFT</h1>
          <p className="text-center text-gold text-4xl pt-6 pb-6 drop-shadow-xl">Cross Cards</p>
          <div className="bg-green-light text-center" >
            <Nav user={this.props.user} connectWallet={this.props.connectWallet} logoffWallet={this.props.logoffWallet} changeRouteHandler={this.props.changeRouteHandler}/>
          </div>
        </div>
      );
    }
}
