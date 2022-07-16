import React from "react";
import "../style.css";
import Image from "../assets/images/scoop.png";
const styles = {
  scoop: {
    height: "14rem",
    width: "15rem",
  },
  card: {
    maxWidth: "28rem",
  },
};
export default function Order() {
  return (
    <div className="row p-5 justify-content-around">
      {/* card 1 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            {/* MODAL BUTTON  */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Launch demo modal
            </button>

            {/* MODAL */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="d-flex flex-column my-5 col-xl-3 col-lg-4 col-md-5 col-sm-6">
        <div
          style={styles.card}
          className="card align-items-center text-center"
        >
          <img style={styles.scoop} src={Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Card link</a>
            <a className="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
