import React from 'react'
import "../styles/SettingScreen.css";
import kdblock from "../assets/KDblock.png";
import gauge from "../assets/Gauge.png";
import coins from "../assets/Coins.png";
import setting from "../assets/setting.png";
import swap from "../assets/Swap.png";
import headset from "../assets/Headset.png";
import question from "../assets/Question.png";
import disconnect from "../assets/SignOut.png";
import userImage from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import xwallet from "../assets/xWallet.png";

const FarmOverViewScreen = () => {
    const navigate = useNavigate();
    const connectXWallet =async ()=>{
        const { kadena } = window;
        const user =  await kadena.request({
            method: 'kda_connect',
            networkId: 'testnet04',
          });
          

          localStorage.setItem('user',JSON.stringify(user))

        //   navigate('/farm')
    }

    const disconnectWallet = async () => {

        const { kadena } = window;
        const dis = await kadena.request({
            method: 'kda_disconnect',
            networkId: 'mainnet01 ',

        });

        localStorage.removeItem("user");
        // navigate('/')
    }
  
  return (
    <div className="setting-main-div">
        <div className="menu-div">
                <div className="kdblock-icon-div" onClick={(e) => {e.preventDefault(); navigate("/");}}>
                    <img
                        src={kdblock}
                        alt=''
                        className="kdblock-icon" />
                </div>
                <div className="gauge-icon-div2" onClick={(e) => {e.preventDefault(); navigate("/farm");}}>
                    <img
                        src={gauge}
                        alt=''
                        className="gauge-icon" />
                    <div className="gauge-icon-text">Farm Overview</div>
                </div>
                <div className="coin-icon-div2" onClick={(e) => {e.preventDefault(); navigate("/earning");}}>
                    <img
                        src={coins}
                        alt=''
                        className="coin-icon" />
                    <div className="coin-icon-text">Earnings</div>
                </div>
                <div className="setting-icon-div2" onClick={(e) => {e.preventDefault(); navigate("/setting");}}>
                    <img
                        src={setting}
                        alt=''
                        className="setting-icon" />
                    <div className="coin-icon-text">Settings</div>
                </div>
            </div>
            <div className="user-div">
                <div className="user-wallet-address">1F1tAaz5x1HUXr0i...</div>
                <div className="user-disconnect-text" onClick={disconnectWallet}>Disconnect</div>
                <div className="user-disconnect-button-div">
                    <img
                    src={disconnect}
                    alt=''
                    className="disconnect" />
                </div>
                <div className="user-image-div">
                    <img
                    src={userImage}
                    alt=''
                    className="user-image" />
                </div>
            </div>
            <div className="swap-div">
                <div className="swap-image-div">
                    <img
                    src={swap}
                    alt=''
                    className="swap-image" />
                </div>
                <div className="swap-div-text">Change Payout Address</div>
            </div>
            <div className="question-div">
            <div className="swap-image-div">
                    <img
                    src={question}
                    alt=''
                    className="swap-image" />
                </div>
                <div className="swap-div-text">FAQ</div>
            </div>
            <div className="headset-div">
            <div className="swap-image-div">
                    <img
                    src={headset}
                    alt=''
                    className="swap-image" />
                </div>
                <div className="swap-div-text">Support</div>
            </div>
            <div className="setting-left-div">
                <div className="earning-center-title">Current Payout Address</div>
                <div className="setting-left-first-input-div">
                    <input
                    placeholder=''
                    className="setting-left-first-input" />
                </div>
                <div className="setting-left-title">Connect your Kadena wallet address for payouts </div>
                <div className="setting-left-wallet-button-div">
                    <button className="connect-button" onClick={connectXWallet}>
                    {/* <img
                    src={xwallet}
                    alt=''
                    className="xwallet" />
                    <div className="wallet-text">Connect X-wallet</div> */}connect x-wallet
                    </button>
                </div>
                <div className="setting-left-subtitle">or</div>
                <div className="setting-left-second-input-div">
                    <input
                    placeholder=''
                    className="setting-left-first-input" />
                </div>
                <div className="setting-left-button-div">
                    <button className="setting-left-button">Change</button>
                </div>
                <div className="setting-left-final-div">Updated !</div>
            </div>
            <div className="setting-center-div">
                <div className="setting-first-text">How to change kadena payout address?</div>
                <div className="line-div1"></div>
                <div className="setting-second-text">How to transfer NFT ownership?</div>
                <div className="line-div2"></div>
                <div className="setting-third-text">How to setup X-Wallet?</div>
                <div className="line-div3"></div>
                <div className="setting-fourth-text">How to sell kadena NFT address?</div>
                <div className="line-div4"></div>
            </div>
            <div className="setting-right-div">
            <div className="setting-first-text">Raise a support ticket</div>
                <div className="line-div1"></div>
                <div className="setting-second-text">Chat with us</div>
                <div className="line-div2"></div>
                <div className="setting-third-text">Join our Discord community</div>
                <div className="line-div3"></div>
            </div>
            <div className="horizontal-menu">
                <div className="gauge-icon-menu-div" onClick={(e) => {e.preventDefault(); navigate("/config");}}>
                    <img
                        src={gauge}
                        alt=''
                        className="gauge-icon" />
                    <div className="gauge-icon-text">Farm Overview</div>
                </div>
                <div className="coin-icon-menu-div" onClick={(e) => {e.preventDefault(); navigate("/earning");}}>
                    <img
                        src={coins}
                        alt=''
                        className="coin-icon" />
                    <div className="coin-icon-text">Earnings</div>
                </div>
                <div className="setting-icon-menu-div" onClick={(e) => {e.preventDefault(); navigate("/setting");}}>
                    <img
                        src={setting}
                        alt=''
                        className="setting-icon" />
                    <div className="coin-icon-text">Settings</div>
                </div>
            </div>
    </div>
  )
}

export default FarmOverViewScreen