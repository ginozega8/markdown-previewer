import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { marked } from 'marked'; // I used the marked library to get html from markdown (https://www.npmjs.com/package/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library)


function App() {
  let [markdown, setMarkdown] = useState(""); //Set state to get text-area value

  console.log(markdown)
  return (
    <div className="App container">
      <Form.Group className="mb-3">
        <Form.Label><h1>Markdown Previewer</h1></Form.Label>
        <p>Hi, welcome to my project. With this simple app, you will be able to write and get preview of a markdown language.</p>
        <ul>
          <li># You can write titles like this</li>
          <li>[links like this](https://github.com/ginozega8)</li>
          <li>![Even images like this!](https://www.tonica.la/__export/1627678491779/sites/debate/img/2021/07/30/rick-astley-supera-mil-millones-de-reproducciones-en-youtube.jpg_423682103.jpg)</li>
        </ul>
        <p>You can visit the github markdown documentation page to see what more you can do: <a href='https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'>https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet</a></p>
        <Form.Control as="textarea" rows={3} value={markdown} onChange={e => setMarkdown(e.target.value)} placeholder="Enter Your Markdown Here"/> {/* Set markdown to input */}
      </Form.Group>
      <h2>Output</h2>
      {/* The marked function returns html, So here I set the inner html */}
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} className="output"> 
      </div>
    </div>
  );
}

export default App;
