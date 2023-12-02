import React, {FC, ReactNode} from 'react';

interface ILayoutForm {
    children?: ReactNode;
    title?: string
}

const LayoutForm : React.FC<ILayoutForm> = ({children, title}) => {
    return(
        <div >
        <div className='py-10 h-[40rem] w-[27rem] bg-[#B9B4C7] relative rounded-2xl backdrop-blur-sm p-4 shadow-xl overflow-hidden'>
        <div className='h-64 w-48 bg-[#FFBB5C] blur-xl opacity-25 absolute -z-10 top-[-30px] left-[-20px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }} />
        <div className='h-56 w-52 bg-[#9D44C0] blur-xl opacity-10 absolute -z-10 bottom-[-70px] right-[-40px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }} />
            <div className='h-72 w-80 bg-[#0E21A0] blur-xl opacity-20 absolute -z-10 bottom-[-70px] right-[-40px]' style={{ borderRadius: "65% 35% 58% 42% / 29% 52% 48% 71% " }}>
            </div>
            <p className='text-center text-2xl'>{title}</p>
            {children}
        </div>
    </div>
    )
}


export default LayoutForm;