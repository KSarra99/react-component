import React from 'react'

function Profile(){
    return(
        <div className="navbar bg-dark rounded">
            <h1>profile</h1>
        </div>
    )

}
export default Profile




function ProfileInfo() {
  
    return (
       

<div className="row">
         
          <ProfileInfo 
            p={{
              fullName:'khmilasarra',
              profession:'job seeker',
              bio:' civil society activist ',
           img: '/ProfilePhoto.jpg',
          }}/>
   
        </div>
    )
}
