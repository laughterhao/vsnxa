import React from 'react'
import Image from "next/image";
import Style from '@/styles/basic.module.scss'
export default function Basic() {
  return (
    <>
        <div className={`${Style["img-warp"]} mt-5`}>
            <Image
              src={"/images/index/switch.png"}
              width={575}
              height={250}
              alt="switch"
              style={{
                maxWidth: "100%",
                height: "auto",
                paddingInline: "10px",
              }}
            />
            <div className={`container ${Style["small-img"]}`}>
              <div className="row justify-content-between">
                <div className="col-4">
                  <Image
                    src={"/images/index/Emmc.png"}
                    width={60}
                    height={60}
                    alt="switch"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-4">
                  <Image
                    src={"/images/index/sdcard.png"}
                    width={60}
                    height={60}
                    alt="switch"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center mt-3">
            <div className="row row-cols-md-2 h-100 ">
              <div className="col h-100">
                <div className={`${Style["txt"]}  mb-2 mb-md-0`}>
                  <h2 className="fs-4">SDCard 儲存空間</h2>
                  <p>
                    機器安裝晶片後，所有的資料都必須放在該記憶卡上，讓有晶片主機安裝虛擬系統，遊戲及各類插件
                  </p>
                </div>
              </div>
              <div className="col h-100 ">
                <div className={`${Style["txt"]}  `}>
                  <h2 className="fs-4">主機內部儲存空間</h2>
                  <p>
                    機器原裝內置的儲存模塊，
                    大小為32G(OLED機型為64G)預裝Switch的操作系統，也可以稱為正版系統
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
