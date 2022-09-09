import { useState, useEffect, createRef } from 'react'
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core'

import PlaceDetails from '../placeDetails/PlaceDetails'
import PropTypes from 'prop-types';

import useStyles from './styles'

// fetch api for cards
const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
  
}) => {
  
  const classes = useStyles()

  console.log({ childClicked })

  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef())
    setElRefs(refs)
  }, [places])

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        Local Food, Accomodation and Attractions
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id='type'>Type</InputLabel>
            <Select
              id='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value='restaurants'>Food</MenuItem>
              <MenuItem value='hotels'>Accomodation</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value='All'>All</MenuItem>
              <MenuItem value='3'>Above 3.0</MenuItem>
              <MenuItem value='4'>Above 4.0</MenuItem>
              <MenuItem value='4.5'>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          {/* loop over places using map method */}
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

List.propTypes = {
  places: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired,
  setType: PropTypes.object.isRequired,
  rating: PropTypes.array,
  setRating: PropTypes.func,
  childClicked: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.iseRequired,
}


export default List
