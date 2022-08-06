import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';
import { Posts } from './types/posts';
import { PostsForm } from './components/PostsForm';
import { PostItem } from './components/PostItem';
import { api } from './api';

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    try {
      setLoading(true)
      let json = await api.getAllPosts();
      setLoading(false)
      setPosts(json)
    } catch(e) {

    }
  }

  const handleAddPost = async (title:string, body:string) => {
    let json = await api.addNewPost(title, body, 1);
    if(json.id) {
      alert('Post adicionado!')
    } else {
      alert('Ocorreu algum erro.')
    }
  }

  useEffect(()=>{
    loadPosts();
  }, [])

  return (
    <div>
      {loading && 
        <div>Carregando</div>
      }

      <PostsForm onAdd={handleAddPost}/>

      {!loading &&
        <div>
          <div>Total de posts:{posts.length}</div>
          <hr />
          <div>
            {posts.map((item, index)=>(
              <PostItem data={item}/>
            ))}
          </div>
        </div>
      }

      {!loading && posts.length === 0 &&
        <div>
          Não há posts para exibir.
        </div>
      }
      
    </div>
  );
}

export default App;
