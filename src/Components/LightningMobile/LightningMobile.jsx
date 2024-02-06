import style from "../../Styles/LightningMobile/LightningMobile.module.css"
import Mobile from "../../Images/MobileDevice.png"
import Thunder from "../../Images/Thunder.png";
import Stepper from "../../Images/Stepper.png"
const LightningMobile=()=>{
    return<div className={style.outerContainer}>
        <div className="ImageMobile">
            <img src={Mobile} alt="Mobile" />
        </div>
        <div className={style.details}>
            <div className={style.heading}>
                <img src={Thunder} alt="Lightning" />
                <p>Lightning fast pace</p>
            </div>
            <div>
                <img src={Stepper} alt="stepper" />
            </div>
            <button className={style.button}>Apply Now</button>


        </div>
    </div>
}
export {LightningMobile};