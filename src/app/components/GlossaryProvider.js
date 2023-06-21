// GlossaryContext.js
import React, {  useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./AuthContextWrapper";


const GlossaryContext = createContext({});

export const GlossaryProvider = ({children}) => {
  const {user} = useAuth();
  const [error, setError] = useState("");
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [glossaries,setGlossaries] = useState([]);
  const [glossary,setGlossary] = useState(null);
  const [highlight,setHighlight] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:8080/glossaries/${user?.id}`).then(response => {
    if (response.ok) {
    
        return response.json();
    } else {
    throw new Error('Failed to fetch glossaries');
    }
    })
    .then(data => {
    // Process the fetched glossaries
        setGlossaries(data);
    })
    .catch(error => {
    console.error('Error:', error);
    });
    
    return () => {
      null
    }
  }, [])
  


   const fetchTerms = async (glossary_id) => {
    await fetch(`http://localhost:8080/glossaries/${user?.id}/glossary/${glossary_id}`).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch terms');
      }
    })
    .then(data => {
      // Process the fetched terms
      setTerms(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <GlossaryContext.Provider value={{glossaries,fetchTerms,terms,glossary,setGlossary,highlight,setHighlight}}>
      {children}

    </GlossaryContext.Provider>
  );
};

export const useGlossary = () => useContext(GlossaryContext);