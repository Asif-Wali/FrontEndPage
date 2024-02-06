import styles from "../../Styles/RightBar.module.css";
import location from "../../Images/location.png"
import threeIcons from "../../Images/ThreeIcons.png"
const RightBar=()=>{
    return<div className={styles.RightBar} >
<div classname={styles.inputContainer}>
<input type="text"
className={styles.input} 
placeholder="&#xF002; Search Tata Neu"
/>
</div>
<div className={styles.location}>
<p>122018</p>
<img src={location} alt="Location Icon" />
</div>
<div>
<img src={threeIcons} alt="ThreeIcons" />

</div>
</div>
}
export {RightBar};