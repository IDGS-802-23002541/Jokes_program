import { useState, useEffect } from "react";
import { Container, Typography, Button, CircularProgress, Alert, Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import FiltroCategoria from "../components/FiltroCategoria";
import PaperJoke from "../components/PaperJoke";
import "../styles/app.css";

//Docs API: https://sv443.net/jokeapi/v2/
function Jokes(){
    //categoria por default "Any"
    const [categoria, setCategoria] = useState('Any')
    const [joke, setJoke] = useState(null);
    const [error, setError] = useState("");
    const [favoritos, setFavoritos] = useState(() => {
        try{
            return JSON.parse(localStorage.getItem("favoritos")) || [];
        }catch{
            return [];
        }
    });

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

    const handleFavorito = (joke) => {
        //Actualiza la lista de favoritos
        setFavoritos((actuales) => {
            //comprobamos aque no exista
            const existe = actuales.some(
                (favorito) => favorito.id === joke.id
            );
            //si existe, lo quitamos
            if (existe) {
                return actuales.filter(
                    (favorito) => favorito.id !== joke.id
                );
            }

        return [...actuales, joke];
        });
    }

    useEffect(() => {
        getJoke();
    }, [categoria] );

    useEffect(() => {
        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );
    }, [favoritos]);

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

                    {joke && <PaperJoke joke={joke} onHandleFavorito={handleFavorito} esFavorito={favoritos.some((f) => f.id === joke.id)} />}

                </Container>
        </>
    )
}

export default Jokes;