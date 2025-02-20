import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '40px auto', 
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '30px',
        fontSize: '2.5em'
      }}>Yapılacaklar Listesi</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Yeni görev ekle..."
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '5px',
              border: '2px solid #e0e0e0',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}
          >
            Ekle
          </button>
        </div>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li 
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              transition: 'transform 0.2s ease',
              border: '1px solid #e0e0e0'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{
                width: '20px',
                height: '20px',
                cursor: 'pointer'
              }}
            />
            <span style={{
              marginLeft: '15px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : '#2c3e50',
              flex: 1,
              fontSize: '16px'
            }}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background-color 0.3s ease'
              }}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{
          textAlign: 'center',
          color: '#888',
          marginTop: '20px'
        }}>
          Henüz görev eklenmedi
        </p>
      )}
    </div>
  );
}

export default App; 