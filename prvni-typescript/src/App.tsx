import './App.css';
import { useState } from 'react';

import  { Activity } from './components/Activity';
import { Form, FormDataStructure } from './components/Form';

interface ActivityDataStructure {
    accessibility:  number
    activity: string;
    key: string;
    link: string;
    participants: number;
    price: number;
    type: string;
}

function App() {
  const [activityData, setActivityData] = useState<ActivityDataStructure>();

  const fetchData = async(type: string):Promise<void> => {
    const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
    const data = await res.json();
    setActivityData(data);
  }

  const handleSubmit = (data: FormDataStructure) => {
//    console.log(data);
    fetchData(data.type);
  };

  return (
    <>
      <Form onSubmitForm={handleSubmit}/>
      {activityData && 
        <Activity 
          nameOfActivity={activityData.activity}
          participants={activityData.participants}
          type={activityData.type}
          price={activityData.price}
        />
      }
    </>
  );
};

export default App;




