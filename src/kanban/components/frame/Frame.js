import { Container } from './styled';

export default function Frame({ children, name }) {
    return (
        <Container>
            {name}
            {children}
        </Container>
    )
}