import classNames from 'classnames';
import '../App.css';
import { Link } from "react-router-dom";

type HeaderProps = {
    thisHeader: 'top' | 'works' | 'links' | 'other'; 
}

export function Header({thisHeader}: HeaderProps) {
    return (
        <>
        <header>
            <h1 className="head1">Lai-lai.info</h1>
            <div className="head2">Welcome to Lai_lai's page!!</div>
            <div className="pages">
                <Link className={classNames('page',{active: thisHeader==='top'})} to={'/'} >Top</Link>
                <Link className={classNames('page', {active: thisHeader==='works'})} to={'/works'}>Works</Link>
                <Link className={classNames('page', {active: thisHeader==='links'})} to={'/links'}>Links</Link>
            </div>
        </header>
        </>
    )
}
