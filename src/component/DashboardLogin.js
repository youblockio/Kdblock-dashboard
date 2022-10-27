import React from "react";
import icon1 from "./asset/image1.png";
import metaMaskIcon from "./asset/image2.png";

const DashboardLogin = () => {
    return (
      <div className="relative bg-black w-full h-screen overflow-hidden text-left text-xs text-white font-inter">
        {/* <img
          className="absolute top-[0px] left-[0px] w-[2844px] h-[1579px]"
          alt=""
          src="../ellipse-124.svg"
        /> */}
        <div className="absolute top-[82px] left-[151px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[1200px] h-[315px] text-base">
          <div className="absolute top-[31px] left-[641px] w-[334px] h-[54px] text-base">
            <div className="absolute top-[0px] left-[0px] tracking-[0.05em] uppercase inline-block">
              Minting Live
            </div>
          </div>
          <div className="absolute top-[228px] left-[640px] flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start">
              <div className="rounded-[20px] bg-green flex flex-row p-[20px_60px] box-border items-start justify-start">
                <div className="relative tracking-[0.1em] font-medium inline-block">
                  Mint
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[85px] left-[675px] tracking-[0.1em] text-base font-medium inline-block">
            Phase 1
          </div>
          <b className="absolute top-[130px] left-[679px] tracking-[0.1em] inline-block">
            Minted
          </b>
          <div className="absolute top-[180px] left-[669px] [text-decoration:underline] tracking-[0.1em] font-medium inline-block">
            120/500
          </div>
          <img
            className="absolute h-[79.51%] w-[29.14%] top-[4.85%] right-[68.19%] bottom-[15.64%] left-[2.67%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
            alt=""
            src={icon1}
          />
        </div>
        <img
          className="absolute top-[457px] left-[737px] w-[31px] h-[42px] object-cover"
          alt=""
          src={metaMaskIcon}
        />
        <div className="absolute top-[535px] left-[690px] font-medium text-green inline-block">
          Wallet Connected
        </div>
        <div className="absolute top-[600px] left-[497px] font-medium text-gray-400 inline-block">{`Wallet Address: 0xaA2C5EB5c35f26402CedDB9a8c50f12273ef8F65 `}</div>
      </div>
    );
  };
  
  export default DashboardLogin;
  