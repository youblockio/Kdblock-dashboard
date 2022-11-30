import React from 'react'
import "../styles/EarningsScreen.css";
import box from "../assets/image1.png";
import kdblock from "../assets/KDblock.png";
import gauge from "../assets/Gauge.png";
import coins from "../assets/Coins.png";
import setting from "../assets/setting.png";
import addButton from "../assets/Vector.png";
import nftImage from "../assets/nftImage.png";
import kadena from "../assets/kadena.png";
import disconnect from "../assets/SignOut.png";
import userImage from "../assets/user.png";
import ticket from "../assets/ticket.png";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
import calender from "../assets/calender.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useAddress,useDisconnect } from "@thirdweb-dev/react";

const EarningsScreen = (props) => {
  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}`;

  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const thisMonth = months[current.getMonth()];

  const user = JSON.parse(localStorage.getItem('user'))
  const address = useAddress();
  const disconnectMeta = useDisconnect()



  return (
    <div className="Earning-main-div">
      <div className="menu-div">
        <div className="kdblock-icon-div" onClick={(e) => {e.preventDefault(); navigate("/");}}>
          <img
            src={kdblock}
            alt=''
            className="kdblock-icon" />
        </div>
        <div className="gauge-icon-div" onClick={(e) => {e.preventDefault(); navigate("/farm");}}>
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
                <div className="user-wallet-address">{address && address.slice(38, 42)}</div>
                <div className="user-disconnect-text" onClick={()=>{disconnectMeta(); navigate('/')}}>Disconnect</div>
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
      <div className="earning-minting-div">
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
      <div className="earning-left-div">
        <div className="earning-left-title">MY NFT'S</div>
        <div className="earning-left-main-div">
          <div className="earning-left-main-div-title">Number's of NFT's</div>
          <div className="earning-left-main-div-value">2</div>
          <div className="earning-left-main-div-subtitle">(150 GH/s Hashrate)</div>
          <div className="earning-left-image-div">
            <img
              src={nftImage}
              alt=''
              className="nftimage" />
          </div>
          <div className="earning-right-image-div">
            <img
              src={nftImage}
              alt=''
              className="nftimage" />
          </div>
        </div>
        <div className="addbutton-div">
          <img
            src={addButton}
            alt=''
            className="addbutton" />
        </div>
        <div className="earning-left-subtitle">BUY NFT'S</div>
      </div>
      <div className="earning-center-div">
        <div className="earning-center-title">EARNINGS</div>
        <div className="earning-center-button-div">
          <button className="earning-center-button">Claim Reward</button>
        </div>
        <div className="earning-center-button-text">Only one claim can be made per month</div>
        <div className="earning-center-top-div">
          <div className="earning-center-top-div-title">Overall Earnings</div>
          <div className="earning-center-top-div-value">250 KDA</div>
          <div className="earning-center-top-div-subvalue">$ 350 USD</div>
          <div className="refresh-div"></div>
        </div>
        <div className="earning-center-bottom-div">
          <div className="earning-center-top-div-title">24hr Earnings</div>
          <div className="week-button-div">
            <p className='week-button-div-title'>Weak</p>
          </div>
          <div className="month-button-div">
            <p className='week-button-div-title'>Month</p>
          </div>
          <div className="earning-center-top-div-value">8 KDA</div>
          <div className="earning-center-top-div-subvalue">$ 13 USD</div>
          <div className="refresh-div"></div>
        </div>
      </div>
      <div className="earning-right-div">
        <div className="earning-center-title">TRANSACTIONS</div>
        <div className="earning-center-transaction-first">
          <div className="transaction-image-div">
            <img
              src={kadena}
              alt=''
              className="transaction-image" />
          </div>
          <div className="transaction-title">KADENA</div>
          <div className="transaction-subtitle">Daily Payout</div>
          <div className="transaction-value">+ 9.345 KDA</div>
          <div className="transaction-subvalue">$ 19</div>
        </div>
        <div className="earning-center-transaction-second">
          <div className="transaction-image-div">
            <img
              src={kadena}
              alt=''
              className="transaction-image" />
          </div>
          <div className="transaction-title">KADENA</div>
          <div className="transaction-subtitle">Daily Payout</div>
          <div className="transaction-value">+ 9.345 KDA</div>
          <div className="transaction-subvalue">$ 19</div>
        </div>
        <div className="earning-center-transaction-third">
          <div className="transaction-image-div">
            <img
              src={kadena}
              alt=''
              className="transaction-image" />
          </div>
          <div className="transaction-title">KADENA</div>
          <div className="transaction-subtitle">Daily Payout</div>
          <div className="transaction-value">+ 9.345 KDA</div>
          <div className="transaction-subvalue">$ 19</div>
        </div>
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

export default EarningsScreen