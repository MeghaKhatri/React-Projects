import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';

export const Appcontext = createContext();

export default function AppContextProvider({children}){

    const [loading,setloading] = useState(false);
    const [page,setpage]=useState(1);
    const [posts,setposts]= useState([]);
    const [totalpage,settotalpage]= useState(null);

    async function fetchBlogPosts(page=1){
        setloading(true);

        let url = `${baseUrl}?page=${page}`;

      try{
        const result = await fetch(url);
        const data = await result.json();
        setpage(data.page);
        setposts(data.posts);
        settotalpage(data.totalpage);
        
      }
      catch(error){
        console.log("error in fetch data");
        setpage(1);
        setposts([]);
        settotalpage(null);
      }
      setloading(false);
    }

    function handlepagechange(page){
        setpage(page);
        fetchBlogPosts(page);
    }
    console.log(page);

    const value ={
        loading,setloading,
        page,setpage,
        posts,setposts,
        totalpage,settotalpage,
        fetchBlogPosts,
        handlepagechange
    }


    return (
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
        )

} 

