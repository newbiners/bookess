import LayoutBackground from "../../components/layout/LayoutBackground";
import notFound from '../../assets/Page_not_found.png';
import BtnAction from "../../components/btnAction";
import { useNavigate } from "react-router-dom";
const LoveBook = () => {
    const navigate = useNavigate()
    return(
        <LayoutBackground>
         <div className="flex flex-col justify-center items-center" style={{fontFamily: "Unbound-reguler"}}>
            <img
            src={notFound}
            className="h-96 w-96"
            />
            <p className="text-2xl mb-8">You have Login</p>
            <BtnAction color="red" typeBtn="solid" title="login" onClick={() => navigate('/')}/>
        </div>
        </LayoutBackground>
    )
}

export default LoveBook;