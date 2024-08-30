export const GOOGLE_API_KEY = "AIzaSyBRft_91mS3ikPgOaS7MTqvqcTy1W-b-v8";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`;
