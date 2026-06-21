import Project from './project';
import Search from './Search';
import AddProjectForm from './AddProjectForm';
import { useState } from 'react';

function ProjectList({ projectsData, onProjectFormSubmit }) {
    const [filterSearchedTerm, SetFilterSearchedTerm] = useState('');

    const projectsToDisplay =
        filterSearchedTerm.trim() === ''
            ? projectsData
            : projectsData.filter(each => {
                  const matchesSearch = each.name
                      .toLowerCase()
                      .includes(filterSearchedTerm.toLowerCase());
                  return matchesSearch;
              });

    function handleOnFilterSearch(e) {
        SetFilterSearchedTerm(e.target.value);
    }

    return (
        <>
            {/* Main Content Area */}
            <main className="p-6 bg-white space-y-6 flex-1">
                <AddProjectForm onProjectFormSubmit={onProjectFormSubmit} />

                {/* Search Component & Project List Container */}
                <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden">
                    <Search
                        searchedTerm={filterSearchedTerm}
                        onSearchChange={handleOnFilterSearch}
                    />

                    {/* Project Items Wrapper */}
                    <div className="p-5 space-y-4">
                        {projectsToDisplay.map(eachProject => (
                            <Project
                                key={eachProject.id}
                                projectData={eachProject}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProjectList;
