import PropTypes from 'prop-types'

const Footer = ({ nombre, telf, email, usuariogit }) => {
    return (
        <>
            <div className="footer-tittle">
                <span className="footer-text">Creado por {nombre}</span>
            </div>
        </>
    );
}
export default Footer

Footer.propTypes = {
    nombre: PropTypes.string,
}
Footer.defaultProps = {
    nombre: 'No Existe el nombre',
}