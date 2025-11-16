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

      {/* creazione primo campo del form */}
      <div class="mb-3">
        <label for="" className="form-label">Autore</label>
        <input
          type="text"
          name="author"
          className="form-control"
          value={formArticle.author}
          onChange={(e) => setFormArticle({ ...formArticle, author: e.target.value })}



        />

      </div>



    </>
  )
}

export default App
