import { Link } from 'react-router-dom'
import '../App.css'
import { Header } from './Header'

export default function NotFound() {
  return (
    <>
    <Header thisHeader='other'/>
    <div className="main">
        <h2>404 Not Found</h2>
        <p>お探しのページが見つかりませんでした</p>
        <Link to="/">Topに戻る</Link>
    </div>
    <footer>
        <p className="copyright">©2025 Lai_lai</p>
    </footer>
    </>
  )
}
