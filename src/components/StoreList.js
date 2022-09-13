import React from "react";
import Store from "./Store"

function StoreList({stores}) {

    const storeComp= stores.map(store => <Store key={store.id} store={store} />)

    // const {name, image, episode, season}= store
    // console.log(stores)
    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        NAME
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeComp}
            </tbody>
        
        </table>
    );
}

export default StoreList;