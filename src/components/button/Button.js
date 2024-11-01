function Button({ content, color, stylus, specification, showCaseOn, showCaseStatus, index }) {

  return (
    <button
      className={`button_container ${color}_button ${stylus}_button ${specification}`}
      onClick={index ? () => showCaseOn(index) : null}
      style={{ backgroundColor: `${showCaseStatus && '#736DF9'}` }}
    >
      {content}
    </button>
  );
}

export default Button;
