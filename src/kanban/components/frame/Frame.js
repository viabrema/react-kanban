import { Container } from './FrameStyled';

export default function Frame({ children, name }) {
    return (
        <Container>
            {name}
            {children}
        </Container>
    )
}