interface ActivityProps {
    nameOfActivity: string;
    type: string;
    participants: number;
    price: number;
};

export const Activity: React.FC<ActivityProps> = ({
    nameOfActivity, 
    type, 
    participants, 
    price
    }) => {
    return (
        <div>
        <h3>Name of the Activity: {nameOfActivity}</h3>
        <p>Type: {type}</p>
        <p>Participants: {participants}</p>
        <p>Price: {price}</p>
      </div>
    );
}