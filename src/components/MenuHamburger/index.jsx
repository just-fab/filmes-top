import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './style.css'
import { useState } from "react"
import { Box, List, ListItem, ListItemText, Drawer, ListItemButton } from "@mui/material"

export default function MenuHamburger(props){
    const[showDrawer, setShowDrawer] = useState(false)
    
    function closeDrawer(){
        setShowDrawer(false)
    }
    function openDrawer(){
        setShowDrawer(true)

    }

    return(
        <>
            <button id='menu_hamburger' className="menu_hamburger" onClick={openDrawer}>
                <FontAwesomeIcon icon={faBars} size="xl"/>
            </button>
            <Drawer
                anchor={'left'}
                open={showDrawer}
                onClose={closeDrawer}
                >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={closeDrawer}
                    onKeyDown={closeDrawer}>
                     <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                            <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}