import React, { Component} from 'react';

class Maps extends Component {

    render() {
        return (      
            <div className="container shadow-the-back-sm">  
                <div className="row bg-light mb-4">
                    <div className="col-lg-6 col-12 map">
                        <div style={{ width: "100%" }}><iframe width="100%" height="350px" src="https://www.mapsdirections.info/en/custom-google-maps/map.php?width=100%&height=600&hl=ru&q=301%20Westwood%20Plaza%20Los%20Angeles%2C%20CA%2090095+(Interview%20Me)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='google' className="shadow-the-back-sm"><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div>
                    </div>
                </div>
            </div> 
        )
    }
}
export default Maps;