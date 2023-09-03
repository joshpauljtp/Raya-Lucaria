import "./styles.scss";

function Background() {
  return (
    <div id="spaceBackground">
      <div className="space">
        {[...new Array(250)]?.map((_, j: number) => (
          <div className="star" key={`star-${j}`} />
        ))}
        {[...new Array(20)]?.map((_, i: number) => (
          <>
            <div className={`streak-${i + 1}`} key={`streak-${i}`} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Background;
