import { Container, Title, Description, ContentUsers, UserAvatar } from './CardStyled';
import { useSelector } from 'react-redux';

export default function Card({ children, id }) {


    const { name, description, users: cardUsers } = useSelector(state => state.kanban.cards.find((card) => card.id === id));

    const users = useSelector(state => state.kanban.users);

    function getUser(id) {
        return users.find(user => user.id === id);
    }

    function dropCard(e) {
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
            onDrop={e => dropCard(e)}
            onDragOver={e => dragOver(e)}
        >
            <Title>{name}</Title>
            <Description>{description}</Description>
            <ContentUsers>
                {
                    cardUsers.map(user =>
                        <UserAvatar aria-label={getUser(user).name}>
                            <img
                                key={user}
                                src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                                alt={`avatar do usuário ${getUser(user).name}`} />
                        </UserAvatar>)
                }

            </ContentUsers>
        </Container>
    )
}