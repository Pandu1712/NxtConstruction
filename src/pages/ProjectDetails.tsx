
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/data";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Project not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-10 lg:px-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        ← Back
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>
      <p className="text-gray-600 mt-1">{project.location}</p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        ))}
      </div>

      {/* Description */}
      <div className="mt-8 text-gray-700 leading-relaxed">
        <p>{project.description}</p>
      </div>

      {/* Info Table */}
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md w-full sm:w-2/3">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Project Details
        </h3>
        <p>
          <strong>Area:</strong> {project.area}
        </p>
        <p>
          <strong>Type:</strong> {project.type}
        </p>
        <p>
          <strong>Category:</strong> {project.category}
        </p>
      </div>
    </div>
  );
}
