import React from 'react';
import { Title, Form } from './styles';
import logoImg from '../../assets/comp3.png';

const Dashboard: React.FC = () => {
    {
        return (
            <>
                <div className="compass__container">
                    <img src={logoImg} alt="logo" className="compass" />
                    <h2>
                        <span>GitHub</span>_Explorer
                    </h2>
                </div>
                <Title>Explorer repositórios no GitHub</Title>
                <Form>
                    <input
                        type="text"
                        placeholder="Digite o nome do repositorio"
                    />
                    <button type="submit">Pesquisar</button>
                </Form>
            </>
        );
    }
};

export default Dashboard;
