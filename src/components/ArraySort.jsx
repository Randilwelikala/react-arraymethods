const ArraySort = ({nameList}) => {

    const x = "Bob".localeCompare("Alice");
    // const SortedNames = [...nameList].sort((a,b)=>(b.localeCompare(a)))
    const SortedNames = [...nameList].sort((a,b)=>(a.length - b.length));
    return(
        <div>
            <h1>Array Sort = {x} </h1>
            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td >{name}</td>
                    </tr>
                ))}

            </table>
            <h2>Sorted Name List</h2>

            <table border={1} cellPadding={5} >

                {SortedNames.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td >{name}</td>
                    </tr>
                ))}
            </table>
           

        </div>
    )


}

export default ArraySort;