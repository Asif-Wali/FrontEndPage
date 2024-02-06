
import { LeftBar } from "./LeftBar";
import { RightBar } from "./RightBar";
import styles from "../../Styles/NavBar.module.css";
const NavBar=()=>{
    return<nav className={styles.navbar}>
        
        <LeftBar/>
        <RightBar/>
    </nav>
}
export{NavBar};