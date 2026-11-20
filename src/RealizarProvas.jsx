import SingleContentCardWrapperNum from './component/SingleContentCardWrapperNum';
import './component/css/style.css';
import { useState, useEffect } from 'react';
import { dataSets, questionsByExam } from './component/Database';
import Pergunta from './Pergunta'
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from './component/SearchBar';


function RealizarProvas() {

    const { slug, numero } = useParams();
    const navigate = useNavigate();

    const [selectedName, setSelectedName] = useState(
        slug || dataSets.provas[0]?.slug || ''
    );
    const [answeredQuestions, setAnsweredQuestions] = useState({});

    useEffect(() => {
        if (slug) {
        setSelectedName(slug);
        }
    }, [slug]);

    const provaAtual = dataSets.provas.find((item) => item.slug === slug);

    if (!provaAtual) {
        return <h2>Prova não encontrada!</h2>;
    }

    const selectedProva = dataSets.provas.find((prova) => prova.slug === selectedName);
    const max = selectedProva ? selectedProva.questoesNum : 0;
    const numeros = Array.from({ length: max }, (_, index) => index + 1);
    const questaoAtual = numero ? Number(numero) : (numeros[0] || 1);

    const handleQuestionAnswered = (examSlug, questionId) => {
        setAnsweredQuestions((previous) => {
            const answeredIds = previous[examSlug] || [];
            if (answeredIds.includes(questionId)) {
                return previous;
            }

            return {
                ...previous,
                [examSlug]: [...answeredIds, questionId],
            };
        });
    };
    
    const handleSelectExam = (prova) => {
        setSelectedName(prova.slug);
        const primeiraQuestao = questionsByExam[prova.slug]?.[0]?.id || 1;
        navigate(`/provas/${prova.slug}/${primeiraQuestao}`);
    };

    return (
        <div className='Provas-wrapper'>

            <SearchBar
                className= "Pergunta-barra"
                categoria="provas"
                initialValue={selectedName}
                label="Que prova você quer ver?"
                placeholder="Digite o ano ou nome da prova..."
                onSelect={handleSelectExam}
            />
            <div className='Pergunta-wrapper'>
                <Pergunta
                    className= "Pergunta"
                    questaoId={questaoAtual}
                    provaSlug={selectedName}
                    onAnswered={handleQuestionAnswered}
                />

                <SingleContentCardWrapperNum
                    items={numeros.map((n) => ({ id: n, name: `${n}`, slug: `${n}` }))}
                    className="Single-content-card-wrapper-num"
                    type="Single-content-card-num"
                    page={`provas/${selectedName}`}
                    answeredIds={answeredQuestions[selectedName] || []}
                    currentId={questaoAtual}
                />
            </div>
        </div>
    );
}

export default RealizarProvas;