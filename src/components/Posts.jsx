import { useState, useEffect } from "react";
import axios from "../axiosConfig";

function Posts() {
  const [posts, setPosts] = useState([]); // Estado para almacenar publicaciones
  const [content, setContent] = useState(""); // Estado para el contenido de una nueva publicación

  // Obtener las publicaciones del usuario al cargar el componente
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(Array.isArray(response.data) ? response.data : []); // Asegúrate de que los datos son un array
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Manejar la creación de una nueva publicación
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/posts", { content });
      setPosts((prevPosts) => [...prevPosts, response.data]); // Añadir nueva publicación al listado
      setContent(""); // Limpiar el campo de contenido
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Your Posts</h2>
      {/* Formulario para crear una nueva publicación */}
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
        />
        <button type="submit">Post</button>
      </form>
      {/* Lista de publicaciones */}
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            <small>{new Date(post.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
