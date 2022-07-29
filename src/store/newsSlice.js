import { configureStore, createSlice } from "@reduxjs/toolkit";

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const NEWEST_URL = "https://api.hnpwa.com/v0/newest/1.json";
const ASK_URL = "https://api.hnpwa.com/v0/ask/1.json";
const SHOW_URL = "https://api.hnpwa.com/v0/show/1.json";
const JOB_URL = "https://api.hnpwa.com/v0/jobs/1.json";

const ajax = new XMLHttpRequest();

// console.log(CONTENT_ID);
function newsData() {
  ajax.open("GET", NEWS_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function newestData() {
  ajax.open("GET", NEWEST_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function askData() {
  ajax.open("GET", ASK_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function showData() {
  ajax.open("GET", SHOW_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function jobData() {
  ajax.open("GET", JOB_URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

// console.log(newsData)

let news = createSlice({
  name: "news",
  initialState: newsData(),
});

let newest = createSlice({
  name: "newest",
  initialState: newestData(),
});

let ask = createSlice({
  name: "ask",
  initialState: askData(),
});

let show = createSlice({
  name: "show",
  initialState: showData(),
});

let job = createSlice({
  name: "job",
  initialState: jobData(),
});

export default configureStore({
  reducer: {
    news: news.reducer,
    newest: newest.reducer,
    ask: ask.reducer,
    show: show.reducer,
    job: job.reducer,
  },
});

// export default news;
