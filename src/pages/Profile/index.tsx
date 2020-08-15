import React from 'react';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  CalendarHeading, 
  RepoIcon, 
  Tab, 
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">26</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={'guileandro'}
            name={'Guilherme Leandro'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/49107317?v=4'}
            followers={13563}
            following={22}
            company={'Amazon'}
            location={'São Paulo, Brazil'}
            email={'guilherme.gl1997@gmail.com'}
            blog={'https://www.linkedin.com/in/guirdy1/'}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'guileandro'}
                  reponame={'clone-github'}
                  description={'Contain a clone of githubs interface'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={1550}
                  forks={33}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar>

          </RandomCalendar>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;