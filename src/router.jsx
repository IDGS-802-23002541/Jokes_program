import { createBrowserRouter, Outlet, Link } from "react-router-dom";
import Jokes from "./pages/Jokes";
import Favoritos from "./pages/Favoritos";
import { Button, Box } from "@mui/material";
import "./styles/app.css";
import Avatar from "./pages/Avatars";
import Datos from './pages/Datos';

function Layout() {
    return (
        <>
            <Box sx={{ display: "flex", gap: 2, p: 2 }}>
                <Button className="joke-button" variant="contained" component={Link} to="/">
                    Inicio
                </Button>

                <Button className="joke-button" variant="contained" component={Link} to="/favoritos">
                    Mis chistes favoritos
                </Button>

                <Button className='joke-button' variant='contained' component={Link} to='/datos'>
                    Datos curiosos 
                </Button>

                <Button className='joke-button' variant='contained' component={Link} to='/avatars'>
                    Avatares
                </Button>
            </Box>

            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Jokes />,
        },
        {
            path: "/favoritos",
            element: <Favoritos />,
        },
        {
            path: '/datos',
            element: <Datos />
        },
        {
            path: '/avatars',
            element: <Avatar />
        }
    ]
  },
]);

export default router;