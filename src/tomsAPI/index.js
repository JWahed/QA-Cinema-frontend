import axios from 'axios'

// GET request copied from travel advisors list in boundry API
// Create const that will make api call and export it
export const getPlacesData = async (type, sw, ne) => {
  try {
    // request and await get call to URL
    // destructure data twice to get to type
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key':
            'b0e5cfc31bmsha9ecdc187333536p191ad0jsn3ef0e4c73236',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )

    return data
  } catch (error) {
    console.log(error)
  }
}
