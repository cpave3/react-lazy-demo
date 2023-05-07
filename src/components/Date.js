import moment from "moment";

export default function Date() {
  return <div>{moment().format("MMMM Do YYYY")}</div>;
}
