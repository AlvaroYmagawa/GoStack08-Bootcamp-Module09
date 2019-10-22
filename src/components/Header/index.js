import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/purple_logo.svg';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Alvaro Kenz </strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Alvaro Kenzo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
