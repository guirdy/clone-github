import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForksIcon, 
  LinkButton, 
  GithubIcon, 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/gui-leandro'}>
          gui-leandro
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/gui-leandro/clone-github'}>
          clone-github
        </Link>
      </Breadcrumb>

      <p>Contain my github interface clone.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForksIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/gui-leandro/clone-github'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;