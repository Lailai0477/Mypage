import { Link } from 'react-router-dom'
import '../App.css'
import { Header } from './Header'
import { Footer } from './Footer'

export default function NotFound() {
  return (
    <>
    <Header thisHeader='other'/>
    <div className="main">
      <article className="profile-card">
        <h2>404 Not Found</h2>
        <p>お探しのページが見つかりませんでした</p>
        <Link to="/">Topに戻る</Link>
      </article>
    </div>
    <Footer />
    </>
  )
}
