import React, { Component } from 'react';

// HOC для получения данных из API
function withDataFetching(WrappedComponent, dataSource) {
    return class extends Component {
        state = {
            data: [],
            loading: true,
            error: null
        };

        componentDidMount() {
            fetch(dataSource)
                .then(response => response.json())
                .then(data => this.setState({ data, loading: false }))
                .catch(error => this.setState({ error, loading: false }));
        }

        render() {
            const { data, loading, error } = this.state;
            return (
                <WrappedComponent
                    data={data}
                    loading={loading}
                    error={error}
                    {...this.props}
                />
            );
        }
    };
}

// Пример обычного компонента
function List({ data, loading, error }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

// Используем HOC для оборачивания компонента List
const ListWithData = withDataFetching(List, 'https://jsonplaceholder.typicode.com/users');

// В родительском компоненте используем новый компонент
function App() {
    return (
        <div>
            <h1>Users List</h1>
            <ListWithData />
        </div>
    );
}

export default App;
