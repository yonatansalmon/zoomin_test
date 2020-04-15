import axios from 'axios';

export async function getCountries(url) {
   try {
      const res = await axios.get(url);
      return {
         countries: res.data,
      };
   } catch (err) {
      return {
         err: err.message,
      };
   }
}
