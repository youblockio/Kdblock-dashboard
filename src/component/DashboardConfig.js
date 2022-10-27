import React from "react";
import icon1 from "./asset/image1.png";
import solar from "./asset/image3.png";
import checkcircle from "./asset/CheckCircle.png";
import metaMaskIcon from "./asset/image2.png";
import xWallet from "./asset/xWallet.png";

const DashboardConfig = () => {
    return (
      <div className="relative bg-black w-full h-[1080px] overflow-hidden text-left text-base text-white font-inter">
        {/* <img
          className="absolute top-[0px] left-[0px] w-[2844px] h-[1579px]"
          alt=""
          src="../ellipse-123.svg"
        /> */}
        <div className="absolute top-[82px] left-[151px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[1200px] h-[320px]">
          <div className="absolute top-[31px] left-[641px] w-[334px] h-[54px] text-base">
            <div className="absolute top-[0px] left-[0px] tracking-[0.05em] uppercase inline-block">
              Minting Live
            </div>
          </div>
          <div className="absolute top-[228px] left-[650px] flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="rounded-[20px] bg-green flex flex-row p-[20px_60px] box-border items-start justify-start">
                <div className="relative tracking-[0.1em] font-medium inline-block">
                  Mint
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[85px] left-[680px] tracking-[0.1em] font-medium text-base inline-block">
            Phase 1
          </div>
          <b className="absolute top-[130px] left-[685px] tracking-[0.1em] inline-block">
            Minted
          </b>
          <div className="absolute top-[180px] left-[680px] [text-decoration:underline] tracking-[0.1em] font-medium inline-block">
            120/500
          </div>
          <img
            className="absolute h-[79.51%] w-[29.14%] top-[4.85%] right-[68.19%] bottom-[15.64%] left-[2.67%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
            alt=""
            src={icon1}
          />
        </div>
        <div className="absolute top-[450px] left-[151px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[1200px] h-[450px]">
          <div className="absolute top-[31px] left-[641px] w-[334px] h-[54px]" />
          <div className="absolute top-[19px] left-[87px] text-base tracking-[0.05em] uppercase inline-block">
            Configure Dashboard
          </div>
          <b className="absolute top-[187px] left-[89px] text-sm tracking-[0.1em] inline-block">
            Step-2
          </b>
          <b className="absolute top-[70px] left-[87px] text-sm tracking-[0.1em] inline-block">
            Step-1
          </b>
          <b className="absolute top-[274px] left-[89px] text-sm tracking-[0.1em] inline-block">
            Step-3
          </b>
          <div className="absolute top-[231px] left-[87px] tracking-[0.1em] inline-block text-xs">
            Connect your polygon wallet holding KDA NFT
          </div>
          <div className="absolute top-[324px] left-[87px] tracking-[0.1em] inline-block text-xs">{`Connect your Kadena wallet address for payouts `}</div>
          <div className="absolute top-[359px] left-[413px] tracking-[0.1em] inline-block text-xs">
            or
          </div>
          <div className="absolute top-[408px] left-[108px] tracking-[0.1em] text-gray-400 inline-block text-xs">{`Enter your Kadena wallet address for payouts `}</div>
          <div className="absolute top-[131px] left-[106px] tracking-[0.1em] text-gray-400 inline-block">{`Enter your farm name `}</div>
          <div className="absolute top-[190px] left-[842px] w-[247px] h-[60px] text-xs">
            <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-green [border:3px_solid_#17a40b] box-border w-[247px] h-[60px]" />
            <div className="absolute top-[18px] left-[71px] font-medium inline-block">
              Connect Wallet
            </div>
          </div>
          <div className="absolute top-[112px] left-[87px] w-[1002px] h-[347px] text-xs">
            <div className="absolute top-[167px] left-[755px] rounded-[20px] bg-green [border:3px_solid_#17a40b] box-border w-[247px] h-[60px]" />
            <div className="absolute top-[267px] left-[755px] rounded-[20px] bg-green [border:3px_solid_#17a40b] box-border w-[247px] h-[60px]" />
            <div className="absolute top-[190px] left-[826px] font-medium inline-block">
              Connect X-Wallet
            </div>
            <div className="absolute top-[290px] left-[790px] font-medium inline-block">
              Set wallet address
            </div>
            <input
              className="[border:none] bg-[transparent] absolute top-[287px] left-[2px] w-[700px] h-[60px]"
              type="text"
            />
            <input
              className="[border:none] bg-[transparent] absolute top-[0px] left-[0px] w-[700px] h-[60px]"
              type="text"
            />
          </div>
          <img
            className="absolute top-[205px] left-[859px] w-[31px] h-[42px] object-cover"
            alt=""
            src={metaMaskIcon}
          />
          <img
            className="absolute top-[290px] left-[859px] w-[43px] h-[43px] object-cover"
            alt=""
            src={xWallet}
          />
        </div>
        <img
          className="absolute h-[36.52%] w-[30.52%] top-[57.96%] right-[-1.51%] bottom-[5.51%] left-[70.99%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
          alt=""
          src={solar}
        />
        <img
          className="absolute h-[2.96%] w-[1.67%] top-[89.91%] right-[49.17%] bottom-[7.13%] left-[49.17%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={checkcircle}
        />
      </div>
    );
  };
  
  export default DashboardConfig;
  