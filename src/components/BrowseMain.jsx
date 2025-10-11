import React from 'react'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const BrowseMain = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:space-y-0">
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default BrowseMain