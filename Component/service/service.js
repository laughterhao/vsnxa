import React from "react";
import Image from "next/image";
import Style from "@/styles/service.module.scss";
export default function Service() {
  return (
    <>
      <div className={Style["service-img"]}>
        <div className={Style["item"]}>
          <div className={Style["img"]}>
            <Image
              src="/images/index/icon/game (1).png"
              width={100}
              height={1000}
              alt="螢幕更換"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={Style["txt"]}>
            <h2>螢幕更換</h2>
          </div>
        </div>
        <div className={Style["item"]}>
          <div className={Style["img"]}>
            <Image
              src="/images/index/icon/low-battery (1).png"
              width={100}
              height={100}
              alt="電池更換"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={Style["txt"]}>
            <h2>電池更換</h2>
          </div>
        </div>
        <div className={Style["item"]}>
          <div className={Style["img"]}>
            <Image
              src="/images/index/icon/processor.png"
              width={100}
              height={100}
              alt="安裝晶片"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={Style["txt"]}>
            <h2>安裝晶片</h2>
          </div>
        </div>
        <div className={Style["item"]}>
          <div className={Style["img"]}>
            <Image
              src="/images/index/icon/settings.png"
              width={100}
              height={100}
              alt="機器維修"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={Style["txt"]}>
            <h2>機器維修</h2>
          </div>
        </div>
      </div>
    </>
  );
}
