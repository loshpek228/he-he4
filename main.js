let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  users.forEach(user => {
    user.admin = false;
    if (user.name === "Маша") {
      user.admin = true; 
    }
  });
  
  console.log(users);
  