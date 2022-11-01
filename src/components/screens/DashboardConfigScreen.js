import React,{useContext} from 'react';
import "../styles/DashboardConfig.css";
import box from "../assets/image1.png";
import solar from "../assets/image3.png";
import { useNavigate } from "react-router-dom";
import metamsk from "../assets/image2.png";
import xwallet from "../assets/xWallet.png";
import { WalletContext } from '../context/walletContext';
import { Link } from 'react-router-dom';

const DashboardConfigScreen = () => {
    const navigate = useNavigate();
    const {setUserInfo}=useContext(WalletContext)

    const connectXWallet =async ()=>{
        const { kadena } = window;
        const user =  await kadena.request({
            method: 'kda_connect',
            networkId: 'testnet04',
          });
          
          setUserInfo(user)
          localStorage.setItem('user',JSON.stringify(user))

          navigate('/farm')
    }
  return (
    <div className="config-main">
        <div className="config-minting-div">
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
        <div className="config-div">
            <div className="config-title">CONFIGURE DASHBOARD</div>
            <div className="input-title1">Step-1</div>
            <div className="config-input1-div">
                <input 
                className="input1"
                placeholder="Enter your farm name" />
            </div>
            <div className="title2">Step-2</div>
            <div className="config-subtitle">Connect your polygon wallet holding KDA NFT</div>
            <div className="title3">Step-3</div>
            <div className="config-subtitle2">Connect your Kadena wallet address for payouts</div>
            <div className="config-subtitle3">Or</div>
            <div className="config-input2-div">
                <input 
                className="input1"
                placeholder="Enter your Kadena wallet address for payouts" />
            </div>
            <div className="config-wallet-connect-div">
                <button className="connect-button">
                    <img
                    src={metamsk}
                    alt=''
                    className="metamsk" />
                    <div className="wallet-text">Connect wallet</div>
                </button>
            </div>
            <div className="config-Xwallet-connect-div">
                
                <button className="connect-button" onClick={connectXWallet}>
                    <img
                    src={xwallet}
                    alt=''
                    className="xwallet" />
                    <div className="wallet-text">Connect X-wallet</div>
                </button>
                
            </div>
            <div className="config-set-wallet-connect-div">
                <button className="connect-button">set wallet address</button>
            </div>
            <div className="config-image-div">
                <img
                className="solar-image"
                alt=''
                src={solar} />
            </div>
        </div>
    </div>
  )
}

export default DashboardConfigScreen