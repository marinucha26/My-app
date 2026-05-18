import { useState } from "react";
import { statsList } from "./model";
import "./style.scss"; 

function Stats() {
    const [activeTab, setActiveTab] = useState("Читаю");
    const [showModal, setShowModal] = useState(false);
    const [books, setBooks] = useState({
        "Читаю": { title: "Здесь будет ваша книга", author: "Добавьте книгу", color: "#e1c3f4" },
        "Прочитано": { title: "Здесь будет ваша книга", author: "Добавьте книгу", color: "#e1c3f4" },
        "В планах": { title: "Здесь будет ваша книга", author: "Добавьте книгу", color: "#e1c3f4" }
    });
    
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        color: "#c28bde"
    });
    
    const tabs = [
        { id: "Читаю", label: "Читаю" },
        { id: "Прочитано", label: "Прочитано" },
        { id: "В планах", label: "В планах" }
    ];
    
    const currentBook = books[activeTab];
    
    const handleOpenModal = () => {
        setNewBook({ title: "", author: "", color: "#c28bde" });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveBook = () => {
        if (newBook.title && newBook.author) {
            setBooks({
                ...books,
                [activeTab]: { 
                    title: newBook.title, 
                    author: newBook.author,
                    color: newBook.color 
                }
            });
            setShowModal(false);
        }
    };

   
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSaveBook();
        }
    };

    const colorOptions = [
        { name: "Фиолетовый", value: "#33c8cb" },
        { name: "Розовый", value: "#830b0b" },
        { name: "Голубой", value: "#063546" },
        { name: "Зелёный", value: "#b8e0b8" },
        { name: "Персиковый", value: "#ffd8b0" },
        { name: "Лавандовый", value: "#091b6d" }
    ];

    
    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
    };

    const modalContentStyle = {
        backgroundColor: '#f5edff',
        borderRadius: '24px',
        padding: '30px',
        width: '360px',
        maxWidth: '90%',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
    };

    return (
        <div className="stats-wrapper">
            <div className="stats" style={{ display: 'flex', gap: '20px', marginBottom: '30px', paddingLeft: '40px', paddingRight: '40px' }}>
                {statsList.map((stat) => (
                    <div key={stat.title} style={{ 
                        background: stat.color, 
                        padding: '15px', 
                        borderRadius: '12px',
                        textAlign: 'center',
                        flex: 1,
                        boxShadow: '0 0 10px rgba(255, 217, 0, 0.3), 0 0 20px rgba(255, 72, 0, 0.2)',
                        border: '1px solid rgba(237, 223, 139, 0.5)',
                        transition: 'all 0.3s ease'
                    }}>
                        <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{stat.value}</span>
                        <span style={{ fontSize: '14px', color: '#2c2929' }}>{stat.title}</span>
                    </div>   
                ))}
            </div>
            
                <div className="progress-section"> 
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingLeft: '40px', paddingRight: '40px' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', background: '#e4ccf6', borderRadius: '10px', padding: '4px' }}>
                                {tabs.map((tab) => (
                                    <div 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            padding: '8px 65px',
                                            borderRadius: '10px',
                                            fontWeight: '600',
                                            fontSize: '17px',
                                            color: activeTab === tab.id ? '#2d1b36' : '#6b4c9a',
                                            background: activeTab === tab.id ? '#c39fd5' : 'transparent',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {tab.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                    <button 
                          
                            onClick={handleOpenModal}
                            style={{
                                background: '#c39fd5',
                                color: '#6b4c9a',
                                border: 'none',
                                padding: '8px 20px',
                                borderRadius: '7px',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',

                               
                            }}
                        >
                            + Добавить книгу
                        </button>
                </div>
                </div>
         
            <div className="book-card" style={{ background: currentBook.color }}>
                <h3 className="book-title">{currentBook.title}</h3>
                <p className="book-author">{currentBook.author}</p>
                <button className="reading-status">{activeTab}</button>
            </div>

            {showModal && (
                <div style={modalOverlayStyle} onClick={handleCloseModal}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#4a2f6e', marginBottom: '20px' }}>
                            Добавить книгу
                        </h2>
                        
                        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#6b4c9a', marginBottom: '5px' }}>
                                Название книги:
                            </label>
                            <input 
                                type="text" 
                                placeholder="Введите название"
                                value={newBook.title}
                                onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #d4b0ff',
                                    borderRadius: '12px',
                                    fontSize: '14px',
                                    boxSizing: 'border-box',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#6b4c9a', marginBottom: '5px' }}>
                                Автор:
                            </label>
                            <input 
                                type="text" 
                                placeholder="Введите автора"
                                value={newBook.author}
                                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                                onKeyDown={handleKeyDown}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #d4b0ff',
                                    borderRadius: '12px',
                                    fontSize: '14px',
                                    boxSizing: 'border-box',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#6b4c9a', marginBottom: '5px' }}>
                                Цвет обложки:
                            </label>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
                                {colorOptions.map((color) => (
                                    <div 
                                        key={color.value}
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            background: color.value,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '20px',
                                            color: 'white',
                                            boxShadow: newBook.color === color.value ? '0 0 0 3px white, 0 0 0 5px #c28bde' : 'none',
                                            transition: 'transform 0.2s'
                                        }}
                                        onClick={() => setNewBook({...newBook, color: color.value})}
                                    >
                                        {newBook.color === color.value && "✓"}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <p style={{ fontSize: '12px', color: '#aaa', marginTop: '15px' }}>
                            ✨ Нажмите Enter, чтобы сохранить
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Stats;