import { useState } from 'react'
import './App.css'

function App() {

  const api_post = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  // Create a state with objet 
  const [formArticle, setFormArticle] = useState(
    {
      author: '',
      title: '',
      body: '',
      public: false
    }
  )


  return (
    <>

      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
        />
        <small id="helpId" class="text-muted">Help text</small>
      </div>


    </>
  )
}

export default App
