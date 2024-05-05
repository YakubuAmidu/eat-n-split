import "./App.css";

const initialFriends = [
  {
    id: 200,
    name: "Yakubu",
    image:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
    balance: -7,
  },
  {
    id: 204,
    name: "Julie",
    image:
      "https://images.pexels.com/photos/1590483/pexels-photo-1590483.jpeg?auto=compress&cs=tinysrgb&w=800",
    balance: 20,
  },
  {
    id: 207,
    name: "Peter",
    image:
      "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=800",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  );
}

function FriendsList() {
  const Friends = initialFriends;

  return (
    <ul>
      {Friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👯 Friend Name</label>
      <input type="text" />

      <label>🎆 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}
