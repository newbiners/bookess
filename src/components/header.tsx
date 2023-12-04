import { useNavigate } from "react-router-dom";
import logo from '../assets/BookesS.svg';
// import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return(
        <label className="p-5 animated-header" style={{fontFamily: "Unbound-reguler"}}>
            <div className="flex flex-row items-center justify-between mx-7">
                <button onClick={() => navigate('/books')}>
                    <img
                    src={logo}
                    height={29}
                    />
                </button>
            <tr className="flex flex-row gap-10 justify-end ">
                <td className="text-xl">
                   <button onClick={()=> navigate('/writers')}>
                    Witers
                    </button> 
                </td>
                <td className="text-xl">
                    <button onClick={()=> navigate('/history')}>
                    History
                    </button>
                </td>
                <td className="text-xl">
                    <button onClick={()=> navigate('/profile')}>
                    Profile
                    </button>
                </td>
                <td className="text-xl ml-48">
                    <button onClick={logout}>
                        Logout
                    </button>
                </td>
            </tr>
            </div>
        </label>
    )
}

export default Header;