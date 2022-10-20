import { Watch } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "85vw",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Watch
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="black"
        backgroundColor="#F4442E"
      />
    </div>
  );
}

export default Loader;
