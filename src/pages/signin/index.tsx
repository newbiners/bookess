import LayoutBackground from '../../components/layout/LayoutBackground';
import { useNavigate } from 'react-router-dom';
import InputItem from '../../components/inputItem';
import LayoutForm from '../../components/layout/layoutForm';
import { useState } from 'react';
import Controller from './controller';
const Signin = () => {
    const [alert, setAlert] = useState<string>('');
    const { setImage, setUser, setEmail, setPassword, image, btnSignin, data } = Controller()
    const navigate = useNavigate();
    console.log(image && image.target.files[0], "cek image")
    const btnHendle = async (event: React.FormEvent) => {
        event.preventDefault();
         btnSignin()
        console.log(data, "sigin")
        if (!data) {
            return setAlert('email sudah ada')
        } else {
            navigate('/')
        }
    }
    return (
        <LayoutBackground typePage='login'>
            <div className='flex flex-row w-full justify-center relative animated-object items-center h-[100vh]' style={{ fontFamily: 'Unbound-medium' }}>
                <LayoutForm title='sign in'>
                    <form onSubmit={btnHendle}>
                        <div className='flex justify-center'>
                            <div className='h-20 w-20  rounded-xl flex justify-center z-30 overflow-hidden'>
                                {image ?
                                    <div className='relative  rounded-xl overflow-hidden'>
                                        <img src={URL.createObjectURL(image.target.files[0])} style={{ width: '100%', height: '100%' }} />
                                        <input type='file' style={{ width: '100%', height: '100%', backgroundColor: "yellow", opacity: 0 }} className='absolute top-0' onChange={setImage} />
                                    </div>
                                    :
                                    <div className='h-full w-full bg-blue-gray-50'>
                                        <input type='file' style={{ width: '100%', height: '100%', opacity: 0 }} onChange={setImage} />
                                    </div>
                                }
                            </div>
                        </div>
                        <div>
                            <InputItem title='user' setChange={setUser} />
                            <InputItem title='email' setChange={setEmail} />
                            <InputItem title='password' setChange={setPassword} />
                        </div>
                        <div className='flex justify-between mt-10'>
                            <button className='bg-orange-600 h-12 w-44 rounded-xl'>Signin</button>
                            <button className='h-12 w-44' onClick={() => navigate('/books')}>skip</button>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button onClick={() => navigate('/')}>log in</button>
                        </div>
                        <p className='text-center'>{alert}</p>
                    </form>
                </LayoutForm>
            </div>
        </LayoutBackground>
    )
}
export default Signin