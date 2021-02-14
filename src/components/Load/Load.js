import ReactLoading from "react-loading";

const Load = ({ type, color }) => (
  <ReactLoading
    className="center-loader"
    type={"spin"}
    color={color}
    height={40}
    width={40}
  />
);

export default Load;
