import React, {useEffect,useState} from "react";
import './css/style.css';

const testData = 
{
    "coord": {
        "lon": 79.1167,
        "lat": 28.05
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 289.94,
        "feels_like": 288.48,
        "temp_min": 289.94,
        "temp_max": 289.94,
        "pressure": 1010,
        "humidity": 31,
        "sea_level": 1010,
        "grnd_level": 990
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.64,
        "deg": 292,
        "gust": 1.73
    },
    "clouds": {
        "all": 15
    },
    "dt": 1708539401,
    "sys": {
        "country": "IN",
        "sunrise": 1708478220,
        "sunset": 1708519070
    },
    "timezone": 19800,
    "id": 1275163,
    "name": "Budaun",
    "cod": 200
}

const Tempapp = () => {

    const[city,setCity] = useState(null);
    const[search, setSearch] = useState("Mumbai");

    useEffect ( ()=>{
        const fetchApi = async() =>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8652aa0bac16420206c6238818714c67&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson)
            if(resJson.cod == 200)
            {
                setCity(resJson);
            }
            else
            {
                setCity(null);
            }
            
        };
        fetchApi();
       // setCity(testData)
    },[search])
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onInput={(event)=>{ 
                        setSearch(event.target.value)
                    }}/>
                </div>
                <div className="info">

                {city == null ? 
                
                <>
                    <h2>City Not Found</h2> 
                </> : 
                
                <>
                    <h2 className="location">
                    <i class="fa fa-street-view" aria-hidden="true">{search}</i>
                    </h2>
                    <h1 className="temp">
                       {city.main.temp} &deg;C
                    </h1>
                    <h3 className="tempmin_max">Min : {city.main.temp_min}&deg;C | Max : {city.main.temp_max}&deg;C </h3>
                </>

                }
                </div>
                
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </>
    )
}

export default Tempapp;