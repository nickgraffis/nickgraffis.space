import WorkCard from './subcomponents/WorkCard';

function Work ({ projects }) {
  return <div className="flex flex-col items-start w-full">
    <div className="w-full flex justify-between items-baseline">
      <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Work</h1>
      <div className="flex items-center px-2 py-1 justify-center text-cullen bg-dracula rounded-md text-md font-medium">Create Card</div>
    </div>
    {projects.map((project, key) => {
      return <WorkCard {...project} />
    })}
  </div>
}

export default Work;
