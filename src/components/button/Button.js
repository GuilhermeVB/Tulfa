function Button({content, color, stylus, specification}) {
    return (
      <button className={`button_container ${color}_button ${stylus}_button ${specification}`}>
        {content}
      </button>
    );
  }
  
  export default Button;
  