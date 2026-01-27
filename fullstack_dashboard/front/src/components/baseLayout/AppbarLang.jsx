import React, {useEffect, useRef, useState} from 'react'
import { REST_COUNTRIES_API_URL } from '../../constants/apiUrls'
import { Icons } from '../../assets/icons'
import axios from 'axios'


const AppbarLang = () => {
  const DEFAULT_COUNTRY = 'South Korea'
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [isDroplistEnabled, setIsDroplistEnabled] = useState(false)

  const countryLangRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (e) => {
      //console.log(e.target)
      if(countryLangRef.current && !countryLangRef.current.contains(e.target)) {
        setIsDroplistEnabled(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    
    return () => {  // clean up
      window.removeEventListener('click', handleClickOutside)
    }
  
  },[])

  //console.log(isDroplistEnabled)

  const handleDroplistEnable = () => setIsDroplistEnabled(!isDroplistEnabled) 

  const countrySelectedHandler = (country, flag, lang) => {

    setSelectedCountry({
      country: country,
      flag: flag,
      language: lang
    })
    setIsDroplistEnabled(false)
  }

  useEffect(() => {

    const fetchCountryData = async () => {
      try {

        const response = await axios.get(REST_COUNTRIES_API_URL)
        setCountries(response.data)

        const defaultCountry = response.data.find((country) => country.name.common == DEFAULT_COUNTRY)

        if(defaultCountry) {
          let langKey = Object.keys(defaultCountry?.languages)[0]  // ? : 옵셔널
          setSelectedCountry({
            country: defaultCountry.name.common,
            flag: defaultCountry.flags.png,
            language: langKey
          })
        }
      } catch (error) {
        console.log(`Error Fetching Country Data : ${error}`)
      }
     }

     fetchCountryData()
    }, [])

 
 
  return (
    <div className='appbar-dropdown ralative w-30 h-10 mx-7' >
      <div className='drop-selected flex items-center w-full h-full gap-x-3 px-1 py-3 cursor-pointer' onClick={handleDroplistEnable}>
        <div className='drop-selected-img w-6 h-6 min-w-6 over-hidden rounded-full'>
          <img src={selectedCountry?.flag} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='drop-selected-text flex items-center gap-x-2 '>
          <span>{selectedCountry?.language}</span>
          <img src={Icons.ChevronDownDark} alt="" className='dark:invert-[1] dark:brightness-[100%]'/>
        </div>
      </div>

      <div className={`dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] absoute top-full left-0 py-2 px-0 dark:bg-gray-950 bg-white rounded-sm text-gray-950 z-[100] dark:text-white ${isDroplistEnabled ? "":"hidden"}`}>
        <div className='max-h-52 overflow-y-scroll py-[6px] px-3 scrollbar'>
          {

            countries?.length > 0 ? (
             
              countries?.map((country, index) => {

                 if(country?.languages && Object.keys(country?.languages) ) {
               
                  const langKey = Object.keys(country?.languages)

                  return (
                    <div 
                      key={country.name.common} 
                      className='drop-item flex items-center gap-x-3 cursor-pointer dark:text-white py-1 px-0 delay-300 ease-in-out transition hover:dark:bg-gray-700 hover:bg-slate-100'
                      onClick={() => countrySelectedHandler(
                        country?.name?.common,
                        country?.flags?.png,
                        langKey
                      )}
                    >
                      <span className='drop-item-img w-4 h-4 min-w-4 overflow-hidden rounded-full'>
                        <img src={country.flags.png} alt="country icon" className='w-full h-full object-cover' />
                      </span>
                      <span className='drop-item-text text-sm uppercase font-medium'>
                        {langKey}
                      </span>
                    </div>
                  )
                } else {
                  // /console.log('flase')
                  return null
                }
              })
            ) : (
              <p>No Data Listed</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AppbarLang