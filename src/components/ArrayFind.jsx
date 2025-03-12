const ArrayFind = ({nameList,numberList}) =>{

    const max = numberList.find((num)=>(num>5));
    const nameWithR = nameList.find((name)=> (name.includes('r')));

   
    return(
        <div>
            <h1>First Number - Greater than 5 (Find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                {numberList.map((num,index)=>(
                    <td align="center" key={index}>{num}</td>
                    ))}
                </tr>
            </table>
            <hr/>
            <p>{max}</p>
            <hr/>
            <h1>First name - includes letter "r"(Find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                {nameList.map((name,index)=>(
                    <td align="center" key={index}>{name}</td>
                    ))}
                </tr>
            </table>
            <p>{nameWithR}</p>
            

        </div>
    );
};

export default ArrayFind;