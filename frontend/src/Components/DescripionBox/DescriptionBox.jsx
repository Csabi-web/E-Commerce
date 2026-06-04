import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
           <div className='descriptionbox-nav-box'>Description</div>
           <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
         <p>Egy E-kereskedelmi weblap, ami egy online felület, amely termékek és 
         szolgáltatások adás-vételét szolgálja ki az interneten, mint egy 
         virtuális piactér, ahol üzletek és egyéneknek vannak a termékek bemutatva,
         a vásárlókkal együttműködve és tranzakciót lebonyolítva fizikai jelenlét
         szüksége nélkül. E-kereskedelmi weblapok szereztek bőséges népszerűséget a 
         kényelmes elérhetőségét köszönhetően, valamint z ajánlatok globális
         elérhetősége miatt.</p>
         <p>E-kereskedelmi weblapok tipikusan termékeket és szolgáltatásokat jelenítenek
            meg részletes leírásokkal, képekkel, árakkal és akármilyen jellemzőkkel
            ( pl. méretek, színek). Minden termékre jellemző a  részletes információk
            bemutatása.</p>
        </div>
    </div>
  )
}

export default DescriptionBox