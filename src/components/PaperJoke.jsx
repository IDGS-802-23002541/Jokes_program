import { Paper, Typography, Box, Chip } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/app.css";

//Hay dos tipos de chiste. Single viene 
//Single: viene solo con "joke"
//Twopart: viene con "setup" (chiste) "delivery" (respuesta)
function PaperJoke({ joke }) {
  return (
    //elevation es para la sombra del paper
    <Paper elevation={3} className="joke-paper">
        <Box className="joke-category">
            <Chip label={joke.category} color="secondary" variant="outlined" />
        </Box>
      <>
        <Typography variant="h6" className="joke-text">
          {joke.type === "single"
            ? joke.joke
            : joke.setup}
        </Typography>

        {joke.type === "twopart" && (
          <Typography variant="body1" className="joke-delivery">
            {joke.delivery}
          </Typography>
        )}
      </>
    </Paper>
  );
}

PaperJoke.propTypes = {
  joke: PropTypes.shape({
    type: PropTypes.oneOf(["single", "twopart"]).isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
};

export default PaperJoke;