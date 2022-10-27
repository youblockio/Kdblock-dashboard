import React from "react";
import icon1 from "./asset/image1.png";
import kdBlockIcon from "./asset/KDblock.png";
import coin from "./asset/Coins.png";
import settingIcon from "./asset/setting.png";
import refreshIcon from "./asset/refresh.png";
import signOutIcon from "./asset/SignOut.png";

// import { useCallback } from "react";

const FarmOverview1 = () => {
//   const onFrameContainer1Click = useCallback(() => {
//     const anchor = document.querySelector(
//       "[data-scroll-to='rectangleRectangle']"
//     );
//     if (anchor) {
//       anchor.scrollIntoView({ block: "start", behavior: "smooth" });
//     }
//   }, []);

  return (
    <div className="relative bg-black w-full h-[1080px] overflow-hidden text-left text-8xs text-white font-inter">
      {/* <img
        className="absolute top-[0px] left-[0px] w-[2844px] h-[1579px]"
        alt=""
        src="../ellipse-122.svg"
      />
      <img
        className="absolute top-[-122px] left-[575px] w-[1834px] h-[1652px] hidden"
        alt=""
        src="../ellipse-132.svg"
      /> */}
      {/* <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[1080px] object-cover hidden mix-blend-overlay"
        alt=""
        src="../image-44@2x.png"
      />
      <img
        className="absolute top-[-88px] left-[75px] w-[1984px] h-[1984px] object-cover hidden"
        alt=""
        src="../location-1@2x.png"
      /> */}
      {/* <div
        className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.32),_rgba(0,_0,_0,_0.24))] [backdrop-filter:blur(20px)] w-[1920px] h-[1080px]"
        // data-scroll-to="rectangleRectangle"
      /> */}
      {/* <div className="absolute top-[517px] left-[483px] w-[955px] h-[46px] hidden">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#c0ffca,_#7faa86_70.83%,_#76ff8c)] w-[46px] h-[46px]" />
        <div className="absolute top-[0px] left-[454px] [background:linear-gradient(180deg,_#c0ffca,_#7faa86_70.83%,_#76ff8c)] w-[46px] h-[46px]" />
        <div className="absolute top-[0px] left-[909px] [background:linear-gradient(180deg,_#c0ffca,_#7faa86_70.83%,_#76ff8c)] w-[46px] h-[46px]" />
      </div> */}
      {/* <img
        className="absolute top-[1143px] left-[0px] w-[3189px] h-[1435px] object-cover"
        alt=""
        src="../screenshot-20220620-at-1225-1@2x.png"
      /> */}
      {/* <div className="absolute top-[27px] left-[1809px] w-[60px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] rounded-[20px] [border:3px_solid_#50b5ff] box-border w-[60px] h-[60px]" />
        <div className="absolute top-[2px] left-[2px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_#b62626,_rgba(15,_55,_199,_0))] w-[56px] h-[56px]" />
      </div> */}
      <div className="absolute top-[35px] left-[1200px] text-3xs font-medium inline-block">
        1F1tAaz5x1HUXr0i...
      </div>
      <div className="absolute top-[59px] left-[1200px] text-2xs text-gray-200 inline-block">
        Disconnect
      </div>
      {/* <img
        className="absolute top-[55px] left-[75px] w-[43px] h-[48px] object-cover hidden"
        alt=""
        src="../vertical-white-1@2x.png"
      />
      <img
        className="absolute top-[503px] left-[80px] w-[67px] h-[74px] object-cover hidden"
        alt=""
        src="../vertical-white-2@2x.png"
      /> */}
      {/* <div className="absolute top-[477px] left-[219px] w-[413px] h-[147px]" /> */}
      <div className="absolute top-[215px] left-[51px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[120px] h-[650px]" />
      <div
        className="absolute top-[247px] left-[78px] w-[67px] h-[589px] cursor-pointer text-7xs"
        // onClick={onFrameContainer1Click}
      >
        <div className="absolute top-[163px] left-[8px] flex flex-col items-start justify-start gap-[68px]">
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src="../gauge.svg"
          />
          <img
            className="relative w-[50px] h-[50px] shrink-0"
            alt=""
            src={coin}
          />
        </div>
        <img
          className="absolute h-[7.3%] w-[64.18%] top-[70.71%] right-[22.39%] bottom-[21.99%] left-[13.43%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={settingIcon}
        />
        <div className="absolute top-[331px] left-[16px] inline-block w-[74px] h-[13px]">
          Earnings
        </div>
        <div className="absolute top-[474px] left-[13px] inline-block w-[74px] h-[13px]">
          Settings
        </div>
        <div className="absolute top-[163px] left-[-10px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] shadow-[0px_4px_4px_#17a40b] w-[87px] h-[78px]" />
      </div>
      <div className="absolute top-[460px] left-[74px] text-7xs inline-block w-[74px] h-[13px]">
        Farm Overview
      </div>
      <img
        className="absolute h-[2.31%] w-[1.3%] top-[5.28%] right-[7.24%] bottom-[92.41%] left-[91.46%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={signOutIcon}
      />
      <div className="absolute top-[94px] left-[267px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[1200px] h-[354px] text-base">
        <div className="absolute top-[26px] left-[438px] w-[334px] h-[54px] text-lg">
          <div className="absolute top-[0px] left-[0px] tracking-[0.05em] uppercase inline-block">
            Minting Live
          </div>
        </div>
        <div className="absolute top-[259px] left-[501px] flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <button className="cursor-pointer [border:none] p-[20px_60px] bg-green rounded-[20px] flex flex-row box-border items-start justify-start">
              <div className="relative text-base tracking-[0.1em] font-medium font-inter text-white text-left inline-block">
                Mint
              </div>
            </button>
          </div>
        </div>
        <div className="absolute top-[77px] left-[536px] tracking-[0.1em] font-medium inline-block">
          Phase 1
        </div>
        <b className="absolute top-[143px] left-[536px] tracking-[0.1em] inline-block">
          Minted
        </b>
        <div className="absolute top-[179px] left-[528px] [text-decoration:underline] tracking-[0.1em] font-medium inline-block">
          120/500
        </div>
        <img
          className="absolute h-[92.53%] w-[39.67%] top-[4.24%] right-[56.37%] bottom-[3.23%] left-[3.97%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
          alt=""
          src={icon1}
        />
      </div>
      <div className="absolute top-[476px] left-[267px] w-[1208px] h-[458.55px]">
        <div className="absolute top-[1px] left-[0px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
        <div className="absolute top-[1px] left-[424px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
        <div className="absolute top-[0px] left-[848px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
      </div>
      <div className="absolute top-[476px] left-[267px] w-[1208px] h-[458.55px]">
        <div className="absolute top-[1px] left-[0px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
        <div className="absolute top-[1px] left-[424px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
        <div className="absolute top-[0px] left-[848px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] [backdrop-filter:blur(20px)] w-[360px] h-[457.55px]" />
      </div>
      <div className="absolute top-[538px] left-[297px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] w-[301px] h-[146px]" />
      <div className="absolute top-[540px] left-[720px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] w-[301px] h-[146px]" />
      <div className="absolute top-[723px] left-[297px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] w-[301px] h-[146px]" />
      <div className="absolute top-[725px] left-[720px] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(167,_167,_167,_0.5),_rgba(83,_83,_83,_0.4))] w-[301px] h-[146px]" />
      <div className="absolute top-[550px] left-[390px] w-[272.1px] h-[300.68px] text-5xs">
        <div className="absolute top-[0px] left-[0px] inline-block w-[192.42px] h-[22.33px]">
          Total hash rate
        </div>
        <div className="absolute top-[185px] left-[0px] inline-block w-[192.42px] h-[22.33px]">
          Total hash per NFT
        </div>
        <div className="absolute top-[38px] left-[-20px] text-xl font-semibold inline-block w-[234.1px] h-[77.68px]">
          50 PH/s
        </div>
        <div className="absolute top-[223px] left-[-20px] text-xl font-semibold inline-block w-[234.1px] h-[77.68px]">
          50 GH/s
        </div>
      </div>
      <div className="absolute top-[552px] left-[813px] w-[264.1px] h-[297.68px] text-5xs">
        <div className="absolute top-[0px] left-[0px] inline-block w-[192.42px] h-[22.33px]">
          Number of NFT’s
        </div>
        <div className="absolute top-[185px] left-[0px] inline-block w-[192.42px] h-[22.33px]">
          Total hash rate
        </div>
        <div className="absolute top-[40px] left-[40px] text-xl font-semibold inline-block w-[73px] h-[78px]">{`2 `}</div>
        <div className="absolute top-[220px] left-[-40px] text-xl font-semibold inline-block w-[234.1px] h-[77.68px]">
          100 GH/s
        </div>
      </div>
      <div className="absolute top-[656px] left-[511px] w-[142.8px] h-[19.04px] text-right">
        <div className="absolute top-[0px] left-[0px] w-[142.8px] h-[19.04px]">
          <div className="absolute top-[0px] left-[-60px] rounded-[30px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[142.8px] h-[19.04px]" />
          <img
            className="absolute h-[53.33%] w-[7.11%] top-[23.34%] right-[2.67%] bottom-[23.33%] left-[90.22%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
            alt=""
            src={refreshIcon}
          />
          <div className="absolute top-[4.44px] left-[-40px] lowercase inline-block w-[112.33px] h-[9.52px]">
            <span className="font-thin">LAST UPDATED:</span>
            <span>{` `}</span>
            <span className="font-light">12:23:33 31/07/22</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[841px] left-[511px] w-[142.8px] h-[19.04px] text-right">
        <div className="absolute top-[0px] left-[0px] w-[142.8px] h-[19.04px]">
          <div className="absolute top-[0px] left-[-60px] rounded-[30px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[142.8px] h-[19.04px]" />
          <img
            className="absolute h-[53.33%] w-[7.11%] top-[23.34%] right-[2.67%] bottom-[23.33%] left-[90.22%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
            alt=""
            src={refreshIcon}
          />
          <div className="absolute top-[4.44px] left-[-40px] lowercase inline-block w-[112.33px] h-[9.52px]">
            <span className="font-thin">LAST UPDATED:</span>
            <span>{` `}</span>
            <span className="font-light">12:23:33 31/07/22</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[843px] left-[934px] w-[142.8px] h-[19.04px] text-right">
        <div className="absolute top-[0px] left-[0px] w-[142.8px] h-[19.04px]">
          <div className="absolute top-[0px] left-[-60px] rounded-[30px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.4),_rgba(165,_165,_165,_0.3))] w-[142.8px] h-[19.04px]" />
          <img
            className="absolute h-[53.33%] w-[7.11%] top-[23.34%] right-[2.67%] bottom-[23.33%] left-[90.22%] max-w-full overflow-hidden max-h-full mix-blend-overlay"
            alt=""
            src={refreshIcon}
          />
          <div className="absolute top-[4.44px] left-[-40px] lowercase inline-block w-[112.33px] h-[9.52px]">
            <span className="font-thin">LAST UPDATED:</span>
            <span>{` `}</span>
            <span className="font-light">12:23:33 31/07/22</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[485px] left-[369px] text-sm tracking-[0.2em] font-extralight inline-block">
        FARM OVERVIEW
      </div>
      <div className="absolute top-[485px] left-[775px] text-sm tracking-[0.2em] font-extralight inline-block">
        MY FARM
      </div>
      <div className="absolute top-[485px] left-[1208px] text-sm tracking-[0.2em] font-extralight inline-block">
        LIVE FEED FROM FARM
      </div>
      <img
        className="absolute top-[256px] left-[73px] w-[82px] h-[47px] object-cover"
        alt=""
        src={kdBlockIcon}
      />
    </div>
  );
};

export default FarmOverview1;
