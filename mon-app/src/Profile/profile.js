import React from "react";

function Profile (props) {
    
    return (
        <div>
            <div>
        <h2>{props.fullName}</h2>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
            </div>
        <div >{props.children}</div>
        <button onClick={() => props.alertMyInput(`My name is James Brown `)}>
        ClickMe
      </button>
        </div>

    )
};
Profile.defaultProps = {
    fullName: 'No name',
    bio: 'No bio provided',
    profession: 'No profession provided',
    handleName: () => alert('Default Name'),
  };
export default Profile;
