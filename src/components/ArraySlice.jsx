const ArraySlice = ({nameList}) => {
    const arr1=nameList.slice(2,4)
    const arr2 = nameList.slice(3,nameList.length);


    return(
        <div>
            <h1>Slice Name Array to two Arrays(Slice)</h1>

            <h3>Original Name List</h3>
            
            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td key={name}>{name}</td>
                    </tr>
                ))}
            </table>
            <h2>Array 01</h2>

            <table border={1} cellPadding={5} >

                {arr1.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td key={name}>{name}</td>
                    </tr>
                ))}
            </table>

            <h2>Array 02</h2>

            <table border={1} cellPadding={5} >

                {arr2.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td key={name}>{name}</td>
                    </tr>
                ))}
            </table>
           

        </div>
    )


}

export default ArraySlice;