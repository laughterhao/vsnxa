import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import Service from "@/Component/service/service";
import Basic from "@/Component/basic/basic";
import Jb from "@/Component/jb/jb";
import Style from "@/styles/main.module.scss";

export default function Home() {
  const components = {
    service: Service,
    basic: Basic,
    jb: Jb,
  };
  const titles = [
    { id: 1, title: "服務項目", tag: "service" },
    { id: 2, title: "基礎知識", tag: "basic" },
    { id: 3, title: "插件教學", tag: "jb" },
  ];
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

        <div className={Style["warp"]}>
          {titles.map((item, i) => {
            const TagName = components[item.tag];
            return (
              <>
                <div key={item.id} className={Style["title-button"]}>
                  <div className={Style["warp"]}>
                    <h2>{item.title}</h2>
                    <Link className={Style["btn"]} href={`/${item.tag}`}>
                      more <IoIosArrowForward className="yt-1" />
                    </Link>
                  </div>
                </div>
                {TagName && <TagName />}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
