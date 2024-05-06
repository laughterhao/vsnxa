import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import Service from "@/Component/service/service";
import Basic from "@/Component/basic/basic";
import Jb from "@/Component/jb/jb";
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
          <Service/>
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
          <Basic/>
        </div>
        <div className={Style["Jb-warp"]}>
          <div className={Style["title-button"]}>
            <div className={Style["warp"]}>
              <h2>插件教學</h2>
              <Link className={Style["btn"]} href={""}>
                more <IoIosArrowForward className="yt-1" />
              </Link>
            </div>
          </div>
          <Jb/>
        </div>
      </div>
    </>
  );
}
