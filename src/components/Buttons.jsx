import { useContext } from "react"
import { ImagesContext } from "../context/ImagesContext"
import apiKey from "../apiKey"


export default function Buttons() {
  const { dispatch } = useContext(ImagesContext)

  const handleClick = (e) => {
    dispatch({
      type: 'CHANGE_QUERY',
      payload: e.target.name
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${e.target.name}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_IMAGES", payload: data.photos.photo })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='buttons'>
      <button onClick={handleClick} name="food" className='btn'>Food</button>
      <button onClick={handleClick} name="building" className='btn'>Building</button>
      <button onClick={handleClick} name="people" className='btn'>People</button>
      <button onClick={handleClick} name="nature" className='btn'>Nature</button>
    </div>
  )
}
