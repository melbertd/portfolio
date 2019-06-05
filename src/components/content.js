import React from "react"

var items = [
    {
        id: 1,
        title: "test 1",
        content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skills: ["java", "javascript", "html"]
    },
    {
        id: 2,
        title: "test 2",
        content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skills: ["java", "javascript", "html"]
    },
    {
        id: 3,
        title: "test 3",
        content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skills: ["java", "javascript", "html"]
    },
    {
        id: 4,
        title: "test 4",
        content: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        skills: ["java", "javascript", "html"]
    },
]

const ContentSkills = props => {
    return(
        <div>
           <ul className="list-inline">
               {
                props.skills.map(skill => (
                    <li key={Math.random()}className="project-skills list-inline-item">{skill}</li>
                ))
                }
           </ul>
        </div>
    )
};


const ContentCard = props => {
    return (
        <div className="col-md-6">
            <div className="project">
                <p className="project-title">{props.title}</p>
                <p className="project-content">{props.content}</p>
                
                <ContentSkills skills={props.skills}/>

                <a href="">View Source</a>
            </div>
        </div>
    )
};

function Content() {
    return (
        <div>
            <p className="content-title">Contents</p>
            <br />
            <div className="row">
            
                {
                    items.map(item => (
                        <ContentCard
                            key={item.id}
                            title={item.title} 
                            content={item.content}
                            skills={item.skills}
                        />
                    ))
                }
            
            </div>
        </div>
    )
}


export default Content