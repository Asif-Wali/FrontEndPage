import style from "../../Styles/HeroStyles/hero.module.css";
import Zero from "../../Images/zerofee.png";
import thunder from "../../Images/thunderIcon.png";
import Interest from "../../Images/Interest.png"
import Documents from "../../Images/Documents.png"
import Father from "../../Images/father.jpg"

const Hero=()=>{
    return<div className={style.outercontainer}>
    <div className={style.leftContainer}>
            <div className={style.heading}>
                <h1>Turn Dreams into Reality
    with <span>Personal Loans</span></h1>
            </div>
            <div className={style.firstChild}>
                    <div className={style.offer1}>
                            <div className={style.offerImage}>
                                <img src={Zero} alt="Zero fees" />
                            </div>
                            <div className={style.offerDetails}>
                                <h4>Avail Zero</h4>
                                <p>Processing Fee</p>
                            </div>
                    </div>    
                    <div className={style.offer2}>
                            <div className={style.offerImage}>
                                <img src={thunder} alt="Quick" />
                            </div>
                            <div className={style.offerDetails}>
                                <h4>Quick</h4>
                                <p>Personal Loan</p>
                            </div>
                    </div>
            </div>
        
        <div className={style.firstChild}>
        <div className={style.offer1}>
                            <div className={style.offerImage}>
                                <img src={Interest} alt="Zero fees" />
                            </div>
                            <div className={style.offerDetails}>
                                <h4>Lowest</h4>
                                <p>Interest Rates</p>
                            </div>
                    </div>    
                    <div className={style.offer2}>
                            <div className={style.offerImage}>
                                <img src={Documents} alt="Zero fees" />
                            </div>
                            <div className={style.offerDetails}>
                                <h4>Minimal</h4>
                                <p>Documentation</p>
                            </div>
                    </div>
            
        </div>
      
        <button className={style.button}>Apply Now</button>
    </div>
    <div className={style.rightContainer}>
        <img src={Father} alt="Father with the family" />
    </div>
</div>
}
export{Hero}