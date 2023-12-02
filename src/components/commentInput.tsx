import PaperPlane from '../assets/paper-plane.svg';
import { useState, Dispatch, ChangeEvent, MouseEventHandler } from 'react';

interface IComment {
  getData: Dispatch<string>;
  onClick: any;
}

const CommentInput: React.FC<IComment> = ({ getData, onClick }) => {
  const [data, setData] = useState<string>('');

  const handleChange = (event: ChangeEvent<any>) => {
    const newValue = event.target.value;
    setData(newValue);
    getData(newValue);
  };

  const submitEvent = async(event: React.FormEvent) => {
    event.preventDefault();
    onClick()
    setData('')
  }

  return (
    <form className="w-[70%] bg-slate-50 rounded-xl overflow-hidden mt-7" onSubmit={submitEvent}>
      <textarea className="w-[100%] p-5" value={data} onChange={handleChange} />
      <div className="border-t-2 flex flex-row justify-between p-5">
        <div className="flex flex-row gap-5">
          {/* Additional content can be added here */}
        </div>
        <button type='submit'>
          <img
            src={PaperPlane}
            alt="Paper Plane"
            className='h-8'
          />
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
