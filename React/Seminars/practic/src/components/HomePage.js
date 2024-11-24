import Message from "./Message";
import CommentsList from "./CommentsList";
import TemperatureConverter from "./TemperatureConverter/TemperatureConverter";
import TodoList from "./TodoList/TodoList";

const HomePage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Добро пожаловать на главную страницу нашего сайта!</p>

            <Message text="Hello, this is your first message!" />
            <Message text="This is another message!" />
            <div>
                <h1>Мой список комментариев</h1>
                <CommentsList />
            </div>

            <TemperatureConverter />

            <TodoList />
        </div>
    );
};

export default HomePage;
