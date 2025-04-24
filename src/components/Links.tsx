import '../App.css'
import { Header } from './Header'

export default function Links() {
  return (
    <>
    <Header thisHeader='links'/>
    <div className="main">
            <h2>Links</h2>
            <h3>自分の</h3>
            <ul>
                <li><a className="olink" href="https://twitter.com/Lai_lai_coins23" rel="me">Twitter(X)</a></li>
                <li><a className="olink" href="https://github.com/Lailai0477" rel="me">GitHub</a></li>
            </ul>
            <h3>相互リンク</h3>
            <ul>
                <li><a className="olink" href="https://www.eka.earth" rel="friend colleague">Ekasiliconさん</a></li>
                <li><a className="olink" href="https://www.eniehack.net/~eniehack/" rel="colleague">Nakayaさん</a></li>
                <li><a className="olink" href="https://raspi0124.dev/" rel="colleague">raspi0124さん</a></li>
                <li><a class="olink" href="https://210o.net/" rel="colleague">ぱうろさん</a></li>
                <li><a class="olink" href="https://shoga.dev/" rel="friend colleague">しょうが&#129754;</a></li>
            </ul>
            <p>相互リンク募集中ー<br />
            バナー画像はこちらからどうぞ！↓</p>
            <img src="imgs/banner.png" alt="バナー" height="40" width="200" />
        </div>
        <footer>
            <p className="copyright">©2025 Lai_lai</p>
        </footer>
    </>
  )
}
