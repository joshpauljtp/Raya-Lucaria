function Heading({ level = 1, text }: { level: number; text: string }) {
  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;

  const upperCase = (char: string, i: number) => (
    <span key={`uppercase-${i}`}>{char}</span>
  );
  const lowerCase = (char: string) => char;

  const renderChar = (char: string, i: number) => {
    return char === char.toUpperCase() ? upperCase(char, i) : lowerCase(char);
  };

  const renderText = (text: string) => {
    return text.split("").map(renderChar);
  };

  return <CustomTag>{renderText(text)}</CustomTag>;
}

export default Heading;
