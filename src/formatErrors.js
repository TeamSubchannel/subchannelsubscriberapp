export default function formatError(error) {
  var data = {};
  if (error.response) {
    data = error.response;
  } else {
    data.message = "Failed";
  }
  return data;
}
