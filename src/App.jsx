import { useState } from 'react';
import projectsMock from './data/projectMock';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {
    const [projectList, SetProjectList] = useState(projectsMock);

    function handleOnProjectFormSubmit(newProject) {
        SetProjectList([...projectList, newProject]);
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
            {/* Mock Device Container */}
            <div className="w-full max-w-[480px] bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden flex flex-col font-sans">
                <Header />
                <ProjectList
                    projectsData={projectList}
                    onProjectFormSubmit={handleOnProjectFormSubmit}
                />
            </div>
        </div>
    );
}

export default App;
