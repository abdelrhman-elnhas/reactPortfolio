import {
  Card,
  Thumb,
  Tag,
  ProjectImage,
  Title,
  Date,
} from "./ProjectCard.styles";

function ProjectCard({ title, image, category, date, url }) {
  return (
    <Card
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Thumb>
        <Tag>{category === "UI-UX" ? "UI/UX" : category}</Tag>
        <ProjectImage
          src={`./images/${image}.jpg`}
          loading="lazy"
          alt={`${title} + Project Thumbnail`}
        />
      </Thumb>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Card>
  );
}

export default ProjectCard;
