import '../App.css'
import { Header } from './Header'

export default function Works() {
  return (
    <>
    <Header thisHeader='works'/>
    <div className="main">
        <h2>Works</h2>
        <h3>雑サブドメイン</h3>
        <ul>
            <li><a className="olink" href="https://bye-bye.lai-lai.info/">bye-bye.lai-lai.info</a></li>
            <li><a className="olink" href="https://e.lai-lai.info/">e.lai-lai.info</a></li>
            <li><a className="olink" href="https://noface.lai-lai.info/">noface.lai-lai.info</a></li>
            <li><a className="olink" href="https://cho-sei.lai-lai.info/">cho-sei.lai-lai.info</a></li>
        </ul>
        <h3>制作物</h3>
        <div>
            この項目は準備中です……<br />
            <img src="imgs/junbichu.png" alt="準備中・・・" width="200" height="150" />
        </div>
    </div>
    <footer>
        <p className="copyright">©2025 Lai_lai</p>
    </footer>
    </>
  )
}
