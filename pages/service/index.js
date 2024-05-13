import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "pexels";
import SData from '@/data/service.json'
import Switchprice from '@/data/price/switch.json'
import Liteprice from '@/data/price/lite.json'
import OLEDprice from '@/data/price/oled.json'

const client = createClient(
  "LfusseNxkgfmF99mJCGBEzA4sLjP4gZpV6kJVOkY7pBVIJVBkmQJG07q"
);

// All requests made with the client will be authenticate
export default function ServiceHome() {
  const titles = [
    { name: "一般/續行", img: "2" },
    { name: "Lite", img: "2" },
    { name: "OLED", img: "2" },
  ];
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const query = "nitendo";
      const response = await client.photos.search({ query, per_page: 3 });
      setPhotos(response.photos);
    };

    fetchPhotos();
  }, []);
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="d-none d-md-block col-md-3">
            <div className="list-group list-group-flush w-100 ">
              <Link
                href={""}
                className="list-group-item list-group-item-action active"
              >
                晶片安裝
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                主機/搖桿維修
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                螢幕更換
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                電池更換
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                維修價格
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-9 ">
            <div className="mt-3">
              <h2>晶片安裝</h2>
              <div className="pic text-center d-flex w-100 p-2">
                {photos.map((photo,i) => {
                  return (
                    <div key={photo.id}>
                      <Image
                        className="p-2"
                        src={photo.src.large}
                        width={300}
                        height={200}
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                      <h4>{titles[i].name}</h4>
                    </div>
                  );
                })}  
              </div>
              <div className="table-responsive w-100">
                <table className="table align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">機型</th>
                      <th scope="col">晶片</th>
                      <th scope="col">記憶卡支援</th>
                    </tr>
                  </thead>
                  <tbody>
                    {titles.map((title, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{title.name}</th>
                          <td>樹梅派</td>
                          <td> 128G/256G/512G</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-3">
              <h2>主機/搖桿維修</h2>
              <div className="table-responsive w-100">
                <table className="table align-middle ">
                  <thead>
                    <tr>
                      <th scope="col">類別</th>
                      <th scope="col">維修項目</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SData.map((v, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{v.title}</th>
                          <td>{v.content}</td>
                  
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-3">
              <h2>維修價目表</h2>
              <h4 className="border-bottom text-center">一般/續航版</h4>
              {/* <hr/> */}
              <div className="table-responsive w-100">
                <table className="table align-middle table-hover">
                  <thead>
                    <tr>
                      <th scope="col">類別</th>
                      <th scope="col">維修項目</th>
                      <th scope="col">價目</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Switchprice.map((v, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{v.title}</th>
                          <td>{v.content}</td>
                          <td>{v.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <h4 className="border-bottom mt-3 text-center">Lite</h4>
              {/* <hr/> */}
              <div className="table-responsive w-100 ">
                <table className="table align-middle table-hover">
                  <thead>
                    <tr>
                      <th scope="col">類別</th>
                      <th scope="col">維修項目</th>
                      <th scope="col">價目</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Liteprice.map((v, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{v.title}</th>
                          <td>{v.content}</td>
                          <td>{v.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <h4 className="border-bottom mt-3 text-center">OLED</h4>
              {/* <hr/> */}
              <div className="table-responsive w-100">
                <table className="table align-middle table-hover">
                  <thead>
                    <tr>
                      <th scope="col">類別</th>
                      <th scope="col">維修項目</th>
                      <th scope="col">價目</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OLEDprice.map((v, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{v.title}</th>
                          <td>{v.content}</td>
                          <td>{v.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
