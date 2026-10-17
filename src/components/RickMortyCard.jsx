import { useEffect, useState } from "react";
import { Alert, Paper, Typography, Box, Chip } from "@mui/material";
import PropTypes from "prop-types";

const API = "https://rickandmortyapi.com/api/character";

export default function RickandMorty(){

    const [character, setCharacter] = useState([])
    const [error, setError] = useState(null)

    const getCharacter = async () => {
        const id = Math.floor(Math.random() * 826) + 1;
            try{
                const response = await fetch(`${API}/${id}`)
                if(!response.ok){
                    throw new Error("No charcho")
                }
                const data = await response.json()
                setCharacter(data)
            }catch(err){
                setError(err.message)
            }
    }

    useEffect(()=> {
        getCharacter();
    }, [])

    return (
        <>
            <Paper elevation={3} className="joke-paper">
                <Box className="joke-category">
                    <Chip label={character.species} color="secondary" variant="outlined" />
                </Box>
                <img src={character.image}/>
                <Typography variant="h6" className="joke-text">
                {character.name}
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ mt: 3 }}>
                        {error}
                    </Alert>
                )}
            </Paper>
        </>
    )
}

RickandMorty.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}
