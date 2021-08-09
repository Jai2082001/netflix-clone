import React from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'
import classes from './Overlay.module.css'

const Overlay = () => {
    return (
        <>
        <div className={ classes.overlayParent }>
            <Header>
            </Header>
            <Content>
            </Content>
        </div>
        </>
    )
}

export default Overlay