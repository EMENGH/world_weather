import React from 'react';

// commented out code below because this is a stateless component so we don't need classes
// class Climate extends React.Component {
//     render() {
//         return(
const Climate = (props) => (
        <div className="weather__info">
            <br></br>
            {
             props.city && props.country && <p className="weather__key">Location: 
               <span className="weather__value"> {props.city}, {props.country} </span>
             </p>
            }
            {
             props.temperature && <p className="weather__key">Temperature: 
               <span className="weather__value"> {props.temperature} </span>
             </p>
            }
            {
             props.maxtemp && <p className="weather__key">Max Temp: 
               <span className="weather__value"> {props.maxtemp} </span>
             </p>
            }
            {
             props.mintemp && <p className="weather__key">Min Temp: 
               <span className="weather__value"> {props.mintemp} </span>
             </p>
            }           
            {
             props.humidity && <p className="weather__key">Humidity: 
               <span className="weather__value"> {props.humidity} </span>
             </p>
            }
            {/* {
             props.wind && <p className="weather__key">Wind Speed: 
               <span className="weather__value"> {props.wind} </span>
             </p>
            } */}
            {
             props.description && <p className="weather__key">Conditions: 
               <span className="weather__value"> {props.description} </span>
             </p>
            }
            {
             props.error && <p>{props.error}</p>
            }
        </div>
);

export default Climate;
