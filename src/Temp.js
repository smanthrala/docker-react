import { useState, useEffect } from "react";


export default function TempComponent(){

    const [temp, setTemp] = useState();
    const [zip, setZip] = useState();
    useEffect(() => {
        // Code here will run after *every* render
        if(zip){
            fetch('https://geocoding-api.open-meteo.com/v1/search?name='+zip).then(response=>{
                response.json().then(resp=>{
                    if(resp.results && resp.results.length>0)
                        setTemp(resp.results[0].name);
                });
            });
        }
    });

    return (
        <div>
          <h1>Enter ZipCode</h1>
          <input name='zip' onBlur={e => setZip(e.target.value)}></input>
          <p>{temp}</p>
        </div>
      );

}
