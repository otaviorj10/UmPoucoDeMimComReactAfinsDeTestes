import { HeaderContainer } from "../styles/HeaderContainer";
import { Image } from '../Components/Image';
import { Link } from "react-router-dom";


export const HeaderMenu = () => (


    <HeaderContainer>
        <ul>
            {/* <li><Link to="/Descricao"> Blog</Link></li> */}
            <li> <Link to="/Sobre">Sobre</Link></li>
            <li> <Link to="/Descricao">Descrição</Link></li>
        </ul>

        <section>
            <h1>Luiz Otavio Oliveira do Nascimento.</h1>
        </section>
        <div>
            <figure>
                <Image />
            </figure>
            <div>
                Bacharel em Sistemas de Informação, especializando-me em arquitetura de software distribuído pela PUC Minas. Sempre sigo as melhores práticas e estou constantemente me atualizando.
                Tenho experiência na criação de APIs e webservices, além de conhecimento em .NET Core MVC, SQL e outras ferramentas. Também participei de projetos utilizando WebForms e WindowsForms.
            </div>
        </div>
    </HeaderContainer>
);