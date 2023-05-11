function User({user}) {  
    return (
        <div>
            <b> {user.username} </b>
            <span> ({user.email}) </span>
        </div>
    )
}

function UserList() {
    /* const users = [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'
      }
    ]; */
    
    return (
      <div>
        {/* users를 user로 받아오는 것 */}
        {users.map(user => {
            return <User user={user} key={user.id} />
        })}

        {/* <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} /> */}
      </div>
    );
  }
  
  export default UserList;

