import React from "react";


function Home(){
    return(
        <div className="home-tab">
            <div className="text-box box1">
                <div className="photo">
                    <img src="/amitabh_home.png" alt="amitabh bhachan"></img>
                </div>
                <div>
                    <p>India's No. 1 Most Trusted Financial Services Brand by Power of Trust, TRA's Brand Trust Report for 6 years since 2016. With a resolute focus on providing customers with the best services, Muthoot Finance has managed to earn the trust of millions.</p>
                </div>
            </div>
           <div className="text-box">
             <h2>Why choose us?</h2>
             <ul>
                 <li>India's No.1 Most trusted financial services bank</li>
                 <li>Trusted by 70 Cr+ Satisfied customers</li>
                 <li>Largest gold loan portfolio in india</li>
                 <li>Large network</li>
             </ul>
           </div>
        </div>
    )
};

export default Home;