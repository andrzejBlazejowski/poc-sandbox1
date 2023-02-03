import "./ScrollableVerticalList.scss";
import {FC, PropsWithChildren} from "react";

export const ScrollableVerticalList: FC<PropsWithChildren> = (props) => {
    const {children} = props

    return <div className="ScrollableVerticalList">
        <h2>vertical List</h2>
        {children}
    </div>
}