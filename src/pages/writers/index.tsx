import LayoutBackground from "../../components/layout/LayoutBackground"
import SearchBar from "../../components/searchBar"
import WriterBar from "../../components/writerBar"
import Controller from "./controller";
import { useEffect, useState } from "react";
const Writers = () => {
    const {getData, data,getSearch} = Controller();
    const [search, setSearch] = useState<string>()

    useEffect(() => {
        getData();
    },[])
    useEffect(() => {
        if(search){
            getSearch(search)
        }
    },[search])
    return (
        <LayoutBackground>
            <SearchBar setChange={setSearch}/>
            <div className="flex flex-row justify-center mt-9">
                <div className="grid grid-cols-3 gap-10 w-[90%] items-center">
                 {data && data.map((item: any) => (
                    <div key={item._id} className="flex items-center justify-center animated-header">
                    <WriterBar
                    image={item.image}
                    writer_name={item.writer_name}
                    id={item._id}
                    />
                    </div>
                 ))

                 }
                </div>
            </div>
        </LayoutBackground>
    )
}


export default Writers;