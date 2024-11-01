import React, {useState} from 'react'

export default function TextForm(props ) {
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleSenClick = () => {
    let newText = text
      .toLowerCase()
      .split('. ')
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
    setText(newText);
    props.showAlert('Text has been converted to Sentence Case', 'success');
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Text has been converted to Upper Case', 'success');
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Text has been converted to Lower Case', 'success');
  }

  const handleCapClick = () => {
    let newText = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert('Text has been converted to Capitalise Case', 'success');
  };

  const handleAltClick = () => {
    let newText = text
      .split('')
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
    setText(newText);
    props.showAlert('Text has been converted to Alernating Case', 'success');
  };

  const handleInvClick = () => {
    let newText = text
      .split('')
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      .join('');
    setText(newText);
    props.showAlert('Text has been converted to Inverse Case', 'success');
  };

  const handleDownloadClick = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'textfile.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert('Text has been Downloaded', 'success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard', 'success');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert('Text Cleared!', 'success');
  }
  const [text, setText] = useState(''); 
  // const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <> 
    <div className="container">
      <h1 className='mb-3'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control mb-3 " value={text} onChange={handleOnChange} 
        style={{
          backgroundColor: 
            props.blue === 'enable' ? '#E9F0FE' : 
            props.mode === 'dark' ? 'grey' : 'white',
          color: 
            props.mode === 'dark' ? 'white' : 
            'black'
        }} 
        id="myBox " rows="8"></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSenClick}>Sentence case</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>UPPERCASE</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Capitalise Case</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleAltClick}>aLtErNaTiNg cAsE</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleInvClick}>InVeRsE CaSe</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleDownloadClick}>Download Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-4">
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element) => { return element.length !== 0}).length} words and {text.length} characters </p>
      <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0}).length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
