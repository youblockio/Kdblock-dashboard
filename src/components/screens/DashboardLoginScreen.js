import React from 'react';
import "../styles/DashBoardLogin.css";
import box from "../assets/image1.png";
import { useNavigate } from "react-router-dom";
import metamsk from "../assets/image2.png";
import { useMetamask,useAddress } from "@thirdweb-dev/react";

const DashboardLoginScreen = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();


    const navigate = useNavigate();
  return (
    <div className="main">
        <div className="minting-div">
            <div className="minting-image-div">
                <img
                className="minting-image-div-image"
                alt=''
                src={box}
                 />
            </div>
            <div className="minting-title">MINTING LIVE</div>
            <div className="minting-subtitle">Phase 1</div>
            <div className="miting-subtitle-main">Minted</div>
            <div className="minting-value">120/500</div>
            <div className="minting-button-div">
                <button className="minting-button">Mint</button>
            </div>
        </div>
        <div className="minting-bottom-div">
        <div className="minting-bottom-div-title">WELCOME</div>
        <div className="minting-bottom-div-subtitle">Connect your wallet with KDBLOCK NFT</div>
        <div className="main-connect-button-div">
            <button className="connect-button" onClick={connectWithMetamask}>
            <img
            src={metamsk}
            alt=''
            className="metamsk" />
            <div className="wallet-text">connect wallet</div>
            </button>
        </div>
        <div className="main-wallet-address-div">Wallet Address: {address}</div>
        <div className="main-enter-button">
            <button className="enter-button" onClick={(e) => {e.preventDefault(); navigate("/config");}}>
            Enter Dashboard</button>
        </div>
        </div>
    </div>
  )
}

export default DashboardLoginScreen