const GOOGLE_API_KEY = "AIzaSyDmsq1IZSIMIoogCEIFqPa5PgDqR1asK0U";

export const YOUTUBE_VIDEO_LINK = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;


// https://www.googleapis.com/youtube/v3 - base url 
// videos - specific endpoint
// ?part=snippet,contentDetails,statistics - query parameter
// &chart=mostPopular - Specifies the chart we want to retrieve data from
// &maxResults=50 - Specifies the maximum number of results 
// &regionCode=IN - Specifies the region for which you want to retrieve videos.
// &key=YOUR_API_KEY - Google API key

// Combine the base URL, endpoint, and query parameters to construct the complete API Request URL