import style from "../../Styles/PartnersStyle/Partner.module.css"
import  HDFC from "../../Images/HDFC.png"
import Icici from "../../Images/ICICI.png"
import Baroda from "../../Images/Bank of Baroda.png"
const Partners=()=>{
    return <div class={style.partnerContainer}>
        <h1>Our Partners</h1>
        <div>
            <div className={style.singlePartner}>
            <img src={HDFC} alt="HDFC Bank" />
            <p>HDFC Bank</p>
            </div>
        </div>
        <div>
            <div className={style.singlePartner}>
            <img src={Icici} alt="Icici Bank" />
            <p>ICICI</p>
            </div>
        </div>
        <div>
            <div className={style.singlePartner}>
            <img src={Baroda} alt="Bank of Baroda" />
            <p>Bank of Baroda</p>
            </div>
        </div>
    </div>
}
export {Partners};