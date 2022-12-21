import React, { useState } from 'react'

const JoinLobby = (props) => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");


  return (
    <div>Join Lobby</div>
  )
}

export default JoinLobby