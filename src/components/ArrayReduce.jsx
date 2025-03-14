const ArrayReduce = ({numberList}) =>{

    const sum = numberList.reduce((total,num)=>(total + num),10);
    return(
        <div>
            <h1>Sum of numbers(Reduce)</h1>
            <ul>
                {numberList.map((num,index)=>(<li key={index}>{num}</li>))}
            </ul>
            <hr />
            <p>{sum}</p>

        </div>
    );
};

export default ArrayReduce;