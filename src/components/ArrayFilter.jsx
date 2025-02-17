const ArrayFilter = ({nameList}) =>{

    const filteredNames = nameList.filter((name)=>(name.startsWith('A')));
    return(
        <div>
            <h1>Filtered Name List(Map)</h1>
            <ul>
                {filteredNames.map((name,index)=>{
                        return(
                            <li key={index}>{name}</li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default ArrayFilter;