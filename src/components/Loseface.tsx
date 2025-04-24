import { Link } from 'react-router-dom';
import './loseface.css'
import { useState } from 'react';

export default function Loseface() {
    const ring = new Audio('/sound/bell.mp3');
    const [count, setCount] = useState(0);

    function countplus() {
        ring.currentTime = 0;
        ring.play();
        if (count >= 9999999) {
            setCount(9999999);
            return;
        }
        setCount(count+1);
    }

    function maketweet() {
        if (count <= 0) {return "https://twitter.com/share?" + "&text=" +encodeURIComponent("私は顔を無くしませんでした。\n#今日の顔ないない\nhttps://lai-lai.info/loseface")}
        
        let makeTweet = "私は顔を "+count+" 回無くしました\n#今日の顔ないない\nhttps://lai-lai.info/loseface"
        return "https://twitter.com/share?" + "&text=" +encodeURIComponent(makeTweet);
    }

  return (
    <>
    <head>
        <title>lose face button</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="顔をなくすボタン" />
        <meta name="twitter:description" content="顔をなくそう" />
        <meta name="twitter:image" content="https://noface.lai-lai.info/noface.JPG" />
    </head>
    <body className='lf-body'>
        <div className="lf-main">
            <article>
                <h2 className='ls-h2'>顔を無くすボタン</h2>
                <div className="lf-btncnt">
                    <button onClick={countplus} className="lf-losebtn">顔を無くす<img className="lf-shyshy" src="/imgs/noface.jpg" height="40px" width="40px" /></button>
                </div>
                <div className='lf-caution'>※音が出ます</div>
                <div className="lf-houkoku">
                    私は顔を
                    <div className="lf-count">{count}</div>
                    回無くしました
                </div>
                <Link to={maketweet()} className="lf-share_twitter" target="_blank" rel="nofollow noopener noreferrer" 
                >顔を無くした回数をツイート</Link>
            </article>
        </div>
        <footer className="lf-footer">
            <Link className='lf-copyright' to={'/'} >©2025 Lai_lai</Link>
        </footer>
    </body>
    </>
  )
}
