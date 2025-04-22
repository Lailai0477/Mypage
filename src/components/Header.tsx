import React from "react"
import classNames from 'classnames';
import '../App.css';

type HeaderProps = {
    thisHeader: 'top' | 'works' | 'links'; 
}

export function Header({thisHeader}: HeaderProps) {
    return (
        <>
        <header>
            <h1 className="head1">Lai-lai.info</h1>
            <div className="head2">Welcome to Lai_lai's page!!</div>
            <div className="pages">
                <a className={classNames('page',{'font-weight: bolder': thisHeader==='top'})} href="index.html" >Top</a>
                <a className={classNames("page", {'font-weight: bolder': thisHeader==='works'})} href="Works.html">Works</a>
                <a className={classNames('page', {'font-weight: bolder': thisHeader==='links'})} href="Links.html">Links</a>
            </div>
        </header>
        </>
    )
}
