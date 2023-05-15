import { getTranding } from 'services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trandingList, setTrandingList] = useState([]);

  useEffect(() => {
    fetchTranding();
  }, []);

  const fetchTranding = async () => {
    try {
      const response = await getTranding();
      if (response.results) {
        setTrandingList(response.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {trandingList.map(tranding => (
          <li key={tranding.id}>
            <Link to={`movies/${tranding.id}`}>{tranding.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
