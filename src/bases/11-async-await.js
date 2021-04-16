
const getImagen = async() => {
  try {
    const apiKey = "8YpWHombRX9cNNh8OilBCCaVWk9Vnmn9"
    const resp = await fetch(`http://api.gipdhy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json()
    
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error(`error:  ${error}`)
  }

}
getImagen();