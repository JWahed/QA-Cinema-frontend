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
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          // bl_latitude: '11.847676',
          // tr_latitude: '12.838442',
          // bl_longitude: '109.095887',
          // tr_longitude: '109.149359',
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
