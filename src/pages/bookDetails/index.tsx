import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import DataFile from './The Psychology of Money.pdf';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
import Controller from './controller';
import { useParams } from 'react-router-dom';
import { API_URL } from '../api';
function BookDetails() {
  const {id} = useParams()
  const {getData, data} = Controller()
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1000);
  const [height, setHeight] = useState<number | null>(null); // Menggunakan tipe number atau null
const ref = useRef<HTMLDivElement>(null); //
const [present, setPresent] = useState(20)

const zoomIn = () => {
    if(zoom !== 1800){
      setZoom(zoom + 100);
      setPresent(present + 10)
    }
  };

  const ZoomOut = () => {
    if(zoom !== 900){
      setZoom(zoom - 100);
      setPresent(present - 10)
    }
  };

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};



useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

useEffect(() => {
getData(id!)
},[id])

useEffect(() => {
  const number = ref.current
  const data = number!.offsetHeight
  setHeight(data)
},[scrollPosition])



// console.log(scrollPosition, "scroll")
  return (
    <div className='flex flex-col items-center relative' ref={ref}>
      <div className='flex fixed right-10 items-center gap-4 top-6 z-10'>
      <button onClick={() => zoomIn()} className='h-10 w-10 bg-orange-200 flex items-center justify-center rounded-full'>
        <img src={plus} className='h-9 p-2'/>
      </button>
      <p>{present}%</p>
      <button onClick={() => ZoomOut()} className='h-10 w-10 bg-orange-200 flex items-center justify-center rounded-full'>
      <img src={minus} className='h-9 p-2'/>
      </button>
      </div>
      <div className='w-[90%] h-1 bg-slate-300 fixed overflow-auto z-10 bottom-10'>
        <div className='h-full bg-cyan-700 ' style={{width: `${((scrollPosition/(height!+70))*100)}%`}} />
      </div>
      <div >
        {Array.apply(null, Array(numPages)).map((value, index) => (
          <div className='mb-4 bg-slate-500' key={index}>
            <Document file={`data:application/pdf;base64,${data}`} onLoadSuccess={onDocumentLoadSuccess}>
              <Page height={zoom} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
          </div>
        ))}
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;


