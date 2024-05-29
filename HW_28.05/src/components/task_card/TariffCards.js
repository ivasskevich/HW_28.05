import React from "react";
import './style.css';

export function TariffCard(props) {
   return (
      <main className="box-main_element">
         <div className="main__box box-main">
            <div className="box-main__graphics1"></div>
            <div className="box-main__tariff">{props.tarif}</div>
            <div className="box-main__price-month-box price-month-box">
               <div className="price-month-box__price">{props.price}</div>
               <div className="price-month-box__month">per month</div>
            </div>
            <div className="box-main__pros-and-cons pros-and-cons-elements">
               <div className="pros-and-cons__element cross">{props.information}</div>
               <div className="pros-and-cons__element check">{props.information}</div>
               <div className="pros-and-cons__element check">{props.information}</div>
               <div className="pros-and-cons__element cross">{props.information}</div>
               <div className="pros-and-cons__element cross">{props.information}</div>
            </div>
            <div className="box-main__subscribe subscribe-box">
               <div className="subscribe-box__element">sign up</div>
            </div>
         </div>
      </main>
   );
}
