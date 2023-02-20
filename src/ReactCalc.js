import React,{useState} from 'react';

function ReactCalc() {
    const [initialValue,setInitialValue]=useState("")
    const [currentValue,setCurrentValue]=useState("")
    const [operator, setOperator] = useState(null);
    
    const handleChange=(event)=>{
        setInitialValue(event.target.value)
    }

    const handleAdd=(event)=>{
        setOperator(event.target.textContent)
        setInitialValue([...initialValue,currentValue])
        setCurrentValue(initialValue)
    }
    const handleEqual=() => {
        switch(operator){
            case "+":
                 console.log(parseInt(initialValue) + parseInt(currentValue),'from case')
                 break
              case "-":
                 console.log(initialValue - currentValue)
                 break
              case '*':
                 console.log( initialValue * currentValue)
                 break
              case '/':
                console.log( currentValue / initialValue )
                break
              default:
                return null
        }
        setInitialValue('')
    }

    return (
        <div className='container' style={{marginTop:"50px",marginLeft:"500px"}}>
            <input type="number" className="form-control col-sm-2"id="value"name="value"value={initialValue}onChange={(event)=>handleChange(event)}></input><br></br>
            <button type="button" className="btn btn-primary">C</button>
            {/* <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}}>%</button> */}
            <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}} onClick={(event)=>handleAdd(event)}>/</button>
            <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}} onClick={(event)=>handleAdd(event)}>+</button>
            <div style={{marginTop:"30px"}}>
            <button type="button" className="btn btn-primary" style={{marginLeft:'5px'}} onClick={(event)=>handleAdd(event)}>-</button>
            <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}} onClick={(event)=>handleAdd(event)}>*</button>
            <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}} onClick={handleEqual}>=</button>
            {/* <button type="button" className="btn btn-primary" style={{marginLeft:'12px'}}>x</button> */}
            </div>
        </div>
    );
}
export default ReactCalc;