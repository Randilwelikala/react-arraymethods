const ArraySplice = ({nameList}) => {
    var arr1=[...nameList];
    var arr2=[...nameList];

    arr1.splice(3,0,"Between Charlie and David");
    arr2.splice(3,2,"Replace David , Eve");
    // const arr2 = nameList.slice(3,nameList.length);


    return(
        <div>
            <h1>Add or Replace New Names to Existing Array(Splice)</h1>

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

export default ArraySplice;