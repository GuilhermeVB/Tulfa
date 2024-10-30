function Button({content, color, stylus}) {
    return (
      <button className={`button_container ${color}_button ${stylus}_button`}>
        {content}
      </button>
    );
  }
  
  export default Button;
  