import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'

function Header() {
  return (
    <div className='header'>

        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <IconButton>
            <img className='header_logo' src='https://w7.pngwing.com/pngs/399/756/png-transparent-tinder-logo-computer-icons-tinder-angle-logo-magenta-thumbnail.png' alt='header'/>
        </IconButton>

        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>

    </div>
  )
}

export default Header