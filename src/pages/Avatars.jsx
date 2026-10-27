import { Card, Chip, CardContent, CardMedia, Container, Box, Typography } from "@mui/material"
import { useState, useEffect } from "react"

const URL = 'https://last-airbender-api.fly.dev/api/v1/characters/avatar'

export default function Avatar(){
    const [avatares, setAvatares] = useState([])
    const [error, setError] = useState(null)

    const getAvatares = async () => {
        try {
            const response = await fetch(`${URL}`)
            if(!response.ok){
                throw new Error('No charchó :c')
            }
            const data = await response.json()
            //console.log(data)
            setAvatares(data)
        }catch(err){
            setError(err.message)
        }
    }

    useEffect(() => {
        getAvatares();
    }, [])
    return (
                <>
            <Container maxWidth="md" className="app-container">
                <Typography variant="h3" className="app-title" gutterBottom>
                Avatar
                </Typography>
                
                
                {error && (
                    <Alert severity="error" sx={{ mt: 3 }}>
                        {error}
                    </Alert>
                )}

                {avatares.length > 0 ? (
                
                    avatares.map((avatar) => (
                        <Card key={avatar._id}>
                            <CardMedia
                                component='img'
                                alt={avatar.name}
                                height='400'
                                image={avatar.photoUrl}>
                            </CardMedia>
                            <CardContent>
                                <Box className="joke-category">
                                    <Chip label={avatar.position} color="secondary" variant="outlined" />
                                </Box>
                                <Typography variant="h6" className="joke-text">
                                {avatar.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className=''>Algó falló en la petición</p>
                )}

                
                </Container>
        </>
    )
}