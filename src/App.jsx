import { useState, useEffect } from "react";
import { Container, Typography, Button, CircularProgress, Alert, Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import FiltroCategoria from "./components/FiltroCategoria";
import PaperJoke from "./components/PaperJoke";
import "./styles/app.css";

//Docs API: https://sv443.net/jokeapi/v2/
function App(){
    //categoria por default "Any"
    const [categoria, setCategoria] = useState('Any')
    const [joke, setJoke] = useState(null);
    const [error, setError] = useState("");

    const getJoke = async () => {

        try {
            const response = await fetch(
                `https://v2.jokeapi.dev/joke/${categoria}?lang=es`
            );
            if (!response.ok) {
                throw new Error("No se pudo consultar la API.");
            }
            const data = await response.json();
            if (data.error) {
                throw new Error("La API devolvió un error.");
            }
            setJoke(data);
        } catch (err) {
            setError(err.message || "Ocurrió un error inesperado.");
            setJoke(null);
        }

    };

    useEffect(() => {
        getJoke();
    }, [categoria] );

    return (
        <>
            <Container maxWidth="md" className="app-container">
                <Typography variant="h3" className="app-title" gutterBottom>
                Chistes re malos
                </Typography>

                    <Typography variant="body1" className="app-subtitle">
                        Selecciona una categoría de chistes:
                    </Typography>

                    <FiltroCategoria
                        categoria={categoria}
                        onCategoria={setCategoria}
                    />

                    <Typography sx={{ mt: 3 }}>
                        Categoría seleccionada: {categoria}
                    </Typography>

                    <Box className="joke-actions">
                        <Button className="joke-button" variant="contained" startIcon={<RefreshIcon />} onClick={getJoke}>
                            Otro chiste
                        </Button>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ mt: 3 }}>
                            {error}
                        </Alert>
                    )}

                    {joke && <PaperJoke joke={joke} />}

                </Container>
        </>
    )
}

export default App;