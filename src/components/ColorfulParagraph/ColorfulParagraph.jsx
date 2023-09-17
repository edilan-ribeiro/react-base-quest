const ColorfulParagraph = ({ children, textColor, textFormat }) => {
  return <p style={{ color: textColor, textTransform: textFormat, fontSize:'20px' }}>
    {children}
    </p>
}

ColorfulParagraph.defaultProps = {
  textColor: "#420CAD",
  textFormat: "uppercase",
}

export default ColorfulParagraph
