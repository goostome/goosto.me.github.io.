export interface TeamBlockProps {
  id: string;
  teamData: TeamMemberData[];
}


export interface TeamMemberData {
  name: string;
  title: string;
  linkedinId: string;
  image: string;
}