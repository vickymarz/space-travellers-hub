import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mission from '../components/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer, shallowEqual);

  return (
    <section className="mission">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={uuidv4()} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Missions;
