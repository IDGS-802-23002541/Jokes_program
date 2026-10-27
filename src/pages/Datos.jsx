import { DATOS } from "../data/datos";
import {Container, Typography, Paper, Box, Chip} from '@mui/material'

export default function CrearChiste(){
    const id = Math.floor(Math.random() * DATOS.length) + 1;
    const DATO = DATOS.find((dato) => dato.id === id);

    return (
        <Container maxWidth="md" className="app-container">
            <Typography variant="h3" className="app-title" gutterBottom>
                Datos curiosos sobre chistes
            </Typography>

            {DATO && (
                <Paper elevation={3} className="joke-paper">
                    <Typography variant="h6" className="joke-text">
                    {DATO.dato}
                    </Typography>
                    <Box className="joke-category">
                        <Chip label={DATO.comentario} color="secondary" variant="outlined" />
                    </Box>
                </Paper>
            )}
        </Container>
    )
}