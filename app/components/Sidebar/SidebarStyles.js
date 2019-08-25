import {Drawer} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";

const DRAWER_WIDTH = 240;

const SidebarStyles = (theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
    },
    drawerCloseButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    listItemText: {
        color: 'black'
    }
});

export default SidebarStyles;
