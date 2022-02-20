import Frame from './components/frame/Frame';
import Card from './components/card/Card';
import { Container } from './KanbanStyled';
import { useSelector, useDispatch } from 'react-redux';
import { createCard } from './kanbanSlice';

export default function Kanban() {

    const frames = useSelector((state) => { return state.kanban.frames });
    const cards = useSelector((state) => { return state.kanban.cards });

    return (
        <Container>
            {
                frames.map((frame, index) =>
                    <Frame key={index} name={frame.name}>
                        {cards.map((card, index) => card.frame === frame.id && <Card key={index} id={card.id}>1</Card>)}
                    </Frame>
                )
            }

        </Container>
    )

}