import { Dispatch, useState, ChangeEvent } from 'react';
import Search from '../assets/search.svg'
interface IInput {
    setChange: Dispatch<string>;
  }
const SearchBar: React.FC<IInput> = ({ setChange, }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        setChange(newValue);
      };
      const [value, setValue] = useState<string>('');
  return (
    <div className="flex justify-center mt-7">
      <div className="h-14 w-2/4 bg-white rounded-xl overflow-hidden flex flex-row justify-between items-center gap-2">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search..."
          type="text"
          className="h-full w-full p-3 block border rounded outline-none border-none text-xl text-blue-gray-900"
          style={{ fontFamily: 'Unbound-reguler' }}
        />
        <img src={Search} className="h-10 w-10 p-2" alt="Search Icon" />
      </div>
    </div>
  );
};

export default SearchBar;
