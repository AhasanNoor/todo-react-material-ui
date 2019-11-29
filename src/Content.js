import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

export default function Content({contents, deletetext}) {
    const contentList = contents.length ? (contents.map(content => {
        return(
            <div key={content.id}>
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <Checkbox color="primary"/>
                        <ListItemText primary={content.text} />
                        <IconButton aria-label="delete" onClick={() => {deletetext(content.id)}}>
                            <DeleteIcon style={{color:'red'}}/>
                        </IconButton>
                    </ListItem>
                </List>
                <Divider />
            </div>
        )
    })
    ) : (
        <p style={{
            'text-align': 'center',
            'text-decoration': 'none',
            'text-transform': 'uppercase',
            'color': 'red'
        }}>
        empty !
        </p>
    )
    return (
        <div>
            { contentList }
        </div>
    )
}

