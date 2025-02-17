const ArrayForEach = ({nameList}) =>{

    
    return(
        <div>
            <h1>Filtered Name List(Map)</h1>
            <ul>
                {nameList.forEach((name,index)=>{
                        return(
                            <li key={index}>{name}</li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default ArrayForEach;