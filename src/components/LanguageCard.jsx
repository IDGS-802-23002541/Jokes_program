

import PropTypes from "prop-types";
import "../styles/LanguageCard.css";


/**
 * LanguageCard
 *
 *
 * @param {object} props
 * @param {string} props.nombre      - Nombre del lenguaje.
 * @param {number} props.anio        - Año de creación.
 * @param {string} props.tipo        - Tipo de lenguaje (ej. "Interpretado").
 * @param {string} props.descripcion - Descripción corta.
 * @param {string} props.emoji       - Emoji representativo.
 * @param {string} props.color       - Color hexadecimal del lenguaje.
 */
function LanguageCard({ nombre, anio, tipo, descripcion, emoji, color }) {
  return (
    /*
     * La estructura JSX de la tarjeta es fija y reutilizable.
     * El color se pasa como variable CSS personalizada (--card-color)
     */
    <article className="card" style={{ "--card-color": color }}>
      {/* Encabezado: emoji + nombre */}
      <div className="card__header">
        <span className="card__emoji">{emoji}</span>
        <h2 className="card__title">{nombre}</h2>
      </div>

      <span className="card__badge">{tipo}</span>
      <p className="card__description">{descripcion}</p>

      {/*
       * Agrupamos el pie de la tarjeta con <></> en lugar de un <div>
       */}
      <>
        <footer className="card__footer">
          Creado en <strong>{anio}</strong>
        </footer>
      </>
    </article>
  );
}

// 1.4 — PropTypes
// React mostrará advertencias en consola si se pasa un tipo incorrecto.

LanguageCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  anio: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LanguageCard;
