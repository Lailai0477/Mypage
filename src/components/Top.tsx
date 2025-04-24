import { Link } from 'react-router-dom'
import '../App.css'
import { Header } from './Header'

function App() {
  return (
    <>
    <Header thisHeader='top'/>
    <div className="main">
        <article>
            <h2>Top page</h2>
            <p>らいらいのページへようこそ！</p>
            <h3>らいらいについて</h3>
            <img src="/imgs/icons.png" alt="Me" height="75px" width="75px" />
            <p>Y県S市出身。カワウソが好き。スープ系の料理が好き。人間となかよくなりたい。</p>
            <h3>おともだち</h3>
            <ul>
                <li><Link className='olink' to={'/otomodachi'} >おともだち一覧</Link></li>
            </ul>
            <h3>顔を無くすボタン</h3>
            <ul>
                <li><Link className='olink' to={'/loseface'} >顔を無くすボタン</Link></li>
            </ul>
        </article>
    </div>
    <footer>
        <p className="copyright">©2025 Lai_lai</p>
    </footer>
    </>
  )
}

export default App
