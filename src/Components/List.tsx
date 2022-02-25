import React from 'react';

const List = ({items, onClick} : {
    items: string[],
    onClick: (item: string) => void;
}) => {
    return (
        <div>
            {
                items.map((item, index) => (
                    <li key={item} onClick={()=> onClick(item)}>
                        {item}
                    </li>
                ))
            }
        </div>
    );
};

export default List;