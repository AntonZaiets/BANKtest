import React, {CSSProperties} from "react";
interface Props {
    firstSVG: any,
    secondSVG: any,
    thirdSVG: any,
    fourthSVG: any,
    firstTitle: string,
    secondTitle: string,
    thirdTitle: string,
    fourthTitle: string,
    head: string,
    mainDescription: string,
    firstPercent: string,
    secondPercent: string,
    thirdPercent: string,
    firstDescription: string,
    secondDescription: string,
    thirdDescription: string,
    style?: CSSProperties,
}
export const UseCase: React.FC<Props> = ({
      firstSVG,
      secondSVG,
      thirdSVG,
      fourthSVG,
      firstTitle,
      secondTitle,
      thirdTitle,
      fourthTitle,
      head,
      mainDescription,
      firstPercent,
      secondPercent,
      thirdPercent,
      firstDescription,
      secondDescription,
      thirdDescription,style
                                         }) => {
    return (
        <div className="use_cases" style={style}>
            <div className="use_cases_icons">
                <div className="icon_block">
                    <div className="icon">
                        <img src={firstSVG} alt=""/>
                    </div>
                    <div className="title">
                        <p>{firstTitle}</p>
                    </div>
                </div>
                <div className="icon_block">
                    <div className="icon">
                        <img src={secondSVG} alt=""/>
                    </div>
                    <div className="title">
                        <p>{secondTitle}</p>
                    </div>
                </div>
                <div className="icon_block">
                    <div className="icon">
                        <img src={thirdSVG} alt=""/>
                    </div>
                    <div className="title">
                        <p>{thirdTitle}</p>
                    </div>
                </div>
                <div className="icon_block">
                    <div className="icon">
                        <img src={fourthSVG} alt=""/>
                    </div>
                    <div className="title">
                        <p>{fourthTitle}</p>
                    </div>
                </div>
            </div>
            <div className="use_cases__title">
                <div className="title">
                    <h1>{head}</h1>
                    <p>{mainDescription}</p>
                </div>
                <div className="description">
                    <div className="percent">
                        <h1>{firstPercent}</h1>
                        <p>{firstDescription}</p>
                    </div>
                    <div className="percent border">
                        <h1>{secondPercent}</h1>
                        <p>{secondDescription}</p>
                    </div>
                    <div className="percent">
                        <h1>{thirdPercent}</h1>
                        <p>{thirdDescription}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}