import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BookDetails, Books, HomeScreen, MenuBooks, Signin, Writers, BookWriter, Profile, LoveBook, History} from './pages'
import { pdfjs } from 'react-pdf';
import './App.css'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/setting" element={<Signin  />} />
        <Route path="/books" element={<MenuBooks />} />
        <Route path="/books/:id" element={<Books />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/writers/:id" element={<BookWriter />} />
        <Route path="/Book-details/:id" element={<BookDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/Love-book" element={<LoveBook />} />
      </Routes>
    </Router>
    // </PDFViewer>
  );
}

export default App;



  
