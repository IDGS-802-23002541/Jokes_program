import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import PaperJoke from "../components/PaperJoke";
import "../styles/app.css";

function Favoritos(){
    const [favoritos, setFavoritos] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("favoritos")) || [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    const alternarFavorito = (joke) => {
        setFavoritos((actuales) =>
            actuales.filter((favorito) => favorito.id !== joke.id)
        );
    };
    
    return (
        <>
            <Container maxWidth="md" className="app-container">
                <Typography variant="h3" className="app-title" gutterBottom>
                Chistes Favoritos
                </Typography>
                
                {favoritos.length > 0 ? (
                    favoritos.map((joke) => (
                        <PaperJoke key={joke.id} joke={joke} esFavorito={true} onHandleFavorito={alternarFavorito}/>
                    ))
                ) : (
                    <Typography variant="body1" className="app-subtitle">
                        Aún no tienes chistes favoritos.
                    </Typography>
                )}

                </Container>
        </>
    )
}

export default Favoritos;