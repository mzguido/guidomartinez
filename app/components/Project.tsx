import Image from 'next/image';
import { IProject } from '../../interfaces';

type Props = {
  project: IProject;
};

const Project = ({ project }: Props) => {
  const { label, description } = project;

  return <div className="project">{label}</div>;
};

export default Project;
