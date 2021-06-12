import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Card from "../components/Card";
import Nav from "../components/Nav"
import UserContext from "../utils/UserContext"

function Profile() {
  const { userState } = useContext(UserContext)
  console.log('userState in Profile: ', userState)
  const [profileState, setProfileState] = useState({})

  useEffect(() => {
    setProfileState({ ...userState })
    console.log('userState useEffect profile', profileState)
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        <Header />

        <Bio />

        <div>
          {profileState.state ? (
            (profileState.state[0].events.map(event => (
              <Card
                key={event.id}
                id={event.id}
                name={event.name}
                date={event.date}
                image={event.image}
                url={event.url}
              >
              </Card>
            )))
          ) : (
            <div></div>
          )
          }
        </div>

      </div>

    </div>
  )
}

export default Profile;