

interface IMessage {
    name: string,
    commnet: string,
    data?: string
}
const MessageComment = ({name, commnet, data}: IMessage) => {
    return(
        <div className="p-3 bg-slate-50 shadow-2xl rounded-xl w-[70%] mt-5 bg-blue-gray-50 ">
            <div className="border-b-2 border-blue-gray-200 flex justify-between">
            <p className="text-lg pb-2 ">{name}</p>
           <p>{data}</p>
            </div>
            <p className="text-2xl pt-2 pb-4">{commnet}</p>
        </div>
    )
}

export default MessageComment;