import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header } from './styles';

import logoImg from '../../assets/comp3.png';

interface RepositoryParams {
    repository: string;
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <div className="compass__container">
                <img src={logoImg} alt="logo" className="compass" />
                <h2>
                    <span>GitHub</span>_Explorer
                </h2>
            </div>
            <Header></Header>
        </>
    );
};

export default Repository;
