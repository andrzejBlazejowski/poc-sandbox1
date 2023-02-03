import "./ScrollableHorizontalList.scss";
import {Asset} from "../Asset/Asset";
import {FC, useState} from "react";

type Props = {
    childNumber?: number,
    lfc?: number,
    setLfc?: (lfc: number) => void,
}

export const ScrollableHorizontalList: FC<Props> = (props) => {
    const {childNumber = 3, lfc = 1, setLfc} = props;
    const [activeIndex, setActiveIndex] = useState(lfc);

    return <div className="ScrollableHorizontalList">
        <h4>Assets :</h4>
        {new Array(childNumber).fill(0).map((v, index) => {
            return <Asset
                key={index}
                isActive={activeIndex === index ? true : false}
                onClick={() => {
                    setActiveIndex(index);
                    setLfc && setLfc(index)
                }
                }/>
        })}
    </div>
}