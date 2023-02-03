import "./ListComponent.scss";
import {ScrollableHorizontalList} from "../ScrollableHorizontalList/ScrollableHorizontalList";
import {FC, useState} from "react";

type Props = {
    lfc?: number,
    setLfc?: (lfc: number) => void,
}

export const ListComponent: FC<Props> = (props) => {
    const {lfc, setLfc} = props;
    const [visibility, setVisibility] = useState(true);

    return <div className="ListComponent">
        <h3>ListComponent</h3>
        <span className="ListComponent__button" onClick={() => {
            setVisibility(!visibility)
        }}>show / hide</span>
        {visibility && <ScrollableHorizontalList lfc={lfc} setLfc={setLfc}/>}
    </div>
}