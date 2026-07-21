import {
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";

function TopNavbar() {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={1}
        >
            <Toolbar>

                <Typography variant="h6">

                    EduPulse AI

                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default TopNavbar;