import {useState} from 'react'

function App() {
  const [liked,setLiked]=useState(false);
  function handleLike(){
    setLiked(!liked);
  }

    function handleReset(){
      setLiked(false);
    }

    async function handleLoadUsers(){
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      }
      catch (err){
        setError(err.message);
      }
      finally{
      setLoading(false);
    }

  console.log(users);
  return (
    <>
    <h1>Hello World , Welcome to Interactive Buttons</h1>
    <button onClick={handleLike}>{liked?"❤️ Liked":"🤍 Like"}</button>
    <p>{liked?"You Liked this Post":"You haven't liked the post"}</p>
    <button onClick={handleReset}>Reset</button>
    <button disabled={loading} onClick={handleLoadUsers}>{loading?"Loading Users..":"Load Users"}</button>
    {loading && <p>Fetching Users...</p>}
    {error && <p>Error Fetching Users</p>}
    </>
  )
}

export default App
