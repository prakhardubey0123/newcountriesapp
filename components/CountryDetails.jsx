import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CountryDetail.css'
import { useParams } from 'react-router-dom'
const CountryDetails = () => {
    const [countrydata,setcountryData]=useState(null)
    const [notFound,setNotFound]=useState(false)
    // const countryName= new URLSearchParams(location.search).get('name')
      const params= useParams()
      console.log(params)
      const countryName=params.Countrydetails
    console.log(countryName);
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json())
        .then(([data])=>{
            console.log(data);
            setcountryData({
                name: data.name.common,
                nativeName: Object.values(data.name.nativeName)[0].common,
                population:data.population,
                region:data.region,
                subregion: data.subregion,
                capital: data.capital,
                tld: data.tld,
                currency:Object.values(data.currencies).map((currency)=>currency.name).join(', '),
                languages: Object.values(data.languages).join(', '),
                flag:data.flags.svg,
                // console.log(Object.values(data.currencies).map((currency)=>currency.name).join(', '))
                borders:[],


            })
            data.borders.map(()=>{
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json()).then((bordercountry)=>{
              console.log(bordercountry)
          })
            })

        }).catch(err=>{
          console.log(err);
          setNotFound(true);
        }) 
    },[countryName])

    if(notFound){
      return(
      <>
      {/* <span className="back-button" onClick={()=>history.back()} >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>  */}
      <div> Not Found So Sorry</div>
      </>
    )}

  return (
    countrydata === null? ( `loading....`)
    :(<main>
        {console.log(countrydata.population.toLocaleString('en-IN'))}

        <div className="country-details-container">
          <span className="back-button" onClick={()=>history.back()} >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countrydata.flag} alt={`${countrydata.name} flag`} />
            <div className="details-text-container">
              <h1>{countryName}</h1>
              <div className="details-text">
                <p><b>Native Name:{countrydata.nativeName} </b><span className="native-name"></span></p>
                <p><b>Population: {countrydata.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
                <p><b>Region: {countrydata.region}</b><span className="region"></span></p>
                <p><b>Sub Region: {countrydata.subregion}</b><span className="sub-region"></span></p>
                <p><b>Capital: {countrydata.capital.join(" ")}</b><span className="capital"></span></p>
                <p>
                  <b>Top Level Domain: {countrydata.tld}</b><span className="top-level-domain"></span>
                </p>
                <p><b>Currencies: {countrydata.currency}</b><span className="currencies"></span></p>
                <p><b>Languages: {countrydata.languages}</b><span className="languages"></span></p>
              </div>
              
              {countrydata.borders.length!== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
              {
               countrydata.borders.map((border) => <Link to={`/${border}`}>{border}</Link>)
              }
              </div>}
            </div>
          </div>
        </div>
      </main>)
  )
}

export default CountryDetails