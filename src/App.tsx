import { useLayoutEffect, useState } from 'react';

import { apiCall } from './services';

import { UserProfile } from './components/UserProfile/UserProfile';
import { UsersTable } from './components/UsersTable/UsersTable';

import './App.css';

type User = {
  name: string,
  country: string,
  img: string,
};

function useFetchUser() {

  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [reload, setReload] = useState(false);

  useLayoutEffect(() => {
    const api = async () => {
      const res = await apiCall();
      if (res) {
        const data = {
          name: `${res.results[0].name.first} ${res.results[0].name.last}`,
          img: res.results[0].picture.medium,
          country: res.results[0].location.city
        };
        setUserProfile(data);
      }
    }
    api();
  }, [reload]);

  return { userProfile, setReload };
}

function App() {

  const { userProfile, setReload } = useFetchUser();

  return (
    <main>
      {userProfile ? (
        <>
          <div className='container'>
            <UserProfile fullName={userProfile.name} country={userProfile.country} img={userProfile.img} />
            <UsersTable name={userProfile.name} />
          </div>
          <button onClick={() => { setReload((prev) => !prev); }}>Refresh</button>
        </>
      ) : (
        <div>
          LOADING...
        </div>
      )}
    </main>
  )
}

export default App
