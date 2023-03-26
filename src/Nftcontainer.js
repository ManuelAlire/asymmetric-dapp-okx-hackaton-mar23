import React from "react";
import Nftcard from './Nftcard';


const Nftcontainer = ({nfts}) => {
    return (
        <div> 
            {nfts.map((nft, index) => {
                return <Nftcard nft={nft} key={index}/>
                })}
        </div>
    )
}

export default Nftcontainer