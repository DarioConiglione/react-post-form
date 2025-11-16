import { useState } from 'react'
import './App.css'

function App() {

  const api_post = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

  // Create a state with objet 
  const [formArticle, setFormArticle] = useState(emptyForm)

  const emptyForm = {
    author: '',
    title: '',
    body: '',
    public: false
  }

  // create a function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formArticle);
  }

  // call axios post
  axios.post(api_post, formArticle, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response);
      if (response.status === 201) {
        setFormArticle(emptyForm)
      }
    })
    .catch(err => {
      console.log(err.message);
    })



  return (
    <>

      {/* creazione primo campo del form */}

      <div className="container">
        <form className="m-5" onSubmit={handleSubmit}>

          <div>
            <label className="form-label">Autore</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={formArticle.author}
              onChange={(e) => setFormArticle({ ...formArticle, author: e.target.value })}
            />
          </div>
          <div>
            <label className="form-label">Titolo</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formArticle.title}
              onChange={(e) => setFormArticle({ ...formArticle, title: e.target.value })}
            />
          </div>
          <div>
            <label className="form-label">Descrizione</label>
            <textarea
              type="text"
              name="body"
              rows="10"
              className="form-control"
              value={formArticle.body}
              onChange={(e) => setFormArticle({ ...formArticle, body: e.target.value })}
            />
          </div>
          <div>
            <label className="form-check-label me-2" htmlFor="updates">Vuoi renderlo pubblico?</label>
            <input
              type="checkbox"
              name="public"
              id="public"
              className="form-check-input"
              onChange={(e) => setFormArticle({ ...formArticle, public: e.target.value })}
            />

          </div>

          <button type="submit" className="btn btn-primary m-3">Invia richiesta</button>

        </form>

      </div>



    </>
  )
}

export default App
