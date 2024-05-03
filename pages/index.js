import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Style from "@/styles/main.module.scss";

export default function Home() {
  return (
    <>
      <div className={Style["warp-box"]}>
        <div>
          <Image
            priority={true}
            fetchPriority="high"
            src="/a.jpg"
            alt="Picture of the author"
            width={1440}
            height={500}
            className={Style["slider"]}
          />
        </div>
        <div className={Style["info-warp"]}>
          <div className={Style["info-content"]}>
            <div className={Style["info-txt"]}>
              <h1>
                賦予Switch
                <small>不同於過往的功能</small>
              </h1>
              <h2>所有插件問題</h2>
              <p>或許在這邊都會有解答</p>
            </div>
          </div>
        </div>
        <div className={Style["service-warp"]}>
          <div className={Style["service-content"]}>
            <div className={Style["service-title"]}>
              <h1>服務項目</h1>
              <button className={Style["main-btn"]}>
                <div className={Style["btn-content"]}>
                  <Link href={""}>more</Link>
                  <IoIosArrowForward className="yt-1" />
                </div>
              </button>
            </div>

            <div className={Style["service-img"]}>
              <div className={Style["item"]}>
                <div className={Style["img"]}>
                  <Image
                    src="/images/index/icon/game (1).png"
                    width={150}
                    height={150}
                    alt="螢幕更換"
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
                    width={150}
                    height={150}
                    alt="電池更換"
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
                    width={150}
                    height={150}
                    alt="安裝晶片"
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
                    width={150}
                    height={150}
                    alt="機器維修"
                  />
                </div>
                <div className={Style["txt"]}>
                  <h2>機器維修</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style["basic-warp"]}>
          <div className={Style["basic-content"]}>
            <div className={Style["basic-title"]}>
              <h1>基礎知識</h1>
              <button className={Style["main-btn"]}>
                <div className={Style["btn-content"]}>
                  <Link href={""}>more</Link>
                  <IoIosArrowForward className="yt-1" />
                </div>
              </button>
            </div>
            <div className={`${Style["img-warp"]} mt-5`}>
              <Image
                src={"/images/index/switch.png"}
                width={575}
                height={250}
                alt="switch"
              />
              <div className={Style["small-img"]}>
                <Image
                  src={"/images/index/Emmc.png"}
                  width={90}
                  height={57}
                  alt="switch"
                />
                <Image
                  src={"/images/index/sdcard.png"}
                  width={90}
                  height={57}
                  alt="switch"
                />
              </div>
            </div>
            <div className={`${Style["txt-content"]} `}>
              <div className="contenter text-center">
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
                    <div className={Style["txt"]}>
                      <h2 className="fs-4">主機儲存空間</h2>
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
        </div>
        <div className={Style["expansion-warp"]}>
          <div className={Style["expansion-content"]}>
            <div className={Style["expansion-title"]}>
              <h1>插件使用</h1>
              <button className={Style["main-btn"]}>
                <div className={Style["btn-content"]}>
                  <Link href={""}>more</Link>
                  <IoIosArrowForward className="yt-1" />
                </div>
              </button>
            </div>
            <div className="contenter d-flex align-items-center justify-content-center">
            <div className="row mt-3 ">
              <div className="col-lg-4 text-center">
                <div className="card" style={{width:"18rem"}}>
                  <Image
                    src="/images/index/images.jpg"
                    width={200}
                    height={200}
                    className="card-img-top"
                    alt="JKSV"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="card" style={{width:"18rem"}}>
                  <Image
                    src="/images/index/images.jpg"
                    width={200}
                    height={200}
                    className="card-img-top"
                    alt="JKSV"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="card" style={{width:"18rem"}}>
                  <Image
                    src="/images/index/images.jpg"
                    width={200}
                    height={200}
                    className="card-img-top"
                    alt="JKSV"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
