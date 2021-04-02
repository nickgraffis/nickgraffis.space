import WorkCard from './subcomponents/WorkCard';

function Work ({ projects }) {
  return <>
    <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">Work</h1>
    {projects.map((project, key) => {
      return <WorkCard {...project} />
    })}
  </>
}

export default Work;
