import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Legal Tech Innovation",
    description: "Developed an AI-powered legal document analysis tool",
    category: "Legal Technology",
    link: "#",
  },
  {
    title: "Startup Advisory",
    description: "Provided legal and business guidance to tech startups",
    category: "Consulting",
    link: "#",
  },
  {
    title: "Corporate Restructuring",
    description: "Led major corporate restructuring projects",
    category: "Legal",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-accent rounded-full text-secondary mb-6 hover:opacity-80 transition-all duration-200">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-6 rounded-lg hover:shadow-lg transition-all"
              >
                <span className="text-sm text-secondary">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-block text-primary hover:opacity-70 transition-opacity"
                  >
                    Learn More →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;