import { useContext, useEffect } from 'react';
import Image from './Image';
import { ImagesContext } from '../context/ImagesContext';
import apiKey from '../apiKey'

export default function Gallery() {

  const { state, dispatch } = useContext(ImagesContext)
  const query = 'nature'

  useEffect(() => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_IMAGES", payload: data.photos.photo })

      })
      .catch(err => {
        console.log(err)
      })
  }, [query, dispatch])

  return (
    <div className='gallery'>
      <p className='title'>{state.query} pictures</p>
      <div className='gallery-container'>

        {state.isLoaded && state.data.map((item) => {
          const farm = item.farm
          const server = item.server
          const id = item.id
          const secret = item.secret
          const title = item.title
          const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`
          return <Image url={url} key={id} title={title} />
        })}

      </div>
      {
        state.data.length === 0 && state.isLoaded
          ? <p className='not_found'>
            Your search - <span>{state.query}</span> - did not match any documents.
          </p>
          : ""
      }

    </div>
  )
}
