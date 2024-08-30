import React,{useState} from 'react'
//import PropTypes from 'prop-types'
export default function TextForm(props) 
{

   const convertToUpperCase= ()=>
    {
    //console.log("User Clicked the UpperCase Button");
    let newText=text.toUpperCase();
    setText(newText);
    }
    const convertToLowerCase= ()=>
        {
        //console.log("User Clicked the UpperCase Button");
        let newText=text.toLowerCase();
        setText(newText);
        }
        const clearText= ()=>
            {
            //console.log("User Clicked the UpperCase Button");
            let newText='';
            setText(newText);
            }
        


   const handleOnChange=(event)=>{
    setText(event.target.value);
   }
   const handleCopyText=()=>{
       let text=document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
   }
   const handlePasteText = async () => {
    try {
      const newText = await navigator.clipboard.readText(); // Read text from clipboard
      setText(newText); // Set the text to state
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
    }

    const removeExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const[text, setText]=useState('');
    return (
    <div className={`container text-${props.myStyle} bg-${props.mode}`}>   
    <div className={`container text-${props.myStyle} bg-${props.mode}`}>
      <h1 className={`text-${props.myStyle}`}>{props.heading}</h1>  
      <div className="mb-3">
        <label htmlFor="mybox" className={`form-label text-${props.myStyle}`}>Enter Textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className={`btn btn-primary mx-1 my-1 text-${props.myStyle} `} onClick={convertToUpperCase}>Convert to UpperCase</button>
        <button className={`btn btn-primary mx-1 my-1 text-${props.myStyle} `} onClick={convertToLowerCase}>Convert to LowerCase</button>
        <button  className={`btn btn-primary mx-1 my-1 text-${props.myStyle} `} onClick={clearText}>Clear</button>
        <button  className={`btn btn-primary mx-1 my-1 text-${props.myStyle} `} onClick={handleCopyText}>Copy Text</button>
        <button  className={`btn btn-primary mx-1 my-1 text-${props.myStyle} `} onClick={handlePasteText}>Paste Text</button>
        <button  className={`btn btn-primary mx-1 my-1 text-${props.myStyle}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    
    
    </div>
    <div className={`container text-${props.myStyle} bg-${props.mode}`}>
    
    
        <h1>More Details about your Text</h1>
        <h2>Total Words are {text.split(" ").length}</h2>
        
        <h2>Total Characters are {text.split(" ").join("").length}</h2>
        <h2>{(0.008*text.split(" ").length)} Minutes to read</h2>
        <h1>Preview</h1>
        <h3>{text.toString()}</h3>
    </div>
    </div>
  )
}
