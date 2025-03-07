
function Header({ onAdd, showAdd }) {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <button
                className="btn"
                onClick={onAdd}
                style={{ backgroundColor: showAdd ? 'red' : 'green' }}
            >
                {showAdd ? 'Close' : 'Add'}
            </button>
        </header>
    )
}