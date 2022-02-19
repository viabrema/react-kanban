import { Container } from './styled';

export default function Card({ children}) {

    function drop(e) {
        e.preventDefault();
        console.log(e);
    }

    function dragOver(e) {
        e.preventDefault();
        // console.log(e);
    }

    function dragStart(e) {
        e.dataTransfer.dropEffect = "move";
        // e.dataTransfer.setDragImage(()=>(<div>ola mundo</div>), 0, 0);
        // console.log(e);
    }

    function dragEnd(e) {
        // console.log(e);
    }

    return (
        <Container
            draggable
            onDragStart={e => dragStart(e)}
            onDragEnd={e => dragEnd(e)}
            onDrop={e => drop(e)}
            onDragOver={e => dragOver(e)}
        >
            {children}
        </Container>
    )
}