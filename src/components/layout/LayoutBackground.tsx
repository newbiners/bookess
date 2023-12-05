import React, { ReactNode, useState, useEffect, Dispatch } from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutBackgroundProps {
  children?: ReactNode;
  setPosition?: Dispatch<number>;
  typePage?: 'login'
}

const LayoutBackground: React.FC<LayoutBackgroundProps> = ({ children, setPosition, typePage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [borderRadius, setBorderRadius] = useState("100%");

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const boundingBox = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - boundingBox.left;
    const y = event.clientY - boundingBox.top;

    setMousePosition({ x, y });

    const distanceX = Math.abs(x - boundingBox.width / 2);
    const distanceY = Math.abs(y - boundingBox.height / 2);

    const newX = (x > boundingBox.width / 2) ? x + distanceX : x - distanceX;
    const newY = (y > boundingBox.height / 2) ? y + distanceY : y - distanceY;

    const newBorderRadius = `${Math.abs(newX / boundingBox.width - 0.5) * 90}% ${Math.abs(newY / boundingBox.height - 0.5) * 80}% ${Math.abs(newY / boundingBox.height - 0.5) * 80}% ${Math.abs(newY / boundingBox.height - 0.5) * 80}% / ${100 - Math.abs(newX / boundingBox.width - 0.5) * 80}% ${100 - Math.abs(newY / boundingBox.height - 0.5) * 60}% ${Math.abs(newY / boundingBox.height - 0.5) * 80}% ${Math.abs(newX / boundingBox.width - 0.5) * 20}% `;

    setBorderRadius(newBorderRadius);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const posisi = document.getElementById('position');
    if (posisi) {
      const position = posisi.scrollTop;
      setScrollPosition(position)
      if (setPosition) {
        setPosition(position);
      }
    }
  };

  useEffect(() => {
    const posisi = document.getElementById('position');
    if (posisi) {
      posisi.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (posisi) {
        posisi.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div
      className="relative h-[100vh] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="h-[100vh] w-full absolute bg-[#F0F0F0] z-[-50]" />
      <div className="h-[40rem] w-[40rem] bg-[#B15EFF] opacity-20 rounded-full z-[-1] blur-2xl absolute top-[-20rem] left-[-20rem]" style={{ borderRadius: borderRadius }} />
      <div className="h-[20rem] w-[20rem] bg-[#FF9B50] opacity-20 rounded-full  blur-2xl absolute top-[20px] right-24 z-[-10]" style={{ borderRadius: borderRadius }} />
      <div className="z-50">
        <div className="w-full max-h-screen overflow-y-auto z-10" id="position">
          {
            typePage === 'login' ?
            <div>{children}</div>
            :
              <div className="flex flex-col justify-between h-[100vh]">
                <div>
                <Header />
                {children}
                </div>
                <Footer />
              </div> 
          }
        </div>
      </div>
      <div className="h-[20rem] w-[20rem] bg-violet-800 bottom-0 z-[-1] right-[-7rem] absolute blur-2xl opacity-25" style={{ borderRadius: borderRadius }} />
    </div>
  );
};

export default LayoutBackground;
