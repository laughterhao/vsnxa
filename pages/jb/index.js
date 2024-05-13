import React from "react";
import Link from "next/link";
import Image from "next/image";
import JbData from "@/data/JB/addin.json";
import Style from '@/styles/jb.module.scss'

export default function JbHome() {
  JbData.map((v) => console.log(v.img));
  JbData.map((v) => console.log(v.title));
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
                JKSV
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                Daybreak
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                DBI
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                Linkalho
              </Link>
              <Link
                href={""}
                className="list-group-item list-group-item-action"
              >
                升級大氣層
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row justify-content-around">
              {JbData.map((v, i) => {
                return (
                  <div className="col-12 col-md-4 mt-3" key={i}>
                    <div className="card w-75 h-100 mx-auto" >
                    <div>
                      <Image
                        src={`/images/JB/addin/${v.img}`}
                        className="card-img-top p-2 border"
                        alt="DBI"
                        width={200}
                        height={150}
                      />
                    </div>
                      
                      <div className="card-body">
                        <h5 className="card-title">{v.title}</h5>
                        <p className={`card-text ${Style['multiline-ellipsis']}`}>{v.info}</p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="row">
              {JbData.map((v, i) => {
                return (
                  <div className="card mb-3" key={i}>
                    <div className="row g-0">
                      <div className="col-md-3">
                        <div style={{ width: "200", height: "auto" }}>
                          <Image
                            src={`/images/JB/addin/${v.img}`}
                            className="rounded-start py-2"
                            alt="..."
                            // fill
                            width={200}
                            height={150}
                          />
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title">{v.title}</h5>
                          <p className="card-text text-truncate">{v.info}</p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
