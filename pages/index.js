import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Style from "@/styles/main.module.scss";

export default function Home() {
  return (
    <>
      <div className={Style["warp-box"]}>
        <div className={Style["slider"]}>
          <Image
            priority={true}
            fetchPriority="high"
            src="/sliderimg.jpg"
            alt="Picture of the author"
            width={1440}
            height={500}
          />
        </div>
        <div className={Style["info-warp"]}>
          <div className={Style["info-content"]}>
            <div className={Style["info-txt"]}>
              <h1 className="pb-2">
                賦予Switch
                <small>不同於過往的功能</small>
              </h1>
              <h2>所有插件問題</h2>
              <p>或許在這邊都會有解答</p>
            </div>
          </div>
        </div>

        <div className={Style["service-warp"]}>
          <div className={Style["title-button"]}>
            <div className={Style["warp"]}>
              <h2>服務項目</h2>
              <Link className={Style["btn"]} href={""}>
                more <IoIosArrowForward className="yt-1" />
              </Link>
            </div>
          </div>
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
        </div>

        <div className={Style["basic-warp"]}>
          <div className={Style["title-button"]}>
            <div className={Style["warp"]}>
              <h2>基礎知識</h2>
              <Link className={Style["btn"]} href={""}>
                more <IoIosArrowForward className="yt-1" />
              </Link>
            </div>
          </div>
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
          <div className="container text-center">
            <div className="row justify-content-around mt-3">
              <div className="col-lg-5">
                <div className={`${Style["txt"]} `}>
                  <h2 className="fs-4">SDCard 儲存空間</h2>
                  <p>
                    機器安裝晶片後，所有的資料都必須放在該記憶卡上，讓有晶片主機安裝虛擬系統，遊戲及各類插件
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={`${Style["txt"]} `}>
                  <h2 className="fs-4">SDCard 儲存空間</h2>
                  <p>
                    機器原裝內置的儲存模塊，
                    大小為32G(OLED機型為64G)預裝Switch的操作系統，也可以稱為正版系統
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
