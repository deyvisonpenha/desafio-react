import React, {useState, useEffect} from "react";

import "./styles.css";

import api from "./services/api";

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setProjects(response.data);
    })
  }, [projects]);

  async function handleAddRepository() {
    api.post('repositories',{
      title: `novo projeto ${Date.now()}`,
    }).then(response => {
      setProjects([...projects,response.data]);
    })
  }

  async function handleRemoveRepository(id) {
    api.delete(`repositories/${id}`);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {projects.map(project =>
          <li key={project.id}>
            {project.title}

            <button onClick={() => handleRemoveRepository(project.id)}>
              Remover
            </button>
          </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
