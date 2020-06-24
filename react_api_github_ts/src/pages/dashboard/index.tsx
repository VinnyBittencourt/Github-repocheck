import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/comp3.png';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [inputError, setInputError] = useState('');
    const [newRepo, setNewRepo] = useState('');

    async function handleAddRepo(e: FormEvent<HTMLFormElement>) {
        //Adição de um novo repo consumindo a api do git
        e.preventDefault();

        if (!newRepo) {
            setInputError('Digite o usuário/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`/repos/${newRepo}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (err) {
            setInputError('Erro na busca por esse repositório');
        }
    }
    return (
        <>
            <div className="compass__container">
                <img src={logoImg} alt="logo" className="compass" />
                <h2>
                    <span>GitHub</span>_Explorer
                </h2>
            </div>
            <Title>Explorer repositórios no GitHub</Title>
            <Form onSubmit={handleAddRepo}>
                <input
                    type="text"
                    placeholder="Digite o nome do repositorio"
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map(repo => (
                    <a href="#" key={repo.full_name}>
                        <img
                            src={repo.owner.avatar_url}
                            alt={repo.owner.login}
                        />
                        <div className="">
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Repositories>
            {/* </HTMLFormElement> */}
        </>
    );
};

export default Dashboard;
