import React from "react";

//****** commented out class code since this is a stateless component *****/
// class Headings extends React.Component {
//     render() {
//         return(
//             <div>
//                <h1>Weather Finder</h1>
//                 <p>Find out temperature, conditions and more...</p>
//             </div>
//         )
//     }

// }

const Headings = () => (
    <div>
       <h1 className="title-container__title">World Weather</h1>
       <h3 className="title-container__subtitle">Temperature, conditions and more...</h3>
    </div>
);

export default Headings;