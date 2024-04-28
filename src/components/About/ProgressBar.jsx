import { useInView } from "react-intersection-observer";
import { Container, Label, Bar, Value, ProgBar } from "./ProgressBar.styles";

function ProgressBar(props) {
  const { ref: progressRef, inView: aboutSectionIsVisible } = useInView();
  return (
    <Container ref={progressRef}>
      <Label>{props.skill}</Label>
      <Bar>
        {aboutSectionIsVisible && (
          <ProgBar style={{ width: `${props.rate}` }} />
        )}
        <Value>{props.rate}</Value>
      </Bar>
    </Container>
  );
}

export default ProgressBar;
