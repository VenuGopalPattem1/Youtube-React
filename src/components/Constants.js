
export const API_KEY="AIzaSyAau6trxKvg_Fo-ntACZhC3tx5FvGtb1wQ";

export  const YOUTUBE_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`;

export  const YOUTUBE_API_FINDBY_ID = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${""}&key=${API_KEY}`


export const YOUTUBE_SEARCH_API=
`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=`


 export const YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`;