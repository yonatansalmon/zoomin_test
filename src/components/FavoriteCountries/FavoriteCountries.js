import React from 'react';
import './FavoriteCountries.css';

function FavoriteCountry(props) {
   const { selectedCountries } = props;
   return (
      <div className='table_container'>
         <table className='purpleHorizon'>
            <thead>
               <tr>
                  <th className='checkbox_colum'>Countries You Want to Visit</th>
               </tr>
            </thead>
            <tbody>
               {selectedCountries.length === 0 ? (
                  <tr className='no_data'>No saved countries...</tr>
               ) : (
                  selectedCountries.map(country => (
                     <tr key={country}>
                        <td>{country}</td>
                     </tr>
                  ))
               )}
            </tbody>
         </table>
      </div>
   );
}

export default FavoriteCountry;
