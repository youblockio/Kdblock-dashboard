import React from 'react'
import kdblock from "../assets/KDblock.png";
import gauge from "../assets/Gauge.png";
import coins from "../assets/Coins.png";
import setting from "../assets/setting.png";
import box from "../assets/image1.png";
import disconnect from "../assets/SignOut.png";
import userImage from "../assets/user.png";
import "../styles/farmover1.css";
import { useNavigate } from "react-router-dom";

const FarmOverView1Screen = () => {
    const navigate = useNavigate();
    return (
        <div className="farm-main-div">
            <div className="menu-div">
                <div className="kdblock-icon-div" onClick={(e) => {e.preventDefault(); navigate("/");}}>
                    <img
                        src={kdblock}
                        alt=''
                        className="kdblock-icon" />
                </div>
                <div className="gauge-icon-div" onClick={(e) => {e.preventDefault(); navigate("/config");}}>
                    <img
                        src={gauge}
                        alt=''
                        className="gauge-icon" />
                    <div className="gauge-icon-text">Farm Overview</div>
                </div>
                <div className="coin-icon-div" onClick={(e) => {e.preventDefault(); navigate("/earning");}}>
                    <img
                        src={coins}
                        alt=''
                        className="coin-icon" />
                    <div className="coin-icon-text">Earnings</div>
                </div>
                <div className="setting-icon-div" onClick={(e) => {e.preventDefault(); navigate("/setting");}}>
                    <img
                        src={setting}
                        alt=''
                        className="setting-icon" />
                    <div className="coin-icon-text">Settings</div>
                </div>
            </div>
            <div className="user-div">
                <div className="user-wallet-address">1F1tAaz5x1HUXr0i...</div>
                <div className="user-disconnect-text">Disconnect</div>
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
            <div className="farm-minting-div">
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
            <div className="farm-left-div">
                <div className="earning-center-title">FARM OVERVIEW</div>
                <div className="farm-left-top-div">
                    <div className="earning-center-top-div-title">Total hash rate</div>
                    <div className="farm-earning-center-top-div-value">50 PH/s</div>
                    <div className="refresh-div"></div>
                </div>
                <div className="farm-left-bottom-div">
                    <div className="earning-center-top-div-title">Total hash per NFT</div>
                    <div className="farm-earning-center-top-div-value">50 GH/s</div>
                    <div className="refresh-div"></div>
                </div>
            </div>
            <div className="farm-center-div">
                <div className="earning-center-title">MY FARM</div>
                <div className="farm-center-top-div">
                    <div className="earning-center-top-div-title">Number of NFT’s</div>
                    <div className="farm-earning-center-top-div-value1">2</div>
                </div>
                <div className="farm-center-bottom-div">
                    <div className="earning-center-top-div-title">Total hash rate</div>
                    <div className="farm-earning-center-top-div-value">100 GH/s</div>
                    <div className="refresh-div"></div>
                </div>
            </div>
            <div className="farm-right-div">
                <div className="earning-center-title">LIVE FEED FROM FARM</div>
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

export default FarmOverView1Screen