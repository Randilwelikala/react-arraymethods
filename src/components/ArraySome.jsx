const ArraySome = ({nameList}) => {

    const letter = 'r';
    const status = nameList.some((name)=>(name.includes(letter)))
    return(
        <div>
            <h1>Some Method</h1>
            <table border={1} cellPadding={5} >

                {nameList.map((name,index)=>(
                    <tr>
                        <td key={index}>{index}</td>
                        <td key={name}>{name}</td>
                    </tr>
                ))}
            </table>
            <p>{status?"Yes":"No"}</p>

        </div>
    )


}

export default ArraySome;