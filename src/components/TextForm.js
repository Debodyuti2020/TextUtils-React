import React, {useState} from 'react'
// useState is a hook

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("Handle on change");
    }

    const handleUpClick = () => {
        // console.log("Uppercase button was clicked " + text);
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearChange = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }
    
    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');
    // text is a state variable that is initialized by useState
    // text = "new text" -> wrong way
    // setText("new text");
    // Hooks help to use the features of className components without creating a className based component
    
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const handleFindChange = (event) => {
        setFindText(event.target.value);
    }
    const handleReplaceChange = (event) => {
        setReplaceText(event.target.value);
    }
    const replaceClick = () => {
        let newText = text.replace(findText, replaceText);
        setText(newText);
        props.showAlert(`First occurance of '${findText}' Replaced With '${replaceText}!`, "success");
    }
    const replaceAllClick = () => {
        let newText = text.replaceAll(findText, replaceText);
        setText(newText);
        props.showAlert(`All '${findText}' Replaced With '${replaceText}!`, "success");
    }
    const handleCopy = () => {
        // let text = document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // Removes the selecton of the copied text
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        // Regex; i.e. Regular Expression is used -> 
        // '/[ ]+/' : It means if there is one space or more than one spaces
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }
    const handleCapitalizeEachWord = () => {
        let newText = text.charAt(0).toUpperCase();
        for (let i = 1; i < text.length; i++) {
            if (text.charAt(i) !== ' ' && text.charAt(i - 1) === ' ') {
                newText += text.charAt(i).toUpperCase();
            }
            else
                newText += text.charAt(i);
        }
        setText(newText);
        props.showAlert("Capitalized Each Word!", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    return (
    <>
        <div className='containter'>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} placeholder='Enter text here' style={{backgroundColor: props.mode === 'dark'?'#35364d':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearChange}>Clear Text</button>
            {/* Button trigger modal */}
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Find &amp; Replace</button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{backgroundColor: props.mode === 'dark'?'#292A40':'white'}}>
                        <div className="modal-body">
                            <input className="form-control my-2" type="text" placeholder="Find text" aria-label="default input example" value={findText} onChange={handleFindChange} style={{backgroundColor: props.mode === 'dark'?'#353652':'white', color: props.mode === 'dark'?'white':'black'}} />
                            <input className="form-control my-2" type="text" placeholder="Replace with" aria-label="default input example" value={replaceText} onChange={handleReplaceChange} style={{backgroundColor: props.mode === 'dark'?'#353652':'white', color: props.mode === 'dark'?'white':'black'}} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={replaceClick} >Replace</button>
                            <button type="button" className="btn btn-primary" onClick={replaceAllClick} >Replace all</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeEachWord}>Capitalize Each Word</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
        </div>
        <div className='container my-3'>
            <h3>Your text summary</h3>
            <p className='fs-6'>{text.split(/\s+/).filter((element) => {return element.length !== 0;}).length} words and {text.length} characters</p>
            <p className='fs-6'>{0.008 * (text.split(/\s+/).filter((element) => {return element.length !== 0;}).length)} Minutes read</p>
            <h3>Preview</h3>
            <p className='fs-6'>{text.length>0?text:'Nothing to preview!'}</p>
        </div>
    </>
  )
}

// background-color: #353652;
//     color: white;