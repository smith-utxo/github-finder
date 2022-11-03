import React from 'react'
import UserResults from '../Components/users/UserResults'
import UserSearch from '../Components/users/UserSearch'

function Home() {
  return (
    <>
    {/*Search Component will go here */}
    <UserSearch />
      <UserResults />
    </>
  )
}

export default Home