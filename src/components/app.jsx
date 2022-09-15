import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "./notes";



function App() {
  return (
    <div>
      <Header />
      <div>
        {notes.map(no =>{ return <Note 
          key ={no.key}
          title = {no.title}
          content = {no.content}
         /> })}
      </div>
      <Footer />
    </div>
  );
}
export default App;