const ArrayFind = ({numberist,numberList}) =>{

    const max = numberList.find((num)=>(num>5));

   
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
            

        </div>
    );
};

export default ArrayFind;