import StoryCircle from "./StoryCircle";
import users from "../data/users";

const Stories = () => {
  return (
    <>
      <div className=" d-flex  mx-lg-5 mx-md-5">
        {users.map((users, index) => (
          <StoryCircle key={index} users={users} />
        ))}
      </div>
    </>
  );
};

export default Stories;
