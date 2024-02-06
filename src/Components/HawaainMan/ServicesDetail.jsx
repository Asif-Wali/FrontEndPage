import style from "../../Styles/HawaainMan/ServiceDetail.module.css";
import star from"../../Images/Star.png"
import HawaiaanMan from "../../Images/HawaiaanMan.png"
import star1 from "../../Images/star 1.png"
const ServicesDetail=()=>{
    return<div className={style.outerbody}>
        <div className={style.heading}>
            <img src={star} alt="Star" />
            <h4>Personal Loan Highlights</h4>
        </div>
        <div className={style.imagesection}>
            <img src={HawaiaanMan} alt="Hawaian Man" />
        <div>
            <div className={style.point}>
                <div>
                <img src={star1} alt="star bullet point" />
                <h5>Interest Rate</h5>
                </div>
                <p>Usually <span>10.49% p.a</span> onwards:some PSUs may offer lower rates</p>
            </div>
            <div className={style.point}>
                <div>
                <img src={star1} alt="star bullet point" />
                <h5>Loan Amount</h5>
                </div>
                <p>can go upto <span>40 Lakh</span> some lenders may offer higher amount</p>
            </div>
            <div className={style.point}>
                <div>
                <img src={star1} alt="star bullet point" />
                <h5>Processing Fees</h5>
                </div>
                <p><span>0.5% to 4%</span>of loan amount (may vary across lenders)</p>
            </div>
            
            <div className={style.point}>
                <div>
                <img src={star1} alt="star bullet point" />
                <h5>Tenure</h5>
                </div>
                <p>Upto <span>5 years</span>(some lenders offer repayment period till 8 year)</p>
            </div>
        </div>   
        </div>
    </div>
}
export {ServicesDetail};