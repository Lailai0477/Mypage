const ring = new Audio('../sound/bell.mp3');
let count = 0;
let ringcount = document.getElementById('r0');

function countplus() {
    if (count >= 9999999) {
        count = 9999999;
        return;
    }
    count++;
    ringcount.innerHTML = count;

    let makeTweet = "私は顔を "+count+" 回無くしました\n\nhttps://lai-lai.info/loseface"

    const share_twitter = document.getElementById("js-share-twitter");
    share_twitter.setAttribute(
    "href",
    "https://twitter.com/share?" + "&text=" +encodeURIComponent(makeTweet));
}
