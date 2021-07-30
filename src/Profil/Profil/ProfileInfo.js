import React from 'react'

const ProfileInfo = (props) => {
    return (
        <div className="col-md-4 border">
            <div className="card">
                <div className="card-header">
                <img src={props.p.img} alt={props.media} /> 
                  <div className="card-body">
                  
                    <h1>{props.p.name}</h1>
                    <h1>{props.p.profession}</h1>
                    <h1>{props.p.bio}</h1>
                  </div>
                </div>
            </div>   
               
       </div>
    )
}

export default ProfileInfo