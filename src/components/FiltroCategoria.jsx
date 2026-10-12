import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PropTypes from "prop-types";
import "../styles/app.css";

const categorias = [
    "Any", "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"
]

function FiltroCategoria({categoria, onCategoria}){
    const handleChange = (event, newCateogira) =>{
        if(newCateogira !== null){
            onCategoria(newCateogira);
        }
    }
    // Agrupa cada botón en una barra de botones
    return (
        <>
            <ToggleButtonGroup className="category-filter" value={categoria} exclusive onChange={handleChange} aria-label="Categorías de chistes"
                >
                {categorias.map((item) => (
                    <ToggleButton
                            key={item}
                            value={item}
                            aria-label={item}
                        >
                    {item}
                    </ToggleButton>
                ))}
                </ToggleButtonGroup>
        </>
    )
}

FiltroCategoria.propTypes = {
    categoria: PropTypes.oneOf(categorias).isRequired,
    onCategoria: PropTypes.func.isRequired
}
export default FiltroCategoria;