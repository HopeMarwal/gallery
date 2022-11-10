import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react"
import { ImagesContext } from "../context/ImagesContext"
import apiKey from "../apiKey"

export default function Search() {
  const [input, setInput] = useState('')
  const { dispatch } = useContext(ImagesContext)

  const handleClick = () => {

    dispatch({
      type: 'CHANGE_QUERY',
      payload: input
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_IMAGES", payload: data.photos.photo })
      })
      .catch(err => {
        console.log(err)
      })
    setInput('')
  }

  const handleChange = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setInput(result)
  }


  return (
    <div className='search'>
      <input
        onChange={handleChange}
        value={input}
        className='search-input'
        type='text'
      />
      <button
        onClick={handleClick}
        className='search-btn'
        disabled={input ? false : true}
      >
        <BsSearch />
      </button>
    </div>
  )
}
