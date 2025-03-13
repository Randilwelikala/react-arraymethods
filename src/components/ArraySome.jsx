const ArraySome = ({nameList}) => {
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

        </div>
    )


}

export default ArraySome;