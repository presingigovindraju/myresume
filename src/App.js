import React from "react";
import Nav from "./components/Nav.js";
import About from "./components/About.js"
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";



const sectionData =[
    {
        title:"Skill",
        des:"Meet Christopher Nguyen, a versatile individual with a myriad of skills that paint a diverse canvas of capabilities. Adept in the art of juggling—both metaphorically and literally—he seamlessly balances his time as a software developer and a gourmet chef, concocting culinary delights that tantalize the taste buds. Christopher is not only fluent in three languages (English, French, and Mandarin) but also excels in the fine art of calligraphy, transforming plain paper into elegant works of visual poetr jgjhgvhgvhgvjgvjgvjgvjgvjvjvjgvjgvjgjgvgvgvgvjgvgj"
    },
    {
        title:"Qualification",
        des:"Emily Martinez is a highly qualified professional with a stellar educational background and a wealth of experience in the field of environmental science. Armed with a Master's degree in Environmental Engineering from a prestigious university, Emily has honed her skills in sustainable resource management, pollution control, and environmental impact assessment"
            
    },
    {
        title:"Projects",
        des:"Introducing James Anderson, a dynamic individual with a diverse portfolio of intriguing projects spanning various fields. One of his notable endeavors involves developing a mobile app aimed at promoting mindfulness and mental well-being through daily meditation exercises and mood tracking. This project reflects James's dedication to merging technology with mental health advocacy" 
            
    }
];
const App = ()=>{
    return (
        <div>
            <Nav />
            <About />
            
            {
                
               sectionData.map(item=>{
                return (
                  <Section 
                   title = {item.title}
                   des = {item.des}
                  />);
               })
            }
            <Footer />
        </div>
    );
};


export default App;