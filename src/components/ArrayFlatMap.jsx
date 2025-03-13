const ArrayFlatMap = ({nameList}) => {
    // const newNameList= [...nameList.slice(0,3),[nameList[3],nameList[4],nameList.slice(5,nameList.length)]];

    var arr1= nameList.map((name)=>(name.split('')));
    var arr2= nameList.flatMap((name)=>(name.split('')));
   
    return(
        <div>
            <h1>Array Flat Map</h1>

            <h3>Original Nested Array</h3>           
            
            <table border={1} cellPadding={5} >                
                    <tr>
                        <td>
                            {JSON.stringify(nameList)};                           
                        </td>                        
                    </tr>                
            </table>

            <h2>Array 01</h2>

            <table border={1} cellPadding={5} >                
                    <tr>
                         {JSON.stringify(arr1)};                      
                    </tr>                
            </table>            

            
            <h2>Array 02</h2>

            <table border={1} cellPadding={5} >                
                    <tr>
                         {JSON.stringify(arr2)};                        
                    </tr>                
            </table>        

            
           

        </div>
    )


}

export default ArrayFlatMap;