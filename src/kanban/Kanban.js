import Frame from './components/frame/Frame';
import Card from './components/card/Card';
import { Container, CardFake } from './styled';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './kanbanSlice';

export default function Kanban() {

    const frames = useSelector((state) => { return state.kanban.frames });
    const cards = useSelector((state) => { return state.kanban.cards });



    return (
        <Container>
            {
                frames.map((frame, index) =>
                    <Frame key={index} name={frame.name}>

                        <Card>1</Card>
                        <Card>2</Card>
                        <Card>3</Card>
                        <Card>4</Card>

                    </Frame>
                )
            }

        </Container>
    )

}