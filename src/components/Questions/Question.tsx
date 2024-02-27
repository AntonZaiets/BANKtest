import React, {useState} from "react";
import "../../pages/Home/style.scss"
interface Props{
    title: string;
    description: string;
}
export const Question: React.FC<Props> = ({title, description}) => {
    const [click, isClicked] = useState(false);
    const handleClick = () => {
        isClicked(!click);
    }

    return(
        <div className = "question" onClick={handleClick}>
            <div className = "question_title">
                <h1>{title}</h1>
            </div>
            <div className ={click?"question_description":"hide"}>
                <p>{description}</p>
            </div>
        </div>
    );
}