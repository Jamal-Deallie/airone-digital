import type { NextPage } from 'next';
import TeamMembers from '../containers/Team';
import SplitTextLine from '../animations/SplitBody';
const TeamsPage: NextPage = () => {
  return (
    <SplitTextLine>
      <TeamMembers />
    </SplitTextLine>
  );
};

export default TeamsPage;
