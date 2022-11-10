import { createContext, useReducer } from "react"

export const ImagesContext = createContext()

export const ImagesContextProvider = ({ children }) => {
  const INITIAL_STATE = {
    data: {},
    isLoaded: false,
    query: 'nature'
  }

  const imagesReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_IMAGES": {
        return {
          ...state,
          data: action.payload,
          isLoaded: true,
        }
      }
      case "CHANGE_QUERY": {
        return {
          ...state,
          query: action.payload
        }
      }
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(imagesReducer, INITIAL_STATE)

  return (
    <ImagesContext.Provider value={{ state, dispatch }}>
      {children}
    </ImagesContext.Provider>
  )
}


// const query = 'nature'

// const [data, setData] = useState({})
// const [isLoaded, setIsLoaded] = useState(false)

// useEffect(() => {
//   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       setData(data.photos.photo)
//       setIsLoaded(true)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }, [])