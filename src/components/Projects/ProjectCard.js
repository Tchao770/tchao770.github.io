import projectData from "../../data/projects.json";
import sad from "../../assets/tictactoedemo.png";
console.log(sad);
export default function ProjectCard() {
    function redirectButton(url) {
        window.location.href = url;
    }
    return (
        Object.keys(projectData).map((key, index) => {
            const { name, demo, code, descr, img } = projectData[key];
            return (
                <div className="cardContainer">
                    <h2>{name}</h2>
                    <p>{descr}</p>
                    <img src={img} />
                    <a href={code} target="_blank" rel="noopener noreferrer">
                        Code
                        </a>
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        Demo
                        </a>
                </div >
            );
        })
    );
}