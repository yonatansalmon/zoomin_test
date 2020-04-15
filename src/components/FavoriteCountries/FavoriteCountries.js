import React from 'react';
import './FavoriteCountries.css';

function FavoriteCountry(props) {
   const { selectedCountries } = props;
   return (
 
         <table className='purpleHorizon'>
            <thead>
               <tr>
                  <th className='checkbox_colum'>Countries You Want to Visit</th>
               </tr>
            </thead>
            <tbody>
               {selectedCountries.length === 0 ? (
                  <tr >
                    <td className='no_data'> No saved countries...</td>
                  </tr>
               ) : (
                  selectedCountries.map(country => (
                     <tr key={country}>
                        <td>{country}</td>
                     </tr>
                  ))
               )}
            </tbody>
         </table>
    
   );
}

export default FavoriteCountry;
