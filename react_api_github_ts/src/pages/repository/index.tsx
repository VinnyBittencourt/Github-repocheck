import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, Container } from './styles';

import logoImg from '../../assets/comp3.png';

interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <div className="compass__container">
                    <img src={logoImg} alt="logo" className="compass" />
                    <h2>
                        <span>GitHub</span>_Explorer
                    </h2>
                </div>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <Container>
                <header>
                    <img
                        src="https://avatars3.githubusercontent.com/u/69631?v=4"
                        alt="facebook"
                    ></img>
                    <div>
                        <strong>Facebook/React</strong>
                        <p>Descrição do respositório</p>
                    </div>
                    <ul>
                        <li>
                            <strong>150320</strong>
                            <span>Starts</span>
                        </li>
                        <li>
                            <strong>150320</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>627</strong>
                            <span>Issues</span>
                        </li>
                    </ul>
                </header>
            </Container>
        </>
    );
};

export default Repository;
