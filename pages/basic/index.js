import React from "react";
import Link from "next/link";
import Basic from "@/Component/basic/basic";

export default function BasicHome() {
  const infos = [
    {
      id: 1,
      title: "金手指",
      content: "修改遊戲中的數值，省去練功爆肝的時間",
    },
    {
      id: 2,
      title: "特斯拉",
      content: "實用的側邊快捷選單",
    },
    {
      id: 3,
      title: "Ban機",
      content:
        "破解後因誤連網路導致被任天堂查到機器使用過盜版遊戲，而被封鎖網路連線功能",
    },
    {
      id: 4,
      title: "Hekate",
      content: "強大的多功能引導前端",
    },
    {
      id: 5,
      title: "Atmosphere",
      content: "直翻為大氣層，switch破解系統的其中一個分支",
    },
    {
      id: 6,
      title: "SX",
      content: "收費的switch破解系統，已於2020.11正式解散",
    },
    {
      id: 7,
      title: "雙系統",
      content: "一台機器裝了兩個系統，所以叫雙系統",
    },
    {
      id: 8,
      title: "魔改",
      content:
        "一款遊戲會有要求主機的系統版本比如14.0.0.，通過魔改後降低要求的版本為11.0.0",
    },
    {
      id: 9,
      title: "XCI",
      content: "由正版卡帶提取出來的遊戲檔案稱為XCI",
    },
    {
      id: 10,
      title: "NSP",
      content: "由數位板遊戲提取出來的遊戲檔案稱為NSP",
    },
    {
      id: 11,
      title: "根目錄",
      content: "記憶卡插到電腦後，一打開來的地方稱為根目錄",
    },
    {
      id: 12,
      title: "維護模式",
      content:
        "機器開機前先按住音量 + 跟 - 兩個按鈕，之後按開機鍵並保持按住音量鍵直到進入維護模式",
    },
    {
      id: 13,
      title: "注入器",
      content:
        "早期有CPU漏洞的switch，可通過注入器去啟動機器，進而執行各類程式",
    },
  ];
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="d-none d-md-block col-md-2 ">
            <div className="list-group list-group-flush w-100 ">
              <Link
                href={""}
                className="list-group-item list-group-item-action active"
              >
                機型的分類
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                破解系統
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                什麼是雙系統
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                破解後,名詞解釋
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-10">
            <div>
              <h2>機型的分類</h2>
              <div className="table-responsive w-100">
                <table className="table align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">Switch種類</th>
                      <th scope="col">是否需要安裝晶片</th>
                      <th scope="col">差異</th>
                      <th scope="col">晶片安裝時間</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">初代機</th>
                      <td>否</td>
                      <td>
                        2017/03 - 2018/07發售的機型，存在RCM漏洞，
                        <br />
                        可藉由電腦或是注入器啟動漏洞進而完成破解
                      </td>
                      <td>30min</td>
                    </tr>
                    <tr>
                      <th scope="row">補丁機</th>
                      <td>是</td>
                      <td>
                        2018/07 - 2019停產，該機型跟初代機一樣，
                        <br />
                        但RCM漏洞被修復，僅能透過硬改晶片來破解
                      </td>
                      <td>2H</td>
                    </tr>
                    <tr>
                      <th scope="row">Lite</th>
                      <td>是</td>
                      <td>2019/09開始發售，僅能透過硬改晶片來破解</td>
                      <td>2H</td>
                    </tr>
                    <tr>
                      <th scope="row">續航版</th>
                      <td>是</td>
                      <td>2019/09開始發售，僅能透過硬改晶片來破解</td>
                      <td>2H</td>
                    </tr>
                    <tr>
                      <th scope="row">OLED</th>
                      <td>是</td>
                      <td>2019/09開始發售，僅能透過硬改晶片來破解</td>
                      <td>
                        2Day<small>(燒機測試)</small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
            </div>

            <div className="mt-5">
              <h2>破解系統</h2>
              <p>
                Switch的破解概念其實跟iPhone拿去JB是非常相近的，都是透過破解後取得系統的控制權，從而可以加載各式不同的程式及插件
                Switch目前主流的破解系統有SX系統跟Atmosphere系統
              </p>
              <div className="table-responsive w-100">
                <table className="table align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">廠商</th>
                      <th scope="col">差異</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">SX</th>
                      <td>
                        由知名的Team
                        Xcuter團隊開發，使用簡單，可直讀XCI及硬碟為特點，但已於2020/11關閉並解散
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Atmosphere</th>
                      <td>
                        由國外大神 SciresM
                        開發，不支援XCI直讀但可安裝XCI，一直持續更新至今
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
            </div>

            <div className="mt-5">
              <h2>什麼是雙系統</h2>
              <Basic />
              <hr/>
            </div>

            <div className="mt-5">
              <h2>名詞解釋</h2>
              <div className="table-responsive w-100">
                <table className="table align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">名稱</th>
                      <th scope="col">說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infos.map((item) => {
                      return (
                        <tr key={item.id}>
                          <th scope="row">{item.title}</th>
                          <td>{item.content}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
