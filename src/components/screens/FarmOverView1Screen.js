import React, { useContext } from 'react'
import kdblock from "../assets/KDblock.png";
import gauge from "../assets/Gauge.png";
import coins from "../assets/Coins.png";
import setting from "../assets/setting.png";
import box from "../assets/image1.png";
import disConnect from "../assets/SignOut.png";
import userImage from "../assets/user.png";
import ticket from "../assets/ticket.png";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
import calender from "../assets/calender.png";
import "../styles/farmover1.css";
import { useNavigate } from "react-router-dom";
import { useAddress,useDisconnect } from "@thirdweb-dev/react";


const FarmOverView1Screen = () => {

    const current = new Date();
    const date = `${current.getDate()}`;

    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const thisMonth = months[current.getMonth()];

    const navigate = useNavigate();
    const address = useAddress();
    const disconnectMeta = useDisconnect()

    const user = JSON.parse(localStorage.getItem('user'))

    // const disconnect = async () => {

    //     const { kadena } = window;
    //     const dis = await kadena.request({
    //         method: 'kda_disconnect',
    //         networkId: 'mainnet01 ',

    //     });

    //     localStorage.removeItem("user");
    //     navigate('/')
    // }


    return (
        <div className="farm-main-div">
            <div className="menu-div">
                <div className="kdblock-icon-div" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
                    <img
                        src={kdblock}
                        alt=''
                        className="kdblock-icon" />
                </div>
                <div className="gauge-icon-div1" onClick={(e) => { e.preventDefault(); navigate("/farm"); }}>
                    <img
                        src={gauge}
                        alt=''
                        className="gauge-icon" />
                    <div className="gauge-icon-text">Farm Overview</div>
                </div>
                <div className="coin-icon-div1" onClick={(e) => { e.preventDefault(); navigate("/earning"); }}>
                    <img
                        src={coins}
                        alt=''
                        className="coin-icon" />
                    <div className="coin-icon-text">Earnings</div>
                </div>
                <div className="setting-icon-div1" onClick={(e) => { e.preventDefault(); navigate("/setting"); }}>
                    <img
                        src={setting}
                        alt=''
                        className="setting-icon" />
                    <div className="coin-icon-text">Settings</div>
                </div>
            </div>
            <div className="user-div">
                <div className="user-wallet-address">{address && address.slice(38, 42)}</div>
                <div className="user-disconnect-text" onClick={()=>{disconnectMeta(); navigate('/')}}>Disconnect</div>
                <div className="user-disconnect-button-div">
                    <img
                        src={disConnect}
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
                <div className="minting-title1">MINTING LIVE</div>
                <div className="minting-subtitle1">Phase 1</div>
                <div className="miting-subtitle-main1">Minted</div>
                <div className="minting-value1">120/500</div>
                <div className="minting-button-div1">
                    <button className="minting-button">Mint</button>
                </div>
                <div className="lucky-draw-div">
                    <div className="lucky-draw-title">Lucky Draw</div>
                    <div className="lucky-draw-top-div">
                        <div className="lucky-draw-top-div-title">Your Lucky Draw Number</div>
                        <div className="lucky-draw-top-div-value">1166</div>
                        <div className="lucky-draw-top-image-div">
                            <img
                                src={ticket}
                                alt=''
                                className='' />
                        </div>
                    </div>
                    <div className="lucky-draw-bottom-div">
                        <div className="lucky-draw-bottom-div-title">Winners</div>
                        <div className="lucky-draw-bottom-div-right">
                            <img
                            src={calender}
                            alt=''
                            className='calender' />
                            <div className="lucky-draw-bottom-div-right-title">{date}th {thisMonth}</div>
                        </div>
                        <div className="lucky-draw-bottom-1st">
                            <div className="lucky-3344">3344</div>
                            <img
                                src={gold}
                                alt=''
                                className='gold' />
                        </div>
                        <div className="lucky-draw-bottom-2nd">
                            <div className="lucky-3344">3344</div>
                            <img
                                src={silver}
                                alt=''
                                className='silver' />
                        </div>
                        <div className="lucky-draw-bottom-3rd">
                            <div className="lucky-3344">3344</div>
                            <img
                                src={bronze}
                                alt=''
                                className='bronze' />
                        </div>
                        <p className="lucky-draw-bottom-subtitle">This month's winner numbers</p>
                    </div>
                </div>
                <div className="lucky-draw-button-div">
                    <button className="lucky-draw-button">Claim Tickets</button>
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
                <div className="gauge-icon-menu-div" onClick={(e) => { e.preventDefault(); navigate("/config"); }}>
                    <img
                        src={gauge}
                        alt=''
                        className="gauge-icon" />
                    <div className="gauge-icon-text">Farm Overview</div>
                </div>
                <div className="coin-icon-menu-div" onClick={(e) => { e.preventDefault(); navigate("/earning"); }}>
                    <img
                        src={coins}
                        alt=''
                        className="coin-icon" />
                    <div className="coin-icon-text">Earnings</div>
                </div>
                <div className="setting-icon-menu-div" onClick={(e) => { e.preventDefault(); navigate("/setting"); }}>
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