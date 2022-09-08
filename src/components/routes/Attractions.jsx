import { CssBaseline, Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { getPlacesData } from '../../tomsAPI'

import Header from '../Navigation/Header/Header'
import Footer from '../Navigation/Footer/Footer'

import List from '../attractionsComponents/List/List'
import Map from '../attractionsComponents/Map/Map'

const Attractions = () => {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])

  const [childClicked, setChildClicked] = useState(null)

  // sets default coords to cinemas location
  const [coordinates, setCoordinates] = useState({
    lat: 51.50848260005737,
    lng: -0.07388982749155347,
    // lat: 0,
    // lng: 0,
  })

  // set google maps window boundries
  const [bounds, setBounds] = useState({})

  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)

    setfilteredPlaces(filteredPlaces)
  }, [rating])

  useEffect(() => {
    setIsLoading(true)
    console.log(coordinates, bounds)
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      // console.log(data)
      setPlaces(data)
      setfilteredPlaces([])
      setIsLoading(false)
    })
  }, [type, coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default Attractions
