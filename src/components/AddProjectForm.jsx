import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function AddProjectForm({ onProjectFormSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit() {
        event.preventDefault();
        const newProject = {
            id: uuid(),
            name,
            description
        };
        if (onProjectFormSubmit) {
            onProjectFormSubmit(newProject);
        }
    }

    return (
        <>
            {/* Add a project Form Container */}
            <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
                <h2 className="text-lg font-bold text-gray-800 mb-4">
                    Add Project
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Title Input Group */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white"
                        />
                    </div>

                    {/* Description Input Group */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="3"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 bg-white resize-none"
                        ></textarea>
                    </div>

                    {/* Action Button */}
                    <button
                        type="submit"
                        className="border border-gray-300 rounded-md px-6 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors bg-white cursor-pointer"
                    >
                        Add
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProjectForm;
