import React, { useEffect, useState } from 'react'

const JoinLobby = (props) => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const [game, setGame] = useState("")
  const []
  const []
  const []

  const [makingLobby, setMakingLobby] = useState(false)
  let z = makingLobby;
  const requestUser = axios.get(`http://localhost:8000/api/users/${id}`);
  const requestLobby = axios.get(`http://localhost:8000/api/lobbies`);

  const [errors, setErrors] = useState([])
  useEffect(() => {
    axios
      .all([requestUser, requestLobby])
      .then((response) => {
        setUsername(response.data.username)
        setEmail(response.data.email)
        setUserId(id)
      })
      .catch((err) => {
        setErrors(err.response)
      })
  }, [])

  const makeLobbyForm = (e) => {
    setMakingLobby(!makingLobby)
  }
  const signOff = (e) => {
    e.preventDefault()
    {/* KG: the use of access tokesn and session storage are foreign to me as of now...*/ }
  }

  return (
    <div>
      <div className='header'>
        <div id='header-left'>
          <Link to={``}> {/* Ask group if this will be a link to a new page or if will be building an edit form here*/}
            <button>Edit Profile</button>
          </Link>
          <img src='' /> {/*KG: Hey guys where are we pulling user images from? Didnt see it as a part of the UserSchema, thats the only way i've known to have user images*/}
        </div>
        <div id='header-center'>
          {/* Title
        Make a Lobby Link */}
          <h1>The Lobriary</h1>
          <button onClick={makeLobbyForm}>{z ? 'Making aLobby' : 'Make a Lobby'}</button>
          {
            z && (
              {/* 
            <div id='makeLobby'>
            </div>
          */}
            )
          }
        </div>
        <div id='header-right'>
          <button onClick={signOff}>Sign Off</button>
        </div>
      </div>
      <div className='content'>
        {/* Subtitle: Welcome UserName */}
        <h2>Welcome {username}</h2>
        {/* Table With all lobbies listed */}

      </div>
    </div>
  )
}

export default JoinLobby