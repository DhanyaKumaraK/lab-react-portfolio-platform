function Project({ projectData }) {
    return (
        <>
            {/* Project 1 */}
            <div className="flex items-start space-x-4">
                {/* Image Placeholder Box */}
                <div className="w-14 h-14 border border-gray-300 rounded-lg flex items-center justify-center bg-white flex-shrink-0">
                    <span className="text-gray-400 text-2xl font-light select-none">
                        ✕
                    </span>
                </div>

                {/* Project Metadata */}
                <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="font-bold text-gray-900 text-base leading-snug">
                        {projectData.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {projectData.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Project;
