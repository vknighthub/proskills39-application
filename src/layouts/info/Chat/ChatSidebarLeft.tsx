import { useMe } from '@/data/user'
import { ChatSidebarLeftType } from '@/types/chatTypes'
import { Badge, Box, Drawer, Avatar as MuiAvatar } from '@mui/material'
import React from 'react'



const ChatSidebarLeft = ({
    mdAbove,
    statusObj,
    sidebarWidth,
    leftSidebarOpen,
    handleLeftSidebarToggle,
    handleUserProfileLeftSidebarToggle
}: ChatSidebarLeftType) => {

    const { me } = useMe()

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
                    <Badge
                        overlap='circular'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        sx={{ mr: 4.5 }}
                        onClick={handleUserProfileLeftSidebarToggle}
                        badgeContent={
                            <Box
                                component='span'
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    color: `${statusObj['busy']}.main`,
                                    backgroundColor: `${statusObj['busy']}.main`,
                                    boxShadow: theme => `0 0 0 2px ${theme.palette.background.paper}`
                                }}
                            />
                        }
                    >
                        <MuiAvatar
                            src={me?.data.avatar}
                            alt={me?.data.fullname}
                            sx={{ width: 40, height: 40, cursor: 'pointer' }}
                        />
                    </Badge>

                </Box>
            </Drawer>
        </div>
    )
}

export default ChatSidebarLeft