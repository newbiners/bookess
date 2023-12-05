import LayoutBackground from '../../components/layout/LayoutBackground';
import myImage from '../../assets/image-read.png';
import { useNavigate } from 'react-router-dom';
import InputItem from '../../components/inputItem';
import { useState } from 'react';
import BtnAction from '../../components/btnAction';
import Controller from './controller';
// import env from 'react-dotenv';
const HomeScreen = () => {
    const navigate = useNavigate();
const {setEmail, setPassword, btnLogin, data} = Controller();
   const [alert, setAlert] = useState<string>('')
const btnSubmit = async(event: React.FormEvent) => {
    await btnLogin(event)
    const token = localStorage.getItem('token')
    if(token) {
      return navigate('/books')
    }
    setAlert('email or password wrong')
}
    return (
        <LayoutBackground typePage='login'>
            <div className='flex flex-row w-full justify-center items-center h-[100vh]'>
                <div className='transition-opacity duration-500 ease-in-out'>
                    <div className='animated-object  duration-500 ease-in-out  w-[27rem] bg-[#B9B4C7] relative rounded-2xl backdrop-blur-sm p-4 shadow-xl overflow-hidden'>
                        <div className='h-64 w-48 bg-[#FFBB5C] blur-xl opacity-25 absolute -z-10 top-[-30px] left-[-20px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }} />
                        <p className='text-center text-5xl' style={{ fontFamily: 'Unbound-medium' }}>Login</p>
                        <p className='text-center mt-2'>{alert}</p>
                            <form onSubmit={btnSubmit} className='z-10 flex flex-col gap-10'>
                                <InputItem title={'email'} setChange={setEmail} />
                                <InputItem title={'password'} setChange={setPassword} />
                                <div className='mt-10 flex flex-row justify-between'>
                                    <BtnAction title='Login' typeBtn='solid' color='orange'/>
                                    <BtnAction title='Skip' typeBtn='no-solid' color='orange' onClick={() => navigate('/books')}/>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <button
                                        onClick={() => navigate('/setting')}
                                        style={{ fontFamily: "Unbound-reguler" }}>sign in</button>
                                </div>
                             
                            </form>
                        <div className='h-56 w-52 bg-[#9D44C0] blur-xl opacity-10 absolute -z-10 bottom-[-70px] right-[-40px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }} />
                        <div className='h-72 w-80 bg-[#0E21A0] blur-xl opacity-20 absolute -z-10 bottom-[-70px] right-[-40px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }}>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutBackground>
    )
}
export default HomeScreen