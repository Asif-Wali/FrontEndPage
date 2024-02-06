import Logo  from "../../Images/Logo.png"
import styles from "../../Styles/LeftBar.module.css";
const LeftBar=()=>{
return<div className={styles.LeftNav}>
        <img src={Logo} alt="Logo" />
        <div className={styles.NavMenu}>
            <p>Offers</p>
            <p>Stories</p>
            <p>Tata Pay</p>
            <p>NeuPass</p>
        </div>

</div>
}
export {LeftBar};