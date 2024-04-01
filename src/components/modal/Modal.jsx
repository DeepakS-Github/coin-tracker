import React from "react";
import "./modal.css";
import Rate from "../rate/Rate";
import ProgressBar from "../progress-bar/ProgressBar";

const Modal = ({ modalData, setIsModalOpen }) => {
  return (
    <section className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <span className="modal-title">
            <img className="coin-icon" src={modalData.image} />
            {modalData.name}
          </span>
          <button
            className="cancel-btn "
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <img src="/images/cancel.svg" />
          </button>
        </div>

        <div className="modal-body">
          <div className="spanned-row">
            <div className="spanned-row-content">
              <span className="content-head">PRICE</span>
              <span className="content-text">
                {" "}
                $
                {modalData.current_price.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="spanned-row-content">
              <span className="content-head">24H</span>
              <Rate
                isIncreasing={
                  modalData.price_change_percentage_24h_in_currency > 0
                }
                value={modalData.price_change_percentage_24h_in_currency}
                justifyContent={"start"}
              />
            </div>
            <div className="spanned-row-content">
              <span className="content-head">7D</span>
              <Rate
                isIncreasing={
                  modalData.price_change_percentage_7d_in_currency > 0
                }
                value={modalData.price_change_percentage_7d_in_currency}
                justifyContent={"start"}
              />
            </div>
          </div>
          <div className="full-row">
            <span className="content-head">MARKET CAP</span>
            <span className="content-text">
              {" "}
              $
              {modalData.market_cap.toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="full-row">
            <span className="content-head">VOLUME (24H)</span>
            <span className="content-text">
              $
              {modalData.total_volume.toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
              &nbsp;
              <span style={{ color: "#768396" }}>
                (
                {modalData.high_24h.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}{" "}
                {modalData.symbol.toUpperCase()})
              </span>
            </span>
          </div>
          <div className="full-row">
            <span className="content-head">CIRCULATING SUPPLY</span>
            <span className="content-text" style={{ marginBottom: "5px" }}>
              {modalData.circulating_supply.toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}{" "}
              {modalData.symbol.toUpperCase()}
            </span>
            <ProgressBar
              currentValue={modalData.circulating_supply}
              maxValue={modalData.total_supply}
              alignSelf="flex-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
