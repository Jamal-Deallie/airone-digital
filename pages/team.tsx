import type { NextPage } from 'next';
import TeamMembers from '../containers/Team/Team';
import SplitTextLine from '../animations/SplitTextLine';
const TeamsPage: NextPage = () => {
  return (
    <SplitTextLine>
      <TeamMembers />
    </SplitTextLine>
  );
};

export default TeamsPage;
