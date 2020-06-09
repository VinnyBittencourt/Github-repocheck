import React from 'react';
import { Title, Form, Repositories } from './styles';
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
                <Repositories>
                    <a href="#">
                        <img
                            src="https://avatars1.githubusercontent.com/u/38366235?s=400&u=cf8426283473ed0f5a72ec85d4dc10fef3fa5b04&v=4"
                            alt="Profile pic"
                        />
                        <div className="">
                            <strong>facebook/react</strong>
                            <p>
                                React is an open source JavaScript library used
                                for designing user iterfaces
                            </p>
                        </div>
                    </a>
                </Repositories>
            </>
        );
    }
};

export default Dashboard;
