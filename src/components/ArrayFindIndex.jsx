const ArrayFindIndex = ({nameList}) =>{

    const nameIndex = nameList.findIndex((name)=> (name.includes('r')));

   
    return(
        <div>
            
            <h1>First name - includes letter "r"(Find)</h1>
            <table border={1} cellPadding={5}>
                
                {nameList.map((name,index)=>(
                    <tr bgcolor={index == nameIndex ? "blue": "black"}>
                        <td  key={index}>{index}</td>
                        <td  key={index}>{name}</td>
                    </tr>
                    ))}
                
            </table>
            <p>{nameIndex}</p>
            

        </div>
    );
};

export default ArrayFindIndex;