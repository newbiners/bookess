const Pagination = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="flex flex-row gap-2">
            {data.map((item) => {
                return (
                    <div className="h-7 w-7 bg-red-500 rounded-full flex justify-center items-center">
                        <p className="text-white">{item}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Pagination;