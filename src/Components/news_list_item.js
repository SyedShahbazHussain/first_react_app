import React from 'react';
import { css  } from 'glamor';

const NewsItem = ({item})   =>{

    let news_item = css({
        padding: '20px',
        boxSizing: 'border-box',
        borrderBottom: '1px solid gray',
        ':hover':{
            color: 'red'
        },
        '@media(max-width: 500px)':{
            color: 'blue'
        }

    })

    let item_grey = css({
        background: 'lightgrey'
        
    })
     
    return(
        <div className={`${news_item} ${item_grey}`}>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div> 
    )
}

export default NewsItem;
 