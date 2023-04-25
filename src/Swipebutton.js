import React from 'react'
import './Swipebutton.css'
import IconButton from '@mui/material/IconButton'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Swipebutton() {
  return (
    <div className='swipebutton'>
            <ReplayIcon fontSize='large' className='swipebutton_repeat'/>
            <CloseIcon fontSize='large' className='swipebutton_left'/>
            <StarRateIcon fontSize='large' className='swipebutton_star'/>
            <FavoriteIcon fontSize='large' className='swipebutton_right'/>
            <FlashOnIcon fontSize='large' className='swipebutton_lightning'/>
         </div>
  )
}

export default Swipebutton