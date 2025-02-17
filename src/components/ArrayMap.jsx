const ArrayMap = ({nameList}) =>{
    return(
        <div>
            <h1>Full Name List(Map)</h1>
            <ul>
                {nameList.map((name,index)=>{
                        return(
                            <li key={index}>{name}</li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default ArrayMap;