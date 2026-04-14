import React from 'react'

function User() {
  const clr1 = Math.floor(Math.random() * 256)
  const clr2 = Math.floor(Math.random() * 256)
  const clr3 = Math.floor(Math.random() * 256)

  return (
    <div
      className='user_card'
      style={{ backgroundColor: `rgb(${clr1}, ${clr2}, ${clr3})` }}
    >
      user
    </div>
  )
}

export default User