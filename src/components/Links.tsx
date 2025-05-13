import '../App.css'
import { Header } from './Header'

export default function Links() {
  return (
    <>
    <Header thisHeader='links'/>
    <div className="main">
      <h2>Links</h2>
        <div className='piccontainer'>
          <div>
            <h3>自分の</h3>
            <ul>
              <li><a className="olink" href="https://twitter.com/Lai_lai_coins23" rel="me">Twitter(X)</a></li>
              <li><a className="olink" href="https://github.com/Lailai0477" rel="me">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3>相互リンク</h3>
            <ul>
              <li><a className="olink" href="https://www.eka.earth" rel="friend colleague" target='_blank'>Ekasiliconさん</a></li>
              <li><a className="olink" href="https://www.eniehack.net/~eniehack/" rel="colleague" target='_blank'>Nakayaさん</a></li>
              <li><a className="olink" href="https://raspi0124.dev/" rel="colleague" target='_blank'>raspi0124さん</a></li>
              <li><a className="olink" href="https://210o.net/" rel="colleague" target='_blank'><img src="/imgs/210on_banner_02-LosQT92u.png" alt="バナー" height="40" width="200" />ぱうろさん</a></li>
              <li><a className="olink" href="https://shoga.dev/" rel="friend colleague" target='_blank'>しょうが&#129754;</a></li>
            </ul>
          </div>
        </div>
        <p>相互リンク募集中ー<br />
        バナー画像はこちらからどうぞ！↓</p>
        <a href='https://lai-lai.info/' ><img src="/imgs/banner.png" alt="バナー" height="40" width="200" /></a>
      </div>
      <footer>
          <p className="copyright">©2025 Lai_lai</p>
      </footer>
    </>
  )
}
