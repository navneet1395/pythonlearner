import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import './Tutorial_chapter.css'
import Chapter_1 from './test.pdf'
const Tutorial_chapter = (props) => {
  return (
    <div className='t-container'>
    <h1>Tutorial</h1>
    <div className='t-main'>
        <div className='t-list'>
          <List
            // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Chelsea Otakan" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div classname='t-chapter'>
          <iframe src={Chapter_1} title="Chapter 1" />
        </div>
      </div>
    </div>

  )
}

export default Tutorial_chapter
