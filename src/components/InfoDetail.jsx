import React, { Component} from 'react';
import GMaps from './GMaps';

class InfoDetail extends Component{

    render(){
        return(
            <div>
                
                    <div className="col-8">
                        <div className="serachDetail">
                            serach goes here
                        </div>
                    </div>

                    
                    <div className="col-4">
                        <GMaps></GMaps>   
                    </div>
                
               
            </div>
        )
    }
}
export default InfoDetail;