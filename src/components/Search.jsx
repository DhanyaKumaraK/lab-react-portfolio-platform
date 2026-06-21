function Search({ searchedTerm, onSearchChange }) {
    return (
        <>
            {/* Search Header Area */}
            <div className="p-3 border-b border-gray-300">
                <input
                    type="text"
                    placeholder="Search Projects"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                    value={searchedTerm}
                    onChange={onSearchChange}
                />
            </div>
        </>
    );
}

export default Search;
