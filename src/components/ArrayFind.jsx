const ArrayFind = ({nameList}) =>{

    const newNameList = [];
    nameList.forEach((name,index)=>{
        newNameList.push(<li key={index}>{name}</li>);
    });

    
    return(
        <div>
            <h1>Full name list(ForEach)</h1>
            <ul>
                {newNameList}
            </ul>

        </div>
    );
};

export default ArrayFind;