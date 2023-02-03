import "./ScreenTemplate.scss";
import {ScrollableVerticalList} from "../ScrollableVerticalList/ScrollableVerticalList";
import {ListComponent} from "../ListComponent/ListComponent";
import {getUUID} from "../../utils/index";
import {Asset} from "../Asset/Asset";
import {useState} from "react";

type list = {
    lfc: number,
    setLfc: (lfc: number) => void,
}

export const ScreenTemplate = () => {

    const [lists, setLists] = useState(new Array(3).fill(0).reduce((acc, item) => {
        const id = getUUID();
        acc[id] = {
            lfc: 0,
            setLfc: (lfc) => {
                setSpecificLfc(lfc, id);
            }
        } as list
        return acc
    }, {}));

    const setSpecificLfc = (lfc: number, id: string) => {

        // setLists(newState);
        setLists((state: Record<string, list>) => {
            const newState: Record<string, list> = {...state};
            newState[id] = {
                ...state[id],
                lfc: lfc,
            } as list;
            console.log("newState : ", newState);
            return {...newState}
        })
    };

    return <div className="screenTemplate">
        <h1>screenTemplate</h1>
        <ScrollableVerticalList>
            {Object.keys(lists).map((key: string) => {
                const {lfc, setLfc} = lists[key];
                return <ListComponent key={key} lfc={lfc} setLfc={setLfc}/>
            })}
        </ScrollableVerticalList>
    </div>
}