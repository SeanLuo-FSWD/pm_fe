let host_url;

if (process.env.NODE_ENV === "production") {
  // host_url = "http://endwealthgap.us-east-2.elasticbeanstalk.com/api/";
  host_url = "https://www.endwealthgap.org/api/";
} else {
  host_url = process.env.REACT_APP_SERVER_URL;
}

export const server_url = host_url;
