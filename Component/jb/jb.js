import React from 'react'
import Image from "next/image";
import Style from '@/styles/jb.module.scss'
export default function Jb() {
  return (
    <>
        <div className="container text-center mt-3">
            <div className="row">
              <div className="col-12 col-md-3 mb-2">
                <div class="card w-100">
                  <Image
                    src={"/images/index/images.jpg"}
                    class="card-img-top"
                    alt="..."
                    width={200}
                    height={200}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <div class="card w-100">
                  <Image
                    src={"/images/index/images.jpg"}
                    class="card-img-top"
                    alt="..."
                    width={200}
                    height={200}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <div class="card w-100">
                  <Image
                    src={"/images/index/images.jpg"}
                    class="card-img-top"
                    alt="..."
                    width={200}
                    height={200}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-2">
                <div class="card w-100">
                  <Image
                    src={"/images/index/images.jpg"}
                    class="card-img-top"
                    alt="..."
                    width={200}
                    height={200}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
