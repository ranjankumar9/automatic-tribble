import React, { useState } from "react";
import "./Overview.scss";
import help from "../../assets/Help.svg";
import right from "../../assets/Chevron Right.svg";
import cright from "../../assets/color Right.svg";
import download from "../../assets/download.svg";
import sort from "../../assets/Sort.svg";
import search from "../../assets/Search.svg";
import traingle from "../../assets/Triangle-Icon.svg";
import success from "../../assets/Ellipse 23.svg";
import process from "../../assets/gray circle.svg";
import down from "../../assets/arrow.svg";
import help2 from "../../assets/white Help.svg";

const Overview = () => {
  const [activeButton, setActiveButton] = useState("payouts");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="overview">
      <div className="overview-header">
        <p>Overview</p>
        <div className="select">
          <p>This Month</p>
          <img src={down} alt="" />
        </div>
      </div>
      <div className="overview-card">
        <div className="parent-card">
          <div className="card">
            <p>Next Payout</p>
            <img src={help2} alt="" />
          </div>
          <div className="card2">
            <p className="first-child">₹ 2,312.50</p>
            <div className="main-child">
              <p>23 Orders</p>
              <img src={right} alt="right" />
            </div>
          </div>
          <div className="card3">
            <p className="first">Next Payout Date</p>
            <p className="second">Today,4:00PM </p>
          </div>
        </div>
        <div className="parent-card2">
          <div className="cards">
            <p>Amount Pending</p>
            <img src={help} alt="help" />
          </div>
          <div className="cards2">
            <p className="first-child">₹ 92,312.50</p>
            <div className="main-child">
              <p>23 Orders</p>
              <img src={cright} alt="right" />
            </div>
          </div>
        </div>
        <div className="parent-card2">
          <div className="cards">
            <p>Amount Processed</p>
            <img src={help} alt="help" />
          </div>
          <div className="cards2">
            <p className="first-child">₹ 23,92,312.50</p>
            <div className="main-child">
              <p>23 Orders</p>
              <img src={cright} alt="right" />
            </div>
          </div>
        </div>
      </div>

      <div className="all-three-divs">
        <div className="transaction-button">
          <div className="transaction">
            <p className="month">Transactions | This Month</p>
          </div>
          <div className="btn">
            <button
              className={activeButton === "payouts" ? "active" : ""}
              onClick={() => handleButtonClick("payouts")}
            >
              <p>Payouts</p>
              <p>(22)</p>
            </button>
            <button
              className={activeButton === "refunds" ? "active" : ""}
              onClick={() => handleButtonClick("refunds")}
            >
              <p>Refunds</p>
              <p>(2)</p>
            </button>
          </div>
        </div>

        <div className="search-table">
        <div className="searchbox-sort">
          <div className="inputs">
            <input type="text" disabled />
            <img src={search} alt="" />
          </div>
          <div className="filter">
            <button className="sorts">
              <p>Sort</p>
              <img src={sort} alt="" />
            </button>
            <button className="download">
              <img src={download} alt="" />
            </button>
          </div>
        </div>
        {activeButton === "payouts" ? (
          <div className="table">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>
                    <img src={traingle} alt="" />
                  </th>
                  <th></th>
                  <th>Transaction ID</th>
                  <th>Order Amount</th>
                  <th>Transaction Fees</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={process} alt="" />
                    Processing
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="first">
                    <img src={success} alt="" />
                    Successful
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Status</th>
                  <th>Trasaction Id</th>
                  <th>Refund Date</th>
                  <th>Order Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="second">
                    #281209
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
    
                  <td className="second">
                  #281208
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
    
                  <td className="second">
                  #281206
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
                
                  <td className="second">
                  #281205
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
              
                  <td className="second">
                  #281204
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
        
                  <td className="second">
                  #281203
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
                <tr>
         
                  <td className="second">
                  #281209
                  </td>
                  <td>Row Col 3</td>
                  <td>Row Col 4</td>
                  <td>Row Col 5</td>
                  <td>Row Col 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
