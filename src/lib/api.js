import axios from "axios";

export function getTweet() {
  return axios.get(
    `https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/`
  );
}

// export function postTweet(newTweet) {
//   return axios.post(
//     "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/",
//     { tweet: newTweet }
//   );
// }
