const ArrayFlat = ({nameList}) => {
    const newNameList= [...nameList.slice(0,3),[nameList[3],nameList[4],nameList.slice(5,nameList.length)]];

    var arr1= newNameList.flat();
    var arr2= newNameList.flat();
   
    return(
        <div>
            <h1>Array Flat</h1>

            <h3>Original Name List</h3>           
            
            <table border={1} cellPadding={5} >

                
                    <tr>
                        <td>
                            {JSON.stringify(newNameList)}
                            
                        </td>
                        
                    </tr>
                
            </table>

            <h2>Array 01</h2>

            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                         {JSON.stringify(newNameList)}
                        
                    </tr>
                ))}
            </table>

             <h2>Array 01</h2>

            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                         {JSON.stringify(arr1)}
                        
                    </tr>
                ))}
            </table>

            <h2>Array 02</h2>

            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                         {JSON.stringify(arr2)}
                        
                    </tr>
                ))}
            </table>

            

            
           

        </div>
    )


}

export default ArrayFlat;