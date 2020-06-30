import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, Container, Issues } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/comp3.png';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        avatar_url: string;
    };
}

interface Issue {
    id: number;
    html_url: string;
    title: string;
    user: {
        login: string;
    };
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    // const [forks, setForks] = useState([]);

    // useEffect(() => {
    //     api.get(`repos/${params.repository}`).then(response => {
    //         console.log(response.data);
    //     });
    // }, [params.repository]);

    // useEffect(() => {
    //     api.get(`repos/${params.repository}/issues`).then(response => {
    //         console.log(response.data);
    //     });
    // }, [params.repository]);

    //Usando agora ASYNC and AWAIT
    // useEffect(() => {
    //     async function loadData(): Promise<void> {
    //         const repositorios = await api.get(`repos/${params.repository}`);
    //         const issues = await api.get(`repos/${params.repository}/issues`);
    //         console.log(repositorios);
    //         console.log(issues);
    //     }
    //     loadData(); //Tem que chamar a função
    // }, [params.repository]);

    //Promise all para chamar tudo de uma vez
    useEffect(() => {
        async function loadData(): Promise<void> {
            const [repositorios, issue] = await Promise.all([
                await api.get(`repos/${params.repository}`),
                await api.get(`repos/${params.repository}/issues`),
            ]);
            setRepository(repositorios.data);
            setIssues(issue.data);
        }
        loadData();
    }, [params.repository]);

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
                </header>
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
            </Container>
            <Issues>
                <Link to="">
                    <div>
                        <strong>Nome do repositório</strong>
                        <p>Descrição do respositório</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
