import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import PropTypes from 'prop-types';

import useStyles from './styles'

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')

  console.log(setCoordinates);
  console.log(setBounds);
  console.log(coordinates);
  console.log(places);
  console.log(setChildClicked);

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDQ6qDdLafhzvRg0p_67OxyYAWIPC9fyhU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color='primary' fontsize='large' />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant='subtitle2'
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                  }
                  alt={place.name}
                />
                <Rating size='small' value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  setCoordinates: PropTypes.func.isRequired,
  setBounds: PropTypes.func.isRequired,
  coordinates: PropTypes.object.isRequired,
  places: PropTypes.array,
  setChildClicked: PropTypes.func.isRequired,
};

export default Map
