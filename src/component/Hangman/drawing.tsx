const HEAD = (
    <div className="man-head" key="HEAD"></div>
);

const BODY = (
    <div className="man-body" key="BODY"></div>
);

const RIGHT_ARM = (
    <div className="man-right-arm" key="RIGHT_ARM"></div>
);

const LEFT_ARM = (
    <div className="man-left-arm" key="LEFT_ARM"></div>
);

const RIGHT_LEG = (
    <div className="man-right-leg" key="RIGHT_LEG"></div>
);

const LEFT_LEG = (
    <div className="man-left-leg" key="HELEFT_LEGAD"></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
const gallowsTree = (
    <>
        <div className="hang-tool-hook"></div>
        <div className="hang-tool-stem-side"></div>
        <div className="hang-tool-stem-main"></div>
        <div className="hang-tool-bottom"></div>
    </>
);

type HangmanDrawingProps = {
    numberOfGuessed: number
};

export function HangmanDrawing({ numberOfGuessed }: HangmanDrawingProps) {
    return <div className="hang-man-draw-container">
        {BODY_PARTS.slice(0, numberOfGuessed)}
        {gallowsTree}
    </div>
};