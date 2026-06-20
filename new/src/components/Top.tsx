import '../App.css'
import { Footer } from './Footer'
import { Header } from './Header'

function App() {
  return (
    <>
      <Header thisHeader='top' />
      <div className="main">
        <article className="profile-card">
          <h2>Top page</h2>
          <p className="lead">らいらいのページへようこそ！</p>

          <section>
            <h3>らいらいについて</h3>
            <div className="profile-info">
              <img src="/imgs/icons.png" alt="Me" className="avatar" />
              <p>Y県S市出身。カワウソが好き。スープ系の料理が好き。人間となかよくなりたい。</p>
            </div>
            <h3>その他</h3>
            <p>準備中</p>
          </section>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default App