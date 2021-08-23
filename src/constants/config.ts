let host_url;

if (process.env.NODE_ENV === "production") {
  host_url =
    "http://prosperitymanifesto-env.eba-8ecxhnmr.us-east-2.elasticbeanstalk.com/api/";
} else {
  host_url = process.env.REACT_APP_SERVER_URL;
}

export const server_url = host_url;
