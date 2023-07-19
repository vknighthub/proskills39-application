import { ChatSidebarLeftType } from '@/types/chatTypes'
import { Box, Drawer } from '@mui/material'
import React from 'react'



const ChatSidebarLeft = ({
    mdAbove,
    sidebarWidth,
    leftSidebarOpen,
    handleLeftSidebarToggle
}: ChatSidebarLeftType) => {
    return (
        <div>
            <Drawer
                open={leftSidebarOpen}
                onClose={handleLeftSidebarToggle}
                variant={mdAbove ? 'permanent' : 'temporary'}
                ModalProps={{
                    disablePortal: true,
                    keepMounted: true // Better open performance on mobile.
                }}
                sx={{
                    zIndex: 7,
                    height: '100%',
                    display: 'block',
                    position: mdAbove ? 'static' : 'absolute',
                    '& .MuiDrawer-paper': {
                        boxShadow: 'none',
                        overflow: 'hidden',
                        width: sidebarWidth,
                        position: mdAbove ? 'static' : 'absolute',
                        borderTopLeftRadius: theme => theme.shape.borderRadius,
                        borderBottomLeftRadius: theme => theme.shape.borderRadius
                    },
                    '& > .MuiBackdrop-root': {
                        borderRadius: 1,
                        position: 'absolute',
                        zIndex: theme => theme.zIndex.drawer - 1
                    }
                }}
            >
                <Box
                    sx={{
                        px: 5.5,
                        py: 3.5,
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: theme => `1px solid ${theme.palette.divider}`
                    }}
                >

                </Box>
            </Drawer>
        </div>
    )
}

export default ChatSidebarLeft