import React from 'react';


const Form = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', backgroundColor:'blue',flexDirection:'column'}}>
            <div style={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={require('../assets/images/event.jpg')} alt="event" style={{ width: '150px', height: '150px' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={require('../assets/images/dumbell.jpg')} alt="dumbell" style={{ width: '150px', height: '150px' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={require('../assets/images/star.gif')} alt="star" style={{ width: '150px', height: '150px' }} />
                        </div>
            </div>            
        </div>


    );
};

export default Form;
