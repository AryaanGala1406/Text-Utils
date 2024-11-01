import React, {useState, useEffect} from 'react'

export default function About(props) {
  // const [btn, setBtn] = useState('Enable Dark Mode')
  const [newStyle, setNewStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  useEffect(() => {
    if (props.mode === 'dark') {
      setNewStyle({
        color: 'white',
        backgroundColor: 'grey', 
      });
      // setBtn('Enable Light Mode');
    } else if (props.blue === 'enable') {
      setNewStyle({
        color: 'black',
        backgroundColor: '#E9F0FE', 
      });
    } else {
      setNewStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      // setBtn('Enable Dark Mode');
    }
  }, [props.mode, props.blue]);

  // const toogleStyle = () => {
  //   if (newStyle.color === 'black') {
  //     setNewStyle({
  //       color: 'white',
  //       backgroundColor: 'grey'
  //     })
  //     setBtn('Enable Light Mode')
  //   } else {
  //     setNewStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtn('Enable Dark Mode')
  //   }
  // }

  return (
    <>
    <div className='container'>
      <h1 className='my-3'>About Us</h1> 
      <p>
      <b>TextUtils</b> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but <i>TextUtils</i> offers much more than simple text drafting and formatting. <i>TextUtils</i> can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of base64 encoding, reversal of your inputted text. You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of TextUtils is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.
      <br />
      <br />
      The most eminent features of the website are as follows :
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={newStyle}>
          <h2 className="accordion-header" style={newStyle}>
            <button className="accordion-button" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            It is a <i>Simple Text Analyzer</i> , which mutilates your text, but in a tender way. TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, character count or time required to read the text along with the preview.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={newStyle}>
          <h2 className="accordion-header" style={newStyle}>
            <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            It is completely free to use. No credit cards required. Use as much as you want!! TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={newStyle}>
          <h2 className="accordion-header" style={newStyle}>
            <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatibility
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            It is compatible with all of your favorite browsers. This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div> 
      {/* <div className="container my-3">
        <button type="button" onClick={toogleStyle} className="btn btn-primary">{btn}</button>
      </div> */}
    </div>
    </>
  )
}
