
//common types used in a lot of files so its in the shared folder

export enum SelectedPage {
  Home = "home",
  Projects = "projects",
  AboutMe = "aboutme",
  Resume = "resume",
}

//One of the key differences between an interface definition and a type definition is that we cannot add new properties to a type, while an interface, on the other hand, can be extendable.
export interface ProjectType {
  name: string;
  description?: string;
  image: string;
  color: string;
  link: string;
}

//need to eventually add project pages here