import logo from '../../assets/images/logo.png'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="ms-logo-container">
                <img src={logo} alt="logo escrito meta service na lateral direita e na lateral esquerda tem a imagem de um círculo com alguns símbolos de dados analíticos" />
                    <p>Desenvolvido por <a title="Meu Github" href="https://github.com/Lua-programmer" target="_blank" rel='noopener noreferer'>Luana Melissa</a> </p>
                <p>Projeto orientado na Semana Spring React by <a href="https://www.instagram.com/devsuperior.ig" title="IG DevSuperior" target="_blank" rel='noopener noreferer'>@devsuperior.ig</a></p>
        </div>
        </header >
    )
}

export default Header