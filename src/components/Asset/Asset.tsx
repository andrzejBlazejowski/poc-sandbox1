import "./Asset.scss";
import {FC} from "react";

type props = {
    isActive?: boolean,
    onClick?: () => void,
}

export const Asset: FC<props> = (props) => {
    const {isActive, onClick} = props;
    return <span className={"Asset" + (isActive? " Asset--active" : "")} onClick={onClick}>
        <h3>Asset</h3>
    </span>
}