import React from 'react';

//****** commented out class code since this is a stateless component *****/
// class Headings extends React.Component

// class Form extends React.Component {
//     render() {
//         return(
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="city..."/>
//                 <input type="text" name="country" placeholder="country..."/>
//                 <button>Get weather</button>
//             </form>    
//         );
//     }
// };

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <h3 className="form-prompt"> Enter City and Country below: </h3>
        
        <input type=" text" name="city" placeholder="City..."/>
        <input type=" text" name="country" placeholder="Country..."/>
        <button>Get weather</button>
    </form> 
);

export default Form;
